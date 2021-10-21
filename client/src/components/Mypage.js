// import { useEffect, useState } from "react"
import styled from "styled-components"
// import GymClassCard from "./GymClassCard"
import MyClasses from "./MyClasses"
// import NavBar from "./NavBar"
import WorkoutLibrary from "./WorkoutLibrary"
 
 
function Mypage(){
    // const [gymClasses, setGymClasses] = useState([])
 
    // useEffect(() => {
    //     fetch("http://localhost:3000/gym_classes")
    //     .then(resp=> resp.json())
    //     .then(gymclass => setGymClasses(gymclass))
    // }, [])

    // console.log(gymClasses)

    // function mapClasses(gymClasses){
    //         return(
    //             gymClasses.map(gymClass =>{
    //                 return(
    //                     <GymClassCard gymClass={gymClass} key={gymClass.id}/>
    //                 )
    //             })
               
    //         )
    //     }
 
    return(
        <div>
             {/* <NavBar /> */}
        {/* <MuscleManWrapper>
            <p>Muscle Man goes here (colored to see the div)</p>
            <PieChartWrapper>
            <h3>Workout pie chart to track how often muscle groups are done (colored to see the div)</h3>
            </PieChartWrapper>
        </MuscleManWrapper> */}
        {/* <TodayStyler>
        <h1>Today's Plans (calendar)</h1>
        </TodayStyler> */}
        <ClassWrapper>
        <MyClasses/>
        <WorkoutLibrary />
        </ClassWrapper>
        </div>
    )}
 
export default Mypage

// const MyClassContainer = styled.div`
//     display: flexbox;
//     flex-direction: row;
// `

const ClassWrapper = styled.div`
    width: 100vw;
    background-color: skyblue;
    /* margin-left: 50%; */
    text-align: center;
`

// const MuscleManWrapper = styled.div`
//     height: 55vh;
//     width: 50vw;
//     background-color: green;
//     position: absolute;
//     border-style: solid;
//     border-width: 2px;
//     border-style: solid
// `

// const PieChartWrapper=styled.div`
//         height: 50vh;
//         width:50vw;
//         margin-top: 50vh;
//         background-color: red;
//         left: 0px;
//         position: relative;
// `

// const TodayStyler=styled.div`
//         margin-left: 50vw;
//         text-align: center
// `