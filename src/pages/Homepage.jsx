import React from "react";

import Header from "../components/Header/Header";
function HomePage({isAuth, userName}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header en haut */}
      <Header isAuth={isAuth} userName={userName} />
      
    </div>
  );
}

export default HomePage;
