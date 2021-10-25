import {Link} from "react-router-dom"
import styled from "styled-components"
// import Button from 'react-bootstrap/Button';
 
function NavBar({handleLogout}){
    return(
        <NavBarStyler>
        <NavLink to="/mypage">Home</NavLink>
        <NavLink to="/myclasses">Class Library</NavLink>
        <NavLink to="/library">Exercise Library</NavLink>
        <NavLink to="/students">Student Library</NavLink>
        <NavLink to="/workouts">Workout Library</NavLink>
         <NavLink to="/" onClick={handleLogout}>Logout</NavLink>
        </NavBarStyler>
    )
}
 
 
 
export default NavBar

const NavBarStyler = styled.div`
    background-color: black;
    /* height: 100vh; */
    width: 150vw;
    display: flex;
    flex-direction: row;
    /* position: fixed; */
`

// const ButtonStyler = styled.button`
//     border-radius: 8px;
//     font-size: 22px;
//     margin: 4px;
//     background-color: white;

    
// `

const NavLink = styled(Link)`
font-family: Graduate;
  color: white;
  text-decoration: none;
  padding:20px;
  `