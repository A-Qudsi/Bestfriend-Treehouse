import * as ReservationsApiUtil from '../util/reservation_util';

export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';

const receiveReservations = ({ reservations }) => {
    
    return ({
        type: RECEIVE_RESERVATIONS,
        spots: reservations.spots,
        reservations
    })
};

const receiveReservation = reservation => {
    return ({
        type: RECEIVE_RESERVATION,
        reservation
    })
};

const removeReservation = reservationId => {
    return ({
        type: REMOVE_RESERVATION,
        reservationId
    })
};

export const fetchReservations = (userId) => dispatch => (
    ReservationsApiUtil.fetchReservations(userId)
        .then(reservations => dispatch(receiveReservations(reservations)))
);

export const fetchReservation = (reservationId) => dispatch => (
    ReservationsApiUtil.fetchReservation(reservationId)
        .then(reservation => dispatch(receiveReservation(reservation)))
);

export const createReservation = (reservation) => dispatch => (
    ReservationsApiUtil.createReservation(reservation)
        .then(reservation => dispatch(receiveReservation(reservation)))
);

export const updateReservation = reservation => dispatch => (
    ReservationsApiUtil.updateReservation(reservation)
        .then(reservation => dispatch(receiveReservation(reservation)))
);

export const destroyReservation = reservationId => dispatch => (
    ReservationsApiUtil.destroyReservation(reservationId)
        .then(reservationId => dispatch(removeReservation(reservationId)))
);
