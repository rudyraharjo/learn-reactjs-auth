const user = JSON.parse(localStorage.getItem("user"));
const access_token = localStorage.getItem("access_token");

const initialState = access_token
  ? { _isLoggedIn: true, access_token, user }
  : { _isLoggedIn: false, access_token: null, user: null };

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        _isLoggedIn: true,
        user: payload.user,
        access_token: payload.user.token,
      };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};

export default authReducer;
