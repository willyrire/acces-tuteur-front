// src/api/auth.js
import API from "@/api/client";

/**
 * Envoie les infos de connexion à l'API
 * @param {string} email
 * @param {string} password
 * @returns {Promise<object>} données utilisateur ou token
 */
export const loginRequest = async (email, password) => {

  // On build le payload
  var payload = {
    "email": email,
    "password": password
  }
  try {
    const response = await API.post("/v1/auth/login", payload);
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};