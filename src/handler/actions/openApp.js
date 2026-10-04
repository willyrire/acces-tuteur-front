import { fastRedirect } from "@/utils/tools/fastRedirect";
import { APP_DASHBOARD_URL } from "@/constants/appDashboardUrl";

const openApp = async (source, time) => {
    const urlWithSession = `${APP_DASHBOARD_URL}?sessionId=${sessionId}&src=${source}&time=${time || Date.now()}`;
    fastRedirect(urlWithSession);
}

export default openApp;