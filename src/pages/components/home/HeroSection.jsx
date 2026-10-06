import React from "react";
import { ArrowRight, CheckCircle2, ExternalLink, Sparkles } from "lucide-react";

import HeroVisual from "@/pages/components/home/HeroVisual";
import { getHomePrimaryAction } from "@/pages/functions/home/getHomePrimaryAction";
import { NavLink } from "react-router-dom";
import openApp from "@/handler/actions/openApp";
import { auth_register } from "@/constants/main";

export default function HeroSection({ isAuth }) {
  const primaryAction = getHomePrimaryAction(isAuth);

  return (
    <section className="relative isolate overflow-hidden bg-linear-to-br from-blue-700 via-blue-600 to-indigo-700 text-white">
      {/* Lumières décoratives */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-125 w-125 rounded-full bg-cyan-400/20 blur-[100px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 top-10 h-125 w-125 rounded-full bg-purple-400/25 blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-300/20 blur-[100px]"
        aria-hidden="true"
      />

      {/* Motif de fond */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 pb-32 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-blue-50 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            Le tutorat, plus simple et plus accessible
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Le bon soutien,
            <br />
            <span className="relative inline-block">
              au bon moment.
              <span
                className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-yellow-300/80"
                aria-hidden="true"
              />
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-blue-100 sm:text-xl">
            Accès Tuteur rapproche les élèves, les parents et les tuteurs pour
            rendre l'accompagnement scolaire plus simple, humain et accessible.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#fonctionnement"
              className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Comment ça fonctionne ?
            </a>
            {isAuth ? (
              <button
                type="button"
                onClick={() => openApp()}
                className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-white/25 bg-yellow-300/90 px-6 py-3.5 font-semibold text-black hover:text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Accéder à mon compte
                <ExternalLink className="ml-2 h-4 w-4" />
              </button>
            ) : (
              <NavLink
                to={auth_register}
                className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-white/25 bg-white px-6 py-3.5 font-semibold hover:text-white text-black backdrop-blur-sm transition hover:bg-white/20"
              >
                M'inscrire
                <ArrowRight className="ml-2 h-4 w-4" />
              </NavLink>
            )}
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-blue-100">
            <TrustItem text="Simple à utiliser" />
            <TrustItem text="Pour parents et étudiants" />
            <TrustItem text="Tuteurs accessibles" />
          </div>
        </div>

        <HeroVisual />
      </div>

      {/* Transition vers la prochaine section */}
      <div
        className="absolute -bottom-1 left-0 right-0 h-20 bg-white"
        aria-hidden="true"
        style={{
          clipPath: "ellipse(60% 45% at 50% 100%)",
        }}
      />
    </section>
  );
}

function TrustItem({ text }) {
  return (
    <span className="flex items-center gap-2">
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
        <CheckCircle2 className="h-3.5 w-3.5 text-green-300" />
      </span>

      {text}
    </span>
  );
}
