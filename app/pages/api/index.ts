import axios from "axios";


export const baseURL = "https://api.ketakeesingh362bansdih.in/api"; 


export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },  
});


function getTokenFromLocalStorage() {
  return localStorage.getItem("accessToken"); 
}

api.interceptors.request.use(
  (config) => {
    const token = getTokenFromLocalStorage();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
