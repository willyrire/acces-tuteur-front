import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logoutRequest } from "@/api/auth/logoutRequest";
import { clearAuthStorage } from "@/utils/clearAuthStorage";
import { fastRedirect } from "@/utils/fastRedirect";

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        await logoutRequest(); // appel API logout
      } catch (err) {
        console.error("Erreur logout:", err);
      } finally {
        clearAuthStorage(); // Nettoyer le stockage local
        fastRedirect("/"); // Redirection rapide vers la page d'accueil
      }
    };

    logout();
  }, [navigate]);
};

export default LogoutPage;
