import React from "react";
import { useParams } from "react-router-dom";
import {
  Mail,
  ShieldCheck,
  KeyRound,
  ArrowRight,
  GraduationCap,
  LockKeyhole,
  AlertCircle,
} from "lucide-react";
import { verifyA2F } from "../api/verifya2f";
import { loginSuccessHandler } from "@/handler/auth/loginSuccessHandler";
import getParams from "@/utils/tools/getParams";
import openApp from "@/handler/actions/openApp";
import { fastRedirect } from "@/utils/tools/fastRedirect";

const A2F = () => {
  const { userId, method, challengeId } = useParams();
  const params = getParams();

  const [error, setError] = React.useState("");
  const [code, setCode] = React.useState("");
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

  const Icon = config.icon;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanCode = code.trim();

    if (!challengeId || !method || !cleanCode) return;
    if (method !== "email" && method !== "totp") return;

    try {
      setLoading(true);
      setError("");

      const response = await verifyA2F(userId, method, challengeId, cleanCode);

      if (response.success) {
        loginSuccessHandler(response.data);

        if (params.on_success === "open_app") {
          await openApp();
          return;
        }

        fastRedirect("/user/profile");
      } else {
        setError("Le code de vérification est incorrect.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-sky-950/10 px-4 py-10 text-foreground">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-sky-400/15 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-5xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
          <div className="hidden flex-col justify-between bg-gradient-to-br from-primary/15 via-sky-500/10 to-blue-600/10 p-10 lg:flex">
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
            <div className="mx-auto flex min-h-[560px] max-w-md flex-col justify-center">
              <div className="mb-8">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">
                  <Icon className="h-4 w-4 text-primary" />
                  {config.badge}
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm">
                  <Icon className="h-7 w-7" />
                </div>

                <h1 className="mt-5 text-2xl font-bold tracking-tight text-foreground">
                  {config.title}
                </h1>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {config.description}
                </p>
              </div>

              {(isEmail || isTotp) && (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Code de vérification
                    </label>

                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                      value={code}
                      onChange={(e) => {
                        setError("");
                        setCode(e.target.value.replace(/\D/g, "").slice(0, 6));
                      }}
                      placeholder={config.placeholder}
                      className="h-14 w-full rounded-2xl border border-border bg-background px-4 text-center text-xl font-semibold tracking-[0.45em] text-foreground outline-none transition placeholder:text-muted-foreground/40 focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />

                    {error && (
                      <div className="mt-3 flex gap-2 rounded-2xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                        <p>{error}</p>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading || code.length !== 6}
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Vérification..." : "Vérifier mon identité"}
                    {!loading && <ArrowRight className="h-4 w-4" />}
                  </button>
                </form>
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