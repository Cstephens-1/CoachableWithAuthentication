class Student < ApplicationRecord
    has_many :class_students, dependent: :destroy
    has_many :gym_classes, through: :class_students
end
