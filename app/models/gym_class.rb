class GymClass < ApplicationRecord
  belongs_to :user

  has_many :class_students, dependent: :destroy
  has_many :class_workouts, dependent: :destroy
  has_many :students, through: :class_students
  has_many :workout_plans, through: :class_workouts
end
