import {Link} from "react-router-dom"
import styled from "styled-components"
// import Button from 'react-bootstrap/Button';
 
function NavBar({handleLogout}){
    return(
        <NavBarStyler>
        <ButtonStyler><Link to="/mypage">Home</Link></ButtonStyler>
        <ButtonStyler><Link to="/myclasses">Class Library</Link></ButtonStyler>
        <ButtonStyler><Link to="/library">Exercise Library</Link></ButtonStyler>
        <ButtonStyler><Link to="/students">Student Library</Link></ButtonStyler>
        <ButtonStyler><Link to="/workouts">Workout Library</Link></ButtonStyler>
        <ButtonStyler onClick={handleLogout}><Link to="/">Logout</Link></ButtonStyler>
        </NavBarStyler>
    )
}
 
 
 
export default NavBar

const NavBarStyler = styled.div`
    background-color: skyblue;
    /* height: 100vh;
    width: 150px; */
    display: flex;
    flex-direction: row;
    /* position: fixed; */
`

const ButtonStyler = styled.button`
    border-radius: 8px;
    font-size: 22px;
    margin: 4px;
    background-color: white;

    
`