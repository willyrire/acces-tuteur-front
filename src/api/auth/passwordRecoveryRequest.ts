import API from "@/api/client.js";

async function passwordRecoveryRequest(email: string) {
    var payload = { email: email };
    const response = await API.post("/v1/auth/password-recovery", payload);
}

export default passwordRecoveryRequest;