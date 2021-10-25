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
        <h1>{exercise.title}</h1>
        <h5>Muscle group(s) worked: {exercise.muscle_group}</h5>
        <p>{exercise.description}</p>
    
        <p>uploaded by: {exercise.user.name}</p>
        {exercise.user.name === currentUser.name?(<ButtonStyler onClick={deleteThisCard}>Delete this exercise</ButtonStyler>) : (<></>)}
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