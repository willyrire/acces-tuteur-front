import React from "react";
import {
  BadgeCheck,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import InfoCard from "@/components/InfoCard";
import SectionBadge from "@/components/SectionBadge";

import DataJourney from "@/module/public/SecuriteDonnes/components/DataJourney";
import DefenseLayers from "@/module/public/SecuriteDonnes/components/DefenseLayers";
import SecurityFaq from "@/module/public/SecuriteDonnes/components/SecurityFaq";

const protections = [
  {
    icon: KeyRound,
    title: "Mots de passe hachés",
    description:
      "Les mots de passe ne sont pas conservés en clair. Une empreinte bcrypt est utilisée pour vérifier les connexions.",
  },
  {
    icon: LockKeyhole,
    title: "Sessions protégées",
    description:
      "Les informations de session sont protégées par chiffrement et par une signature HMAC afin de limiter leur lecture et leur modification.",
  },
  {
    icon: Fingerprint,
    title: "Double authentification",
    description:
      "La plateforme prend en charge un deuxième facteur par code courriel ou TOTP pour ajouter une étape de vérification.",
  },
  {
    icon: BadgeCheck,
    title: "Permissions côté serveur",
    description:
      "Les accès sont contrôlés avec un mélange de rôles et de règles contextuelles plutôt qu'en se fiant uniquement à l'interface.",
  },
  {
    icon: Server,
    title: "Validation des requêtes",
    description:
      "Les actions sensibles sont contrôlées par l'API. Un utilisateur ne gagne pas un droit simplement parce qu'il modifie ce qui est affiché dans son navigateur.",
  },
  {
    icon: LockKeyhole,
    title: "Documents sensibles isolés",
    description:
      "Les fichiers qui nécessitent une protection peuvent être gardés hors de l'accès public direct et servis seulement après une vérification d'autorisation.",
  },
];

const SecuriteDonnes = ({ isAuth, userName }) => {
  return (
    <>
      <title>Accès Tuteur | Sécurité des données</title>
      <meta
        name="description"
        content="Découvrez concrètement comment Accès Tuteur protège les comptes, les sessions et les données grâce à plusieurs couches de sécurité."
      />

      <div className="min-h-screen bg-background">

        <main>
          <section className="relative overflow-hidden border-b pt-10">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.10),transparent_34%)]" />

            <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
              <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div>
                  <SectionBadge icon={ShieldCheck}>Sécurité des données</SectionBadge>

                  <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    Vos données ne reposent pas sur un seul cadenas.
                  </h1>

                  <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                    Accès Tuteur utilise plusieurs couches de protection qui se
                    complètent : connexion sécurisée, validation côté serveur,
                    permissions, hachage des mots de passe, protection des sessions et
                    double authentification.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3 text-sm">
                    <span className="rounded-full border bg-card px-4 py-2 font-medium">
                      HTTPS
                    </span>
                    <span className="rounded-full border bg-card px-4 py-2 font-medium">
                      bcrypt
                    </span>
                    <span className="rounded-full border bg-card px-4 py-2 font-medium">
                      HMAC
                    </span>
                    <span className="rounded-full border bg-card px-4 py-2 font-medium">
                      2FA
                    </span>
                    <span className="rounded-full border bg-card px-4 py-2 font-medium">
                      RBAC + PBAC
                    </span>
                  </div>
                </div>

                <div className="relative rounded-[2rem] border bg-card p-7 shadow-sm sm:p-8">
                  <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Sparkles className="h-5 w-5" />
                  </div>

                  <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                    Le principe
                  </p>
                  <h2 className="mt-3 pr-12 text-2xl font-bold tracking-tight">
                    Si une couche échoue, les autres restent là.
                  </h2>

                  <div className="mt-7 space-y-3">
                    {[
                      "Une connexion chiffrée protège le trajet.",
                      "L'API vérifie qui demande quoi.",
                      "Les permissions limitent l'action possible.",
                      "Les secrets sont stockés sous une forme plus difficile à exploiter.",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl bg-muted/35 p-4"
                      >
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
                          {index + 1}
                        </div>
                        <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Suivez une donnée
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Que se passe-t-il quand vous vous connectez?
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Cliquez sur les étapes pour suivre le parcours d'une information, de
                votre navigateur jusqu'aux mécanismes de session.
              </p>
            </div>

            <DataJourney />
          </section>

          <section className="border-y bg-muted/25">
            <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Concrètement
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Les protections principales
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                  Pas de jargon pour faire joli : chaque mécanisme a un rôle précis.
                </p>
              </div>

              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {protections.map((protection) => (
                  <InfoCard
                    key={protection.title}
                    icon={protection.icon}
                    title={protection.title}
                    description={protection.description}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <SectionBadge icon={ShieldCheck}>Défense en profondeur</SectionBadge>
                <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                  La sécurité fonctionne mieux en équipe.
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                  Une seule protection peut avoir une faille ou être mal utilisée.
                  Plusieurs couches indépendantes réduisent le risque qu'un problème
                  devienne un accès réel à vos données.
                </p>
              </div>

              <DefenseLayers />
            </div>
          </section>

          <section className="border-y bg-muted/25">
            <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
              <div className="grid gap-8 rounded-3xl border bg-background p-7 shadow-sm lg:grid-cols-2 lg:p-10">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                    Une promesse importante
                  </p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight">
                    On ne vous dira jamais que la sécurité est parfaite.
                  </h2>
                </div>

                <div className="space-y-4 leading-7 text-muted-foreground">
                  <p>
                    Aucun site Web, aucune banque et aucune plateforme n'est totalement
                    invulnérable. Une bonne sécurité consiste à réduire les risques,
                    limiter l'impact d'un incident et ne jamais dépendre d'une seule
                    barrière.
                  </p>
                  <p>
                    Accès Tuteur est donc conçu autour de contrôles complémentaires et
                    du principe du moindre privilège : un compte ou une requête ne doit
                    avoir accès qu'à ce dont il a réellement besoin.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Questions fréquentes
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                La sécurité, sans langue de bois
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Quelques réponses aux questions qui reviennent souvent lorsqu'on parle
                de mots de passe, de sessions et de double authentification.
              </p>
            </div>

            <div className="mt-10">
              <SecurityFaq />
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8 lg:pb-24">
            <div className="overflow-hidden rounded-3xl bg-primary px-8 py-10 text-primary-foreground sm:px-10 lg:px-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider opacity-80">
                    En résumé
                  </p>
                  <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight">
                    Protéger vos données, c'est surtout éviter de faire confiance à une
                    seule chose.
                  </h2>
                  <p className="mt-5 max-w-3xl leading-7 opacity-90">
                    Chaque couche répond à un risque différent. Ensemble, elles rendent
                    l'accès non autorisé plus difficile et limitent ce qu'une erreur
                    isolée peut permettre.
                  </p>
                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/10 backdrop-blur">
                  <ShieldCheck className="h-8 w-8" aria-hidden="true" />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default SecuriteDonnes;
