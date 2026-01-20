import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuth, children, redirectPath = "/login" }) => {
  if (!isAuth) {
    // Si l'utilisateur n'est pas connecté, redirige vers la page login
    return <Navigate to={redirectPath} replace />;
  }

  // Sinon, affiche le contenu demandé
  return children;
};

export default ProtectedRoute;