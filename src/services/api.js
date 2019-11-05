import axios from "axios";
import { getToken, logoutLocal } from "./auth";

const api = axios.create({
  baseURL: "http://172.19.1.160:8000"
});

api.interceptors.request.use(async config => {
  const token = await getToken();
  console.log(token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const logout = () => {
  console.log("logout");
  return api
    .post("/api/auth/logout/", {
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access- Control - Allow - Origin": "http://172.19.1.160:8000"
      }
    })
    .then(result => {
      logoutLocal();
      // console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
};

export default api;
