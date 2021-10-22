class ClassWorkoutsController < ApplicationController
    skip_before_action :confirm_authentication
    def index 
        class_workouts = ClassWorkout.all 
        render json: class_workouts
    end

    def create 
        new_class_workout = ClassWorkout.create(class_workout_params)
        render json: new_class_workout
    end

    def destroy
        class_workout = ClassWorkout.find_by(id: params[:id])
        if class_workout 
            class_workout.destroy
            render json: class_workout
        else
            render json: {error: "that workout isn't on this class"}, status: :not_found
        end
    end

    private

    def class_workout_params
        params.permit(:workout_plan_id, :gym_class_id)
    end


end
