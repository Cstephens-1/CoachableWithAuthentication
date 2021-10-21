class StudentsController < ApplicationController
    skip_before_action :confirm_authentication
    
    def index 
        students = Student.all
        render json: students
    end

    def show
        student = Student.find_by(id: params[:id])
        render json: student, serializer: StudentSerializer
    end


    def create 
        student = Student.create(name: params[:name], notes: params[:notes])
        render json: student
    end

    def update 
        student = Student.find_by(id: params[:id])
        if student
            student.update(notes: params[:notes])
            render json: student
        else
            render json: {error: "student doesn't exist"}
        end
    end

    def destroy
        student = Student.find_by(id: params[:id])
        if student 
            student.destroy
            head :no_content
        else
            render json: {error: "student doesn't exist"}, status: :not_found
        end
    end

    private 

    def student_params 
        params.permit(:id, :name, :notes)
    end
end
