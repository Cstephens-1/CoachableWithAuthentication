class CreateGymClasses < ActiveRecord::Migration[6.1]
  def change
    create_table :gym_classes do |t|
      t.string :level
      t.string :description
      t.datetime :start_time
      t.datetime :end_time
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
