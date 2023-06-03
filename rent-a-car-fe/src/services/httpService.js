import axios from "axios";

const baseURL = `http://localhost:3005`;
const instance = axios.create({
  baseURL,
});
instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
