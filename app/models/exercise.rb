class Exercise < ApplicationRecord
  belongs_to :user

  has_many :exercise_lists
  has_many :workout_plans, through: :exercise_lists
end
