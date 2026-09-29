import React from "react";
import { KeyRound, ArrowRight, RotateCcw } from "lucide-react";
import ErrorBox from "./ErrorBox";

const RecoveryCodeCard = ({
  recoveryCode,
  setRecoveryCode,
  error,
  setError,
  loading,
  onSubmit,
  onSwitchToA2F,
}) => {
  return (
    <>
      <div className="mb-8">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">
          <KeyRound className="h-4 w-4 text-primary" />
          Code de récupération
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm">
          <KeyRound className="h-7 w-7" />
        </div>

        <h1 className="mt-5 text-2xl font-bold tracking-tight text-foreground">
          Utiliser un code de secours
        </h1>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Entrez l’un de vos codes de récupération pour accéder à votre compte
          si vous n’avez pas accès à votre méthode de vérification habituelle.
        </p>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Une fois qu'un code de récupération est utilisé, il devient invalide.
          Assurez-vous de les conserver en lieu sûr et de ne les partager avec
          personne.
        </p>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          <strong>
            Si vous vous apprêtez à utiliser votre dernier code de récupération,
            l'authentification à deux facteurs sera désactivée.
          </strong>
        </p>
      </div>

      <form className="space-y-5" onSubmit={onSubmit}>
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Code de récupération
          </label>

          <input
            type="text"
            value={recoveryCode}
            onChange={(e) => {
              setError("");

              const cleanCode = e.target.value
                .replace(/[^a-zA-Z0-9]/g, "")
                .toUpperCase()
                .slice(0, 10);

              const formattedCode =
                cleanCode.length > 5
                  ? `${cleanCode.slice(0, 5)}-${cleanCode.slice(5)}`
                  : cleanCode;

              setRecoveryCode(formattedCode);
            }}
            placeholder="XXXXX-XXXXX"
            className="h-14 w-full rounded-2xl border border-border bg-background px-4 text-center text-base font-semibold tracking-[0.2em] text-foreground outline-none transition placeholder:text-muted-foreground/40 focus:border-primary focus:ring-4 focus:ring-primary/10"
          />

          {error && <ErrorBox error={error} />}
        </div>

        <button
          type="submit"
          disabled={loading || recoveryCode.length < 6}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Vérification..." : "Utiliser ce code"}
          {!loading && <ArrowRight className="h-4 w-4" />}
        </button>
      </form>

      <button
        type="button"
        onClick={onSwitchToA2F}
        className="cursor-pointer mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
      >
        <RotateCcw className="h-4 w-4" />
        Retourner au code de vérification
      </button>
    </>
  );
};

export default RecoveryCodeCard;
