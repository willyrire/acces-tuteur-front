import logoutRequest from "@/api/auth/logoutRequest";
import { clearAuthStorage } from "@/utils/tools/clearAuthStorage";
import { fastRedirect } from "@/utils/tools/fastRedirect";

async function logout() {
  try {
    await logoutRequest(); // tentative de suppression de la DB.
  } catch (e) {
    console.warn("Logout API échoué, logout local forcé"); // On loggue l'erreur mais on continue le logout local
  } finally {
    clearAuthStorage(); // On nettoie le stockage local quoi qu'il arrive
    fastRedirect("/auth/login/?logged_out=true"); // Redirection rapide vers la page de login
  }
}

export default logout;
