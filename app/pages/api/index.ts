import axios from "axios";

// export const baseURL = 'https://api.ketakeesingh362bansdih.in/api/';
export const baseURL='https://bjp.onrender.com/api/'  
// export const baseURL = 'http://localhost:5555/api/'
export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to add authorization token to the headers
const addAuthorizationToken = () => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    api.defaults.headers.common["authorization"] = `${token}`;
  }
};

// Call the function when running in the browser environment
if (typeof window !== 'undefined') {
  addAuthorizationToken();
}

export default api;
