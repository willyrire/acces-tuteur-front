import React, { useId, useState } from "react";
import { ArrowRight, BarChart3, Check, Code2, LifeBuoy, LockKeyhole } from "lucide-react";
import { NavLink } from "react-router-dom";
import ContentSection from "@/components/public-content/ContentSection";
import { TUTOR_PLANS, TUTOR_PROFILES } from "../data/tutorContent";

export default function TutorPlans({ plansTo }) {
  const [profileId, setProfileId] = useState(TUTOR_PROFILES[0].id);
  const [billing, setBilling] = useState("monthly");
  const detailId = useId();
  const profile = TUTOR_PROFILES.find((item) => item.id === profileId);
  return (
    <ContentSection id="forfaits-tuteur" eyebrow="Comprendre les forfaits" title="Un point de départ gratuit. Des options pour la suite." description="Les forfaits sont des abonnements pour les tuteurs. Ils se distinguent du prix d’une séance, que vous fixez vous-même, et des frais appliqués aux paiements.">
      <div className="rounded-3xl border border-blue-100 bg-blue-50/60 p-5 sm:p-8">
        <h3 className="text-xl font-bold text-slate-950">Où en êtes-vous dans votre activité?</h3>
        <p className="mt-2 leading-7 text-slate-600">Choisissez la situation qui vous ressemble pour explorer une piste de forfait.</p>
        <div className="mt-5 grid gap-3 md:grid-cols-3" role="group" aria-label="Votre situation de tutorat">
          {TUTOR_PROFILES.map((item) => <button key={item.id} type="button" onClick={() => setProfileId(item.id)} aria-pressed={profileId === item.id} aria-controls={detailId} className={`rounded-2xl border p-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${profileId === item.id ? "border-blue-700 bg-blue-700 text-white" : "border-blue-100 bg-white text-slate-800 hover:border-blue-300"}`}><span className="block font-semibold">{item.title}</span><span className={`mt-1 block text-sm ${profileId === item.id ? "text-blue-100" : "text-slate-500"}`}>{item.subtitle}</span></button>)}
        </div>
        <div id={detailId} aria-live="polite" aria-atomic="true" className="mt-5 rounded-2xl border border-blue-100 bg-white p-5"><p className="font-semibold text-blue-800">{profile.heading}</p><p className="mt-2 leading-7 text-slate-600">{profile.description}</p></div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {TUTOR_PLANS.map((plan) => {
          const suggested = plan.id === profile.planId;
          return (
            <article key={plan.id} className={`flex flex-col rounded-3xl border p-6 sm:p-7 ${suggested ? "border-blue-500 bg-white shadow-lg shadow-blue-100/60 ring-1 ring-blue-500" : "border-slate-200 bg-white shadow-sm"}`}>
              <div className="mb-4 min-h-7">{suggested ? <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">À explorer pour votre situation</span> : <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{plan.label}</span>}</div>
              <h3 className="text-2xl font-bold text-slate-950">{plan.name}</h3>
              <p className="mt-2 font-semibold text-blue-700">{plan.priceLabel}</p>
              <p className="mt-4 leading-7 text-slate-600">{plan.summary}</p>
              <ul className="mt-6 space-y-3">{plan.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-700"><Check className="mt-1 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />{feature}</li>)}</ul>
              <p className="mb-6 mt-5 text-sm leading-6 text-slate-500">{plan.note}</p>
              <NavLink to={plansTo} aria-label={`Consulter les conditions du forfait ${plan.name}`} className={`mt-auto inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${suggested ? "bg-blue-700 text-white hover:bg-blue-800" : "border border-blue-100 bg-blue-50 text-blue-700 hover:bg-blue-100"}`}>Voir les conditions du forfait<ArrowRight className="h-4 w-4" aria-hidden="true" /></NavLink>
            </article>
          );
        })}
      </div>
      <p className="mt-5 text-sm leading-6 text-slate-500">Les prix, les taux de commission et la liste complète des fonctions sont présentés sur la page des forfaits. Un abonnement payant ne garantit pas un nombre de réservations.</p>

      <div className="mt-12 grid gap-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:grid-cols-2">
        <div><p className="text-xs font-semibold uppercase tracking-wider text-blue-700">Le rythme de votre abonnement</p><h3 className="mt-3 text-2xl font-bold text-slate-950">Mensuel ou annuel : comparez sur la même période.</h3><p className="mt-4 leading-7 text-slate-600">La périodicité concerne votre abonnement au forfait. Elle ne change pas le taux horaire que vous proposez aux parents.</p>
          <div className="mt-5 inline-flex rounded-xl border border-slate-200 bg-white p-1" role="group" aria-label="Explorer la facturation">
            {[{ id: "monthly", name: "Mensuel" }, { id: "yearly", name: "Annuel" }].map((option) => <button key={option.id} type="button" aria-pressed={billing === option.id} onClick={() => setBilling(option.id)} className={`rounded-lg px-5 py-2.5 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${billing === option.id ? "bg-blue-700 text-white" : "text-slate-600 hover:bg-blue-50"}`}>{option.name}</button>)}
          </div>
          <div className="mt-4" aria-live="polite" aria-atomic="true"><h4 className="font-semibold text-slate-950">{billing === "monthly" ? "Raisonner mois par mois" : "Se projeter sur une année"}</h4><p className="mt-2 leading-7 text-slate-600">{billing === "monthly" ? "Comparez le coût mensuel du forfait aux économies de commission sur vos séances du mois. C’est un repère utile lorsque votre activité varie." : "Comparez le montant annuel à douze mensualités. Diviser le prix annuel par douze donne un équivalent mensuel pour la comparaison : le paiement reste annuel."}</p></div>
        </div>
        <div className="rounded-2xl border border-blue-100 bg-white p-6"><BarChart3 className="h-7 w-7 text-blue-700" aria-hidden="true" /><h3 className="mt-4 text-xl font-bold text-slate-950">Quand un abonnement devient-il intéressant?</h3><p className="mt-3 leading-7 text-slate-600">À volume de séances égal, une commission plus basse laisse une plus grande part de chaque paiement au tuteur. Comparez cette différence au coût de l’abonnement.</p><div className="mt-5 rounded-xl bg-blue-50 p-4 text-sm leading-7 text-blue-950"><p className="font-semibold">Votre repère de comparaison</p><p className="mt-1">Économies de commission sur la période<br />− coût de l’abonnement sur cette période</p></div><p className="mt-4 text-sm leading-6 text-slate-500">Tenez aussi compte des fonctions utiles à votre activité, notamment des statistiques avancées d’Élite.</p></div>
      </div>

      <div className="mt-12 grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
        <div><p className="text-sm font-semibold uppercase tracking-wider text-blue-700">Pourquoi des forfaits?</p><h3 className="mt-3 text-2xl font-bold text-slate-950">Des outils qui doivent rester fiables, séance après séance.</h3><p className="mt-4 leading-8 text-slate-600">Derrière un agenda, un fichier partagé ou un paiement, il y a une plateforme à héberger, à protéger, à entretenir et à améliorer. Les abonnements et les frais participent au financement de ce travail.</p><p className="mt-4 leading-8 text-slate-600">Le forfait gratuit permet de commencer sans abonnement payant. Les offres payantes permettent d’aller plus loin selon votre activité, avec des commissions réduites et des outils supplémentaires.</p></div>
        <div className="space-y-3">{[
          { icon: LockKeyhole, title: "Hébergement et protection", text: "Faire fonctionner la plateforme et protéger les données qui lui sont confiées." },
          { icon: Code2, title: "Entretien et évolution", text: "Corriger les problèmes et développer les outils qui simplifient la gestion du tutorat." },
          { icon: LifeBuoy, title: "Accompagnement et suivi", text: "Traiter les demandes et assurer le suivi du fonctionnement de la plateforme." },
        ].map(({ icon: Icon, title, text }) => <div key={title} className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-white p-5"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><Icon className="h-5 w-5" aria-hidden="true" /></div><div><h4 className="font-semibold text-slate-950">{title}</h4><p className="mt-1 text-sm leading-7 text-slate-600">{text}</p></div></div>)}</div>
      </div>
    </ContentSection>
  );
}
