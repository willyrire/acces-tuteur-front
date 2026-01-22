import API from "@/api/client.js";

export default async function passwordResetRequest(token: string, password: string) {
  try {
    const response = await API.put("/v1/auth/password-recovery", { token, password });
    return response.data; // utile pour le front
  } catch (error) {
    throw error; // pour que le front handle l'erreur
  }
}