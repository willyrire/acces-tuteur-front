import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost/", // ton endpoint API
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // OBLIGATOIRE pour cookies
});

export default API;