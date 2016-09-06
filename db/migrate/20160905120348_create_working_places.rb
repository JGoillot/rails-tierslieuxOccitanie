class CreateWorkingPlaces < ActiveRecord::Migration[5.0]
  def change
    create_table :working_places do |t|
      t.string :name
      t.string :address
      t.string :contact_name
      t.string :phone
      t.string :mail
      t.string :website_url
      t.integer :capacity
      t.string :oppening_time
      t.string :price

      t.timestamps
    end
  end
end
