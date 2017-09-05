require 'rails_helper'

RSpec.describe User, type: :model do
  # Check relationship with `user_attrs`
  it { should have_many(:user_attrs).dependent(:destroy) }
  # Validate fields
  it { should validate_presence_of(:fname) }
  it { should validate_presence_of(:lname) }
  it { should validate_presence_of(:email) }

end
