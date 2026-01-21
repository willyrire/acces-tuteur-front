import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "../pages/Homepage";
import AuthPage from "../pages/Auth/AuthPage";
import LogoutPage from "../pages/Auth/LogoutPage";
import NotFound404 from "../pages/Error/NotFound404";
import { isLoggedIn } from "@/api/auth/isLoggedIn";
import { getUserNameLastNameFirstInitial } from "@/utils/getUserName";
// Ici tu pourras importer LoginPage, DashboardParent, DashboardTutor, etc.

const AppRoutes = () => {
  const [userName, setUserName] = React.useState(null);
  const [isAuth, setIsAuth] = React.useState(false);
  const [loading, setLoading] = React.useState(true); // Pour éviter un flash de non-auth
  const params = new URLSearchParams(window.location.search);
  if (params.get("jc") === "1") {
    // Récupère l'URL actuelle
    const url = new URL(window.location.href);

    // Supprime le paramètre "jc"
    url.searchParams.delete("jc");

    // Remplace l'URL dans l'historique (sans reload)
    window.history.replaceState({}, document.title, url.toString());

    // Puis reload
    window.location.reload();
  }
  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        const auth = await isLoggedIn(); // await si isLoggedIn est async
        setIsAuth(!!auth);

        if (auth) {
          const name = await getUserNameLastNameFirstInitial();
          setUserName(name);
        } else {
          // On détruit tout le localStorage si pas connecté
          localStorage.clear();
        }
      } catch (err) {
        console.error("Erreur auth :", err);
        setIsAuth(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return null; // ou un spinner / loader
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage isAuth={isAuth} userName={userName} />}
        />
        <Route path="/auth/login" element={<AuthPage />} />
        <Route path="/auth/create-account" element={<AuthPage />} />
        <Route path="/auth/logout" element={<LogoutPage />} />

        {/* Futur exemple de route */}
        {/* <Route path="/login" element={<LoginPage />} /> */}

        {/* Fallback 404 */}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
