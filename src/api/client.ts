// src/api/client.ts
import axios from "axios";
import type { AxiosInstance } from "axios"; // ✅ juste le type
import { apiUri } from "@/constants/apiUri"; // ✅ importer la constante
const API: AxiosInstance = axios.create({
  baseURL: apiUri, // ton endpoint API
  headers: {
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem("Authorization") ?? ""
  },
  withCredentials: true, // OBLIGATOIRE pour cookies
});

export default API;
