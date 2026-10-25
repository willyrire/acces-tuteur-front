import React from "react";
import { Check } from "lucide-react";
import ContentSection from "@/components/public-content/ContentSection";
import StepExplorer from "@/components/public-content/StepExplorer";
import { TUTOR_STEPS } from "../data/tutorContent";

export default function TutorJourney() {
  return (
    <ContentSection id="parcours-tuteur" eyebrow="Votre parcours" title="De votre profil à vos premières séances." description="Explorez les étapes pour comprendre concrètement comment votre activité prend forme sur Accès Tuteur.">
      <StepExplorer steps={TUTOR_STEPS} label="Les étapes du parcours tuteur" renderDetail={(step) => <>
        <ul className="mt-5 space-y-3">{step.checklist.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700"><Check className="mt-1 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />{item}</li>)}</ul>
        <div className="mt-6 rounded-2xl bg-blue-50 p-5"><p className="text-xs font-bold uppercase tracking-wider text-blue-700">Concrètement</p><p className="mt-2 leading-7 text-blue-950">{step.example}</p></div>
        <p className="mt-5 text-sm leading-6 text-slate-500">{step.tip}</p>
      </>} />
    </ContentSection>
  );
}
