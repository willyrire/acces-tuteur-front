import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import UserMenu from "./UserMenu";
import SearchButton from "./SearchButton";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";

const Header = ({
  isAuth,
  userName,
  minimalist = false,
  emptyBg = false,
  bigTitleColorWhite = false,
}) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Hook pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        emptyBg ? "bg-transparent" : "bg-blue-200"
      } ${scrolled ? "py-2" : "py-4"}`} // Réduit la hauteur si scroll
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-16">
        {/* Logo */}
        <Logo bigTitleColorWhite={bigTitleColorWhite} />

        {!minimalist && (
          <>
            {/* Desktop */}
            <div className="hidden md:flex items-center gap-6">
              <NavMenu />
              <UserMenu isAuth={isAuth} userName={userName} />
              <SearchButton onClick={() => setSearchOpen(true)} />
            </div>

            {/* Mobile */}
            <div className="md:hidden flex items-center gap-3">
              <SearchButton onClick={() => setSearchOpen(true)} />
              <button
                onClick={() => setMobileOpen(true)}
                className="p-2 rounded focus:outline-none"
              >
                ☰
              </button>
            </div>

            <SearchBar isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
            <MobileMenu
              isOpen={mobileOpen}
              onClose={() => setMobileOpen(false)}
              isAuth={isAuth}
              userName={userName}
            />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
