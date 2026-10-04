import { fastRedirect } from "@/utils/tools/fastRedirect";
import { APP_DASHBOARD_URL } from "@/constants/appDashboardUrl";

const openApp = () => {
    fastRedirect(APP_DASHBOARD_URL);
}

export default openApp;