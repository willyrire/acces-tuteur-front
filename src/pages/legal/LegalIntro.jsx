import React from "react";
import { useParams } from "react-router-dom";
import CmsPage from "@/components/pages/CmsPage";

export default function LegalIntro({ isAuth, userName }) {
  return <CmsPage isAuth={isAuth} userName={userName} slug="legal-intro" />;
}
