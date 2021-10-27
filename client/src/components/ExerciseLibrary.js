import { useEffect, useState } from "react"
import styled from "styled-components"
import ExerciseCard from "./ExerciseCard"

function ExerciseLibrary({currentUser}){
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
                    <ExerciseCard exercise={exercise} currentUser={currentUser} key={exercise.id} handleDelete={handleDelete} editExerciseDescription={editExerciseDescription}/>   
                )})
            )
    }

    //CREATE a new exercise..
    function handleSubmit(synthEvent){
        synthEvent.preventDefault();
        const newExercise = {
            title: title,
            muscle_group: muscleGroups,
            description: description,
            user_id: currentUser.id
        }
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
        <H1styler>Exercise Library</H1styler>
        <FormStyler onSubmit={handleSubmit}>
            {/* <LabelStyler>Add a new exercise to the library</LabelStyler> */}
            <LabelStyler>Title: </LabelStyler>
            <InputStyler type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <LabelStyler>Muscle Group worked: </LabelStyler>
            <InputStyler type="text" value={muscleGroups} onChange={(e) => setMuscleGroups(e.target.value)}/>
            <LabelStyler>Description: </LabelStyler>
            <InputStyler type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            {/* <label>Link to video or image: </label>
            <input /> */}
            <ButtonStyler type="submit">Add a new exercise</ButtonStyler>
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
    flex-wrap: wrap;
`

const InputStyler=styled.input`
    margin-right: 15px;
    width: 250px;
`

const FormStyler=styled.form`
    display: flex;
    flex-direction: row;
    
    /* background-color: green; */
    /* height: 200px; */
    /* width:6.5vw; */
    font-size: 20px;
    margin-left: 7vw;
    margin-right: 7vw;
    border-width: 2px;
    border-style: solid;
    border-color: black;
    padding: 10px;
    

`

const LabelStyler = styled.label`
  font-family: Graduate;
  font-weight: 600;
  font-size: 20px;
  margin-right: 5px;
`

const ButtonStyler = styled.button`
border-style: solid;
  background-color:white;
  color:black;
  font-size: 25px;
  font-family: Graduate;
  font-weight: 800;
  /* margin-right: 20px; */
  /* margin-left: 250px; */
  &:hover {
    color: orange;
    background: navy;
    /* padding-top: 10px; */
  }
`

const H1styler = styled.h1`
    font-family: Graduate;
    text-decoration: underline;
    font-size: 32px;
    font-weight: 1500;
    text-align: center;
`