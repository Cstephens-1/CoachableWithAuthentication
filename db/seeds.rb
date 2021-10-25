# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "seeding data"

cory = User.create(
    username:"Cory", 
    password:"123", 
    name: "Cory", 
)

trent = User.create(
    username: "Trent",
    password:"345",
    name:"Trent",

)


level4= GymClass.create(
    start_time: "4:00pm",
    end_time: "6:00pm",
    level: "4",
    description: "entry level competitive gymnastics",
    user_id: trent.id
)

level6= GymClass.create(
    start_time: "6:10pm",
    end_time: "8:30pm",
    level: "6",
    description: "In this class, athletes work back tucks, giants, and other intermdiate gymnastics skills ",
    user_id: cory.id
)

level5= GymClass.create(
    start_time: "4:00pm",
    end_time: "6:00pm",
    level: "5",
    description: "second competitive level, athletes train back handspring, flyaway, dismounts on parallel bars, etc.",
    user_id: cory.id
)

joe = Student.create(
    name: "Joe Smith",
    notes: "allergic to peanuts"
)

billy = Student.create(
    name: "Billy Williams"
)

curls = Exercise.create(
    title: "Bicep curl",
    muscle_group: "biceps",
    description: "underhand grip, bring the weight to your shoulder and slowly return. Be sure to keep back straight.",
    user_id: cory.id
)

chinups = Exercise.create(
    title: "Basic Chin-up",
    muscle_group: "lats",
    description: "uverhand grip, pull body up until chin is above the bar and slowly return to hang. Do not rest chin on bar",
    user_id: cory.id
  
)

pushups = Exercise.create(
    title: "Traditional Push-up",
    muscle_group: "pecs",
    description: "In prone position, arms straight, and hands placed under the shoulders. Facing forward and keeping body straight, lower until chest is about an inch above the floor. Return to start position.",
    user_id: cory.id
    
)

squats = Exercise.create(
    title: "Squats",
    muscle_group: "quadriceps",
    description: "keeping back straight and looking forward, lower butt towards the ground until almost touching heels. Slowly return to standing position",
    user_id: trent.id
)



plan1= WorkoutPlan.create(
    title: "Arms",
    user_id: cory.id
)

plan2 = WorkoutPlan.create(
    title: "legs",
    user_id: trent.id
)

plan3 = WorkoutPlan.create(
    title: "chest",
    user_id: cory.id
)

plan4 = WorkoutPlan.create(
    title: "back",
    user_id: trent.id
)

plan5 = WorkoutPlan.create(
    title: "abs",
    user_id: cory.id
)
ExList1 = ExerciseList.create(
    reps: "12/10/8",
    exercise_id: curls.id,
    workout_plan_id: plan1.id
)

ExList2 = ExerciseList.create(
    reps: "3 X 10",
    exercise_id: chinups.id,
    workout_plan_id: plan1.id
)

ExList3 = ExerciseList.create(
    reps: "3 X 20",
    exercise_id: pushups.id,
    workout_plan_id: plan1.id
)

ExList4 = ExerciseList.create(
    reps:"3x20",
    exercise_id: squats.id,
    workout_plan_id: plan2.id
)

UserWorkout1= UserWorkout.create(
    user_id: cory.id,
    workout_plan_id: plan1.id
)

UserWorkout2=UserWorkout.create(
    user_id: cory.id,
    workout_plan_id: plan2.id
)

ClassWorkout1= ClassWorkout.create(
    workout_plan_id: plan1.id,
    gym_class_id: level4.id
)

ClassWorkout2= ClassWorkout.create(
    workout_plan_id: plan2.id,
    gym_class_id: level4.id
)

attendee1 = ClassStudent.create(
    student_id: joe.id,
    gym_class_id: level4.id
)

attendee2 = ClassStudent.create(
    student_id: billy.id,
    gym_class_id: level6.id
)
puts "done seeding"