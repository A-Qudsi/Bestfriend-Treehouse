json.extract! spot, :id, :name, :description, :latitude, :longitude, :maxGuests, :price, :address, :city, :host_id 

json.photoUrls spot.photos.map { |file| url_for(file) }