FactoryGirl.define do
  factory :user do
    fname { fname = Faker::Name.first_name }
    lname { lname = Faker::Name.last_name }
    email { Faker::Internet.email "#{fname} #{lname}" }
    # password { Faker::Internet.password 3, 10, true }
    password 'foobar'
  end
end