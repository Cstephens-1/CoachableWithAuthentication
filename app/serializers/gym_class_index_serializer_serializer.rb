# class GymClassIndexSerializerSerializer < ActiveModel::Serializer
#   attributes :id, :start_time, :end_time, :description, :formatted_gym_classes



#   def formatted_gym_classes
#     gym_class_workout_plans = object.workout_plans

#     included_workouts = gym_class_workout_plans.map do |each_plan|
#       new_workout_plan_hash = {
#         exercise_title: each_plan.exercise_lists,
#         exercise_reps: each_plan.exercise_lists
#       }
      
#     end
  
# end



# def formatted_exercise_list
#   workout_plan_exercise_list = object.exercise_lists
#   # Us getting the array of exercise_lists that a workout_plan has

#   # include_exercicises is the new array of exercise_lists that a workout_plan has, 
#   # thet YOU are about to format the way you want
#   ## its's the last thing in the method so it will be implicitly returnend
#   included_exercises = workout_plan_exercise_list.map do |each_exercise_list|

#     new_exercise_list_hash = {
#       exercise_title: each_exercise_list.exercise.title,
#       exercise_reps: each_exercise_list.reps
#     }

#   end

# end


# end