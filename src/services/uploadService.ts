import api from "../api/api";

export const uploadFile = (param: any) => {
  const response = api.post("", param);
  return response;
};
