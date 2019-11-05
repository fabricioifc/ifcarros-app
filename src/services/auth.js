import { AsyncStorage } from "react-native";

export const TOKEN_KEY = "@ifcarros:Token";

export const isAuthenticated = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  console.log(token);
  

  return (token !== null) ? true : false;
};

export const getToken = () =>  {
  return AsyncStorage.getItem(TOKEN_KEY).then(data => data)
};
export const loginLocal = token => {
  AsyncStorage.setItem(TOKEN_KEY, token);
};
export const logoutLocal = () => {
  return AsyncStorage.removeItem(TOKEN_KEY);
};
// export const clearAsyncStorage = async() => {
//   console.log('====================================');
//   console.log('LIMPANDO STORAGE');
//   console.log(await getToken())
//   console.log('====================================');
//   await AsyncStorage.clear();
// }
