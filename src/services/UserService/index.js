import api from "../api";

export const getUserProfile = pk => {
  return api.get(`/users/${pk}`);
};
