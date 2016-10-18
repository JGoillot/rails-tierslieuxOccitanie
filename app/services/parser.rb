require 'csv'

class Parser < ServiceBase
  attr_accessor :filepath

  def initialize
    @filepath = 'app/assets/database.csv'
  end

  def run
    parsing(@filepath)
  end

  private

  def parsing(csv)

    csv_text = File.read(csv)
    csv = CSV.parse(csv_text)

    csv.each do |row|

      working_place_data = {
        name: row[0],
        address: row[1],
        zip_code: row[2],
        city: row[3],
        country: "FR",
        contact_name: row[6],
        phone: row[7],
        mail: row[5],
        website_url: row[4],
        statut: true,
        cellphone: row[8],
       }

      w = WorkingPlace.new(working_place_data)
      w.save

    end

  end
end


