import axios from "axios";
import { API_URL } from "../../../constant/api";

export const getAllReport = () => {
  return axios.get(`${API_URL}/report`);
};

export const deleteReport = (id) => {
  return axios.delete(`${API_URL}/report/${id}`);
};

export const getReportByParams = (params) => {
  return axios.post(`${API_URL}/report`, params);
};
