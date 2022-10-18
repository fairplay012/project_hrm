import axios from "axios";
import { API_URL } from "../../../constant/api";

export const getAllPraise = () => {
  return axios.get(`${API_URL}/praise`);
};

export const deletePraise = (id) => {
  return axios.delete(`${API_URL}/praise/${id}`);
};

export const getPraiseByParams = (params) => {
  return axios.post(`${API_URL}/praise`, params);
};
