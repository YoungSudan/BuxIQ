# == Schema Information
#
# Table name: expenses
#
#  id          :bigint           not null, primary key
#  description :string
#  amount      :decimal(, )
#  date        :date
#  user_id     :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category    :string
#  category_id :bigint           not null
#
class Expense < ApplicationRecord
    belongs_to :category
end
