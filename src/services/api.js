import axios from "axios";
import { getToken, logoutLocal } from "./auth";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "XCSRF-TOKEN";
// axios.defaults.headers.common.accept = "application/json";
// axios.defaults.ContentType = "application/json;charset=utf-8";
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
axios.defaults.crossDomain = true;
axios.defaults.headers.common["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.Accept = "application/json";

const api = axios.create({
  // baseURL: "http://172.19.1.160:8000"
  baseURL: "http://192.168.1.107:8000/api/"
});

api.interceptors.request.use(async config => {
  const token = await getToken();
  console.log(axios.defaults);

  if (token) {
    console.log(token);
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
        "Access-Control-Allow-Origin": "http://172.19.1.160:8000"
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
