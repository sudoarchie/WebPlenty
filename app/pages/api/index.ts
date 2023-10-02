import axios from "axios";
export const baseURL = "http://3.108.17.52:5000/api"
// export const baseURL = "http://localhost:5555/api"
export const api = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });