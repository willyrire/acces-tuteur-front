import React from "react";

import Header from "@/components/Header/Header";
import { div } from "framer-motion/client";
import Footer from "@/components/Footer";
function Profile({isAuth, userName}) {
  return (
    <div>
        {/* Navigation */}
        <Header removeWarnings={true} isAuth={isAuth} userName={userName} />
        {/* Contenue */}
        
        {/* Footer */}
        <Footer />
    </div>
  );
}
export default Profile;
