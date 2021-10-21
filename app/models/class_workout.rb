class ClassWorkout < ApplicationRecord
  belongs_to :workout_plan
  belongs_to :gym_class
end
