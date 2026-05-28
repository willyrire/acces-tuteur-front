import React from "react";
import { useParams } from "react-router-dom";
import {
  Mail,
  ShieldCheck,
  KeyRound,
  GraduationCap,
  LockKeyhole,
} from "lucide-react";

import { verifyA2F } from "../api/verifya2f";
import { recoveryA2F } from "../api/recoverya2f";
import { loginSuccessHandler } from "@/handler/auth/loginSuccessHandler";
import getParams from "@/utils/tools/getParams";
import openApp from "@/handler/actions/openApp";
import { fastRedirect } from "@/utils/tools/fastRedirect";

import A2FCard from "../components/A2FCard";
import RecoveryCodeCard from "../components/RecoveryCodeCard";


const A2F = () => {
  const { userId, method, challengeId } = useParams();
  const params = getParams();

  const [activeCard, setActiveCard] = React.useState("a2f");
  const [error, setError] = React.useState("");
  const [code, setCode] = React.useState("");
  const [recoveryCode, setRecoveryCode] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const isEmail = method === "email";
  const isTotp = method === "totp";

  const config = isEmail
    ? {
        icon: Mail,
        badge: "Code par courriel",
        title: "Confirmez votre connexion",
        description:
          "Nous avons envoyé un code de sécurité à votre adresse courriel. Entrez-le pour accéder à votre espace Accès Tuteur.",
        placeholder: "000000",
      }
    : isTotp
      ? {
          icon: ShieldCheck,
          badge: "Application d’authentification",
          title: "Vérification sécurisée",
          description:
            "Ouvrez votre application d’authentification et entrez le code temporaire généré pour votre compte.",
          placeholder: "000000",
        }
      : {
          icon: KeyRound,
          badge: "Erreur de vérification",
          title: "Méthode invalide",
          description:
            "La méthode de double authentification demandée n’est pas reconnue.",
          placeholder: "",
        };

  const handleLoginSuccess = async (data) => {
    loginSuccessHandler(data);

    if (params.on_success === "open_app") {
      await openApp();
      return;
    }

    fastRedirect("/user/profile");
  };

  const handleA2FSubmit = async (e) => {
    e.preventDefault();

    const cleanCode = code.trim();

    if (!challengeId || !method || !cleanCode) return;
    if (method !== "email" && method !== "totp") return;

    try {
      setLoading(true);
      setError("");

      const response = await verifyA2F(userId, method, challengeId, cleanCode);

      if (response.success) {
        await handleLoginSuccess(response.data);
      } else {
        setError("Le code de vérification est incorrect.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRecoverySubmit = async (e) => {
    e.preventDefault();

    const cleanCode = recoveryCode.trim();

    if (!challengeId || !cleanCode) return;

    try {
      setLoading(true);
      setError("");

      const response = await recoveryA2F(
        userId,
        method,
        challengeId,
        cleanCode,
      );

      if (response.success) {
        await handleLoginSuccess(response.data);
      } else {
        setError(response.error || "Le code de récupération est invalide." );
      }
    } finally {
      setLoading(false);
    }
  };

  const switchCard = (card) => {
    setError("");
    setCode("");
    setRecoveryCode("");
    setActiveCard(card);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-background via-background to-sky-950/10 px-4 py-10 text-foreground">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-sky-400/15 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-5xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
          <div className="hidden flex-col justify-between bg-linear-to-br from-primary/15 via-sky-500/10 to-blue-600/10 p-10 lg:flex">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-sm font-medium text-foreground shadow-sm backdrop-blur">
                <GraduationCap className="h-4 w-4 text-primary" />
                Accès Tuteur
              </div>

              <h2 className="mt-8 text-3xl font-bold tracking-tight text-foreground">
                Votre espace est protégé.
              </h2>

              <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
                Cette étape permet de confirmer que la connexion vient bien de
                vous avant d’ouvrir votre compte.
              </p>
            </div>

            <div className="rounded-2xl border border-border/70 bg-background/60 p-4 shadow-sm backdrop-blur">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <LockKeyhole className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Connexion sécurisée
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Ne partagez jamais votre code de vérification avec quelqu’un
                    d’autre.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <main className="bg-card p-6 sm:p-8 lg:p-10">
            <div className="mx-auto flex min-h-140 max-w-md flex-col justify-center">
              {activeCard === "a2f" ? (
                <A2FCard
                  config={config}
                  code={code}
                  setCode={setCode}
                  error={error}
                  setError={setError}
                  loading={loading}
                  onSubmit={handleA2FSubmit}
                  onSwitchToRecovery={() => switchCard("recovery")}
                />
              ) : (
                <RecoveryCodeCard
                  recoveryCode={recoveryCode}
                  setRecoveryCode={setRecoveryCode}
                  error={error}
                  setError={setError}
                  loading={loading}
                  onSubmit={handleRecoverySubmit}
                  onSwitchToA2F={() => switchCard("a2f")}
                />
              )}

              <p className="mt-8 text-center text-xs leading-5 text-muted-foreground">
                Cette vérification protège votre compte, vos informations et vos
                accès à la plateforme.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default A2F;