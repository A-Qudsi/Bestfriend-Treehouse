json.reservations do 
    @reservations.each do |reservation|
        json.set! reservation.id do
            json.partial! 'api/reservations/reservation', reservation: reservation
        end
    end
end

json.spots do 
    @reservations.each do |reservation|
        json.set! reservation.spot_id do
            json.partial! 'api/spots/spot', spot: reservation.spot
            json.photoUrls reservation.spot.photos.map { |file| url_for(file)}
        end
    end
end