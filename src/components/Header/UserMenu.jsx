import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { User, Settings, LogOut } from "lucide-react"; // icônes
import logout from "@/handler/actions/logout";

const UserMenu = ({ isAuth, userName }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Fermer le menu si clic à l'extérieur
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isAuth) {
    return (
      <nav className="gap-1 pb-1.5 flex items-center">
        <NavLink to="/auth/login" className="px-3 py-1 font-bold hover:underline">
          Se connecter
        </NavLink>
        /
        <NavLink to="/auth/create-account" className="px-3 py-1 font-bold hover:underline">
          Créer un compte
        </NavLink>
      </nav>
    );
  }

  return (
    <div className="relative" ref={menuRef}>
      {/* Bouton utilisateur */}
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 font-bold rounded-full bg-green-400 hover:bg-blue-300 transition"
      >
        {userName}
      </button>

      {/* Micro menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
          <NavLink
            to="/user/profile"
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            <Settings size={18} /> Paramètres
          </NavLink>

          <button
            onClick={() => {
              setOpen(false);
              logout();
            }}
            className="w-full text-left flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50"
          >
            <LogOut size={18} /> Déconnexion
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;