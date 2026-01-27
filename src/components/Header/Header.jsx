import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { X, CircleAlert } from "lucide-react";
import NavMenu from "./NavMenu";
import UserMenu from "./UserMenu";
import SearchButton from "./SearchButton";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";
import useIsMobile from "@/utils/tools/useIsMobile";
import warningText from "@/assets/warning-text.json";
import Warning from "@/components/HeaderObject/Warning";
import Danger from "@/components/HeaderObject/Danger";
import Info from "@/components/HeaderObject/Info";
import Success from "@/components/HeaderObject/Success";
import { div } from "framer-motion/client";

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
  // ✅ Ne jamais setState dans le render : fais-le ici
  useEffect(() => {
    const verified = localStorage.getItem("isEmailVerified") === "true";
    setIsEmailVerified(verified);
    setShowWarning(!verified);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
        } ${scrolled ? (showWarning ? "pt-2" : "py-2") : showWarning ? "pt-4" : "py-4"}`}
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
        {/* Warnings */}
        {showWarning && (
          <div className="mt-5">
            {!isEmailVerified && ( 
              // Si l'email n'est pas vérifié, afficher l'avertissement
              <div className="mt-5">
                <Warning
                  isMobile={isMobile}
                  message={warningText.email_not_verified.text}
                  hasButton={warningText.email_not_verified.hasButton}
                  buttonText={warningText.email_not_verified.buttonText}
                  buttonTextMobile={
                    warningText.email_not_verified.buttonTextMobile
                  }
                  buttonTargetFunction={handleResendEmail}
                  showWarning={showWarning}
                  onClose={() => setShowWarning(false)}
                />
              </div>
            )}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
