import React from "react";

import SectionHeading from "@/pages/components/home/SectionHeading";
import { homeBenefits } from "@/pages/functions/home/homeData";

export default function BenefitsSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Une plateforme complète"
          title="Tout ce qu'il faut pour mieux apprendre"
          description="Accès Tuteur simplifie les étapes qui entourent le tutorat afin que vous puissiez vous concentrer sur l'essentiel : progresser."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {homeBenefits.map(
            ({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group rounded-3xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-gray-200/50"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600">
                  <Icon className="h-6 w-6 text-blue-600 transition group-hover:text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {description}
                </p>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}