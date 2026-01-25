import React from "react";
import Header from "@/components/Header/Header";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
function HomePage({isAuth, userName}) {
  return (
    <div className="flex flex-col">
      <Header isAuth={isAuth} userName={userName} />
      <Section
        title="Bonjour !"
        children="Accès tuteur est une plateforme dédiée aux tuteurs et aux étudiants. La LA lA lasdasdas d lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        className="bg-white-500 pb-30 pt-50 max-w-4xl mx-auto text-justify"
        titleAlignement="text-center"
      />

      <Section
        title="Deuxième section"
        children="Voici une autre section."
        className="bg-green-500 min-h-screen"
      />
      <Footer />
    </div>
  );
}

export default HomePage;
