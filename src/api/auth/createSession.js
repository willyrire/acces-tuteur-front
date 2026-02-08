import API from "@/api/client"

export const createSession = async () => {
  console.log(localStorage.getItem("Authorization"))
    const response = await API.post("/v1/auth/session", {}, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("Authorization") ?? ""
    }
  });
    return response.data;
}