class AddHierarchyToCategories < ActiveRecord::Migration[7.1]
  def change
    add_column :categories, :hierarchy, :string, array: true, default: []
  end
end
