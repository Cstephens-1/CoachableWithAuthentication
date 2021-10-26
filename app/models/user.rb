class User < ApplicationRecord
    has_secure_password

    has_many :gym_classes
    has_many :exercises
    has_many :workout_plans
    has_many :user_workouts
    has_many :workout_plans, through: :user_workouts

    validates :username, uniqueness: true

end
