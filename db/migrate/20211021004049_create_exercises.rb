class CreateExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :exercises do |t|
      t.string :title
      t.string :muscle_group
      t.string :description
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
