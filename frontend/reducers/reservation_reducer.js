import {
    RECEIVE_RESERVATIONS,
    RECEIVE_RESERVATION,
    REMOVE_RESERVATION
} from '../actions/reservation_actions';


const reservationssReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    
    switch (action.type) {
        case RECEIVE_RESERVATIONS:
            return Object.assign({}, action.reservations);
        case RECEIVE_RESERVATION:
            return newState[action.reservation.id] = action.reservation
        case REMOVE_RESERVATION:
            delete newState[action.reservationId]
            return newState;
        default:
            return state;
    }
}

export default reservationssReducer;