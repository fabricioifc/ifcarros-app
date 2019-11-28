import { loginLocal, logoutLocal } from "./auth";
import api from "./api";
import { getUserProfile } from "./UserService";
import { BASE_URL } from "react-native-dotenv";

export const loginService = async (data, navigation) => {
  const response = await fetch(`${BASE_URL}/auth/login/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: data
  });
  const result = await response.json();
  // console.log(result);

  if (result.token) {
    await loginLocal(result.token);

    let { pk } = result.user;
    const user = await getUserProfile(pk);
    const { data } = user;
    if (data) {
      await setProfile(data);
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
  return fetch(`${BASE_URL}/auth/logout/`, {
    method: "POST",
    headers: {
      Accept: "application/json"
    }
  }).then(result => {
    logoutLocal();
    navigation.navigate("Login");
  });
};
