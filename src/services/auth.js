import { AsyncStorage } from "react-native";

const TOKEN_KEY = "@ifcarros:Token";
const USER_KEY = "@ifcarros:User";

export const isAuthenticated = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  console.log(token);

  return token !== null ? true : false;
};

export const getToken = () => {
  return AsyncStorage.getItem(TOKEN_KEY).then(data => data);
};
export const getProfile = () => {
  return AsyncStorage.getItem(USER_KEY).then(data => data);
};
export const loginLocal = (token, user) => {
  AsyncStorage.setItem(TOKEN_KEY, token);
  AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
};
export const logoutLocal = () => {
  AsyncStorage.removeItem(TOKEN_KEY);
  AsyncStorage.removeItem(USER_KEY);
};
// export const clearAsyncStorage = async() => {
//   console.log('====================================');
//   console.log('LIMPANDO STORAGE');
//   console.log(await getToken())
//   console.log('====================================');
//   await AsyncStorage.clear();
// }
