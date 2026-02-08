import API from "@/api/client";

export default async function passwordResetRequest(token: string, password: string) {
  try {
    const payload = { "token": token, "password": password };
    const response = await API.put("/v1/auth/password-recovery", payload);
    return response; // utile pour le front
  } catch (error: any) {
    return error.response.data; // pour que le front handle l'erreur
  }
}