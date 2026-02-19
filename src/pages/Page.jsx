import React from "react";
import Header from "@/components/Header/Header";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import { getPage } from "@/api/public/getPage";
import Picture from "@/components/ui/picture";
import { useParams } from "react-router-dom";
import MdPreview from "@/components/Preview/MdPreview";
import { Loader2 } from "lucide-react";

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
          className="bg-white-500 mb-93 pb-30 pt-50 max-w-4xl mx-auto text-justify"
          titleAlignement="text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <Loader2 className="h-6 w-6 animate-spin" />
            <span>Chargement en cours ...</span>
            <br />
          </div>
        </Section>
      )}

      {status === "error" && (
        <Section
          title="404 - Page introuvable"
          children={
            <>
              <p className="mt-4 text-gray-600 font-semibold">
                Désolé, la page que vous tentez d'accéder n'existe plus ou a été
                changée de place. <br />
                Accès Tuteur est un projet en développement constant. <br />
                Il est donc possible que cette page finisse par être ajoutée (ou
                pas) ! <br />
                Vous le trouvez comment le robot?
              </p>
              <Picture
                source="/images/404-error-page-robot.png"
                alt="404 Not Found"
                className="w-80 md:w-96 h-auto opacity-95"
              />
              <p className="mt-4">
                <a
                  href="/"
                  className="items-center rounded-full hover:text-black transition hover:bg-white p-4 border-2 border-blue-500 bg-blue-500 text-white font-bold align-center"
                >
                  Retour à l'accueil
                </a>
              </p>
            </>
          }
          className="bg-white mb-30 min-h-[70vh] flex flex-col justify-center items-center text-center mt-25"
          titleAlignement="text-center"
        />
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
