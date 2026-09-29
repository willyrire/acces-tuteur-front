import React from "react";
import Section from "@/components/Section";
import Header from "@/components/Header/Header";
import Picture from "@/components/ui/picture";
import Footer from "@/components/Footer";
import { NavLink, useNavigate } from "react-router-dom";

function NotFound404({ isAuth, userName }) {
  const navigate = useNavigate();
  return (
    <div>
      <Header isAuth={isAuth} userName={userName} />
      <Section
        title="404 - Page introuvable"
        children={
          <>
            <p className="mt-4 text-gray-600 font-semibold">
              Désolé, la page que vous tentez d'accéder n'existe plus ou a été
              changée de place. <br />
              Accès Tuteur est un projet en développement constant. <br />
              Il est donc
              possible que cette page finisse par être ajoutée (ou pas) !
            </p>
            <Picture
              source="/images/404-error-page-robot.png"
              alt="404 Not Found"
              className="w-80 md:w-96 h-auto opacity-95"
            />
            <p className="mt-4">
              <NavLink
                to="/"
                className="items-center rounded-full hover:text-black transition hover:bg-white p-4 border-2 border-blue-500 bg-blue-500 text-white font-bold align-center"
              >
                Retour à l'accueil
              </NavLink>
            </p>
          </>
        }
        className="bg-white mb-30 min-h-[70vh] flex flex-col justify-center items-center text-center mt-25"
        titleAlignement="text-center"
      />
      <Footer />
    </div>
  );
}

export default NotFound404;
