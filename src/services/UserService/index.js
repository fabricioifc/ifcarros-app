import api from "../api";
import { getToken } from "../auth";
import { BASE_URL } from "react-native-dotenv";

export const getUserProfile = pk => {
  return api.get(`/users/${pk}`);
};
