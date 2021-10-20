import './App.css';
// import GroupsContainer from './components/GroupsContainer'
import EventsContainer from './components/EventsContainer'
import { Switch, Route, useHistory } from 'react-router-dom'
import Mypage from './components/Mypage';
import NavBar from './components/NavBar';

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
    <div className="App">
      <nav>
        <NavBar handleLogout={handleLogout}/>
      </nav>
      <Switch>
        <Route path="/mypage">
          <Mypage />
        </Route>
        <Route path="/events">
          <EventsContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default AuthenticatedApp;
