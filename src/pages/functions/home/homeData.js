import {
  CalendarCheck,
  CircleDollarSign,
  FileText,
  Link2,
  Search,
  UserPlus,
  Users,
} from "lucide-react";

export const homeBenefits = [
  {
    icon: Search,
    title: "Trouvez le bon tuteur",
    description:
      "Trouvez un tuteur adapté à vos besoins et avancez avec un accompagnement personnalisé.",
  },
  {
    icon: CalendarCheck,
    title: "Réservez simplement",
    description:
      "Planifiez vos séances de tutorat facilement selon vos disponibilités.",
  },
  {
    icon: FileText,
    title: "Partagez vos fichiers",
    description:
      "Centralisez les documents utiles à vos séances et gardez vos ressources accessibles.",
  },
];

export const homeJourneys = {
  parent: {
    label: "Je suis un parent",
    shortLabel: "Parent",
    description:
      "Accompagnez votre enfant dans son parcours scolaire et gérez facilement son tutorat.",
    steps: [
      {
        icon: UserPlus,
        title: "Créez votre compte",
        description:
          "Créez votre espace parent sur Accès Tuteur en quelques instants.",
      },
      {
        icon: Users,
        title: "Votre enfant crée son compte (optionel) ",
        description:
          "Votre enfant possède son propre espace adapté à son parcours scolaire.",
      },
      {
        icon: Link2,
        title: "Liez vos comptes",
        description:
          "Associez le compte de votre enfant au vôtre pour l'accompagner.",
      },
      {
        icon: Search,
        title: "Trouvez le tuteur idéal",
        description:
          "Recherchez un tuteur qui correspond aux besoins et aux objectifs de votre enfant.",
      },
      {
        icon: CalendarCheck,
        title: "Réservez une rencontre",
        description:
          "Choisissez un moment qui convient et planifiez la séance de tutorat.",
      },
    ],
  },

  student: {
    label: "Je suis un étudiant",
    shortLabel: "Étudiant",
    description:
      "Trouvez rapidement l'accompagnement dont vous avez besoin pour progresser.",
    steps: [
      {
        icon: UserPlus,
        title: "Créez votre compte",
        description:
          "Créez votre espace personnel et commencez votre recherche.",
      },
      {
        icon: Search,
        title: "Trouvez votre tuteur",
        description:
          "Explorez les profils et choisissez le tuteur qui correspond à vos besoins.",
      },
      {
        icon: CalendarCheck,
        title: "Réservez votre cours",
        description:
          "Sélectionnez une disponibilité et planifiez votre prochaine séance.",
      },
    ],
  },

  tutor: {
    label: "Je suis un tuteur",
    shortLabel: "Tuteur",
    description:
      "Présentez votre expertise et commencez à accompagner des étudiants.",
    steps: [
      {
        icon: UserPlus,
        title: "Créez votre compte",
        description:
          "Inscrivez-vous comme tuteur et accédez à votre espace professionnel.",
      },
      {
        icon: FileText,
        title: "Complétez votre profil",
        description:
          "Présentez votre parcours, votre expérience et les matières que vous enseignez.",
      },
      {
        icon: CircleDollarSign,
        title: "Définissez votre tarif",
        description:
          "Indiquez votre tarif afin que les étudiants sachent à quoi s'attendre.",
      },
      {
        icon: CalendarCheck,
        title: "Ajoutez vos disponibilités",
        description:
          "Définissez les moments où vous êtes disponible pour recevoir des réservations.",
      },
    ],
  },
};

export const studentAdvantages = [
  "Trouvez un tuteur adapté à vos besoins",
  "Planifiez facilement vos séances",
  "Partagez les documents nécessaires",
];

export const tutorAdvantages = [
  "Centralisez vos séances",
  "Partagez des ressources avec vos élèves",
  "Concentrez-vous sur l'accompagnement",
];