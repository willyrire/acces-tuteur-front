import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import HomePage from "../pages/Homepage";
import AuthPage from "../pages/Auth/AuthPage";
import LogoutPage from "../pages/Auth/LogoutPage";
import NotFound404 from "../pages/Error/NotFound404";
import { isLoggedIn } from "@/api/auth/isLoggedIn";
import { getUserNameLastNameFirstInitial } from "@/utils/tools/getUserName";
import { clearAuthStorage } from "@/utils/tools/clearAuthStorage";
// Ici tu pourras importer LoginPage, DashboardParent, DashboardTutor, etc.

const AppRoutes = () => {
  const [userName, setUserName] = React.useState(null);
  const [isAuth, setIsAuth] = React.useState(false);
  const [loading, setLoading] = React.useState(true); // Pour éviter un flash de non-auth
  const params = new URLSearchParams(window.location.search);

  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        const auth = await isLoggedIn(); // true ou false
        if (auth) {
          setIsAuth(true);
          const name = await getUserNameLastNameFirstInitial();
          setUserName(name);
        } else {
          console.log("User not authenticated"); // ✅ ça va s'afficher
          clearAuthStorage();
          setIsAuth(false);
          
        }
      } catch (err) {
        // Erreur réseau / serveur
        console.error("Erreur réseau auth :", err);
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
        <Route
          path="/auth/login"
          element={isAuth ? <Navigate to="/" /> : <AuthPage />}
        />
        <Route
          path="/auth/create-account"
          element={isAuth ? <Navigate to="/" /> : <AuthPage />}
        />
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
