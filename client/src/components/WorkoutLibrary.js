import { useEffect, useState } from "react"
import styled from "styled-components"
import WorkoutCard from "./WorkoutCard"

function WorkoutLibrary({currentUser}){
    const [workoutLibrary, setWorkoutLibrary]=useState([])
    const [newWorkoutTitle, setTitle] = useState("")
    const[exerciseList, setExerciseList] = useState([])

    // console.log("this is the currentUser", currentUser)

    //fetch existing workout plans
    // useEffect(()=>{
    //     fetch("http://localhost:3000/workout_plans")
    //     .then(resp=>resp.json())
    //     .then(exercise=> setWorkoutLibrary(exercise))
    // }, [])

    function fetchExerciseLists(){
        fetch("http://localhost:3000/exercise_lists")
        .then(resp=> resp.json())
        .then(eachExerciseList => setExerciseList(eachExerciseList))}


    useEffect(fetchExerciseLists, [])

    function fetchWorkoutPlans(){
        fetch("http://localhost:3000/workout_plans")
        .then(resp=> resp.json())
        .then(workoutPlan => setWorkoutLibrary(workoutPlan))
    }

    useEffect(fetchWorkoutPlans, [])

    //format the workout plans
    function mapWorkouts(){
        return(
            workoutLibrary.map(workout =>{
                return(
                    <WorkoutCard workout={workout} currentUser={currentUser} key={workout.id} handleDelete={handleDelete} fetchWorkoutPlans={fetchWorkoutPlans} fetchExerciseLists={fetchExerciseLists}/>
                )
            })
        )
    }

    
    //delete a workout plan
    function handleDelete(workoutPlan){
        fetch(`http://localhost:3000/workout_plans/${workoutPlan.id}`,{ 
            method: "DELETE"
        })
        let workoutPlansRemaining = workoutLibrary.filter(eachWorkoutPlan => eachWorkoutPlan.id !== workoutPlan.id);
        console.log(workoutPlansRemaining)
        setWorkoutLibrary([...workoutPlansRemaining])
    }

    function handleSubmit(synthEvent){
        synthEvent.preventDefault();
        const newWorkoutPlan = {
            title: newWorkoutTitle
            // user_id: user
        };
        fetch("http://localhost:3000/workout_plans", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newWorkoutPlan)})
            .then(resp=> resp.json())
            .then(workoutPlanFromDataBase => fetchWorkoutPlans())
    }
    // setWorkoutLibrary([...workoutLibrary, workoutPlanFromDataBase])


    return(
        <>
        <H1styler>Workouts</H1styler>
        <FormStyler>
        <form onSubmit={handleSubmit}>
            <H4styler>Plan your next workout</H4styler>
            <br></br>
            <LabelStyler>Name of workout: </LabelStyler>
            <input type="text" value={newWorkoutTitle} onChange={(e) => setTitle(e.target.value)}/>
            <ButtonStyler type="submit">Submit</ButtonStyler>
        </form>
        </FormStyler>
        <LibaryStyler>
            {mapWorkouts()}
        </LibaryStyler>
        </>
    )
}

export default WorkoutLibrary

const LibaryStyler = styled.div`
       display: flexbox;
    flex-wrap: wrap;
    width: 90vw;
    margin: auto;
    margin-top: 20px;
`

const FormStyler=styled.div`
    display: flexbox;
    flex-direction:row;
    /* background-color: green; */
    /* height: 200px; */
    /* width:6.5vw; */
    font-size: 20px;
    margin: auto;
    border-width: 2px;
    border-style: solid;
    border-color: black;
    padding: 10px;
    border-radius: 18px;
    text-align: left;
    width: 40vw;
    /* height: 10vh; */
`


const LabelStyler = styled.label`
  font-family: Graduate;
  font-weight: 600;
  margin-left: 10px;
  font-size: 25px;
`

const ButtonStyler = styled.button`
border-style: none;
  background-color:white;
  color:black;
  font-size: 25px;
  font-family: Graduate;
  font-weight: 800;
  margin-left: 7vw;
  margin-top: 10px;
  &:hover {
    color: white;
    background: black;
    /* padding-top: 10px; */
  }
`

const H1styler = styled.h1`
    font-family: Graduate;
    font-size: 50px;
    font-weight: 1500;
`

const H4styler= styled.h4`
    /* text-align:center; */
    font-family: Graduate;
    margin-bottom: -5px;
    font-size: 24px;
    margin-left: 25%;

`