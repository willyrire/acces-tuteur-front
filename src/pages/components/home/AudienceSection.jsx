import React from "react";
import {
  GraduationCap,
  Users,
} from "lucide-react";

import AudienceCard from "@/pages/components/home/AudienceCard";

import {
  studentAdvantages,
  tutorAdvantages,
} from "@/pages/functions/home/homeData";

export default function AudienceSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <AudienceCard
            icon={GraduationCap}
            label="Pour les élèves"
            title="Un accompagnement qui s'adapte à vous."
            description="Trouvez de l'aide lorsque vous en avez besoin et progressez avec un tuteur qui comprend vos objectifs."
            items={studentAdvantages}
            href="/tuteurs"
            linkText="Trouver un tuteur"
          />

          <AudienceCard
            icon={Users}
            label="Pour les tuteurs"
            title="Partagez vos connaissances simplement."
            description="Organisez vos séances et accompagnez vos élèves grâce à un espace conçu pour faciliter le tutorat."
            items={tutorAdvantages}
            href="/inscription"
            linkText="Devenir tuteur"
          />
        </div>
      </div>
    </section>
  );
}