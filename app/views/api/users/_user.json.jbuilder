json.extract! user, :id, :fname, :lname, :email, :date_of_birth

json.reservations user.reservations do |reservation|
    json.(reservation, :spot_id)
end