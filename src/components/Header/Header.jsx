// Composant principale qui regroupe
// tous les sous composants du header
import React from "react";

import Logo from "./Logo";
import NavMenu from "./NavMenu";
import UserMenu from "./UserMenu";

const Header = ({ isAuth, userName }) => {
  return (
    <header className="sticky top-0 w-full bg-blue-200 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo à gauche */}
        <Logo />

        <nav className="flex gap-4">
          {/* Menu de navigation au centre */}
          <NavMenu />

          {/* Menu utilisateur à droite */}
          <UserMenu isAuth={isAuth} userName={userName} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
