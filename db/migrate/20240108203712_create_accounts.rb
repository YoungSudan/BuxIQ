class CreateAccounts < ActiveRecord::Migration[7.1]
  def change
    create_table :accounts do |t|
      t.string :plaid_account_id
      t.string :name
      t.string :official_name
      t.string :mask
      t.string :account_type
      t.string :account_subtype
      t.decimal :current_balance, precision: 10, scale: 2
      t.decimal :available_balance, precision: 10, scale: 2
      t.string :currency_code
      t.string :institution_name
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
