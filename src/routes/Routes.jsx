import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "../pages/Homepage";
// Ici tu pourras importer LoginPage, DashboardParent, DashboardTutor, etc.

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                
                {/* Futur exemple de route */}
                {/* <Route path="/login" element={<LoginPage />} /> */}
                
                {/* Fallback 404 */}
                <Route path="*" element={<div>Page not found</div>} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;