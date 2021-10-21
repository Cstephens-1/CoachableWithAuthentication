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
        .then(eachExerciseList => setExerciseList(eachExerciseList))
    }


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
        <h1>Workout Templates</h1>
        <h4>Plan your next workout</h4>
        <form onSubmit={handleSubmit}>
            <label>Name of workout: </label>
            <input type="text" value={newWorkoutTitle} onChange={(e) => setTitle(e.target.value)}/>
            <button type="submit">Create a new workout</button>
        </form>
        <LibaryStyler>
            {mapWorkouts()}
        </LibaryStyler>
        </>
    )
}

export default WorkoutLibrary

const LibaryStyler = styled.div`
    display: flexbox;
    flex-direction: row;
`

