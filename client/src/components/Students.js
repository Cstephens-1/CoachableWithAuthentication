import { useEffect, useState } from "react"
import styled from "styled-components"
import StudentCard from "./StudentCard"

function Students(){
    const [studentList, setStudentList] = useState([])
    const [newName, setNewName] = useState("")
    const [newNote, setNewNote] = useState("")


    function handleDelete(student){
        fetch(`http://localhost:3000/students/${student.id}`,{ 
            method: "DELETE"
        })
        let studentsRemaining = studentList.filter(eachStudent => eachStudent.id !== student.id);
        console.log(studentsRemaining)
        setStudentList([...studentsRemaining])
    }

    //fetch all existing student information
    useEffect(() =>{
        fetch("http://localhost:3000/students")
        .then(resp=> resp.json())
        .then(student => setStudentList(student))
    }, [])

    //format the existing students to their own card
    function mapStudents(studentList){
        return(
            studentList.map(student =>{
                return(
                    
                    <StudentCard student={student} key={student.id} handleDelete={handleDelete}/>
                    
                )
            })
           
        )
    }

    //add a new student to the master list
    function handleSubmit(synthEvent){
        synthEvent.preventDefault();
        const newStudent = {
            name: newName,
            notes: newNote
            // user_id: user
        };
        fetch("http://localhost:3000/students", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newStudent)})
            .then(resp=> resp.json())
            .then(studentFromDataBase=> 
                setStudentList([...studentList, studentFromDataBase]))
    }

    return(
        <>
        <H1styler>Students</H1styler>
            <H4styler>Add a new student</H4styler>
        <FormStyler onSubmit={handleSubmit}>
            <LabelStyler>Name: </LabelStyler>
            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)}/>
            <LabelStyler>Notes: </LabelStyler>
            <input type="text" value={newNote} onChange={(e) => setNewNote(e.target.value)}/>
            <AddButtonStyler type="submit" >Submit</AddButtonStyler>

        </FormStyler>
        <LibaryStyler>
        {mapStudents(studentList)}
        </LibaryStyler>
        </>
    )
}

export default Students

const LibaryStyler = styled.div`
   display: flexbox;
    flex-wrap: wrap;
    width: 90vw;
    margin: auto;
    margin-top: 20px;
`



// const ButtonStyler= styled.button`
//     margin: 5px;
//     border-radius: 5px;
//     font-size: 15px;
//     background-color: skyblue;
//     padding: 5px;
// `

const LabelStyler = styled.label`
  font-family: Graduate;
  font-weight: 600;
  font-size: 30px;
`

// const H1styler = styled.h1`
//     font-family: Graduate;
//     font-size: 50px;
//     font-weight: 1500;
//     text-align: center;
// `

const H1styler = styled.h1`
    font-family: Graduate;
    text-decoration: underline;
    font-size: 32px;
    font-weight: 1500;
    text-align: center;
`

const H4styler= styled.h4`
    text-align:center;
    font-family: Graduate;
    /* margin-bottom: -5px; */
    font-size: 24px;
    /* margin-left: 25%; */

`

const AddButtonStyler = styled.button`
border-style: none;
  background-color:white;
  color:black;
  font-size: 15px;
  font-family: Graduate;
  font-weight: 800;
  margin-top: 10px;
  margin-left: 5px;
  /* margin-right: 30px; */
  &:hover {
    color: white;
    background: black;
  }
`

const FormStyler=styled.form`
    display: flexbox;
    flex-direction:row;
    /* background-color: green; */
    /* height: 200px; */
    /* width:6.5vw; */
    font-size: 20px;
    margin: auto;
    border-width: 2px;
    border-style: solid;
    border-color: black;
    padding: 10px;
    border-radius: 18px;
    text-align: left;
    width: 70vw;
    /* height: 10vh; */
`