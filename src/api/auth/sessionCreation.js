import API from "@/api/client";

// Returns a session ID
export const getSession = async()=> {
    try {
        const response = await API.post("/v1/auth/session/", {},
            {
                headers: {
                    'Authorization': localStorage.getItem("Authorization"),
                },
            }
        );
        return response.data.data.sid;
    } catch (error) {
        console.log("Session creation response:", error);
        return error;
    }
}