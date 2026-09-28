import React from "react";
import {
  BookOpen,
  CalendarCheck,
  FileText,
  GraduationCap,
  Search,
  Sparkles,
  Users,
} from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div
        className="absolute inset-6 rotate-3 rounded-[2rem] bg-blue-100"
        aria-hidden="true"
      />

      <div className="relative rounded-[2rem] border border-gray-200 bg-white p-6 shadow-2xl shadow-gray-200/70 sm:p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">
              Votre apprentissage
            </p>

            <p className="mt-1 text-xl font-bold text-gray-900">
              Tout au même endroit.
            </p>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
            <GraduationCap className="h-6 w-6 text-blue-600" />
          </div>
        </div>

        <div className="space-y-4">
          <PreviewCard
            icon={Search}
            title="Trouvez un tuteur"
            text="Selon vos besoins"
          />

          <PreviewCard
            icon={CalendarCheck}
            title="Prochaine séance"
            text="Planifiez vos rencontres"
          />

          <PreviewCard
            icon={FileText}
            title="Documents partagés"
            text="Vos ressources accessibles"
          />
        </div>

        <div className="mt-6 rounded-2xl bg-gray-900 p-5 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <Sparkles className="h-5 w-5" />
            </div>

            <div>
              <p className="font-semibold">
                Votre réussite commence ici.
              </p>

              <p className="mt-0.5 text-sm text-gray-300">
                Un accompagnement adapté à votre rythme.
              </p>
            </div>
          </div>
        </div>
      </div>

      <FloatingIcon
        className="-left-5 top-16"
        icon={BookOpen}
      />

      <FloatingIcon
        className="-right-5 bottom-20"
        icon={Users}
      />
    </div>
  );
}

function PreviewCard({ icon: Icon, title, text }) {
  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4 transition hover:-translate-y-0.5 hover:border-blue-100 hover:bg-blue-50/50">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
        <Icon className="h-5 w-5 text-blue-600" />
      </div>

      <div>
        <p className="font-semibold text-gray-900">
          {title}
        </p>

        <p className="mt-0.5 text-sm text-gray-500">
          {text}
        </p>
      </div>
    </div>
  );
}

function FloatingIcon({ icon: Icon, className }) {
  return (
    <div
      className={`absolute hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-lg sm:block ${className}`}
      aria-hidden="true"
    >
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
  );
}