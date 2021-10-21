class ClassStudentSerializer < ActiveModel::Serializer
  attributes :id
  has_one :student
  has_one :gym_class
end
