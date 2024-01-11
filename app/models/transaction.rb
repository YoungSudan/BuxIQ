# == Schema Information
#
# Table name: transactions
#
#  id               :bigint           not null, primary key
#  name             :string
#  merchant_name    :string
#  amount           :decimal(10, 2)
#  category         :string
#  transaction_id   :string
#  transaction_date :date
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  user_id          :bigint           not null
#
class Transaction < ApplicationRecord
    belongs_to :user
end
