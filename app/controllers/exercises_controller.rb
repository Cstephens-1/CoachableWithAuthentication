class ExercisesController < ApplicationController
    skip_before_action :confirm_authentication
    def index
        exercises = Exercise.all
        render json: exercises
    end

    def show
        exercise=Exercise.find_by(id: params[:id])
        render json: exercise
    end

    def create 
        exercise = Exercise.new(title: params[:title], description: params[:description], muscle_group: params[:muscle_group], user_id: params[:user_id])
        if exercise.save
            render json: exercise, status: :created
        else
            render json: exercise.errors
        end
    end

    def update
        exercise = Exercise.find_by(id: params[:id])
        if exercise 
            exercise.update(description: params[:description])
            render json: exercise, status: :ok
        else
            render json: {error: "exercise doesn't exist"}, status: :not_found
        end
    end

    def destroy
            exercise = Exercise.find_by(id: params[:id])
            if exercise 
                exercise.destroy
                head :no_content
            else
                render json: {error: "exercise doesn't exist"}, status: :not_found
            end
        end


    private

    def exercise_params 
        params.permit(:description, :muscle_group)
    end
end
