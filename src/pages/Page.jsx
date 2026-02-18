import React from "react";
import Header from "@/components/Header/Header";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import { getPage } from "@/api/public/getPage";
import { useParams } from "react-router-dom";
import MdPreview from "@/components/Preview/MdPreview";

function Page({ isAuth, userName }) {
  const { slug } = useParams();

  const [pageContent, setPageContent] = React.useState(null);
  const [metaTitle, setMetaTitle] = React.useState(null);
  const [metaDescription, setMetaDescription] = React.useState(null);
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
          setMetaTitle(data.data.title ?? null);
          setMetaDescription(data.data.description ?? null);
          setPageContent(data.data.content ?? "");
        } else {
          setStatus("error");
        }
      } catch (e) {
        if (!cancelled) setStatus("error");
      }
    };

    if (slug) fetchPageContent();
    else setStatus("error");

    return () => {
      cancelled = true;
    };
  }, [slug]);

  // split: chaque '---' sur sa propre ligne = nouvelle section
  const sections = React.useMemo(() => {
    if (!pageContent) return [];
    return pageContent
      .split(/\n\s*---\s*\n/g)
      .map((s) => s.trim())
      .filter(Boolean);
  }, [pageContent]);

  return (
    <div className="flex flex-col">
      <Header isAuth={isAuth} userName={userName} />

      {status === "loading" && (
        <Section
          title="Chargement..."
          className="bg-white-500 pb-30 pt-50 max-w-4xl mx-auto text-justify"
          titleAlignement="text-center"
        >
          On charge la page.
        </Section>
      )}

      {status === "error" && (
        <Section
          title="Erreur"
          className="bg-white-500 pb-20 pt-50 max-w-4xl mx-auto text-justify"
          titleAlignement="text-center"
        >
          Page introuvable ou erreur de chargement.
        </Section>
      )}

      {status === "success" && (
        <>
          {sections.map((html, i) => (
            <Section
              key={i}
              className="bg-white-500 pt-50 max-w-4xl mx-auto text-justify"
              titleAlignement="text-center"
            >
              <MdPreview html={html} />
            </Section>
          ))}
        </>
      )}

      <Footer />
    </div>
  );
}

export default Page;