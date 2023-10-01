import axios from "axios";
export const baseURL = "http://13.232.29.234:5000/api"
export const api = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });