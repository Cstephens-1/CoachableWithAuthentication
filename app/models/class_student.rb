class ClassStudent < ApplicationRecord
  belongs_to :student
  belongs_to :gym_class

#  validates :student_id, uniqueness: :true
end
