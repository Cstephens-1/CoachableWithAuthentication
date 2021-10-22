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

    def destroy
        exercise_list = ExerciseList.find_by(id: params[:id])
        if exercise_list 
            exercise_list.destroy
            render json: exercise_list
        else
            render json: {error: "that assignment doesn't exist"}, status: :not_found
        end
    end

    private

    def exercise_list_params
        params.permit(:reps, :exercise_id, :workout_plan_id )
    end
end
