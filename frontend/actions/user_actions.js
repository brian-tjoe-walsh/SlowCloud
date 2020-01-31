import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users: users
});

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user: user
});

export const fetchUsers = () => dispatch => {
  return (UserApiUtil.fetchUsers()
    .then((users) => dispatch(receiveUsers(users))
    ));
};

export const fetchUser = (id) => dispatch => {
  return (UserApiUtil.fetchUser(id)
    .then((user) => dispatch(receiveUser(user))
    ));
};

export const createUser = (user) => dispatch => {
  return (UserApiUtil.createUser(user)
    .then((user) => dispatch(receiveUser(user))
    .then(ele => location.reload(true))
  ));
};