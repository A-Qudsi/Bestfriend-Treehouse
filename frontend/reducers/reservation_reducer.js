import {
    RECEIVE_RESERVATIONS,
    RECEIVE_RESERVATION,
    REMOVE_RESERVATION
} from '../actions/reservation_actions';



const reservationssReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_RESERVATIONS:
            return Object.assign({}, action.reservations);
        case RECEIVE_RESERVATION:
            return Object.assign({}, oldState, {[action.reservation.id]: action.reservation})
        case REMOVE_RESERVATION:
            const newState = Object.assign({}, oldState);
            delete newState[action.reservationId]
            return newState;
        default:
            return oldState;
    }
}

export default reservationssReducer;