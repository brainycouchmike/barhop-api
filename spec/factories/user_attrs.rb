FactoryGirl.define do
  factory :user_attr do
    key 'password'
    value { Faker::DrWho.quote }
    user_id nil
  end
end