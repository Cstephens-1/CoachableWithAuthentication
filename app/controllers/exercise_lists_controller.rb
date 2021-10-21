class ExerciseListsController < ApplicationController
    skip_before_action :confirm_authentication
    def index 
        exercise_lists = ExerciseList.all 
        render json: exercise_lists, each_serializer: ExerciseListSerializer
    end

    def create 
        new_exercise = ExerciseList.create(exercise_list_params)
        render json: new_exercise
    end

    private

    def exercise_list_params
        params.permit(:reps, :exercise_id, :workout_plan_id )
    end
end
