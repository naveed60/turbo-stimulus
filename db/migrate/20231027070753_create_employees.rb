class CreateEmployees < ActiveRecord::Migration[7.1]
  def change
    create_table :employees do |t|
      t.string :name
      t.string :email
      t.string :city
      t.string :contact_number

      t.timestamps
    end
  end
end
