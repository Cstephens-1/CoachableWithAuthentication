class ClassStudent < ApplicationRecord
  belongs_to :student
  belongs_to :gym_class
end
