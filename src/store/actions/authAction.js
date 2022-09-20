import { loginService, logoutService } from "../../services/authService";

export const Login = (creds) => (dispatch) => {
  return loginService(creds).then(
    (res) => {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user: res.data },
      });
      return Promise.resolve();
    },
    (err) => {
      console.log(err);
      return Promise.reject();
    }
  );
};

export const Logout = () => (dispatch) => {
  logoutService();
  dispatch({
    type: "LOGOUT",
  });
};
