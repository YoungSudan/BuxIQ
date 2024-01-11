class AddAccessTokenToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :access_token, :string
    add_column :users, :plaid_item_id, :string
  end
end
