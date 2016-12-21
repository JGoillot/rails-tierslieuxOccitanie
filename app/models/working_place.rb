class WorkingPlace < ApplicationRecord
  include CloudinaryHelper
  has_attachment :photo
  geocoded_by :full_address
  after_validation :geocode, if: :address_changed?

  def image
    if photo.blank? == true
      array_picture = [
        "https://static.pexels.com/photos/7374/startup-photos-large.jpg",
        "https://static.pexels.com/photos/51171/pexels-photo-51171-large.jpeg",
        "https://static.pexels.com/photos/7350/startup-photos-large.jpg",
        "https://static.pexels.com/photos/154/people-apple-iphone-writing-large.jpg",
        "https://static.pexels.com/photos/7361/startup-photos-large.jpg",
        "https://static.pexels.com/photos/7355/startup-photos-large.jpg",
        "https://static.pexels.com/photos/8169/pexels-photo-large.jpg",
        "https://static.pexels.com/photos/6374/flowers-desk-office-vintage-large.jpg",
        "https://static.pexels.com/photos/23978/pexels-photo-23978-large.jpg",
        "https://static.pexels.com/photos/4428/office-table-home-room-large.jpeg"
        ]
      array_picture.sample
    else
      image_base = "http://res.cloudinary.com/occitanie/image/upload/"
      image_link = self.photo.path

      image_base + image_link
    end
  end

  before_create do
    self.departement = self.zip_code[0..1]
  end

  private

  def full_address
    "#{address} #{zip_code} #{city}"
  end

end
