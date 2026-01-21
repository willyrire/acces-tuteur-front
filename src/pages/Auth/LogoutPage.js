import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logoutRequest } from "@/api/auth/logoutRequest";

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        await logoutRequest(); // appel API logout
      } catch (err) {
        console.error("Erreur logout:", err);
      } finally {
        localStorage.clear();                   // supprime les infos utilisateur
        navigate("/?jc=1", { replace: true }); // redirige vers accueil
      }
    };

    logout();
  }, [navigate]);
};

export default LogoutPage;