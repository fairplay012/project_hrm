import axios from "axios";
import { API_URL } from "../../../contanst/api";

export const getAllEmployee = () => {
  return axios.get(`${API_URL}/employee`);
};

export const deleteEmployee = (id) => {
  return axios.delete(`${API_URL}/employee/${id}`);
};

export const getEmployeeByParams = (params) => {
  return axios.post(`${API_URL}/employee`, params);
};
