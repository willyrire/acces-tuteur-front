import API from "@/api/client.js";

export default async function passwordResetRequest(token: string, password: string) {
  try {
    const response = await API.put("/v1/auth/password-recovery", { "token": token, "password": password });
    return response; // utile pour le front
  } catch (error: any) {
    return error.response.data; // pour que le front handle l'erreur
  }
}