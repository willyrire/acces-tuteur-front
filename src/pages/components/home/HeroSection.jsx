import React from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { scrollToSection } from "@/pages/functions/home/scrollToSection";
import HeroVisual from "@/pages/components/home/HeroVisual";
import { getHomePrimaryAction } from "@/pages/functions/home/getHomePrimaryAction";

export default function HeroSection({ isAuth }) {
  const primaryAction = getHomePrimaryAction(isAuth);

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-indigo-100/50 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <Sparkles className="h-4 w-4" />
            Le tutorat, plus simple et plus accessible
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Apprenez.
            <br />
            Progressez.
            <br />
            <span className="text-blue-600">Réussissez ensemble.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
            Accès Tuteur rassemble les élèves et les tuteurs sur une plateforme
            simple pour organiser les séances, partager des ressources et
            avancer vers des objectifs concrets.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={primaryAction.href}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {primaryAction.label}

              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#fonctionnement"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("fonctionnement");
              }}
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3.5 font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
            >
              Découvrir la plateforme
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600">
            <TrustItem text="Simple à utiliser" />
            <TrustItem text="Accompagnement personnalisé" />
            <TrustItem text="Pensé pour l'apprentissage" />
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function TrustItem({ text }) {
  return (
    <span className="flex items-center gap-2">
      <CheckCircle2 className="h-4 w-4 text-green-600" />
      {text}
    </span>
  );
}
