class GymClassesController < ApplicationController
    skip_before_action :confirm_authentication
    def index
        gym_classes = GymClass.all.order(:start_time)
        render json: gym_classes, each_serializer: GymClassSerializer
    end
 
    def show
        gym_class = GymClass.find_by(id: params[:id])
        render json: gym_class, serializer: GymClassSerializer
    end

    def create 
        gym_class = GymClass.create(level: params[:level], start_time: params[:start_time], end_time: params[:end_time], description: params[:description], user_id: User.first.id)
        render json: gym_class
    end

    def update 
        gym_class = GymClass.find_by(id: params[:id])
        if gym_class
            gym_class.update(description: params[:description])
            render json: gym_class
        else
            render json: {error: "gym class doesn't exist"}
        end
    end

    def destroy
        gym_class = GymClass.find_by(id: params[:id])
        if gym_class 
            gym_class.destroy
            render json: gym_class
        else
            render json: {error: "gym class doesn't exist"}, status: :not_found
        end
    end

    private

    def gym_class_params
        params.permit(:level, :start_time, :end_Time, :description)
    end
 
end