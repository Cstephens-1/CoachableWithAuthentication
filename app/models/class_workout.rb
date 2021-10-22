class ClassWorkout < ApplicationRecord
  belongs_to :workout_plan
  belongs_to :gym_class

  # validates :workout_plan, uniqueness: true
end
