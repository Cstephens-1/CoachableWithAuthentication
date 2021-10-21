import { useEffect, useState } from "react"
import styled from "styled-components"
import ExerciseCard from "./ExerciseCard"

function ExerciseLibrary(){
    const [exerciseLibrary, setExerciseLibrary]=useState([])
    const [title, setTitle] = useState("")
    const [muscleGroups, setMuscleGroups] = useState("")
    const [description, setDescription] = useState("")
    // const [user, setUser] = useState("1")
    

    //DELETE an exercise
    function handleDelete(exercise){
        fetch(`http://localhost:3000/exercises/${exercise.id}`,{ 
            method: "DELETE"
        })
        let exercisesRemaining = exerciseLibrary.filter(eachExercise => eachExercise.id !== exercise.id);
        console.log(exercisesRemaining)
        setExerciseLibrary([...exercisesRemaining])
    }

    //populate the exercise list with existing exercises
    useEffect(()=>{
        fetch("http://localhost:3000/exercises")
        .then(resp=>resp.json())
        .then(exercise=> setExerciseLibrary(exercise))
    }, [])

    //format the exercises to a card
    function mapExercises(exerciseLibrary){
        return(
            exerciseLibrary.map(exercise =>{
                return( 
                    <ExerciseCard exercise={exercise} key={exercise.id} handleDelete={handleDelete} editExerciseDescription={editExerciseDescription}/>   
                )})
            )
    }

    //CREATE a new exercise..
    //****BUGS***currently need to refresh to see it. Does not include muscle group
    function handleSubmit(synthEvent){
        synthEvent.preventDefault();
        const newExercise = {
            title: title,
            muscle_group: muscleGroups,
            description: description,
            // user_id: user
        };
        fetch("http://localhost:3000/exercises", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newExercise)})
            .then(resp=> resp.json())
            .then(newExerciseFromDataBase => setExerciseLibrary([...exerciseLibrary, newExerciseFromDataBase]))
    }


    //UPDATE an exercises' description or title
    function editExerciseDescription(synthEvent){
        // console.log(synthEvent)
        // fetch(`http://localhost:3000/exercises/${exercise.id}`, {
        //     method: "PATCH",
        //     headers: {
        //         "content-type":"application/json"
        //     },
        //     body: JSON.stringify({description: description})
        // })
        // .then(resp => resp.json())
        // .then(newDescription=> setDescription(newDescription))
    }
    


    return(
        <>
        <h1>Exercise Library</h1>
        <FormStyler onSubmit={handleSubmit}>
            <label>Add a new exercise to the library</label>
            <label>Title: </label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <label>Muscle Group worked: </label>
            <input type="text" value={muscleGroups} onChange={(e) => setMuscleGroups(e.target.value)}/>
            <label>Description: </label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            {/* <label>Link to video or image: </label>
            <input /> */}
            <button type="submit">Submit a new exercise: </button>
        </FormStyler>
        <LibaryStyler>
        {mapExercises(exerciseLibrary)}
        </LibaryStyler>
        </>
    )
}

// t.string "title"
// t.string "muscle_group"
// t.string "description"
// t.string "link"
// t.integer "user_id", null: false

export default ExerciseLibrary

const LibaryStyler = styled.div`
    display: flexbox;
    flex-direction: row;
`

const FormStyler=styled.form`
    display: flex;
    flex-direction: row;
    /* background-color: green; */
    /* height: 200px; */
    /* width:6.5vw; */
    font-size: 20px;
    margin-left: 7vw;
    border-width: 2px;
    border-style: solid;
    border-color: black;
    padding: 10px;
    

`