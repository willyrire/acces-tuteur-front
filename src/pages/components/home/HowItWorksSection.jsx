import React from "react";
import { GraduationCap, UserRound, Users } from "lucide-react";

import SectionHeading from "@/pages/components/home/SectionHeading";
import { homeJourneys } from "@/pages/functions/home/homeData";

const journeyTabs = [
  {
    key: "parent",
    icon: Users,
  },
  {
    key: "student",
    icon: GraduationCap,
  },
  {
    key: "tutor",
    icon: UserRound,
  },
];

export default function HowItWorksSection() {
  const [activeJourney, setActiveJourney] = React.useState("parent");

  const journey = homeJourneys[activeJourney];

  return (
    <section id="fonctionnement" className="scroll-mt-20 overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Comment ça fonctionne ?"
          title="Un parcours simple, selon votre situation"
          description="Que vous soyez parent, étudiant ou tuteur, Accès Tuteur vous accompagne à chaque étape."
        />

        <div className="mx-auto mt-12 flex max-w-2xl justify-center">
          <div
            className="grid w-full grid-cols-3 gap-1 rounded-2xl bg-gray-100 p-1.5"
            role="tablist"
            aria-label="Choisir votre profil"
          >
            {journeyTabs.map(({ key, icon: Icon }) => {
              const item = homeJourneys[key];
              const isActive = activeJourney === key;

              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveJourney(key)}
                  className={[
                    "flex items-center justify-center gap-2 rounded-xl px-3 py-3",
                    "text-sm font-semibold transition-all duration-200",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                    isActive
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-500 hover:bg-white/50 hover:text-gray-900",
                  ].join(" ")}
                >
                  <Icon
                    className={[
                      "h-5 w-5",
                      isActive ? "text-blue-600" : "text-gray-400",
                    ].join(" ")}
                  />

                  <span className="hidden sm:inline">{item.label}</span>

                  <span className="sm:hidden">{item.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        <JourneyContent key={activeJourney} journey={journey} />
      </div>
    </section>
  );
}

function JourneyContent({ journey }) {
  return (
    <div className="mt-14 animate-[fadeIn_300ms_ease-out]">
      <div className="mb-12 text-center">
        <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
          {journey.description}
        </p>
      </div>

      <div
        className="relative mx-auto"
        style={{
          maxWidth: journey.steps.length >= 5 ? "1200px" : "900px",
        }}
      >
        <div
          className="absolute left-[8%] right-[8%] top-8 hidden h-px bg-gray-200 lg:block"
          aria-hidden="true"
        />

        <div
          className={[
            "grid grid-cols-1 gap-8 sm:grid-cols-2",
            journey.steps.length === 3
              ? "lg:grid-cols-3"
              : journey.steps.length === 4
                ? "lg:grid-cols-4"
                : "lg:grid-cols-5",
          ].join(" ")}
        >
          {journey.steps.map((step, index) => (
            <JourneyStep key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function JourneyStep({ step, index }) {
  const Icon = step.icon;

  return (
    <article className="group relative flex flex-col items-center text-center">
      <div className="relative z-10">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-white shadow-md shadow-gray-200/60 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-200 group-hover:shadow-lg">
          <Icon className="h-7 w-7 text-blue-600" />
        </div>

        <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-gray-900 px-1.5 text-xs font-bold text-white">
          {index + 1}
        </span>
      </div>

      <h3 className="mt-6 text-lg font-bold text-gray-900">{step.title}</h3>

      <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
        {step.description}
      </p>
    </article>
  );
}
