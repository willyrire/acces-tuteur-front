import React from "react";

import Header from "../components/Header/Header";
function HomePage() {
  const isAuth = false;
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header en haut */}
      <Header isAuth={isAuth} />
      <div className="text-2xl font-bold text-blue-500 p-4">
        Salut Tailwind !
      </div>
    </div>
  );
}

export default HomePage;
