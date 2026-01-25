import React from "react";
import Section from "@/components/Section";
import Header from "@/components/Header/Header";
import Picture from "@/components/ui/picture";

function NotFound404({ isAuth, userName }) {
  return (
    <div>
      <Header isAuth={isAuth} userName={userName} />
      <Section
      title= "404 - Page Not Found"
      children={
        <>
        <p className="mt-4 text-gray-600">
          Désolé, la page que vous recherchez n'existe pas.
        </p>
          <Picture
            source="/images/404-error-page-robot.png"
            alt="404 Not Found"
            className="w-80 md:w-96 h-auto opacity-95"
          />
        </>
      }
      className="bg-white min-h-[70vh] flex flex-col justify-center items-center text-center mt-[5%]"
      titleAlignement="text-center"
      />
    </div>
  );
}

export default NotFound404;
