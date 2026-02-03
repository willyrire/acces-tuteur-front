
// src/api/auth.js
import API from "@/api/client";


async function logoutFromAll() {
  try {
    // Endpoint de vérification rapide
    const response = await API.post("/v1/auth/logout-all-sessions");
    return response.status == 200;
  } catch (error) {
    throw error;
  }
}

export default logoutFromAll;