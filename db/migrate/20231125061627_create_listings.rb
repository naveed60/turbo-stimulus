class CreateListings < ActiveRecord::Migration[7.1]
  def change
    create_table :listings do |t|
      t.text :title
      t.string :description

      t.timestamps
    end
  end
end
