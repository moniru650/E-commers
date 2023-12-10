import axios from "axios";
let adminUrl = "https://wtsacademy.dedicateddevelopers.us/api"
let frontEndUrl = "https://backendapinodejsraju.herokuapp.com/"; //Image purpose
// let adminUrl="http://10.2.0.166:1577/"
if (process.env?.REACT_APP_ENV === "production") {
  adminUrl = "http://localhost:2000/api"; //change when app goes live
  frontEndUrl = "https://backendapinodejsraju.herokuapp.com/"; //change when app goes live
}
export const baseURL = adminUrl;
//export const course_storagePath = baseURL + "/storage/";
let axiosInstance = axios.create({
  baseURL,
});


axiosInstance.interceptors.request.use(
  async function (config) {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token !== null || token !== undefined) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);


export default axiosInstance;