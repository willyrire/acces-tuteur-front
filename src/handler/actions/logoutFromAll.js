import logoutFromAll from "@/api/auth/logoutFromAll";
import { clearAuthStorage } from "@/utils/tools/clearAuthStorage";
import { fastRedirect } from "@/utils/tools/fastRedirect";

async function logoutAllSessions() {
  try {
    await logoutFromAll(); // tentative de suppression de la DB.
  } catch (e) {
    console.warn("Logout API échoué, logout local forcé"); // On loggue l'erreur mais on continue le logout local
  } finally {
    clearAuthStorage(); // On nettoie le stockage local quoi qu'il arrive
    fastRedirect("/auth/login/?logged_out=true"); // Redirection rapide vers la page de login
  }
}

export default logoutAllSessions;
