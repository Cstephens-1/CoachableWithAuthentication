class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :title, :muscle_group, :description
  has_one :user
end
