require 'rails_helper'

RSpec.describe UserAttr, type: :model do
  # Check association to user
  it { should belong_to(:user) }
  # Validate that key is set before saving
  it { should validate_presence_of(:key) }
end
