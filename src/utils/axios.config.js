import axios from "axios";

const devURL = "http://localhost:50002";
// const prodURL = "http://localhost:5002";

// Set config defaults when creating the instance
const myAxios = axios.create({
  baseURL: devURL,
});

export default myAxios;
