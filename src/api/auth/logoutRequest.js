
// src/api/auth.js
import API from "@/api/client";


async function logoutRequest() {
  try {
    // Endpoint de vérification rapide
    const response = await API.post("/v1/auth/logout", {} , {
      headers: {
        "Authorization": localStorage.getItem("Authorization")
      }
    });
    return response.status == 200;
  } catch (error) {
    throw error;
  }
}

export default logoutRequest;