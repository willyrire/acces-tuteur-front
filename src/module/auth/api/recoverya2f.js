import API from "@/api/client";

export const recoveryA2F = async (userId, method, challengeId, recovery_code) => {
    try {
        const payload = {
            user_id: userId,
            method: method,
            challenge_id: challengeId,
            recovery_code: recovery_code
        }

        const response = await API.post("/v1/auth/2fa/recovery", payload);
        return response.data;

    } catch (error) {
        return error.response.data;
    }
}