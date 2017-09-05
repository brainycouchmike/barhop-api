class User < ApplicationRecord
  # Model Association
  has_many :user_attrs, dependent: :destroy

  # Validations
  validates_presence_of :fname, :lname, :email
end
