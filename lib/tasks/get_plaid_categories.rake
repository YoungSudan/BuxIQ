require 'plaid'
require 'byebug'

namespace :plaid do
    desc 'Create Plaid Categories'
    task get_categories: [:environment] do
        client = PlaidService.new.client

        # Fetch Plaid categories
        response = client.categories_get({})
        
        puts 'Creating Categories'
        response.categories.each do |plaid_category|
            puts "#{plaid_category}"
            Category.create_from_plaid(plaid_category)
        end
    end
  end