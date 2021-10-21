class ExerciseListSerializer < ActiveModel::Serializer
  attributes :id, :reps
  has_one :exercise
  has_one :workout_plan
end
