import { useEffect, useState } from "react"
import styled from "styled-components"
import GymClassCard from "./GymClassCard"
import MyClassesImg from "../MyClassesImg.PNG"
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
        <H1styler>My Classes</H1styler>
        <FormStyler>
            <form onSubmit={handleSubmit}>
                {/* <LabelStyler>Create a new class</LabelStyler>
                <br></br> */}
                <LabelStyler>Level: </LabelStyler>
                <input type="text" name ="level" value={level} onChange={(e)=> setLevel(e.target.value)}/>
                <LabelStyler >Start time: </LabelStyler>
                <input type="text" name="start time" value={startTime}  onChange={(e)=> setStartTime(e.target.value)}/>
                <LabelStyler>End time: </LabelStyler>
                <input type="text" name="start time" value={endTime}  onChange={(e)=> setEndTime(e.target.value)} />
                <LabelStyler>Description: </LabelStyler>
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
    flex-wrap: wrap;
    width: 90vw;
    margin: auto;
    margin-top: 20px;
`

const LabelStyler = styled.label`
  font-family: Graduate;
  font-weight: 600;
  margin-left: 10px;
`

const FormStyler=styled.div`
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
const ButtonStyler = styled.button`
border-style: none;
  background-color:white;
  color:black;
  font-size: 25px;
  font-family: Graduate;
  font-weight: 800;
  margin-left: 25vw;
  margin-top: 10px;
  &:hover {
    color: white;
    background: black;
    /* padding-top: 10px; */
  }
`

const H1styler = styled.h1`
    font-family: Graduate;
    font-size: 50px;
    font-weight: 1500;
`
