class WorkoutPlanIndexSerializer < ActiveModel::Serializer
  attributes :id, :title, :formatted_exercise_list


  def formatted_exercise_list
    workout_plan_exercise_list = object.exercise_lists
    # Us getting the array of exercise_lists that a workout_plan has

    # include_exercicises is the new array of exercise_lists that a workout_plan has, 
    # thet YOU are about to format the way you want
    ## its's the last thing in the method so it will be implicitly returnend
    included_exercises = workout_plan_exercise_list.map do |each_exercise_list|

      new_exercise_list_hash = {
        exercise_title: each_exercise_list.exercise.title,
        exercise_reps: each_exercise_list.reps
      }

    end

  end


end
