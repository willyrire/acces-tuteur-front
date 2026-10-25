import React from "react";
import { HeartHandshake } from "lucide-react";
import ContentSection from "@/components/public-content/ContentSection";
import FeatureGrid from "@/components/public-content/FeatureGrid";
import { TUTOR_BENEFITS } from "../data/tutorContent";

export default function TutorBenefits() {
  return (
    <ContentSection id="avantages-tuteur" tone="soft" eyebrow="Un cadre pour votre expertise" title="Moins de choses à chercher. Plus d’énergie pour enseigner." description="Une famille vous choisit pour la qualité de votre accompagnement. La plateforme vous aide à organiser tout ce qui l’entoure.">
      <FeatureGrid items={TUTOR_BENEFITS} />
      <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-blue-200 bg-white p-6 sm:flex-row sm:items-start sm:p-8">
        <HeartHandshake className="h-8 w-8 shrink-0 text-blue-700" aria-hidden="true" />
        <div><h3 className="text-xl font-bold text-slate-950">L’élève garde toute sa place.</h3><p className="mt-3 max-w-4xl leading-8 text-slate-600">Un profil facilite la rencontre. Un agenda facilite l’organisation. Mais c’est votre patience, vos explications et votre capacité à vous adapter qui font la différence pendant la séance. Accès Tuteur vous donne un cadre pour mettre ces qualités en action.</p></div>
      </div>
    </ContentSection>
  );
}
