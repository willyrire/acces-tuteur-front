import { React, useState } from "react";
import getParams from "@/utils/tools/getParams";
import { isEmpty } from "@/utils/tools/isEmpty";
import Header from "@/components/Header/Header";
import { div } from "framer-motion/client";
import Footer from "@/components/Footer";

function Profile({ isAuth, userName }) {
  const [hasParam, setHasParam] = useState(false);
  const [hasInterpreted, setHasInterpreted] = useState(false);
  const param = getParams();
    if (!isEmpty(param.code)){
        setHasParam(true);
        setHasInterpreted(true);
    }
  return (
    <div>
      {/* Navigation */}
      <Header removeWarnings={true} isAuth={isAuth} userName={userName} />
      {/* Contenue */}
      {hasParam ? (
        <></>
      ) : (
        <></>
      )}
      {/* Footer */}
      <Footer />
    </div>
  );
}
export default Profile;
