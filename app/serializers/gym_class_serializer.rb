class GymClassSerializer < ActiveModel::Serializer
  attributes :id, :level, :description, :start_time, :end_time, :formatted_students, :formatted_class_workout_plans
  # has_one :user

  # has_many :class_students
  has_many :class_workouts
  # has_many :students, through: :class_students
  has_many :workout_plans, through: :class_workouts

    def formatted_class_workout_plans
      gym_class_class_workouts = object.class_workouts
    #   # ^^Is getting the array of exercise_lists that a workout_plan has
    #   # include_exercicises is the new array of exercise_lists that a workout_plan has, thet YOU are about to format the way you want, its's the last thing in the method so it will be implicitly returnend
      updated_gym_class_data= gym_class_class_workouts.map do |each_gym_class_class_workout|

        gym_class_with_workout_and_class_workout = {
          gym_class_workout_plan_id: each_gym_class_class_workout.id,
          gym_class_class_workout_plan: each_gym_class_class_workout.workout_plan.title
        }
      end
    end

    def start_time 
      object.start_time.strftime('%A, %m/%d: %I:%M %p')
    end

    def end_time 
      object.end_time.strftime('%I:%M %p')
    end





  def formatted_students
    gym_class_class_students = object.class_students
    updated_gym_class_data= gym_class_class_students.map do |each_gym_class_class_student|
      gym_class_with_student_and_class_student = {
        student_name: each_gym_class_class_student.student.name,
        class_student_id: each_gym_class_class_student.id
      }

    end
  end
  
end





# attributes :id, :level, :description, :start_time, :end_time, :formatted_students
#   # has_one :user

#   # has_many :class_students
#   has_many :class_workouts
#   # has_many :students, through: :class_students
#   has_many :workout_plans, through: :class_workouts

#     # def formatted_workout_plans
#     #   gym_class_class_workouts = object.class_workouts
#     #   # Us getting the array of exercise_lists that a workout_plan has

#     #   # include_exercicises is the new array of exercise_lists that a workout_plan has, 
#     #   # thet YOU are about to format the way you want
#     #   ## its's the last thing in the method so it will be implicitly returnend
#     #   updated_gym_class_data= gym_class_class_workouts.map do |each_gym_class_class_workout|

#     #     gym_class_with_workout_and_class_workout = {
#     #       workout_plan_title: each_gym_class_class_workout.workout_plan.title,
#     #       workout_plan__id: each_gym_class_class_workout.id
#     #     }

#     #   end
#     # end






#   def formatted_students
#     gym_class_class_students = object.class_students
#     # Us getting the array of exercise_lists that a workout_plan has

#     # include_exercicises is the new array of exercise_lists that a workout_plan has, 
#     # thet YOU are about to format the way you want
#     ## its's the last thing in the method so it will be implicitly returnend
#     updated_gym_class_data= gym_class_class_students.map do |each_gym_class_class_student|

#       gym_class_with_student_and_class_student = {
#         student_name: each_gym_class_class_student.student.name,
#         class_student_id: each_gym_class_class_student.id
#       }

#     end
#   end
  
# end

