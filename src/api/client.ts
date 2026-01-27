// src/api/client.ts
import axios from "axios";
import type { AxiosInstance } from "axios"; // ✅ juste le type

const apiUrl: string = "http://localhost/"; // http://192.168.2.11/
const API: AxiosInstance = axios.create({
  baseURL: apiUrl, // ton endpoint API
  headers: {
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem("Authorization") ?? ""
  },
  withCredentials: true, // OBLIGATOIRE pour cookies
});

export default API;
