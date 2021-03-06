import * as SpotUtil from "../util/spots_util";

export const RECEIVE_SPOTS = "RECEIVE_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";
export const REMOVE_SPOT = "REMOVE_SPOT";

const receiveSpots = (spots) => {
  return {
    type: RECEIVE_SPOTS,
    spots,
  };
};

const receiveSpot = (spot) => {
  return {
    type: RECEIVE_SPOT,
    spot,
  };
};

const removeSpot = (spotId) => {
  return {
    type: REMOVE_SPOT,
    spotId,
  };
};

export const fetchSpots = (filters) => (dispatch) => {
  return SpotUtil.fetchSpots(filters).then((spots) =>
    dispatch(receiveSpots(spots))
  );
  // errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const fetchSpot = (spotId) => (dispatch) => {
  return SpotUtil.fetchSpot(spotId).then((spot) => dispatch(receiveSpot(spot)));
  // errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const createSpot = (spot) => (dispatch) => {
  return SpotUtil.createSpot(spot).then((spot) => dispatch(receiveSpot(spot)));
  // errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const updateSpot = (spot) => (dispatch) => {
  return SpotUtil.updateSpot(spot).then((spot) => dispatch(receiveSpot(spot)));
  // errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const deleteSpot = (spotId) => (dispatch) => {
  return SpotUtil.deleteSpot(spotId).then(() => dispatch(removeSpot(spotId)));
  // errors => dispatch(receiveErrors(errors.responseJSON)))
};
