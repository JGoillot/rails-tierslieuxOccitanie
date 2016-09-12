class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :after_fill, :who ]

  def home
  end

  def who
    @working_places = WorkingPlace.where(statut: true) # Network members
  end

  def dashboard
    @working_places = WorkingPlace.where(statut: false)
  end

  def after_fill
  end

end
