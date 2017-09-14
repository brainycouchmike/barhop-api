class User < ApplicationRecord

  # Model Association
  has_many :user_attrs, dependent: :destroy

  # Password bcrypt magic
  has_secure_password

  # Validations
  validates_presence_of :fname, :lname, :email, :password_digest
end

