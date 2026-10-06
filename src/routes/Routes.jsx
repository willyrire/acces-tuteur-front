import React from "react";
import { lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Pages
const HomePage = lazy(() => import("../pages/HomePage"));
const AuthPage = lazy(() => import("../pages/Auth/AuthPage"));
const NotFound404 = lazy(() => import("../pages/Error/NotFound404"));
const PasswordRecoveryPage = lazy(
  () => import("../pages/Auth/PasswordRecoveryPage"),
);
const ResetPasswordPage = lazy(() => import("../pages/Auth/ResetPasswordPage"));
const VerifyEmail = lazy(() => import("../pages/User/VerifyEmail"));
const Page = lazy(() => import("../pages/Page"));
const A2F = lazy(() => import("../module/auth/pages/A2F"));
const LegalIntro = lazy(() => import("../pages/legal/LegalIntro"));
const LegalView = lazy(() => import("../pages/legal/LegalView"));
const About = lazy(() => import("@/module/about/pages/About"));
const SecuriteDonnes = lazy(() => import("@/module/public/builds/SecuriteDonnes"));

// Layout
const FrontBase = lazy(() => import("../layouts/FrontBase"));

// Utils
import { isLoggedIn } from "@/api/auth/isLoggedIn";
import { getUserNameLastNameFirstInitial } from "@/utils/tools/getUserName";
import { clearAuthStorage } from "@/utils/tools/clearAuthStorage";

const AppRoutes = () => {
  const [userName, setUserName] = React.useState(null);
  const [isAuth, setIsAuth] = React.useState(false);
  const [loading, setLoading] = React.useState(true); // Pour éviter un flash de non-auth

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
        {/* Authentification */}
        <Route
          path="/auth/login"
          element={
            isAuth ? <Navigate from="/auth/login" to="/" /> : <AuthPage />
          }
        />
        <Route
          path="/auth/register"
          element={
            isAuth ? <Navigate from="/auth/register" to="/" /> : <AuthPage />
          }
        />
        {/* Authentification / A2F */}
        <Route
          path="/auth/login/a2f/:userId/:method/:challengeId"
          element={isAuth ? <Navigate from="/auth/login" to="/" /> : <A2F />}
        />
        {/* Authentification / Mot de passe oublié */}
        <Route
          path="/auth/password-recovery"
          element={
            isAuth ? (
              <Navigate from="/auth/password-recovery" to="/" />
            ) : (
              <PasswordRecoveryPage />
            )
          }
        />
        <Route
          path="/auth/reset-password"
          element={
            isAuth ? (
              <Navigate from="/auth/reset-password" to="/" />
            ) : (
              <ResetPasswordPage />
            )
          }
        />

        {/* user/profile */}
        <Route
          path="/user/profile/verify-email"
          element={
            isAuth ? (
              <VerifyEmail isAuth={isAuth} userName={userName} />
            ) : (
              <Navigate from="/user/profile/verify-email" to="/auth/login" />
            )
          }
        />
        <Route
          path="/page/:slug"
          element={<Page isAuth={isAuth} userName={userName} />}
        />
        <Route
          path="/legal/:slug"
          element={<LegalView isAuth={isAuth} userName={userName} />}
        />
        <Route
          path="/legal/"
          element={<LegalIntro isAuth={isAuth} userName={userName} />}
        />

        <Route
          path="/"
          element={<FrontBase isAuth={isAuth} userName={userName} />}
        >
          {/* Menu de navigation */}
          <>
            <Route
              path="about"
              element={<About isAuth={isAuth} userName={userName} />}
            />
          </>

          {/* Contenu d'information intéractif non-cms */}
          <Route
            path="contenu/">
            <Route
              path="securite-donnees"
              element={<SecuriteDonnes />}
            />
          </Route>
        </Route>

        {/* Fallback 404 */}
        <Route
          path="*"
          element={<NotFound404 isAuth={isAuth} userName={userName} />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
