class WorkoutPlan < ApplicationRecord
  belongs_to :user

  has_many :exercise_lists, dependent: :destroy
  has_many :user_workouts, dependent: :destroy
  has_many :class_workouts, dependent: :destroy
  has_many :exercises, through: :exercise_lists
  has_many :users, through: :user_workouts
  has_many :gym_classes, through: :class_workouts
end
