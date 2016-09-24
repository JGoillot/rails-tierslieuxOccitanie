class WorkingPlacesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show, :new, :create]

  def index
    if search_params[:zip_code].blank?
      @working_places = WorkingPlace.where.not(latitude: nil, longitude: nil).where(statut: true)
    else
      # @working_places = WorkingPlace.where.not(latitude: nil, longitude: nil).where(statut: true).where("zip_code REGEXP ?", 'A\#{search_params["zip_code"]'})
    end


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

  def update
    @working_place = WorkingPlace.find(params[:id])
    @working_place.update(statut: params[:statut])
    redirect_to working_places_path
  end

  private

  def working_place_params
    params.require(:working_place).permit(:name, :address, :city, :country, :zip_code, :contact_name, :phone, :mail, :website_url, :capacity, :oppening_time, :price, :photo)
  end

  def search_params
    params.permit(:zip_code)
  end

end
