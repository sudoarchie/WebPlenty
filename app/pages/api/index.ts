import axios from "axios";
export const baseURL = "http://3.110.162.38:5000/api"
export const api = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });