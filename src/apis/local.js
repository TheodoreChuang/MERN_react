import axios from "axios";
import store from "./../store";

//creates instance of axios
const LocalApi = axios.create({
  baseURL: "https://one-up-webapp.herokuapp.com/"
});

LocalApi.interceptors.request.use(function(config) {
  const state = store.getState();
  const token = state.auth.token;

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export default LocalApi;
