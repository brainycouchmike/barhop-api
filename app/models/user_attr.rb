class UserAttr < ApplicationRecord
  # Association
  belongs_to :user

  # Validations
  validates_presence_of :key
end
