import api from "../api/api";

export const logIn = async (params: any) => {
  const response = await api.post("/v1/login", params);
  return response;
};

export const logOut = async () => {
  const response = await api.delete("/v1/logout");
  return response;
};
