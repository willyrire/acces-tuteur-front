// Composant principale qui regroupe
// tous les sous composants du header
import React from "react";
import { useState } from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import UserMenu from "./UserMenu";
import SearchButton from "./SearchButton";
import SearchBar from "./SearchBar";

const Header = ({ isAuth, userName }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 w-full bg-blue-200 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          {/* Logo à gauche */}
          <Logo />

          <nav className="flex gap-4 items-center">
            {/* Menu de navigation au centre */}
            <NavMenu />
          </nav>
          <nav className="flex gap-4 items-right">
            {/* Menu utilisateur à droite */}
            <UserMenu isAuth={isAuth} userName={userName} />
            <SearchButton onClick={() => setSearchOpen(!searchOpen)} />
          </nav>

          <SearchBar isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
        </div>
      </header>
      
    </>
  );
};

export default Header;
