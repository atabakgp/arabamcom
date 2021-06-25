import axios from "axios";
import store from "../store";

const axiosInstance = axios.create({
  baseURL: "https://sandbox.arabamd.com/api/v1/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    if (response.status == 200) {
      store.commit("showLoading", false);
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const listing = (params) =>
  axiosInstance.get("listing", {
    params,
  });

export const details = (params) =>
  axiosInstance.get("detail", {
    params,
  });
