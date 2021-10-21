// import { useState } from "react"
import styled from "styled-components"

function StudentCard({student, handleDelete}){
    // const [notes, setNotes] = useState("")

    console.log(student)

    function deleteThisStudent(){
        handleDelete(student)
    }

    // function editStudentDetails(synthEvent){
    //     synthEvent.preventDefault()
    //     console.log(notes)
    //      fetch(`http://localhost:3000/students/${student.id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "content-type":"application/json"
    //         },
    //         body: JSON.stringify({notes: notes})
    //     })
    //     .then(resp => resp.json())
    //     .then(updatedNotes => setNotes(updatedNotes))
        

    // }

    
    return(
        <>
        <StudentCardStyler>
        <h3>{student.name}</h3>
        <p>Notes: {student.notes}</p>
        {/* <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)}/>
        <ButtonStyler onClick={editStudentDetails}>Edit student details</ButtonStyler> */}
        <ButtonStyler onClick={deleteThisStudent}>Delete Student</ButtonStyler>
        </StudentCardStyler>
        </>
    )
}

export default StudentCard

const StudentCardStyler = styled.div`
    width: 300px;
    border-width: 2px;
    border-style: solid;
    border-color: black;
    text-align: center;
    margin: 6px;
`

const ButtonStyler= styled.button`
    margin: 5px;
    border-radius: 5px;
    font-size: 15px;
    background-color: skyblue;
    padding: 5px;
`