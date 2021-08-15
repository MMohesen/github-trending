import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    config.headers.common["Accept"] = "application/json";
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error?.response?.data || error?.response || error);
  }
);

export default axios;
