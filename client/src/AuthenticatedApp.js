import './App.css';
// import GroupsContainer from './components/GroupsContainer'

import { Switch, Route, useHistory } from 'react-router-dom'
import Mypage from './components/Mypage';
import NavBar from './components/NavBar';
import { useState } from 'react';
import ExerciseLibrary from './components/ExerciseLibrary';
import MyClasses from './components/MyClasses';
import WorkoutLibrary from './components/WorkoutLibrary';
import Students from './components/Students';

function AuthenticatedApp({ currentUser, setCurrentUser }) {

  const [allStudents, setAllStudents]=useState([])
  const [allExercises, setAllExercises]=useState([])
  const [allWorkouts, setAllWorkouts]=useState([])
  const [allClasses, setAllClasses]=useState([])

  useState(()=>{
    fetch("http://localhost:3000/students")
    .then(resp=> resp.json())
    .then(eachStudent => setAllStudents(eachStudent));

    fetch("http://localhost:3000/gym_classes")
    .then(resp=> resp.json())
    .then(eachClass => setAllClasses(eachClass));

    fetch("http://localhost:3000/workout_plans")
    .then(resp=> resp.json())
    .then(eachWorkoutPlan => setAllWorkouts(eachWorkoutPlan));

    fetch("http://localhost:3000/students")
    .then(resp=> resp.json())
    .then(eachExercise => setAllExercises(eachExercise));
  }, [])

  console.log("these are the students ", allStudents)
  console.log("these are the Workouts ", allWorkouts)
  console.log("these are the Exercises ", allExercises)
  console.log("these are the Classes ", allClasses)

  const history = useHistory()
  
  const handleLogout = () => {
    fetch(`/logout`, {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
          history.push('/')
        }
      })
  }
  return (
    <div className="App">
      <nav>
        <NavBar handleLogout={handleLogout}/>
        <span>Logged in as {currentUser.username} <button onClick={handleLogout}>Logout</button></span>
      </nav>
      <Switch>
        <Route path="/mypage">
          <Mypage allClasses={allClasses}/>
        </Route>
        <Route exact path="/library">
            <ExerciseLibrary/>
          </Route>
          <Route exact path="/myclasses">
            <MyClasses/>
          </Route>

          <Route exact path="/workouts" >
            <WorkoutLibrary/>
          </Route>
          <Route  exact path="/students">
            <Students/>
          </Route>
      </Switch>
    </div>
  );
}

export default AuthenticatedApp;

// {/* <Switch>
//         <Route exact path="/">
//             <Login />
//           </Route>

//           <Route exact path="/signup">
//             <Signup />
//           </Route>

//           <Route exact path="/mypage">
//             <Mypage />
//           </Route> */}

         

          

         

          