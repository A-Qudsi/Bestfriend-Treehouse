import * as UsersUtil from "../util/users_util";

export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

export const fetchUsers = () => (dispatch) => {
  return UsersUtil.fetchUsers().then((users) => dispatch(receiveUsers(users)));
};
