import API from "@/api/client";

export const verifyA2F = async (userId, method, challengeId, code) => {
    try {
        const payload = {
            user_id: userId,
            method: method,
            challenge_id: challengeId,
            code: code
        };
        const response = await API.post("/v1/auth/2fa/verify", payload);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}