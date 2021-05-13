export const fetchReservations = (userId) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${userId}/reservations`,
  });
};

export const fetchReservation = (reservationId) => {
  return $.ajax({
    method: "GET",
    url: `api/reservations/${reservationId}`,
  });
};

export const createReservation = (reservation) => {
  return $.ajax({
    method: "POST",
    url: "api/reservations",
    data: { reservation },
  });
};

export const updateReservation = (reservation) => {
  return $.ajax({
    method: "PATCH",
    url: `api/reservations/${reservation.id}`,
    data: { reservation },
  });
};

export const destroyReservation = (reservationId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/reservations/${reservationId}`,
  });
};
