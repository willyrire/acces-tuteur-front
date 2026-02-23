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
  sectionClassName = "bg-white-500 pt-50 max-w-4xl mx-auto text-justify",
  titleAlignement = "text-center",
  loadingTitle = "Chargement...",
  errorTitle = "Erreur",
  errorText = "Page introuvable ou erreur de chargement.",
}) {
  const [pageContent, setPageContent] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
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
          setPageContent(data?.data?.content ?? "");
          setTitle(data?.data?.title ?? "");
          setDescription(data?.data?.description ?? "");
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
      .split(/\s*\[\[SECTION\]\]\s*/g)
      .map((s) => s.trim())
      .filter(Boolean);
  }, [pageContent, splitSections]);

  const finalTitle =
    status === "success" && title?.trim()
      ? `Accès Tuteur | ${title.trim()}`
      : status === "error"
      ? "Accès Tuteur | Erreur"
      : "Accès Tuteur | Chargement";

  const finalDescription =
    status === "success" && description?.trim()
      ? description.trim()
      : "Accès Tuteur — plateforme de tutorat, réservation de séances et partage de fichiers.";

  return (
    <>
      <title>{finalTitle}</title>
      <meta key="description" name="description" content={finalDescription} />

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
            className={sectionClassName + " mt-[50%] mb-[32%]"}
            titleAlignement={titleAlignement}
          >
            {errorText}
          </Section>
        )}

        {status === "success" && (
          <div className="bg-white-500 max-w-4xl mx-auto text-justify pt-50 pb-30">
            {sections.map((html, i) => (
              <div key={i} className={i === 0 ? "" : "mt-12"}>
                <MdPreview html={html} />
              </div>
            ))}
          </div>
        )}

        {showFooter && <Footer />}
      </div>
    </>
  );
}