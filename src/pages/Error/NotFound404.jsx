import React from "react";
import Section from "@/components/Section";
import Header from "@/components/Header/Header";
import { div } from "framer-motion/client";
function NotFound404({ isAuth, userName }) {
  return (
    <div>
      <Header isAuth={isAuth} userName={userName} />
      <Section
      title= "404 - Page Not Found"
      children="Désolé, la page que vous recherchez n'existe pas."
      className="bg-white-500 pb-30 pt-50 max-w-4xl mx-auto text-center"
      titleAlignement="text-center"
      />
      
    </div>
  );
}

export default NotFound404;
