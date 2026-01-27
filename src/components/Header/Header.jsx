import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { X, CircleAlert  } from "lucide-react";
import NavMenu from "./NavMenu";
import UserMenu from "./UserMenu";
import SearchButton from "./SearchButton";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";
import useIsMobile from "@/utils/tools/useIsMobile";
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
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [hasCheckedEmail, setHasCheckedEmail] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const isMobile = useIsMobile();
  if (!isEmailVerified && !hasCheckedEmail) {
    setIsEmailVerified(localStorage.getItem("isEmailVerified") === "true");
    setShowWarning(true);
    setHasCheckedEmail(true);
  }

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

  const handleResendEmail = () => {
    // Ajoutez ici votre logique pour renvoyer l'email de vérification
    console.log("Resending verification email...");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          emptyBg ? "bg-transparent" : "bg-blue-200"
        } ${scrolled ? showWarning ? "pt-2" : "py-2" : showWarning ? "pt-4" : "py-4"}`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-16">
          {/* Logo */}
          <Logo bigTitleColorWhite={bigTitleColorWhite} />

          {!minimalist && (
            <>
              {/* Desktop */}
              <div className="hidden md:flex items-center gap-6">
                <NavMenu isMobile={isMobile} />
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

              <SearchBar
                isOpen={searchOpen}
                onClose={() => setSearchOpen(false)}
              />
              <MobileMenu
                isOpen={mobileOpen}
                onClose={() => setMobileOpen(false)}
                isAuth={isAuth}
                userName={userName}
              />
            </>
          )}
        </div>
        {/* Email verification warning banner */}
        {isAuth && !isEmailVerified && showWarning && (
          <div className="mt-5 left-0 w-full z-40 bg-yellow-400 border-b-2 border-yellow-500">
            <div className={`max-w-6xl mx-auto px-4 py-3 flex items-center ${isMobile ? "text-justify" : "justify-between"}`}>
              <div className="flex items-center">
                <CircleAlert className="w-10 h-10 text-black-600" />
              </div>
              <p className={`text-black font-medium ${isMobile && ("mr-2")} `}>
                Votre adresse courriel n'est pas vérifié. Veuillez la vérifier
                afin de sécuriser votre compte. <br />
                Votre compte sera <u><b>supprimé</b></u> dans 30 jours si vous ne le faites pas.
              </p>
              <div className="flex items-center align-baseline">
                {!isMobile ? (
                  <button
                  onClick={handleResendEmail}
                  className="hover:cursor-pointer bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-4 py-2 rounded transition-colors duration-200"
                >
                  Vérifier maintenant
                </button>
                ) : (
                  <>
                  <br />
                  <button
                  onClick={handleResendEmail}
                  className="hover:cursor-pointer bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-4 py-2 rounded transition-colors duration-200"
                >
                  Vérifier
                </button> 
                  </>
                )}
                <button
                  onClick={() => setShowWarning(false)}
                  className="hover:cursor-pointer ml-3 bg-yellow-400 rounded-full hover:bg-opa hover:bg-yellow-300 px-4 py-4 transition"
                >
                  <X className="w-6 h-6 text-black-600" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
