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
        <DeleteButtonStyler onClick={deleteThisStudent}>X</DeleteButtonStyler>
        <H1styler>{student.name}</H1styler>
        {student.notes !== ""? (<PStyler>Notes: {student.notes}</PStyler>) : <></>}
        {/* <PStyler>Notes: {student.notes}</PStyler> */}
        </StudentCardStyler>
        </>
    )
}

export default StudentCard

const StudentCardStyler = styled.div`
    width: 300px;
    border-width: 5px;
    border-style: solid;
    border-color: orange;
    text-align: center;
    margin: 6px;
    background: navy;
    color: orange;
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

const PStyler=styled.p`
    font-family: Graduate;
`