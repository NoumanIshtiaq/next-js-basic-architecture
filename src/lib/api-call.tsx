import axios from "axios";
import { BASE_URL } from "@/config";

export const axiosInstance = axios?.create({
  baseURL: BASE_URL,
});

export const getDataAPI = async (url: string, params?: any) => {
  const response = await axiosInstance?.get(`${url}`, { params: params });
  return response;
};

export const postDataAPI = async (param: any) => {
  const { url, params, body, headers } = param;
  const response = await axiosInstance?.post(url, body, {
    headers,
    params
  });
  return response;
};

export const putDataAPI = async (url: string, body?: any, params?: any) => {
  const response = await axiosInstance?.put(`${url}`, body, { params: params });
  return response;
};

export const patchDataAPI = async (url: string, body?: any, params?: any) => {
  const response = await axiosInstance?.patch(`${url}`, body, {
    params: params,
  });
  return response;
};

export const deleteDataAPI = async (url: string, body?: any) => {
  const response = await axiosInstance?.delete(`${url}`, { data: body });
  return response;
};
