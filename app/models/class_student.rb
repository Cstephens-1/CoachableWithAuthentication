class ClassStudent < ApplicationRecord
  belongs_to :student
  belongs_to :gym_class

 validates :student_id, uniqueness: { scope: [:gym_class_id], message: "student already in this class" }
end


# validates :group_id, uniqueness: { scope: [:user_id], message: "can't join the same group twice" }