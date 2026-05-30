import API from "@/api/client";

export const createSession = async () => {
  const response = await API.post("/v1/auth/session", {});
  return response.data;
};
