import { loginLocal, logoutLocal } from "./auth";
import { baseURL } from "./api";

export const loginService = (data, navigation) => {
  return fetch(`${baseURL}/auth/login/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: data
  })
    .then(response => {
      response.json().then(result => {
        console.log("====================================");
        console.log(result);
        console.log("====================================");
        if (result.token) {
          loginLocal(result.token);
          navigation.navigate("Main");
        } else {
          //   Alert.alert("Usuário e/ou Senha Inválido!");
        }
      });
    })
    .catch(err => {
      console.log(err);
    })
    .done();
};

export const logoutService = ({ navigation }) => {
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
