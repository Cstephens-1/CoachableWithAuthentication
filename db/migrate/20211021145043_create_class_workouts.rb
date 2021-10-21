class CreateClassWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :class_workouts do |t|
      t.belongs_to :workout_plan, null: false, foreign_key: true
      t.belongs_to :gym_class, null: false, foreign_key: true

      t.timestamps
    end
  end
end
