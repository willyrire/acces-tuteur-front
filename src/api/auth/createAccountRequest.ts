// src/api/auth.ts
import API from "@/api/client";
import { loginSuccessHandler } from "@/handler/auth/loginSuccessHandler";

export type CreateAccountPayload = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
  city?: string;
  location?: string;
  phone?: string;
};

export type CreateAccountResponse = {
  id: string;
  email: string;
  name: string;
  role: string;
  city?: string;
  location?: string;
  phone?: string;
  token?: string; // si ton API renvoie un token
};

export async function createAccountRequest(
  payload: CreateAccountPayload
): Promise<CreateAccountResponse | { error?: string }> {
  const userName = `${payload.firstName.trim()} ${payload.lastName.trim()}`;

  const body = {
    email: payload.email,
    password: payload.password,
    name: userName,
    role: payload.role,
    city: payload.city,
    location: payload.location,
    phone: payload.phone,
  };

  try {
    const response = await API.post("/v1/auth/create-account", body);
    // On pourrait éventuellement appeler loginSuccessHandler ici si nécessaire
    return response.data as CreateAccountResponse;
  } catch (error: any) {
    return error?.response?.data ?? { error: "Erreur inconnue" };
  }
}
