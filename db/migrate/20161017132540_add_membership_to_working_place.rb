class AddMembershipToWorkingPlace < ActiveRecord::Migration[5.0]
  def change
    add_column :working_places, :member, :boolean, default: false
  end
end
