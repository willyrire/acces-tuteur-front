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
  const userName = `${firstName} ${lastName}`;
  var payload = {
    email: email,
    password: password,
    userName: userName,
    role: role,
    city: city,
    location: location,
    phone: phone,
  };

  try {
    const response = await API.post("/v1/auth/create-account", payload);

    if (response.status === 201) {
      // On traite la réponse de création de compte
      loginSuccessHandler(response.data);
      return true;
    }
  } catch (error) {
    return error.response.data;
  }
}

export { createAccountRequest };