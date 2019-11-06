import { loginLocal, logoutLocal } from "./auth";
import api, { baseURL } from "./api";
import { getUserProfile } from "./UserService";

export const loginService = async (data, navigation) => {
  const response = await fetch(`${baseURL}/auth/login/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: data
  });
  // .then(response => {
  const result = await response.json();
  console.log(result);

  if (result.token) {
    let { pk } = result.user;
    const user = await getUserProfile(pk);
    const { data } = user;
    if (data) {
      await loginLocal(result.token, data);
      navigation.navigate("Main");
    }
  }
};

export const logoutService = ({ navigation }) => {
  // return api
  //   .post("/auth/logout/", {
  //     credentials: "include"
  //   })
  //   .then(result => {
  //     logoutLocal();
  //     navigation.navigate("Login");
  //   });
  return fetch(`${baseURL}/auth/logout/`, {
    method: "POST",
    headers: {
      Accept: "application/json"
    }
  }).then(result => {
    logoutLocal();
    navigation.navigate("Login");
  });
};
