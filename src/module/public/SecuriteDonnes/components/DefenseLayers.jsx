import React from "react";
import {
  BadgeCheck,
  Fingerprint,
  KeyRound,
  Server,
  ShieldCheck,
} from "lucide-react";

const layers = [
  {
    icon: ShieldCheck,
    title: "Connexion sécurisée",
    description:
      "HTTPS protège les échanges entre votre appareil et la plateforme pendant leur transit.",
  },
  {
    icon: Server,
    title: "Validation côté serveur",
    description:
      "L'API vérifie les données reçues et ne se contente jamais de faire confiance à ce que l'interface affirme.",
  },
  {
    icon: BadgeCheck,
    title: "Autorisations précises",
    description:
      "Les contrôles RBAC et PBAC limitent les actions selon le rôle, les permissions et le contexte de la requête.",
  },
  {
    icon: KeyRound,
    title: "Secrets difficiles à exploiter",
    description:
      "Les mots de passe sont hachés avec bcrypt et les informations de session sont protégées séparément.",
  },
  {
    icon: Fingerprint,
    title: "Deuxième facteur",
    description:
      "La double authentification peut ajouter une preuve supplémentaire, par courriel ou via une application TOTP.",
  },
];

const DefenseLayers = () => {
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-start">
      <div className="space-y-3">
        {layers.map((layer, index) => {
          const Icon = layer.icon;
          const active = openIndex === index;

          return (
            <button
              key={layer.title}
              type="button"
              onClick={() => setOpenIndex(index)}
              className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                active
                  ? "border-primary/40 bg-primary/5"
                  : "bg-background hover:bg-muted/40"
              }`}
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Couche {index + 1}
                </p>
                <p className="mt-0.5 font-semibold">{layer.title}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="rounded-3xl border bg-card p-7 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            {React.createElement(layers[openIndex].icon, {
              className: "h-5 w-5",
              "aria-hidden": true,
            })}
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Défense en profondeur</p>
            <h3 className="font-semibold">{layers[openIndex].title}</h3>
          </div>
        </div>

        <p className="mt-5 leading-7 text-muted-foreground">
          {layers[openIndex].description}
        </p>

        <div className="mt-6 rounded-2xl bg-muted/40 p-5">
          <p className="text-sm leading-6 text-muted-foreground">
            L'idée n'est pas qu'une seule protection soit parfaite. C'est que plusieurs
            protections indépendantes rendent une erreur ou une attaque beaucoup plus
            difficile à transformer en accès réel aux données.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DefenseLayers;
