import React, { useEffect, useState } from "react";

import Logo from "./Logo";
import NavMenu from "./NavMenu";
import UserMenu from "./UserMenu";
import SearchButton from "./SearchButton";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";

import useIsMobile from "@/utils/tools/useIsMobile";
import warningText from "@/assets/warning-text.json";

import Warning from "@/components/HeaderObject/Warning";
import Success from "@/components/HeaderObject/Success";

import sendEmailVerification from "@/api/service/sendEmailVerification";

const SCROLL_BACKGROUND_THRESHOLD = 60;

const Header = ({
  isAuth,
  userName,
  minimalist = false,
  emptyBg = false,
  bigTitleColorWhite = false,
  removeWarnings = false,
  stayTopPage = false,
  animationOnScroll = true,
}) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerPositionClass = stayTopPage ? "absolute" : "fixed";

  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [showSuccessEmailSent, setShowSuccessEmailSent] = useState(false);
  const [showEmailNotVerifiedWarning, setShowEmailNotVerifiedWarning] =
    useState(false);

  const isMobile = useIsMobile();

  /*
   * Le header utilise le thème clair uniquement lorsque :
   * - emptyBg est activé;
   * - l'utilisateur est encore près du haut de la page.
   */
  const useLightTheme = emptyBg && !scrolled;

  useEffect(() => {
    const verified = localStorage.getItem("isEmailVerified") === "true";

    setIsEmailVerified(verified);
    setShowEmailNotVerifiedWarning(!verified);

    if (!removeWarnings) {
      setShowWarning(true);
    }
  }, [removeWarnings]);

  useEffect(() => {
    if (stayTopPage || !animationOnScroll) {
      setScrolled(false);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_BACKGROUND_THRESHOLD);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [stayTopPage, animationOnScroll]);

  const handleResendEmail = async () => {
    try {
      setShowEmailNotVerifiedWarning(false);

      await sendEmailVerification();

      setShowSuccessEmailSent(true);

      setTimeout(() => {
        setShowSuccessEmailSent(false);
      }, 2750);
    } catch (error) {
      console.error(
        "Erreur lors de l'envoi du courriel de vérification :",
        error,
      );

      setShowEmailNotVerifiedWarning(true);
    }
  };

  const headerBackgroundClass = useLightTheme
    ? "bg-transparent"
    : "bg-blue-200 shadow-sm";

  const headerSpacingClass = scrolled
    ? showWarning
      ? "pt-2"
      : "py-2"
    : showWarning
      ? "pt-4"
      : "py-4";

  return (
    <>
      <header
        className={[
          "left-0 top-0 z-50 w-full",
          "transition-all duration-300 ease-in-out",
          headerPositionClass,
          headerBackgroundClass,
          headerSpacingClass,
        ].join(" ")}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Logo bigTitleColorWhite={useLightTheme || bigTitleColorWhite} />

          {!minimalist && (
            <>
              {/* Bureau */}
              <div className="hidden items-center gap-6 md:flex">
                <NavMenu isMobile={isMobile} lightTheme={useLightTheme} />

                <UserMenu
                  isAuth={isAuth}
                  userName={userName}
                  lightTheme={useLightTheme}
                />

                <SearchButton
                  onClick={() => setSearchOpen(true)}
                  lightTheme={useLightTheme}
                />
              </div>

              {/* Mobile */}
              <div className="flex items-center gap-3 md:hidden">
                <SearchButton
                  onClick={() => setSearchOpen(true)}
                  lightTheme={useLightTheme}
                />

                <button
                  type="button"
                  onClick={() => setMobileOpen(true)}
                  aria-label="Ouvrir le menu"
                  className={[
                    "rounded-lg p-2 transition-colors",
                    "focus:outline-none focus:ring-2",
                    useLightTheme
                      ? "text-white hover:bg-white/10 focus:ring-white/50"
                      : "text-gray-900 hover:bg-black/5 focus:ring-blue-600",
                  ].join(" ")}
                >
                  <span className="text-2xl leading-none">☰</span>
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

        {showWarning && (<></>)}
      </header>
    </>
  );
};

export default Header;
