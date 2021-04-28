json.spot do 
    json.partial! '/api/spots/spot', spot: @spot
end

@spot.reviews.each do |review|
    json.reviews do
        json.set! review.id do
            json.partial! 'api/reviews/review', review: review
        end
    end

    json.users do
        json.set! review.user.id do
            json.extract! review.user, :id, :fname
        end
    end
end

