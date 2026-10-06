import React, { useEffect } from "react";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import { Outlet, useLocation } from "react-router-dom";

const FrontBase = ({
  isAuth,
  userName,
  minimalist = false,
  emptyBg = false,
  bigTitleColorWhite = false,
  removeWarnings = true,
  stayTopPage = false,
  animationOnScroll = true,
}) => {
  const { pathname } = useLocation();
  window.scrollTo(0, 0); // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return (
    <>
      <title>Accès Tuteur | Le tutorat simplement</title>

      <meta
        name="description"
        content="Accès Tuteur facilite la recherche de tuteurs, la réservation de séances et le partage de fichiers pour un accompagnement scolaire simple et efficace."
      />

      <div className="min-h-screen bg-white-500">
        <Header
          isAuth={isAuth}
          userName={userName}
          animationOnScroll={animationOnScroll}
          emptyBg={emptyBg}
          stayTopPage={stayTopPage}
          minimalist={minimalist}
          bigTitleColorWhite={bigTitleColorWhite}
          removeWarnings={removeWarnings}
        />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FrontBase;