json.extract! spot, :id, :name, :description, :latitude, :longitude, :maxGuests, :price, :address, :city, :host_id, :review_ids

json.photoUrls spot.photos.map { |file| url_for(file) }

json.user do 
    json.fname spot.user.fname
end

json.reviews spot.reviews do |review|
    json.(review, :user_id)
end