// import { useState } from "react"
import styled from "styled-components"

function ExerciseCard({exercise, handleDelete, currentUser}){


    console.log("this is the currentUser", currentUser)

    function deleteThisCard(){
        handleDelete(exercise)
    }

   console.log(exercise)

    return(
        <ExerciseCardStyler>
        <ClassCardHeader>
            {exercise.user.name === currentUser.name?(<DeleteButtonStyler onClick={deleteThisCard}>X</DeleteButtonStyler>) : (<></>)}
        <H1styler>{exercise.title}</H1styler>
        <h5>Muscle group(s) worked: {exercise.muscle_group}</h5>
        </ClassCardHeader>
        <p>{exercise.description}</p>
    
        <p>uploaded by: {exercise.user.name}</p>
        </ExerciseCardStyler>
    )
}

// 

export default ExerciseCard

const ExerciseCardStyler = styled.div`
    width: 300px;
    border-width: 2px;
    border-style: solid;
    border-color: black;
    text-align: center;
    margin: 6px;
    border-radius: 8px;
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


const ClassCardHeader=styled.div`
    background-color:navy;
    color: orange;
    padding-bottom: 5px;
`