// src/api/client.ts
import axios from "axios";
import type { AxiosInstance } from "axios"; // ✅ juste le type

const API: AxiosInstance = axios.create({
  baseURL: "http://192.168.2.11/", // ton endpoint API
  headers: {
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem("Authorization") ?? ""
  },
  withCredentials: true, // OBLIGATOIRE pour cookies
});

export default API;
