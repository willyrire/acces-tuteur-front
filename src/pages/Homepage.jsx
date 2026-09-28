import React from "react";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

import HeroSection from "@/pages/components/home/HeroSection";
import BenefitsSection from "@/pages/components/home/BenefitsSection";
import HowItWorksSection from "@/pages/components/home/HowItWorksSection";
import AudienceSection from "@/pages/components/home/AudienceSection";
import FinalCallToAction from "@/pages/components/home/FinalCallToAction";

export default function HomePage({ isAuth, userName }) {
  return (
    <>
      <title>Accès Tuteur | Le tutorat simplement</title>

      <meta
        name="description"
        content="Accès Tuteur facilite la recherche de tuteurs, la réservation de séances et le partage de fichiers pour un accompagnement scolaire simple et efficace."
      />

      <div className="min-h-screen bg-white-500">
        <Header isAuth={isAuth} userName={userName} />

        <main>
          <HeroSection isAuth={isAuth} />
          <BenefitsSection />
          <HowItWorksSection />
          <AudienceSection />
          <FinalCallToAction isAuth={isAuth} />
        </main>

        <Footer />
      </div>
    </>
  );
}