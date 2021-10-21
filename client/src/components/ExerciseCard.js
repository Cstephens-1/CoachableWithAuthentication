// import { useState } from "react"
import styled from "styled-components"

function ExerciseCard({exercise, handleDelete, editExerciseDescription}){
    // const [newDescription, setNewDescription]=useState("")


    console.log(exercise)

    function deleteThisCard(){
        handleDelete(exercise)
    }

    // function editThisExerciseDescription(){
    //     editExerciseDescription(exercise)
    // }

   console.log(exercise)


    return(
        <ExerciseCardStyler>
        <h1>{exercise.title}</h1>
        <h5>Muscle group(s) worked: {exercise.muscle_group}</h5>
        <p>{exercise.description}</p>
        {/* <p><link to={exercise.link}></link>Link to view exercise</p> */}
        <p>uploaded by: {exercise.user.name}</p>
        <ButtonStyler onClick={deleteThisCard}>Delete this exercise</ButtonStyler>
        {/* <ButtonStyler onClick={editThisExerciseDescription}>Edit this exercise</ButtonStyler>
        <input placeholder="update description" value={newDescription} onChange={(e) => setNewDescription(e.target.value)}/> */}
        </ExerciseCardStyler>
    )
}

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