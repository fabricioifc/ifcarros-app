import { AsyncStorage } from "react-native";
import api from "./api";

export const TOKEN_KEY = "ifcarros-Token";
export const isAuthenticated = () => AsyncStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => AsyncStorage.getItem(TOKEN_KEY);
export const loginLocal = token => {
  AsyncStorage.setItem(TOKEN_KEY, token);
};
export const logoutLocal = () => {
  AsyncStorage.removeItem(TOKEN_KEY);
};
