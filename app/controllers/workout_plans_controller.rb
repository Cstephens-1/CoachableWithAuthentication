class WorkoutPlansController < ApplicationController
    skip_before_action :confirm_authentication
    
    def index
        workout_plans = WorkoutPlan.all 
        render json: workout_plans, each_serializer: WorkoutPlanIndexSerializer
    end

    def show
        workout_plan = WorkoutPlan.find_by(id: params[:id])
        render json: workout_plan, serializer: WorkoutPlanIndexSerializer
    end

    def create 
       workout_plan = WorkoutPlan.create(title: params[:title], user_id: User.first.id)
        render json: workout_plan
    end

    def destroy
        workout_plan = WorkoutPlan.find_by(id: params[:id])
        if workout_plan 
            workout_plan.destroy
            head :no_content
        else
            render json: {error: "workkout plan doesn't exist"}, status: :not_found
        end
    end

end
