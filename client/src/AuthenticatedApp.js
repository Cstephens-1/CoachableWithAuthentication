import './App.css';
// import GroupsContainer from './components/GroupsContainer'

import { Switch, Route, useHistory } from 'react-router-dom'
import Mypage from './components/Mypage';
import NavBar from './components/NavBar';
import trophycase from "./trophycase.jpg"
import ExerciseLibrary from './components/ExerciseLibrary';
import MyClasses from './components/MyClasses';
import WorkoutLibrary from './components/WorkoutLibrary';
import Students from './components/Students';
import Footer from './components/Footer';
import styled from 'styled-components';

function AuthenticatedApp({ currentUser, setCurrentUser }) {

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
    <AppStyler>
      
      <nav>
        <NavBar handleLogout={handleLogout} currentUser={currentUser}/>
      </nav>
      <Switch>
        <Route path="/mypage">
          <Mypage />
        </Route>
        <Route exact path="/library">
            <ExerciseLibrary currentUser={currentUser}/>
          </Route>
          <Route exact path="/myclasses">
            <MyClasses/>
          </Route>

          <Route exact path="/workouts" >
            <WorkoutLibrary />
          </Route>
          <Route  exact path="/students">
            <Students/>
          </Route>
      </Switch>
      <Footer />
    </AppStyler>
  );
}

export default AuthenticatedApp;
         

const AppStyler = styled.div`
  background-image: "./trophycase.jpg"
`

          

         

          