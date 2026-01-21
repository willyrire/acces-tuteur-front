import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.2.11/", // ton endpoint API
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // OBLIGATOIRE pour cookies
});

export default API;