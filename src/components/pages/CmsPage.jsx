import React from "react";
import Header from "@/components/Header/Header";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import MdPreview from "@/components/Preview/MdPreview";
import { getPage } from "@/api/public/getPage";
import { Loader2 } from "lucide-react";

export default function CmsPage({
  isAuth,
  userName,
  slug,
  showHeader = true,
  showFooter = true,
  splitSections = true,
  sectionClassName = "bg-white-500 pb-30 pt-50 max-w-4xl mx-auto text-justify",
  titleAlignement = "text-center",
  loadingTitle = "Chargement...",
  errorTitle = "Erreur",
  errorText = "Page introuvable ou erreur de chargement.",
}) {
  const [pageContent, setPageContent] = React.useState("");
  const [status, setStatus] = React.useState("loading"); // loading, success, error

  React.useEffect(() => {
    let cancelled = false;

    const fetchPageContent = async () => {
      try {
        setStatus("loading");
        const data = await getPage(slug);

        if (cancelled) return;

        if (data?.status === "success") {
          setStatus("success");
          setPageContent(data.data.content ?? "");
        } else {
          setStatus("error");
        }
      } catch {
        if (!cancelled) setStatus("error");
      }
    };

    if (slug) fetchPageContent();
    else setStatus("error");

    return () => {
      cancelled = true;
    };
  }, [slug]);

  const sections = React.useMemo(() => {
    if (!splitSections) return [pageContent || ""];
    if (!pageContent) return [];

    return pageContent
      .split(/\n\s*---\s*\n/g)
      .map((s) => s.trim())
      .filter(Boolean);
  }, [pageContent, splitSections]);

  return (
    <div className="flex flex-col">
      {showHeader && <Header isAuth={isAuth} userName={userName} />}

      {status === "loading" && (
        <Section
          title={loadingTitle}
          className={sectionClassName}
          titleAlignement={titleAlignement}
        >
          <div className="flex items-center justify-center gap-3 py-8">
            <Loader2 className="h-7 w-7 animate-spin" />
            <span>On charge la page.</span>
          </div>
        </Section>
      )}

      {status === "error" && (
        <Section
          title={errorTitle}
          className={sectionClassName}
          titleAlignement={titleAlignement}
        >
          {errorText}
        </Section>
      )}

      {status === "success" && (
        <>
          {sections.map((html, i) => (
            <Section
              key={i}
              className={sectionClassName}
              titleAlignement={titleAlignement}
            >
              <MdPreview html={html} />
            </Section>
          ))}
        </>
      )}

      {showFooter && <Footer />}
    </div>
  );
}
