class AddStatutToWorkingPlace < ActiveRecord::Migration[5.0]
  def change
    add_column :working_places, :statut, :boolean, default: false
  end
end
