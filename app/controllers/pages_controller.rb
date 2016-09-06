class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
  end

  def dashboard
    @working_places = WorkingPlace.where(statut: false)
  end

  def after_fill
  end

end
