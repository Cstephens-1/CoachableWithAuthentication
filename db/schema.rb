# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_21_145135) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "class_students", force: :cascade do |t|
    t.bigint "student_id", null: false
    t.bigint "gym_class_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["gym_class_id"], name: "index_class_students_on_gym_class_id"
    t.index ["student_id"], name: "index_class_students_on_student_id"
  end

  create_table "class_workouts", force: :cascade do |t|
    t.bigint "workout_plan_id", null: false
    t.bigint "gym_class_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["gym_class_id"], name: "index_class_workouts_on_gym_class_id"
    t.index ["workout_plan_id"], name: "index_class_workouts_on_workout_plan_id"
  end

  create_table "exercise_lists", force: :cascade do |t|
    t.string "reps"
    t.bigint "exercise_id", null: false
    t.bigint "workout_plan_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["exercise_id"], name: "index_exercise_lists_on_exercise_id"
    t.index ["workout_plan_id"], name: "index_exercise_lists_on_workout_plan_id"
  end

  create_table "exercises", force: :cascade do |t|
    t.string "title"
    t.string "muscle_group"
    t.string "description"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_exercises_on_user_id"
  end

  create_table "gym_classes", force: :cascade do |t|
    t.string "level"
    t.string "description"
    t.datetime "start_time"
    t.datetime "end_time"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_gym_classes_on_user_id"
  end

  create_table "students", force: :cascade do |t|
    t.string "name"
    t.string "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_workouts", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "workout_plan_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_user_workouts_on_user_id"
    t.index ["workout_plan_id"], name: "index_user_workouts_on_workout_plan_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "workout_plans", force: :cascade do |t|
    t.string "title"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_workout_plans_on_user_id"
  end

  add_foreign_key "class_students", "gym_classes"
  add_foreign_key "class_students", "students"
  add_foreign_key "class_workouts", "gym_classes"
  add_foreign_key "class_workouts", "workout_plans"
  add_foreign_key "exercise_lists", "exercises"
  add_foreign_key "exercise_lists", "workout_plans"
  add_foreign_key "exercises", "users"
  add_foreign_key "gym_classes", "users"
  add_foreign_key "user_workouts", "users"
  add_foreign_key "user_workouts", "workout_plans"
  add_foreign_key "workout_plans", "users"
end
