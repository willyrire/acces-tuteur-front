import React from "react";

import {
  BookOpen,
  Code2,
  HeartHandshake,
  Layers3,
  MessageSquareMore,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import { getCreatorAge } from "../func/age";

const About = ({ isAuth, userName }) => {
  const currentAge = getCreatorAge();

  const features = [
    {
      icon: Users,
      title: "Pour tout le monde",
      description:
        "Accès Tuteur permet aux tuteurs, aux étudiants, aux parents et aux enfants d'utiliser une plateforme adaptée à leurs besoins.",
    },
    {
      icon: Layers3,
      title: "Tout au même endroit",
      description:
        "Rencontres, fichiers, paiements, communications et suivi du tutorat peuvent être centralisés sur une seule plateforme.",
    },
    {
      icon: MessageSquareMore,
      title: "Moins de messageries dispersées",
      description:
        "L'objectif est de réduire la dépendance aux réseaux sociaux et aux nombreuses applications habituellement utilisées pour organiser le tutorat.",
    },
    {
      icon: ShieldCheck,
      title: "Une plateforme pensée pour durer",
      description:
        "Accès Tuteur est développé avec une attention particulière portée à la sécurité, à la confidentialité et à l'expérience utilisateur.",
    },
  ];

  return (
    <>
      <title>Accès Tuteur | À propos</title>

      <meta
        name="description"
        content="Découvrez l'histoire d'Accès Tuteur, une plateforme conçue pour simplifier et centraliser la gestion du tutorat."
      />

      <div className="min-h-screen bg-white">
        <main className="min-h-screen text-slate-900">
          {/* Hero */}
          <section className="mt-10 border-b border-blue-100 bg-linear-to-b from-blue-50/90 via-blue-50/40 to-white">
            <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
              <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                    <Sparkles className="h-4 w-4" />
                    À propos d'Accès Tuteur
                  </div>

                  <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                    Une plateforme de tutorat née d'un besoin réel.
                  </h1>

                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                    Accès Tuteur est une plateforme conçue pour simplifier,
                    centraliser et moderniser la gestion du tutorat.
                  </p>
                </div>

                <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-lg shadow-blue-100/50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                    <Code2 className="h-6 w-6" />
                  </div>

                  <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-blue-700">
                    Le créateur
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                    William
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    Étudiant au cégep en Sciences de la nature, passionné
                    d'informatique et de développement Web depuis le secondaire.
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                    <BookOpen className="h-4 w-4 text-blue-600" />
                    {currentAge} ans · Québec, Canada
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Histoire */}
          <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                    Mon histoire
                  </p>

                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                    D'un simple outil personnel à une vraie plateforme
                  </h2>
                </div>
              </div>

              <div className="space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Moi, c'est William, j'ai {currentAge} ans et je suis le
                  créateur d'Accès Tuteur. Je suis présentement étudiant au
                  cégep en Sciences de la nature et passionné d'informatique
                  depuis le secondaire 2.
                </p>

                <p>
                  Au fil des années, j'ai progressivement découvert le
                  développement Web, et Accès Tuteur est devenu mon premier
                  véritable projet entrepreneurial.
                </p>

                <p>
                  L'idée est née lorsque j'ai commencé à faire du tutorat auprès
                  d'élèves du secondaire qui éprouvaient certaines difficultés
                  scolaires.
                </p>
              </div>
            </div>
          </section>

          {/* Problème */}
          <section className="border-y border-blue-100 bg-blue-50/70">
            <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <HeartHandshake className="h-6 w-6" />
                </div>

                <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950">
                  Le problème que je voulais régler
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Je me suis rapidement rendu compte que la gestion du tutorat
                  pouvait devenir complexe : fichiers à partager, rencontres à
                  organiser, communications avec les parents, paiements à gérer
                  et suivi avec les élèves.
                </p>

                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Beaucoup de choses étaient réparties entre plusieurs
                  applications et services différents.
                </p>
              </div>

              <div className="mt-14 grid gap-5 sm:grid-cols-2">
                {features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100/60"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="mt-5 text-lg font-semibold text-slate-950">
                        {feature.title}
                      </h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Naissance */}
          <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50 p-8 shadow-sm sm:p-12">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                  La naissance d'Accès Tuteur
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                  Pourquoi ne pas offrir cet outil à tout le monde?
                </h2>

                <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                  <p>
                    Au départ, je voulais simplement créer un petit outil pour
                    m'aider à mieux gérer mes propres séances de tutorat.
                  </p>

                  <p>
                    Puis je me suis posé une question : pourquoi ne pas rendre
                    cet outil accessible à tout le monde?
                  </p>

                  <p className="font-semibold text-blue-700">
                    C'est ainsi qu'est né Accès Tuteur.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Objectif */}
          <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8 lg:pb-24">
            <div className="grid gap-8 rounded-3xl bg-gradient-to-r from-blue-700 to-blue-600 px-8 py-12 text-white shadow-xl shadow-blue-200/60 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
                  Notre objectif
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight">
                  Simplifier le tutorat, sans multiplier les outils.
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-7 text-blue-50">
                  Accès Tuteur permet de centraliser la gestion du tutorat au
                  même endroit afin que chaque personne impliquée puisse
                  disposer des outils dont elle a réellement besoin.
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-sm">
                <Sparkles className="h-5 w-5" />
                <span className="font-medium">
                  Gratuitement* pour les tuteurs
                </span>
              </div>
            </div>
          </section>

          {/* Mention */}
          <section className="border-t border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
              <p className="text-xs leading-5 text-slate-500">
                * Les conditions d'utilisation et la politique de confidentialité
                prévalent sur cette présentation.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default About;