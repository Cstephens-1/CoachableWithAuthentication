class GymClassSerializer < ActiveModel::Serializer
  attributes :id, :level, :description, :start_time, :end_time, :formatted_students
  # has_one :user

  # has_many :class_students
  has_many :class_workouts
  # has_many :students, through: :class_students
  has_many :workout_plans, through: :class_workouts


  def formatted_students
    gym_class_class_students = object.class_students
    # Us getting the array of exercise_lists that a workout_plan has

    # include_exercicises is the new array of exercise_lists that a workout_plan has, 
    # thet YOU are about to format the way you want
    ## its's the last thing in the method so it will be implicitly returnend
    updated_gym_class_data= gym_class_class_students.map do |each_gym_class_class_student|

      gym_class_with_student_and_class_student = {
        student_name: each_gym_class_class_student.student.name,
        class_student_id: each_gym_class_class_student.id
      }

    end
  end
  
end
