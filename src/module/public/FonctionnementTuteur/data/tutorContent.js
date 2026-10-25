import {
  CalendarDays, CircleDollarSign, ClipboardCheck, FileText, GraduationCap,
  LayoutDashboard, MessagesSquare, SlidersHorizontal, UserRound, Wallet,
} from "lucide-react";

// Existing destination supplied in the earlier project context.
// Change only this value if your live routes differ.
export const TUTOR_ROUTES = { plans: "/", security: "/contenu/securite-donnees" };

export const TUTOR_STEPS = [
  {
    id: "profile", icon: UserRound, title: "Présentez-vous", subtitle: "Un profil à votre image",
    heading: "Donnez aux familles une bonne raison de vous choisir.",
    description: "Votre profil présente les matières que vous enseignez, les niveaux que vous accompagnez et votre approche. Un parent doit pouvoir comprendre rapidement ce que vous pouvez apporter à son enfant.",
    checklist: ["Indiquez vos matières et les niveaux que vous maîtrisez.", "Présentez votre expérience avec des exemples concrets.", "Expliquez votre façon d’aider un élève à comprendre."],
    example: "« J’aide les élèves du secondaire à comprendre les maths en reprenant les étapes avec eux, à leur rythme. »",
    tip: "Un profil précis aide les familles à reconnaître un accompagnement adapté à leurs besoins.",
  },
  {
    id: "verification", icon: ClipboardCheck, title: "Faites vérifier votre dossier", subtitle: "La confiance se prépare",
    heading: "Montrez votre sérieux avant la première rencontre.",
    description: "Bien que optionnel, la demande de vérification rassemble vos documents et vos réponses à des mises en situation de tutorat. L’équipe analyse le dossier et vous communique sa décision sur la plateforme.",
    checklist: ["Fournissez les documents demandés dans votre dossier.", "Répondez aux mises en situation avec votre propre approche.", "Consultez le statut de votre demande et les indications de l’équipe."],
    example: "Comment adapteriez-vous votre séance si l’élève arrivait avec un besoin différent de celui prévu?",
    tip: "La vérification aide à établir la confiance; elle ne garantit ni un nombre de réservations ni les résultats scolaires d’un élève.",
  },
  {
    id: "offer", icon: SlidersHorizontal, title: "Organisez votre offre", subtitle: "Votre tarif, votre horaire",
    heading: "Faites une place au tutorat dans votre vraie vie.",
    description: "Vous fixez votre taux horaire et proposez des disponibilités adaptées à votre horaire. Que vous soyez aux études ou déjà en activité, votre offre doit correspondre au temps et aux compétences que vous pouvez réellement consacrer aux élèves.",
    checklist: ["Choisissez un tarif cohérent avec votre accompagnement.", "Proposez des créneaux que vous pourrez respecter.", "Précisez votre offre de tutorat en ligne ou en présentiel."],
    example: "Deux soirs disponibles par semaine? Construisez votre offre autour de ces créneaux.",
    tip: "Gardez aussi du temps pour préparer vos séances. Une disponibilité réaliste vaut mieux qu’un horaire trop chargé.",
  },
  {
    id: "lesson", icon: GraduationCap, title: "Accompagnez vos élèves", subtitle: "De la réservation à la progression",
    heading: "Transformez une rencontre en déclic.",
    description: "Les familles réservent sur la plateforme. Vous retrouvez les informations de la rencontre, échangez sur les besoins et partagez les fichiers utiles pour préparer un accompagnement concret.",
    checklist: ["Clarifiez la notion ou l’objectif à travailler.", "Préparez des exemples et des exercices adaptés.", "Faites le point sur la compréhension et la prochaine étape."],
    example: "Un élève bloque sur les fractions? Commencez par repérer l’étape qui pose problème avant d’ajouter de nouveaux exercices.",
    tip: "Votre valeur se voit dans la qualité de votre accompagnement, votre écoute et votre fiabilité.",
  },
  {
    id: "payment", icon: Wallet, title: "Suivez vos revenus", subtitle: "Un paiement, un solde, un retrait",
    heading: "Gardez une vue claire sur votre activité.",
    description: "Le parent paie sa réservation sur Accès Tuteur. La plateforme perçoit le paiement, déduit les frais applicables et inscrit le montant destiné au tuteur dans son solde. Les fonds disponibles peuvent ensuite faire l’objet d’une demande de retrait.",
    checklist: ["Consultez les paiements et les frais liés à vos séances.", "Distinguez les fonds en attente des fonds disponibles.", "Demandez un retrait lorsque les conditions sont remplies."],
    example: "Une séance réservée, son paiement et votre solde restent liés : vous pouvez suivre où en est chaque montant.",
    tip: "Un paiement reçu n’est pas forcément immédiatement disponible. Les délais et conditions de retrait sont indiqués sur la plateforme.",
  },
];

export const TUTOR_BENEFITS = [
  { icon: CalendarDays, title: "Un horaire plus lisible", description: "Présentez vos disponibilités et retrouvez vos rencontres dans un cadre commun avec les familles. Moins d’allers-retours pour savoir quand vous retrouver." },
  { icon: UserRound, title: "Une vitrine pour votre expertise", description: "Vos matières, vos niveaux et votre approche donnent aux parents les informations pour choisir un accompagnement adapté à leur enfant." },
  { icon: MessagesSquare, title: "Des échanges au bon endroit", description: "Centralisez les communications liées au tutorat pour retrouver les besoins d’un élève sans les chercher entre plusieurs messageries." },
  { icon: FileText, title: "Des documents faciles à retrouver", description: "Partagez les fichiers utiles au tutorat et gardez les ressources près des échanges qui leur donnent du contexte." },
  { icon: CircleDollarSign, title: "Des revenus que vous pouvez suivre", description: "Retrouvez les paiements, les frais et votre solde sur la plateforme. Vous fixez votre tarif; les déductions applicables déterminent le montant qui vous revient." },
  { icon: LayoutDashboard, title: "Une activité mieux organisée", description: "Profil, rencontres, communications, fichiers et paiements : un point de repère commun pour gérer votre tutorat et consacrer votre énergie aux élèves." },
];

// These qualitative differences were defined by the platform owner.
// Prices and numeric commission rates are deliberately not duplicated here:
// the checkout page remains the source for current commercial terms.
export const TUTOR_PLANS = [
  { id: "essentiel", name: "Essentiel", label: "Pour commencer", priceLabel: "Sans abonnement payant", summary: "Découvrez la plateforme et lancez votre activité à votre rythme.", features: ["Accès à la plateforme sans abonnement payant", "Commission standard sur les séances", "Une première étape pour prendre vos repères"], note: "Des frais s’appliquent aux séances payées, même avec un forfait gratuit." },
  { id: "pro", name: "Pro", label: "Pour une activité régulière", priceLabel: "Abonnement payant", summary: "Comparez le coût de l’abonnement aux économies apportées par une commission réduite.", features: ["Commission réduite par rapport à Essentiel", "Formule mensuelle ou annuelle", "À évaluer selon votre volume de tutorat"], note: "L’intérêt financier dépend du prix du forfait et du montant de vos séances." },
  { id: "elite", name: "Élite", label: "Pour aller plus loin", priceLabel: "Abonnement payant", summary: "Associez une commission encore plus basse à des statistiques avancées pour mieux comprendre votre activité.", features: ["Commission réduite par rapport à Pro", "Statistiques avancées sur votre activité", "Formule mensuelle ou annuelle"], note: "Comparez les économies et les outils dont vous avez réellement besoin." },
];

export const TUTOR_PROFILES = [
  { id: "starting", title: "Je me lance", subtitle: "Je veux prendre mes repères", planId: "essentiel", heading: "Commencez simplement avec Essentiel.", description: "Vous pouvez découvrir le fonctionnement de la plateforme sans ajouter un abonnement payant à vos dépenses. Prenez le temps de construire votre profil et d’organiser vos premières séances." },
  { id: "regular", title: "Je donne des séances régulièrement", subtitle: "Je veux comparer les frais", planId: "pro", heading: "Regardez ce que Pro peut changer pour vous.", description: "Lorsque votre activité devient régulière, une commission réduite peut compenser le coût de l’abonnement. Comparez les frais sur votre volume réel de séances avant de choisir." },
  { id: "growing", title: "Je développe mon activité", subtitle: "Je veux aussi mieux l’analyser", planId: "elite", heading: "Explorez les avantages d’Élite.", description: "Une commission encore plus basse et des statistiques avancées peuvent vous aider à suivre une activité plus soutenue. Le bon choix dépend autant de vos besoins de suivi que de vos revenus." },
];
