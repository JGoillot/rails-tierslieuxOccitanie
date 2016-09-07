class WorkingPlace < ApplicationRecord
  has_attachment :photo
  geocoded_by :address
  after_validation :geocode, if: :address_changed?

end
