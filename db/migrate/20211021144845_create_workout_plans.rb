class CreateWorkoutPlans < ActiveRecord::Migration[6.1]
  def change
    create_table :workout_plans do |t|
      t.string :title
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
