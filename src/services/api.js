import { create } from "apisauce";
import { getToken } from "./auth";
import { BASE_URL } from "react-native-dotenv";

const api = create({
  baseURL: BASE_URL,
  // withCredentials: true,
  headers: {
    credentials: "include",
  //   xsrfHeaderName: "X-CSRFTOKEN",
  //   xsrfCookieName: "XCSRF-TOKEN"
  }
});

api.addAsyncRequestTransform(request => async () => {
  // const token = await AsyncStorage.getItem("@CodeApi:token");
  const token = await getToken();
  // request.headers["X-CSRFToken"] =
  //   "n3OROeRdTD94N9kTuyziLUxmnWEvujUYxtJsZokEulHjeSVjhdUTx8ljjpvDvZK9";

  if (token) request.headers["Authorization"] = `Bearer ${token}`;
});

api.addResponseTransform(response => {
  if (!response.ok) throw response;
});

export default api;
// import axios from "axios";
// import { getToken } from "./auth";

// // axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
// // axios.defaults.xsrfCookieName = "XCSRF-TOKEN";
// // // axios.defaults.headers.common.accept = "application/json";
// // // axios.defaults.ContentType = "application/json;charset=utf-8";
// // axios.defaults.withCredentials = true;
// // axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
// // axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
// // axios.defaults.crossDomain = true;
// // axios.defaults.headers.common["Content-Type"] =
// //   "application/x-www-form-urlencoded";
// // axios.defaults.headers.Accept = "application/json";

// // export const baseURL = "http://172.19.1.160:8000/api"
// export const baseURL = "http://192.168.1.107:8000/api";

// export const api = axios.create({
//   baseURL: baseURL
// });

// api.interceptors.request.use(async config => {
//   const token = await getToken();
//   console.log(axios.defaults);

//   if (token) {
//     console.log(token);
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;
