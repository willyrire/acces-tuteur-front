import React from "react";
import { MD_PREVIEW_STYLE } from "@/styles/mdPreviewStyle";

export default function MdPreview({ html, diffMode = false }) {
  return (
    <>
      <style>{MD_PREVIEW_STYLE}</style>

      <div
        className={`md-preview ${diffMode ? "diff-mode" : ""}`}
        dangerouslySetInnerHTML={{ __html: html ?? "" }}
      />
    </>
  );
}
