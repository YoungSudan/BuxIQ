class AddLimitToAccounts < ActiveRecord::Migration[7.1]
  def change
    add_column(:accounts, :limit, :decimal)
  end
end