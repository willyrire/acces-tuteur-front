// src/api/auth.js
import API from "@/api/client";
import { loginSuccessHandler } from "@/handler/auth/loginSuccessHandler";

async function createAccountRequest(
  email,
  password,
  firstName,
  lastName,
  role,
  city,
  location,
  phone,
) {
  // On construit le userName
  const userName = `${firstName.trim()} ${lastName.trim()}`;
  var payload = {
    email: email,
    password: password,
    name: userName,
    role: role,
    city: city,
    location: location,
    phone: phone,
  };

  try {
    const response = await API.post("/v1/auth/create-account", payload);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la requête de connexion :", error);
    return error?.response?.data;
  }
}

export { createAccountRequest };