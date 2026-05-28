import React from "react";
import { ArrowRight, KeyRound } from "lucide-react";
import ErrorBox from "./ErrorBox";

const A2FCard = ({
  config,
  code,
  setCode,
  error,
  setError,
  loading,
  onSubmit,
  onSwitchToRecovery,
}) => {
  const Icon = config.icon;

  return (
    <>
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

      <form className="space-y-5" onSubmit={onSubmit}>
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

          {error && <ErrorBox error={error} />}
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

      <button
        type="button"
        onClick={onSwitchToRecovery}
        className="cursor-pointer mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
      >
        <KeyRound className="h-4 w-4" />
        Utiliser un code de récupération
      </button>
    </>
  );
};

export default A2FCard;