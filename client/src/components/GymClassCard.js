
import { useEffect, useState } from "react"
import styled from "styled-components"

function GymClassCard({gymClass, handleDelete, deleteAStudent, formattedStudents, fetchGymClasses}){
    const [gymClasses, setGymClasses] = useState([]);
    const [classStudents, setClassStudents] = useState([])
    const [students, setStudents] =useState([])
    const [selectedStudent, setSelectedStudent] = useState([])
    // const [description, setDescription] = useState("")
    const [workoutLibrary, setWorkoutLibrary]=useState([])
    const [selectedWorkout, setSelectedWorkout]=useState([])
    // const [classWorkouts, setClassWorkouts]=useState([])
    // const [isTrue, setIsTrue]=useState(true)


    useEffect(() => {
        fetch("http://localhost:3000/gym_classes")
        .then(resp=> resp.json())
        .then(gymclass => setGymClasses(gymclass));
        //fetch data for the students added to this class
        fetch("http://localhost:3000/class_students")
        .then(resp=> resp.json())
        .then(classStudent => setClassStudents(classStudent));
        //fetch the students to use in the addStudent function
        fetch("http://localhost:3000/students")
        .then(resp=> resp.json())
        .then(student => setStudents(student));
        //fetch all of the existing workout templates
        fetch("http://localhost:3000/workout_plans")
        .then(resp=> resp.json())
        .then(workout=> setWorkoutLibrary(workout))
        }, [])

    //delete an existing class
    function deleteThisClass(){
        handleDelete(gymClass)
    }

    //delete a workout plan from an individual class. 
    function deleteThisWorkoutFromThisClass(id){
        // console.log(class_workout)
        fetch(`http://localhost:3000/class_workouts/${id}`,{ 
            method: "DELETE"
        }).then(resp=> resp.json()).then(()=> fetchGymClasses())
    }

    //function delete a student from a gym class
    function deleteThisStudent(id){
        fetch(`http://localhost:3000/class_students/${id}`,{ 
            method: "DELETE"
        }).then(resp=> resp.json()).then(fetchGymClasses())
        
    }

    //format the student data on the card
    function mapStudents(){
        return(
            formattedStudents.map(eachFormattedStudent=> {
                return(
                    <>
                    <LiStyler>
                    {eachFormattedStudent.student_name}
                    <DeleteStudentButton onClick={()=> deleteThisStudent(eachFormattedStudent.class_student_id)}>Delete this student</DeleteStudentButton></LiStyler>
                    </>
                )}
            )
        ) 
    }

    //format the class data on the card
    function mapWorkouts(gymClass){
        return(
            gymClass.formatted_class_workout_plans.map(workout=>{
                return(
                    <GymClassCardEachWorkoutContainer>
                    <H5Styler>{workout.gym_class_class_workout_plan}</H5Styler>
                    <DeleteWorkoutButton onClick={()=> deleteThisWorkoutFromThisClass(workout.gym_class_workout_plan_id)}>Delete this workout</DeleteWorkoutButton>
                    </GymClassCardEachWorkoutContainer>
                )
            })
        )
    }

    //add a student to the specific class
    function addStudentToClass(synthEvent){
        synthEvent.preventDefault()
        console.log(selectedStudent, gymClass)
        const addedStudent ={
            student_id: selectedStudent,
            gym_class_id: gymClass.id
        }
        // POST fetch to class_students, hit a create route.
        fetch("http://localhost:3000/class_students", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(addedStudent)})
                .then(resp=> resp.json())
                .then(newStudent=> {
                    fetchGymClasses()
                })
        }

        //add a workout to the gym class
        function addWorkoutToClass(synthEvent){
            synthEvent.preventDefault()
            console.log(selectedWorkout, gymClass)
            const addedWorkout ={
                workout_plan_id: selectedWorkout,
                gym_class_id: gymClass.id
            }
            fetch("http://localhost:3000/class_workouts", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(addedWorkout)})
                    .then(resp=> resp.json())
                    //set this to a 
                    .then(newWorkout=> fetchGymClasses() )
        }

    return(
        <UnclickedGymCardStyler>
            <DeleteButtonStyler onClick={deleteThisClass}>X</DeleteButtonStyler>
            <ClassCardHeader>
            <LevelStyler>Level: {gymClass.level}</LevelStyler>
            <TimeStyler>{gymClass.start_time} - {gymClass.end_time}</TimeStyler>
            </ClassCardHeader>
            <DescriptionStyler>Description: {gymClass.description}</DescriptionStyler>
            {/* <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/> */}
            {/* <ButtonStyler onClick={editClassDescription}>Edit description</ButtonStyler> */}
            {/* <h3>Today's workout</h3> */}


            <ClassCardWorkoutDiv>
            
            <select type="text" value={selectedWorkout} onChange={(e) => setSelectedWorkout(e.target.value)}>
                <option >Please select a workout</option>
                {workoutLibrary.map(workout=>{
                    return(
                        <option value={workout.id} key={workout.id}>{workout.title}</option>
                    )
                })}
            </select>
            <AddButtonStyler onClick={addWorkoutToClass}>Add a workout</AddButtonStyler>
            {mapWorkouts(gymClass)}
            </ClassCardWorkoutDiv>

            <StudentStyler>Students:</StudentStyler>
            {mapStudents()}
            
                
            <select type="text" value={selectedStudent} onChange={(e) => setSelectedStudent(e.target.value)}>
                <option >Please select a student</option>
                {students.map(student =>{
                    return(
                        <option value={student.id} key={student.id}>{student.name}</option>
                    )
                })}
            </select>
            <AddButtonStyler onClick={addStudentToClass}>Add student</AddButtonStyler>
        </UnclickedGymCardStyler>
    )
}


export default GymClassCard

const UnclickedGymCardStyler = styled.div`
    border-width: 2px;
    border-color: black;
    border-style: solid;
    width: 250px;
    height: 300px;
    text-align: center;
    padding: 20px;
    margin: 6px;
    display: flex;
    flex-direction: column;
    position: flex;
    overflow: scroll;
    &::-webkit-scrollbar {
        width: 10px;
        border: 1px solid black;
    }
    &::-webkit-slider-thumb {
        width: 10px;
        background-color: red
    }
`
const AddButtonStyler = styled.button`
border-style: none;
  background-color:white;
  color:black;
  font-size: 15px;
  font-family: Graduate;
  font-weight: 800;
  margin-top: 10px;
  /* margin-right: 30px; */
  &:hover {
    color: white;
    background: black;
  }
`

const DeleteButtonStyler=styled.button`
    height: 25px;
    width: 25px;
    font-size: 20px;
    text-align: center;
    margin-left: 240px;
    margin-top: -10px;
    background-color:white;
    color:black;
    font-size: 15px;
    font-family: Graduate;
    font-weight: 800;
    border-style:none;
    border-radius: 8px;
    &:hover {
        color: black;
        background: red;
    }
`
const LiStyler = styled.li`
    /* font-family: Graduate; */
    font-size: 15px;
    list-style: none;
`
const DeleteStudentButton= styled.button`
    width: 7vw;
    font-size: 10px;
    font-family: Graduate;
    margin-bottom: 10px;
    margin-left: 5px;
    margin-top: -14px;
    border-radius: 8px;
    &:hover {
    color: white;
    background: red;
  }
`

const DeleteWorkoutButton= styled.button`
    width: 11vw;
    font-family: Graduate;
    margin-bottom: 5px;
    margin-left: auto;
    margin-top: -14px;
    border-radius: 8px;
    &:hover {
    color: white;
    background: red;
  }
`

const ClassCardWorkoutDiv= styled.div`
    margin-bottom: 10px;
`

const H5Styler=styled.h5`
    margin-bottom: 5px;
`

const GymClassCardEachWorkoutContainer = styled.div`
    margin-bottom: -12px;
`

const TimeStyler=styled.h5`
    font-size: 13px;
`

const LevelStyler=styled.h1`
    font-family: Graduate;
    text-decoration: underline;
`

const ClassCardHeader=styled.div`
    background-color:navy;
    color: orange;
`
const StudentStyler=styled.h5`
    font-family: Graduate;
    font-size: 20px;
    text-decoration: underline;
    margin-bottom: 5px;
`

const DescriptionStyler=styled.p`
    font-family: Graduate;
`