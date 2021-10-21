class UserWorkout < ApplicationRecord
  belongs_to :user
  belongs_to :workout_plan
end
