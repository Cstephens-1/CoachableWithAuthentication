class ClassWorkout < ApplicationRecord
  belongs_to :workout_plan
  belongs_to :gym_class

  validates :workout_plan_id, uniqueness: {scope: [:gym_class_id], message: "workout already in this class"}
end




# validates :group_id, uniqueness: { scope: [:user_id], message: "can't join the same group twice" }
