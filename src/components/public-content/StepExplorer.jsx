import React, { useId, useState } from "react";

// Native buttons remain keyboard-accessible; every control identifies the detail panel.
export default function StepExplorer({ steps, label = "Explorer les étapes", renderDetail }) {
  const [activeId, setActiveId] = useState(steps[0]?.id);
  const panelId = useId();
  const active = steps.find((step) => step.id === activeId) || steps[0];
  if (!active) return null;
  const activeIndex = steps.findIndex((step) => step.id === active.id);
  const Icon = active.icon;
  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <nav aria-label={label}>
        <ol className="space-y-3">
          {steps.map((step, index) => {
            const selected = step.id === active.id;
            return (
              <li key={step.id}>
                <button type="button" onClick={() => setActiveId(step.id)} aria-pressed={selected} aria-controls={panelId}
                  className={`flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${selected ? "border-blue-700 bg-blue-700 text-white shadow-md shadow-blue-100" : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50"}`}>
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${selected ? "bg-white/15" : "bg-slate-100 text-slate-600"}`}>{index + 1}</span>
                  <span><span className="block font-semibold">{step.title}</span><span className={`mt-1 block text-sm ${selected ? "text-blue-100" : "text-slate-500"}`}>{step.subtitle}</span></span>
                </button>
              </li>
            );
          })}
        </ol>
      </nav>
      <div id={panelId} role="region" aria-label="Détail de l’étape sélectionnée" className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm sm:p-9">
        <div className="flex items-center justify-between gap-4">
          {Icon && <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700"><Icon className="h-6 w-6" aria-hidden="true" /></div>}
          <span className="text-sm font-medium text-slate-500">Étape {activeIndex + 1} sur {steps.length}</span>
        </div>
        <div aria-live="polite" aria-atomic="true">
          <h3 className="mt-6 text-2xl font-bold text-slate-950">{active.heading || active.title}</h3>
          <p className="mt-4 leading-8 text-slate-600">{active.description}</p>
          {renderDetail?.(active)}
        </div>
      </div>
    </div>
  );
}
