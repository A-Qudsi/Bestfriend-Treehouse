json.extract! review, :id, :body, :rating, :user_id, :spot_id, :created_at

json.user do 
    json.fname review.user.fname
end