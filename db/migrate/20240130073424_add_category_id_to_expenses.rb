class AddCategoryIdToExpenses < ActiveRecord::Migration[7.1]
  def change
    remove_column :expenses, :category
    add_column :expenses, :category, :string
    add_reference :expenses, :category, null: false, foreign_key: true
  end
end
