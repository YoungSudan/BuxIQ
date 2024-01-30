# == Schema Information
#
# Table name: categories
#
#  id                     :bigint           not null, primary key
#  name                   :string
#  plaid_category_id      :string
#  plaid_category_group   :string
#  default_plaid_category :boolean
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  hierarchy              :string           default([]), is an Array
#

# app/models/category.rb
class Category < ApplicationRecord
    validates :plaid_category_id, uniqueness: true
  
    # Other validations and associations...
    def self.create_from_plaid(plaid_category)
        create(
            plaid_category_id: plaid_category.category_id,
            plaid_category_group: plaid_category.group,
            hierarchy: plaid_category.hierarchy
        )
    end
end
