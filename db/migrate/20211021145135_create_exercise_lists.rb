class CreateExerciseLists < ActiveRecord::Migration[6.1]
  def change
    create_table :exercise_lists do |t|
      t.string :reps
      t.belongs_to :exercise, null: false, foreign_key: true
      t.belongs_to :workout_plan, null: false, foreign_key: true

      t.timestamps
    end
  end
end
