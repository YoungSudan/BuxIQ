class CreateCategories < ActiveRecord::Migration[7.1]
  def change
    create_table :categories do |t|
      t.string :name
      t.string :plaid_category_id
      t.string :plaid_category_group
      t.boolean :default_plaid_category

      t.timestamps
    end

    add_index :categories, :plaid_category_id, unique: true
  end
end
