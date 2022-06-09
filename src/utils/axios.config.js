import axios from "axios";

const devURL = "http://localhost:50002";
// const prodURL = "https://devstyle.herokuapp.com/";

// Set config defaults when creating the instance
const myAxios = axios.create({
  baseURL: devURL,
});

export default myAxios;
