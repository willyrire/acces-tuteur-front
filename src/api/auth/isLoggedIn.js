
// src/api/auth.js
import API from "@/api/client";


export async function isLoggedIn() {
  try {
    // Endpoint de vérification rapide
    const response = await API.head("/v1/auth/quick-check", {
      headers: {
        "Authorization": localStorage.getItem("Authorization")
      }
    });
    return response.status == "success";
  } catch (error) {
    return false;
  }
}