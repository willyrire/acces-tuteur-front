
// src/api/auth.js
import API from "@/api/client";


export async function logoutRequest() {
  try {
    // Endpoint de vérification rapide
    const response = await API.get("/v1/auth/logout", {
      headers: {
        "Authorization": localStorage.getItem("Authorization")
      }
    });
    console.log ("isLoggedIn response:", response);
    console.log ("isLoggedIn status:", response.status);
    return response.status == 200;
  } catch (error) {
    return false;
  }
}