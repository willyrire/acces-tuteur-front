import React from "react";
import { useParams } from "react-router-dom";
import { Mail, ShieldCheck, KeyRound, ArrowRight } from "lucide-react";
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

  const isEmail = method === "email";
  const isTotp = method === "totp";

  const config = isEmail
    ? {
        icon: Mail,
        title: "Vérification par courriel",
        description:
          "Nous avons envoyé un code de vérification à votre adresse courriel. Entrez le code reçu pour confirmer votre identité.",
        placeholder: "Code reçu par courriel",
      }
    : isTotp
      ? {
          icon: ShieldCheck,
          title: "Vérification avec votre application d’authentification",
          description:
            "Ouvrez votre application d’authentification et entrez le code à 6 chiffres généré pour votre compte.",
          placeholder: "Code à 6 chiffres",
        }
      : {
          icon: KeyRound,
          title: "Méthode de vérification invalide",
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

    const response = await verifyA2F(userId, method, challengeId, cleanCode);

    if (response.success) {
      loginSuccessHandler(response.data);
      if (params.on_success === "open_app") {
        await openApp();
        return;
      } else {
        fastRedirect("/user/profile");
      }
    } else {
      setError("Le code de vérification est incorrect.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-2xl border bg-card p-8 shadow-xl">
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Icon size={32} />
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">{config.title}</h1>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {config.description}
          </p>
        </div>

        {(isEmail || isTotp) && (
          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
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
                className="w-full rounded-xl border bg-background px-4 py-3 text-center text-lg tracking-[0.35em] outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
              {error && (
                <p className="mt-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-300">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-medium text-primary-foreground transition hover:bg-primary/90 active:scale-[0.98]"
            >
              Vérifier mon identité
              <ArrowRight size={18} />
            </button>
          </form>
        )}

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Identifiant utilisateur : {userId}
        </p>
      </div>
    </div>
  );
};

export default A2F;
