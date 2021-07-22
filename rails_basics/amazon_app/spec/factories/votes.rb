FactoryBot.define do
  factory :vote do
    user { nil }
    review { nil }
    is_vote { false }
  end
end
