import { useEffect, useState } from "react"
import styled from "styled-components"

function WorkoutCard({workout, handleDelete, fetchWorkoutPlans, fetchExerciseLists, currentUser}){
    const [exercises, setExercises] = useState([])
    const [selectedExercise, setSelectedExercise] = useState([])
    console.log("This is a selected exercise", selectedExercise)
    const [reps, setReps]=useState("")

    function mapExerciseLists(workout){
            return(
                workout.formatted_exercise_list.map(exercise_list =>{
                return(
                    <>
                    <li>{exercise_list.exercise_reps} {exercise_list.exercise_title}</li>
                    </>
                )
            }))
            }

            useEffect(()=>{
                fetch("http://localhost:3000/exercises")
                .then(resp=> resp.json())
                .then(exercise => setExercises(exercise))
            }, [])



    function deleteThisWorkout(){
        handleDelete(workout)
    }

     function addExerciseToWorkout(synthEvent){
        synthEvent.preventDefault()
        console.log("selected exercise in addExercise function", selectedExercise, workout)
        const newExerciseList ={
            reps: reps,
            workout_plan_id: workout.id,
            exercise_id: selectedExercise
        }



      //add a new exercise to a workout
        fetch("http://localhost:3000/exercise_lists", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(newExerciseList)})
                .then(resp=> resp.json())
                .then(newExerciseListFromDB => console.log(newExerciseListFromDB))
        }
            
        
        //not sure what this is below here
    // function mapWorkouts(gymClass){
    //     return(
    //         gymClass.workout_plans.map(workout=>{
    //             console.log(workout.id)
    //             return(
    //                 <h5>{workout.title}</h5>
    //             )
    //         })
    //     )
    // }


    //in order to add an exercise (an exercise lives on an exercise list), I need to fetch all of the exercise lists that exist and map them to an select drop down. From there I can add a EL to a workout plan
    

    return(
        <WorkoutCardStyler>
        <h1>{workout.title}</h1>
        <p>{mapExerciseLists(workout)}</p>
        <ButtonStyler onClick={deleteThisWorkout}>Delete this workout</ButtonStyler>
        <ButtonStyler onClick={addExerciseToWorkout}>Add a new exercise to this workout</ButtonStyler>
        <input value={reps} placeholder="reps" onChange={(e) => setReps(e.target.value)}/>
        <select type="text" value={selectedExercise} onChange={(e) => setSelectedExercise(e.target.value)}>
                <option >Please select an exercise</option>
                {exercises.map(exercise =>{
                    return(
                        <option value={exercise.id} key={exercise.id}>{exercise.reps} {exercise.title}</option>
                    )
                })}
            </select>
        
        {/* <ButtonStyler>Edit this workout</ButtonStyler>
        <input placeholder="edit this workout"></input> */}
        </WorkoutCardStyler>

    )
}

export default WorkoutCard

const WorkoutCardStyler = styled.div`
    width: 300px;
    border-width: 2px;
    border-style: solid;
    border-color: black;
    text-align: center;
    margin: 6px;
`

const ButtonStyler= styled.button`
    margin: 5px;
    border-radius: 5px;
    font-size: 15px;
    background-color: skyblue;
    padding: 5px;
`