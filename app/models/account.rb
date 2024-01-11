# == Schema Information
#
# Table name: accounts
#
#  id                :bigint           not null, primary key
#  plaid_account_id  :string
#  name              :string
#  official_name     :string
#  mask              :string
#  account_type      :string
#  account_subtype   :string
#  current_balance   :decimal(10, 2)
#  available_balance :decimal(10, 2)
#  currency_code     :string
#  institution_name  :string
#  user_id           :bigint           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Account < ApplicationRecord
end
