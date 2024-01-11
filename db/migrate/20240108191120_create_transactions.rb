class CreateTransactions < ActiveRecord::Migration[7.1]
  def change
    create_table :transactions do |t|
      t.string :name
      t.string :merchant_name
      t.decimal :amount, precision: 10, scale: 2
      t.string :category
      t.string :transaction_id
      t.date :transaction_date
      t.timestamps
    end

    add_index :transactions, :transaction_id, unique: true
  end
end
