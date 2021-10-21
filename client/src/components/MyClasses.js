import { useEffect, useState } from "react"
import styled from "styled-components"
import GymClassCard from "./GymClassCard"
// import Login from "./Login";

function MyClasses(){
    const [gymClasses, setGymClasses] = useState([]);
    const [level, setLevel] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [description, setDescription] = useState("");
    // const [classStudents, setClassStudents] = useState("")
 

    function fetchGymClasses(){
        fetch("http://localhost:3000/gym_classes")
        .then(resp=> resp.json())
        .then(gymclass => setGymClasses(gymclass))
    }

    useEffect(fetchGymClasses, [])


      //DELETE an exercise
      function handleDelete(gymClass){
        fetch(`http://localhost:3000/gym_classes/${gymClass.id}`,{ 
            method: "DELETE"
        })
        let gymClassesRemaining = gymClasses.filter(eachGymClass => eachGymClass.id !== gymClass.id);
        console.log(gymClassesRemaining)
        setGymClasses([...gymClassesRemaining])
    }


    function handleSubmit(synthEvent){
        synthEvent.preventDefault();
        const newClass = {
            level: level,
            description: description,
            start_time: startTime,
            end_time: endTime,
            // user_id: user.id
        };
        fetch("http://localhost:3000/gym_classes", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newClass)})
            .then(resp=> resp.json())
            .then(newClassFromDataBase =>{
                setGymClasses([...gymClasses, newClassFromDataBase])
        })
    }

    // function deleteAStudent(student){
    //     fetch(`http://localhost:3000/class_students/${student.id}`,{ 
    //         method: "DELETE"
    //     })
    //     let classStudentsRemaining = classStudent.filter(eachStudent => eachStudent.id !== classStudent.id);
    //     console.log(classStudentsRemaining)
    //     setClassStudents([...classStudentsRemaining])
    // }

    



    function mapClasses(){
            return(
                gymClasses.map(gymClass =>{
                    return(
                        <GymClassCard gymClass={gymClass} key={gymClass.id} handleDelete={handleDelete} formattedStudents={gymClass.formatted_students} fetchGymClasses={fetchGymClasses}/>
                    )
                })
               
            )
        }


    return(
        <>
        <h1>My classes</h1>

        <FormStyler>
            <form onSubmit={handleSubmit}>
                <h4>Create a new class</h4>
                <label>Level: </label>
                <input type="text" name ="level" value={level} onChange={(e)=> setLevel(e.target.value)}/>
                <label >Start time:</label>
                <input type="text" name="start time" value={startTime}  onChange={(e)=> setStartTime(e.target.value)}/>
                <label>End time:</label>
                <input type="text" name="start time" value={endTime}  onChange={(e)=> setEndTime(e.target.value)} />
                <label>Description: </label>
                <input type="text" name="start time" value={description}  onChange={(e)=> setDescription(e.target.value)} />
                <ButtonStyler type="submit">Create a new class</ButtonStyler>
         
            </form>
            </FormStyler>
        <MyClassContainer>
            {mapClasses()}
        </MyClassContainer>
        </>
    )
}

export default MyClasses

const MyClassContainer = styled.div`
    display: flexbox;
    flex-direction: row;
    overflow: scroll;
`

const FormStyler=styled.div`
    display: flex;
    flex-direction: row;
    /* background-color: green; */
    /* height: 200px; */
    /* width:6.5vw; */
    font-size: 20px;
    margin-left: 7vw;
    border-width: 2px;
    border-style: solid;
    border-color: black;
    padding: 10px;
    border-radius: 18px;
    text-align: center;
`
const ButtonStyler= styled.button`
    margin: 5px;
    border-radius: 5px;
    font-size: 15px;
    background-color: skyblue;
    padding: 5px;
`