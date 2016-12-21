class AddDepartementToWorkingPlace < ActiveRecord::Migration[5.0]
  def change
    add_column :working_places, :departement, :string
  end
end
