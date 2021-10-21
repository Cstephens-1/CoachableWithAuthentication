class WorkoutPlanSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_one :user

  attributes :id, :title


  has_many :exercise_lists
  # has_many :user_workouts
  # has_many :class_workouts
  has_many :exercises, through: :exercise_lists
  # has_many :users, through: :user_workouts
  # has_many :gym_classes, through: :class_workouts
end

