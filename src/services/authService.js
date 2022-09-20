import axios from "axios";
const apiUrl = "http://localhost:8080/api/v1";
// const apiUrl = process.env.API_URL;

export const loginService = (creds) => {
  return axios.post(`${apiUrl}/auth/login`, creds).then((res) => {
    if (res.data.success) {
      let resUser = res.data.data;
      let usetData = {
        id: resUser.id,
        name: resUser.name,
        username: resUser.username,
        email: resUser.email,
        avatar: resUser.avatar,
        email_verified_at: resUser.email_verified_at,
        authorize: resUser.authorize,
      };
      localStorage.setItem("user", JSON.stringify(usetData));
      localStorage.setItem("access_token", resUser.token);
    }

    return res.data;
  });
};

export const logoutService = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("user");
};

// export default { Login, Logout };
