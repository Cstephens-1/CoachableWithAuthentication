class ClassWorkoutSerializer < ActiveModel::Serializer
  attributes :id
  has_one :workout_plan
  has_one :gym_class
end
