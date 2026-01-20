import React, { useState } from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import UserMenu from "./UserMenu";
import SearchButton from "./SearchButton";
import SearchBar from "./SearchBar";

const Header = ({ isAuth, userName, minimalist = false }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-blue-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo toujours visible */}
        <Logo />

        {/* Si pas minimaliste, on affiche le menu et le user menu */}
        {!minimalist && (
          <>
            <nav className="flex gap-4 items-center">
              <NavMenu />
            </nav>
            <nav className="flex gap-4 items-center">
              <UserMenu isAuth={isAuth} userName={userName} />
              <SearchButton onClick={() => setSearchOpen(!searchOpen)} />
            </nav>
            <SearchBar isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
