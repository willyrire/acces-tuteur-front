import React from "react";
import { ArrowRight, CreditCard, Hourglass, Wallet } from "lucide-react";
import ContentSection from "@/components/public-content/ContentSection";

export default function TutorPayments() {
  return (
    <ContentSection id="paiements-tuteur" tone="soft" eyebrow="Vos paiements, concrètement" title="Du paiement de la famille à votre solde." description="Vous fixez votre taux horaire. Accès Tuteur perçoit les paiements des réservations et redistribue les montants aux tuteurs après déduction des frais applicables.">
      <ol className="grid gap-5 md:grid-cols-3">
        {[
          { icon: CreditCard, title: "La famille paie sa réservation", text: "Le montant de la séance est établi selon votre offre. Le paiement passe par la plateforme et son fournisseur de paiement." },
          { icon: Hourglass, title: "Votre part est inscrite au solde", text: "Les frais sont déduits du montant destiné au tuteur. Les fonds peuvent rester en attente pendant les délais prévus avant de devenir disponibles." },
          { icon: Wallet, title: "Vous demandez un retrait", text: "Lorsque les fonds sont disponibles et les conditions remplies, vous demandez leur versement. Le traitement et l’approbation du retrait suivent les modalités de la plateforme." },
        ].map(({ icon: Icon, title, text }, index) => <li key={title} className="rounded-2xl border border-blue-100 bg-white p-6"><div className="flex items-center justify-between"><Icon className="h-6 w-6 text-blue-700" aria-hidden="true" /><span className="text-sm font-semibold text-slate-400">0{index + 1}</span></div><h3 className="mt-5 text-lg font-semibold text-slate-950">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></li>)}
      </ol>
      <div className="mt-7 rounded-3xl border border-blue-200 bg-white p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">Un exemple pour visualiser</p>
        <h3 className="mt-3 text-xl font-bold text-slate-950">Une séance d’une heure à 40 $/h.</h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
          <div className="rounded-2xl bg-slate-50 p-5"><p className="text-sm text-slate-500">Montant de la séance</p><p className="mt-2 text-3xl font-bold text-slate-950">40,00 $</p><p className="mt-2 text-xs leading-5 text-slate-500">Exemple avant taxes éventuelles.</p></div>
          <ArrowRight className="mx-auto h-5 w-5 rotate-90 text-blue-700 sm:rotate-0" aria-hidden="true" />
          <div className="rounded-2xl bg-blue-50 p-5"><p className="text-sm text-blue-700">Montant destiné au tuteur</p><p className="mt-2 text-xl font-bold text-blue-950">40,00 $ − frais applicables</p><p className="mt-2 text-xs leading-5 text-blue-800">Selon le forfait et le paiement.</p></div>
        </div>
        <p className="mt-5 leading-7 text-slate-600">La commission de la plateforme et les frais du fournisseur de paiement sont déduits du montant destiné au tuteur. Le coût d’un abonnement payant est une dépense distincte : il ne faut pas le confondre avec les frais d’une séance.</p>
      </div>
    </ContentSection>
  );
}
