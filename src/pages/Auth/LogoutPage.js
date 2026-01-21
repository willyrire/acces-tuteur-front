import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logoutRequest } from "@/api/auth/logoutRequest";
import { clearAuthStorage } from "@/utils/clearAuthStorage";

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
        window.location.href = "/"; // reload + redirection
      }
    };

    logout();
  }, [navigate]);
};

export default LogoutPage;
