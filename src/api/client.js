// src/api/client.ts
import axios from "axios";
import { apiUri } from "@/constants/apiUri"; // ✅ importer la constante
const API = axios.create({
  baseURL: apiUri, // ton endpoint API
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // OBLIGATOIRE pour cookies
});

export default API;
