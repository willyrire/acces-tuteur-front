import API from "@/api/client";

// Returns a session ID
export const getSession = async()=> {
    try {
        const response = await API.post("/v1/auth/session/", {});
        return response.data.data.sid;
    } catch (error) {
        return error;
    }
}