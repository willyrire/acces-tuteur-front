import React from "react";
import { NavLink } from "react-router-dom";
import ContentSection from "@/components/public-content/ContentSection";
import FaqAccordion from "@/components/public-content/FaqAccordion";

export default function TutorFaq({ plansTo }) {
  const items = [
    { id: "free", question: "Puis-je commencer sans payer d’abonnement?", answer: "Oui. Le forfait Essentiel permet de commencer sans abonnement payant. Des commissions et des frais de traitement s’appliquent aux séances payées. Vous pouvez ainsi découvrir la plateforme avant de comparer l’intérêt d’un forfait payant." },
    { id: "price", question: "Qui décide de mon taux horaire?", answer: "Vous fixez votre taux horaire. Choisissez un tarif cohérent avec les matières que vous enseignez, votre expérience et la préparation nécessaire. Les frais applicables sont déduits du montant destiné au tuteur." },
    { id: "plans", question: "Pourquoi payer un forfait s’il y a déjà des frais sur les séances?", answer: "L’abonnement et les frais de séance correspondent à deux coûts distincts. Un forfait payant donne accès aux avantages de son offre, notamment une commission réduite. Selon votre volume de tutorat, les économies réalisées peuvent compenser son coût. Comparez ces montants sur la même période et tenez compte des outils dont vous avez besoin." },
    { id: "elite", question: "Qu’apporte Élite par rapport à Pro?", answer: <>Élite prévoit une commission encore plus basse que Pro et des statistiques avancées. L’intérêt dépend de votre activité et de vos besoins de suivi. Consultez la <NavLink to={plansTo} className="font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900">comparaison des forfaits</NavLink> pour les taux, les prix et les fonctions incluses.</> },
    { id: "verified", question: "À quoi sert la vérification des tuteurs?", answer: "Elle permet à l’équipe d’analyser les documents demandés et vos réponses à des mises en situation. Elle contribue à établir un cadre de confiance pour les familles. Un abonnement payant ne remplace pas cette analyse et ne vaut pas approbation d’un dossier." },
    { id: "reservations", question: "Un forfait payant me garantit-il des élèves?", answer: "Non. Un forfait donne accès aux avantages décrits dans son offre. Les réservations dépendent des besoins des familles, de vos matières, de votre profil, de votre tarif et de vos disponibilités. Soignez votre présentation et proposez un accompagnement que vous pouvez tenir dans la durée." },
    { id: "withdrawal", question: "Est-ce que je reçois l’argent dès qu’un parent paie?", answer: "Le paiement est suivi dans votre solde, mais les fonds peuvent d’abord être en attente. Une fois disponibles, ils peuvent faire l’objet d’une demande de retrait selon les conditions de la plateforme. Référez-vous aux indications de votre compte pour les délais et le statut de votre demande." },
    { id: "independent", question: "Est-ce qu’Accès Tuteur m’embauche?", answer: "Vous proposez vos services comme tuteur indépendant. Accès Tuteur agit comme intermédiaire et fournit les outils de gestion. Vous restez responsable de votre accompagnement et choisissez votre taux horaire ainsi que vos disponibilités." },
  ];
  return <ContentSection id="questions-tuteur" eyebrow="Vos questions" title="Des réponses avant de vous lancer." description="Le fonctionnement doit être aussi clair que les explications que vous donnerez à vos élèves."><FaqAccordion items={items} /></ContentSection>;
}
