import React from "react";
import {
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import { getHomePrimaryAction } from "@/pages/functions/home/getHomePrimaryAction";

export default function FinalCallToAction({ isAuth }) {
  const primaryAction = getHomePrimaryAction(isAuth);

  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gray-900 px-6 py-16 text-center text-white sm:px-12">
        <div
          className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-2xl">
          <ShieldCheck className="mx-auto h-10 w-10 text-blue-400" />

          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Prêt à avancer ?
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-300">
            Rejoignez Accès Tuteur et profitez d'un espace conçu
            pour rendre le tutorat plus simple, organisé et
            accessible.
          </p>

          <a
            href={primaryAction.href}
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-gray-900 transition hover:bg-gray-100"
          >
            {primaryAction.label}

            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}