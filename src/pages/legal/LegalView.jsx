import React from "react";
import { useParams } from "react-router-dom";
import CmsPage from "@/components/pages/CmsPage";

export default function LegalView({ isAuth, userName }) {
  const allowedSlugs = ["terms", "privacy", "cookies", "contact"];
  const { slug } = useParams();

  if (!allowedSlugs.includes(slug)) {
    return <CmsPage isAuth={isAuth} userName={userName} slug="legal-intro" />;
  } else {
    return <CmsPage isAuth={isAuth} userName={userName} slug={slug} />;
  }
}
