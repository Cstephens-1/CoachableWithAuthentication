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
                    <LiStyler>{exercise_list.exercise_reps} {exercise_list.exercise_title} </LiStyler>
                    <DeleteWorkoutButton onClick={()=> DeleteAnAssignment(exercise_list.exercise_id)}>Delete this assignment</DeleteWorkoutButton>
                    </>
                )
            }))
            }

            //delete an exercise from a workout..an exercise lives on an exercise list which lives on a workout plan.
           
            function DeleteAnAssignment(id){
                // console.log(id)
                    fetch(`http://localhost:3000/exercise_lists/${id}`,{ 
                        method: "DELETE"
                    }).then(resp=> resp.json()).then(thisExercise=> fetchWorkoutPlans())
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
                .then(newExerciseListFromDB => fetchWorkoutPlans())
        }
            


    return(
        <WorkoutCardStyler>
        <Cardheader>
        <DeleteButtonStyler onClick={deleteThisWorkout}>x</DeleteButtonStyler>
        <H1styler>{workout.title}</H1styler>
        <hr/>
        </Cardheader>
        
        <input value={reps} placeholder="reps" onChange={(e) => setReps(e.target.value)}/>
        <select type="text" value={selectedExercise} onChange={(e) => setSelectedExercise(e.target.value)}>
                <option >Please select an exercise</option>
                {exercises.map(exercise =>{
                    return(
                        <option value={exercise.id} key={exercise.id}>{exercise.title}</option>
                    )
                })}
            </select>
            <AddButtonStyler onClick={addExerciseToWorkout}>Add a new exercise to this workout</AddButtonStyler>
            <p>{mapExerciseLists(workout)}</p>
        </WorkoutCardStyler>

    )
}

export default WorkoutCard

const WorkoutCardStyler = styled.div`
    width: 300px;
    border-width: 4px;
    border-style: solid;
    border-color: orange;
    text-align: center;
    margin: 6px;
    background-color: navy;
`

const ButtonStyler= styled.button`
    margin: 5px;
    border-radius: 5px;
    font-size: 15px;
    background-color: skyblue;
    padding: 5px;
`

const DeleteButtonStyler=styled.button`
border-radius: 50px;
    height: 25px;
    width: 27px;
    font-size: 20px;
    text-align: center;
    margin-left: 230px;
    background-color:white;
    margin-top: 10px;
  color:black;
  font-size: 15px;
  font-family: Graduate;
  font-weight: 800;
  &:hover {
    color: black;
    background: red;
  }
    
`

const H1styler = styled.h1`
    font-family: Graduate;
    text-decoration: underline;
    font-size: 32px;
    font-weight: 1500;
`

const AddButtonStyler = styled.button`
border-style: none;
  background-color:navy;
  color:orange;
  font-size: 15px;
  font-family: Graduate;
  font-weight: 800;
  margin-top: 10px;
  /* margin-right: 30px; */
  &:hover {
    color: navy;
    background: orange;
    
  }
`

//mess with the colors here
const Cardheader=styled.div`
    background-color: navy;
    color: orange;
`

const LiStyler = styled.li`
    /* font-family: Graduate; */
    font-size: 15px;
    list-style: none;
`

const DeleteWorkoutButton= styled.button`
    width: 11vw;
    font-family: Graduate;
    margin-bottom: 10px;
    border-radius: 8px;
    &:hover {
    color: white;
    background: red;
  }
`