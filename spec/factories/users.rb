FactoryGirl.define do
  factory :user do
    fname { Faker::Lorem.word }
    lname { Faker::Lorem.word }
    email { "#{Faker::DrWho.villian}@gmail.com" }
  end
end