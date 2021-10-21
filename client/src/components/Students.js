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
        <h1>My students</h1>
        <form onSubmit={handleSubmit}>
            <h4>Add a new student</h4>
            <label>Name: </label>
            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)}/>
            <label>Notes: </label>
            <input type="text" value={newNote} onChange={(e) => setNewNote(e.target.value)}/>
            <ButtonStyler type="submit" >Add a new student</ButtonStyler>

        </form>
        <LibaryStyler>
        {mapStudents(studentList)}
        </LibaryStyler>
        </>
    )
}

export default Students

const LibaryStyler = styled.div`
    display: flexbox;
    flex-direction: row;
`

const ButtonStyler= styled.button`
    margin: 5px;
    border-radius: 5px;
    font-size: 15px;
    background-color: skyblue;
    padding: 5px;
`