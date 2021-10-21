class ExerciseList < ApplicationRecord
  belongs_to :exercise
  belongs_to :workout_plan
end
