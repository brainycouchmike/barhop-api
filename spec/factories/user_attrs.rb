FactoryGirl.define do
  factory :user_attr do
    key { Faker::Internet.domain_word }
    value { Faker::DrWho.quote }
    user_id { Faker::Number.number(10) }
  end
end