import React from "react";
import {
  Monitor,
  Cable,
  KeyRound,
  LockKeyhole,
  Server,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    id: "browser",
    icon: Monitor,
    label: "Votre appareil",
    short: "Vous entrez une information",
    title: "Tout commence dans votre navigateur",
    description:
      "Quand vous vous connectez, Accès Tuteur reçoit les informations nécessaires pour traiter votre demande. Les données sensibles ne sont pas volontairement conservées dans le navigateur plus longtemps que nécessaire au fonctionnement de la plateforme.",
    example: "Exemple : vous saisissez votre mot de passe pour vous connecter.",
  },
  {
    id: "transport",
    icon: Cable,
    label: "En transit",
    short: "La connexion est chiffrée",
    title: "Les échanges passent par HTTPS",
    description:
      "En production, les échanges entre votre navigateur et les serveurs passent par une connexion HTTPS. Le chiffrement TLS protège le contenu pendant son trajet sur Internet et réduit fortement le risque qu'un tiers puisse le lire en transit.",
    example: "Exemple : le mot de passe n'est pas envoyé sur le réseau en texte lisible.",
  },
  {
    id: "api",
    icon: Server,
    label: "API",
    short: "Chaque requête est vérifiée",
    title: "Le serveur ne fait pas confiance au navigateur",
    description:
      "L'API vérifie l'authentification, les permissions et les données reçues. L'interface peut masquer un bouton, mais la vraie décision d'autoriser ou non une action est prise côté serveur.",
    example:
      "Exemple : un tuteur ne peut pas simplement modifier l'URL pour obtenir des privilèges d'administrateur.",
  },
  {
    id: "password",
    icon: KeyRound,
    label: "Mot de passe",
    short: "Jamais stocké en clair",
    title: "Le mot de passe est transformé avec bcrypt",
    description:
      "Accès Tuteur ne conserve pas votre mot de passe original. Une empreinte bcrypt est enregistrée à la place. À la connexion, le serveur vérifie si le mot de passe fourni correspond à cette empreinte.",
    example:
      "Conséquence : même l'application n'a pas besoin de connaître votre mot de passe original après son enregistrement.",
  },
  {
    id: "session",
    icon: LockKeyhole,
    label: "Session",
    short: "Le cookie est protégé",
    title: "La session est chiffrée et signée",
    description:
      "La session repose sur un cookie protégé par chiffrement et par une signature HMAC. Le chiffrement vise à empêcher sa lecture directe et la signature permet de détecter une modification non autorisée.",
    example:
      "Important : protéger un cookie n'annule pas le risque d'un vol de session; HTTPS, l'expiration et les contrôles serveur restent donc essentiels.",
  },
];

const DataJourney = () => {
  const [activeId, setActiveId] = React.useState(steps[0].id);
  const activeStep = steps.find((step) => step.id === activeId) || steps[0];
  const ActiveIcon = activeStep.icon;

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-3">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = step.id === activeId;

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => setActiveId(step.id)}
              className={`group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all ${
                isActive
                  ? "border-primary/40 bg-primary/5 shadow-sm"
                  : "bg-background hover:border-primary/20 hover:bg-muted/40"
              }`}
              aria-pressed={isActive}
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground group-hover:text-foreground"
                }`}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-muted-foreground">
                    Étape {index + 1}
                  </span>
                  {isActive && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                      <ShieldCheck className="h-3.5 w-3.5" /> active
                    </span>
                  )}
                </div>
                <p className="mt-0.5 font-semibold text-foreground">{step.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{step.short}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="rounded-3xl border bg-card p-6 shadow-sm sm:p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <ActiveIcon className="h-6 w-6" aria-hidden="true" />
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">
          {activeStep.label}
        </p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight">
          {activeStep.title}
        </h3>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          {activeStep.description}
        </p>

        <div className="mt-6 rounded-2xl border bg-muted/35 p-4">
          <p className="text-sm font-medium leading-6 text-foreground">
            {activeStep.example}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataJourney;
