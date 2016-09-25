class AddServicesToWorkingPlace < ActiveRecord::Migration[5.0]
  def change
    add_column :working_places, :cellphone, :string
    add_column :working_places, :description, :text
  end
end

