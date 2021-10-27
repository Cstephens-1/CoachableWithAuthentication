import React, { useState } from 'react'
import { Redirect, useHistory, Link } from 'react-router-dom'
import styled from 'styled-components'
import CoachableLogo from "../CoachableLogo1.PNG"
import flyingwitch from "../flyingwitch.png"
// import {useSpring, animated} from "react-spring"



function Login({ setCurrentUser }) {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // const props = useSpring({to: {opacity: 1}, from: {opacity:0}})
  
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            history.push('/mypage')
          })
        } else {
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
  }
  return (
    <AppWrapper>
      <LoginWrapper>
       <img src={CoachableLogo} alt="logo"/>
       {/* <div class="witch-image">
          <img src={flyingwitch} alt="witch decoration"/>
       </div> */}
       {/* <animated.h1 style={props}>I will fade in</animated.h1> */}
      <Redirect to="/" />
      <form onSubmit={handleSubmit}>
        {/* <h1>Log In</h1> */}
        <p>
          <LabelStyler htmlFor="username">Username </LabelStyler>
          <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </p>
        <p>
          <LabelStyler htmlFor="password">Password </LabelStyler>
          <input type="password" name="" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </p>
        
        <ButtonStyler type="submit">Log In</ButtonStyler>
        <NavLink to="/signup">Signup</NavLink>
      </form>
      </LoginWrapper>
      </AppWrapper>
  )
}

{/* <img src={signupfont} alt="signup"/> */}

export default Login

const AppWrapper = styled.div`
background:repeating-linear-gradient(
  90deg, #fff, #fff 145px, #000 145px, #000 290px);
top: 0px;
bottom: 0px;
left: 0px;
right: 0px;
position: absolute;
`

const LoginWrapper=styled.div`
  background-color: white;
  text-align: center;
  margin:25vh;
  padding-top: 25px;
  padding-bottom: 25px;
`

const ButtonStyler = styled.button`
border-style: none;
  background-color:white;
  color:black;
  font-size: 25px;
  font-family: Graduate;
  font-weight: 800;
  margin-right: 30px;
  &:hover {
    color: white;
    background: black;
    /* padding-top: 10px; */
  }
`

const NavLink = styled(Link)`
  font-family: Graduate;
  font-weight: 800;
  font-size: 24px;
  color: black;
  text-decoration: none;

  padding-top: 5px;
  &:hover {
    color: white;
    background: black;
  }
  /* position: relative; */
`;

const LabelStyler = styled.label`
  font-family: Graduate;
  font-weight: 600;
  font-size: 30px;
`
