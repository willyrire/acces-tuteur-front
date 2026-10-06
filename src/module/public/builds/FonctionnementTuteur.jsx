import React from "react";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";
import ContentSection from "@/components/public-content/ContentSection";
import RelatedContentLinks from "@/components/public-content/RelatedContentLinks";
import TutorHero from "@/module/public/FonctionnementTuteur/components/TutorHero";
import TutorJourney from "@/module/public/FonctionnementTuteur/components/TutorJourney";
import TutorBenefits from "@/module/public/FonctionnementTuteur/components/TutorBenefits";
import TutorPlans from "@/module/public/FonctionnementTuteur/components/TutorPlans";
import TutorPayments from "@/module/public/FonctionnementTuteur/components/TutorPayments";
import TutorFaq from "@/module/public/FonctionnementTuteur/components/TutorFaq";
import { TUTOR_ROUTES } from "@/module/public/FonctionnementTuteur/data/tutorContent";

// Render inside FrontBase's Outlet: the shared Header/Footer are supplied by the layout.
export default function FonctionnementTuteur() {
  return (
    <>
      <title>Devenir tuteur et comprendre les forfaits | Accès Tuteur</title>
      <meta name="description" content="Découvrez comment être tuteur sur Accès Tuteur : profil, vérification, réservations, paiements et forfaits Essentiel, Pro et Élite pour organiser votre activité." />
      <div className="bg-white text-slate-900">
        <TutorHero plansTo={TUTOR_ROUTES.plans} />
        <TutorJourney />
        <TutorBenefits />
        <TutorPlans plansTo={TUTOR_ROUTES.plans} />
        <TutorPayments />
        <TutorFaq plansTo={TUTOR_ROUTES.plans} />

        <section className="bg-white pb-16 lg:pb-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid gap-8 rounded-3xl bg-linear-to-r from-blue-700 to-blue-600 p-8 text-white shadow-xl shadow-blue-100/70 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
              <div><p className="inline-flex items-center gap-2 text-sm font-semibold text-blue-100"><Sparkles className="h-4 w-4" aria-hidden="true" />Votre prochaine étape</p><h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">Quelqu’un attend peut-être votre façon d’expliquer.</h2><p className="mt-5 max-w-2xl leading-8 text-blue-50">Vous apportez vos connaissances et votre envie d’aider. Accès Tuteur réunit les outils pour construire autour de ces qualités une activité organisée. Découvrez les forfaits et choisissez votre point de départ.</p></div>
              <NavLink to={TUTOR_ROUTES.plans} className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-blue-800 shadow-sm hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700">Choisir mon forfait<ArrowRight className="h-4 w-4" aria-hidden="true" /></NavLink>
            </div>
          </div>
        </section>

        <ContentSection tone="muted" eyebrow="Continuer à découvrir" title="Un cadre commun, une confiance qui se construit.">
          <RelatedContentLinks items={[
            { to: TUTOR_ROUTES.security, icon: ShieldCheck, title: "La sécurité de vos données", description: "Découvrez les mécanismes utilisés pour protéger votre compte et les données confiées à la plateforme." },
            { to: TUTOR_ROUTES.plans, icon: Sparkles, title: "Le détail des forfaits", description: "Comparez les prix, les commissions, les fonctions incluses et les modalités de chaque offre." },
          ]} />
        </ContentSection>
      </div>
    </>
  );
}
