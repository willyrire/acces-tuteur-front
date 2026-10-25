import React from "react";
import { ArrowDown, ArrowRight, CalendarDays, Check, GraduationCap, Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function TutorHero({ plansTo }) {
  return (
    <section className="mt-10 overflow-hidden border-b border-blue-100 bg-gradient-to-b from-blue-50/90 via-blue-50/40 to-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"><Sparkles className="h-4 w-4" aria-hidden="true" />Être tuteur sur Accès Tuteur</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">Votre talent fait progresser.<br /><span className="text-blue-700">Vos outils suivent.</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Vous aimez expliquer, débloquer une notion et voir un élève gagner en confiance? Accès Tuteur réunit les outils pour présenter votre expertise, organiser vos rencontres et suivre vos paiements.</p>
            <p className="mt-4 max-w-2xl text-lg font-medium leading-8 text-slate-800">Construisez votre activité de tutorat avec un point de repère commun pour vous et les familles.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <NavLink to={plansTo} className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-100 transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">Découvrir les forfaits<ArrowRight className="h-4 w-4" aria-hidden="true" /></NavLink>
              <a href="#parcours-tuteur" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">Comment ça marche<ArrowDown className="h-4 w-4" aria-hidden="true" /></a>
            </div>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-600">
              {["Vous fixez votre tarif", "Vous proposez vos disponibilités", "Essentiel sans abonnement payant"].map((item) => <li key={item} className="flex items-center gap-2"><Check className="h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />{item}</li>)}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-blue-100/60 blur-3xl" aria-hidden="true" />
            <div className="relative rounded-3xl border border-blue-100 bg-white p-7 shadow-xl shadow-blue-100/70 sm:p-8">
              <div className="flex items-center gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-white"><GraduationCap className="h-6 w-6" aria-hidden="true" /></div><div><p className="text-xs font-semibold uppercase tracking-wider text-blue-700">Votre activité, au même endroit</p><p className="mt-1 text-xl font-bold text-slate-950">De l’envie d’aider au premier déclic.</p></div></div>
              <div className="mt-7 space-y-3">
                {[
                  ["Un profil qui vous présente", "Vos matières, votre approche, votre expertise."],
                  ["Des rencontres qui s’organisent", "Vos disponibilités et les réservations des familles."],
                  ["Un accompagnement qui se prépare", "Les échanges et les fichiers utiles à l’élève."],
                  ["Des paiements qui se suivent", "Les montants reçus, les frais et votre solde."],
                ].map(([title, description], index) => <div key={title} className="flex gap-3 rounded-2xl bg-slate-50 p-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-blue-700 ring-1 ring-blue-100">{index + 1}</span><div><p className="text-sm font-semibold text-slate-900">{title}</p><p className="mt-1 text-sm leading-6 text-slate-500">{description}</p></div></div>)}
              </div>
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4"><CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" /><p className="text-sm leading-6 text-blue-900">Quelques créneaux par semaine ou une activité plus soutenue : partez de votre horaire et de vos objectifs.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
