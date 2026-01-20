import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "../pages/Homepage";
import LoginPage from "../pages/Auth/LoginPage";
import NotFound404 from "../pages/Error/NotFound404";
// Ici tu pourras importer LoginPage, DashboardParent, DashboardTutor, etc.

const AppRoutes = () => {
    const isAuth = false; // Remplace ceci par ta logique d'authentification réelle
    const userName = "L. William"; // Remplace ceci par le nom d'utilisateur réel si nécessaire
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage isAuth={isAuth} userName={userName} />} />
                <Route path="/auth/login" element={<LoginPage />} />

                
                {/* Futur exemple de route */}
                {/* <Route path="/login" element={<LoginPage />} /> */}
                
                {/* Fallback 404 */}
                <Route path="*" element={<NotFound404 />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;