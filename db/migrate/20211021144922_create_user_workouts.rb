class CreateUserWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :user_workouts do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :workout_plan, null: false, foreign_key: true

      t.timestamps
    end
  end
end
