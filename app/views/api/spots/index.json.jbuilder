@spots.each do |spot|
    json.set! spot.id do
        json.partial! 'api/spots/spot', spot: spot
        json.photoUrls spot.photos.map { |file| url_for(file) }   
        json.average_rating spot.average_rating.round(2)
    end
end