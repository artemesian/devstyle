import axios from "axios";

// const devURL = "http://localhost:5000";
const prodURL = "https://devstyle-backend-production.up.railway.app";

// Set config defaults when creating the instance
const myAxios = axios.create({
  // baseURL: devURL,
  baseURL: prodURL,
});

export default myAxios;
