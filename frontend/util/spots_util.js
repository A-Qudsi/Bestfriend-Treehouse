export const fetchSpots = (bounds) => {
  return $.ajax({
    method: "GET",
    url: "/api/spots",
    data: bounds
  });
};

export const fetchSpot = (spotId) => {
  return $.ajax({
    method: "GET",
    url: `/api/spots/${spotId}`,
  });
};

export const spotsSearch = (keyword) => {
  return $.ajax({
    method: "GET",
    url: "/api/arenas",
    data: { keyword },
  });
};

export const createSpot = (spot) => {
  return $.ajax({
    method: "POST",
    url: `/api/spots/${spot.id}`,
    data: { spot },
  });
};

export const updateSpot = (spot) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/spots/${spot.id}`,
    data: { spot },
  });
};

export const deleteSpot = (spotId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/spots/${spotId}`,
  });
};
