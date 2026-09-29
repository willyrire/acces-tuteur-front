import React from "react";
import { useParams } from "react-router-dom";
import CmsPage from "@/components/pages/CmsPage";

export default function Page({ isAuth, userName }) {
  const { slug } = useParams();
  return <CmsPage isAuth={isAuth} userName={userName} slug={slug} />;
}
