class CreateBudgetsTable < ActiveRecord::Migration[7.1]
  def change
    create_table :budgets do |t|
      t.string :budget_name, null: false
      t.decimal :budget_amount, precision: 10, scale: 2 , null: false
      t.decimal :spent_amount, precision: 10, scale: 2, default: 0.0
      
      t.string :type
      t.string :creation_type
      t.boolean :rollover, null: true
      t.decimal :rollover_amount, precision: 10, scale: 2, null: true

      t.datetime :reset, null: true
      t.date :budget_start_date, null: true
      t.date :budget_end_date, null: true
      t.timestamps
    end
  end
end
