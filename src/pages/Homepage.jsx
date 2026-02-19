import React from "react";
import CmsPage from "@/components/pages/CmsPage";

export default function HomePage({ isAuth, userName }) {
  return <CmsPage isAuth={isAuth} userName={userName} slug="accueil" />;
}
