class ClassStudentsController < ApplicationController
    skip_before_action :confirm_authentication
    def index 
        class_students = ClassStudent.all 
        render json: class_students
    end

    def show
        class_student = ClassStudent.find_by(id: params[:id])
        render json: class_student
    end

    def create 
        new_student = ClassStudent.create(class_student_params)
            render json: new_student, status: :created
    end

    def destroy 
        class_student = ClassStudent.find_by(id: params[:id])
        if class_student 
            class_student.destroy
            head :no_content
        else
            render json: {error: "student is not in this class"}, status: :not_found
        end
    end

    private

    def class_student_params
        params.permit(:student_id, :gym_class_id)
    end
end

