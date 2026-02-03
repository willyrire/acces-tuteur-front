import { fastRedirect } from "@/utils/tools/fastRedirect";
import { createSession } from "@/api/auth/createSession";

const APP_DASHBOARD_URL = "http://localhost:5174/security/auth";

const openApp = async (source, time) => {
    // Créer une micro session pour l'application
    const sessionData = await createSession();
    const sessionId = sessionData.data.sid;
    // Construire l'URL avec le sessionId en paramètre
    const urlWithSession = `${APP_DASHBOARD_URL}?sessionId=${sessionId}&src=${source}&time=${time || Date.now()}`;
    fastRedirect(urlWithSession);
}

export default openApp;