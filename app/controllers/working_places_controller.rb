class WorkingPlacesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show, :new, :create]

  def index
    @working_places = WorkingPlace.where.not(latitude: nil, longitude: nil).where(statut: true)

    @hash = Gmaps4rails.build_markers(@working_places) do |working_place, marker|
      marker.lat working_place.latitude
      marker.lng working_place.longitude
      # marker.infowindow render_to_string(partial: "/flats/map_box", locals: { flat: flat })
    end
  end

  def show
    @working_place = WorkingPlace.find(params[:id])
  end

  def new
    @working_place = WorkingPlace.new
  end

  def create
    @working_place = WorkingPlace.new(working_place_params)

    if @working_place.save
      redirect_to new_path
    else
      render :new
    end
  end

  private

  def working_place_params
    params.require(:working_place).permit(:name, :address, :city, :country, :zip_code, :contact_name, :phone, :mail, :website_url, :capacity, :oppening_time, :price)
  end

end
