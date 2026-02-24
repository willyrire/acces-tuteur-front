// src/api/auth.ts
import API from "@/api/client";

export const createAccountRequest = async (data) => {
  try {
    console.log("Creating account with data:", data);
    let firstName = data.firstName.trim();
    let lastName = data.lastName.trim();
    let userName = `${firstName} ${lastName}`;
    const payload = {
      "name" : userName,
      "email": data.email,
      "password": data.password,
      "role": data.role,
      "phone": data.phone,
      "city": data.city,
      "location": data.address
    }
    const response = await API.post("/v1/auth/create-account", payload);
    return response.data;
  } catch (error) {
      return error.response;
  }
}