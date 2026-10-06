import React, { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion({ items }) {
  const [openId, setOpenId] = useState(null);
  const prefix = useId();
  return (
    <div className="divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200 bg-white px-5 shadow-sm sm:px-7">
      {items.map(({ id, question, answer }) => {
        const open = openId === id;
        const triggerId = `${prefix}-${id}-trigger`;
        const panelId = `${prefix}-${id}-panel`;
        return (
          <div key={id} className="py-2">
            <h3><button id={triggerId} type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setOpenId(open ? null : id)} className="flex w-full items-center justify-between gap-6 rounded-lg py-5 text-left font-semibold text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
              <span>{question}</span><ChevronDown className={`h-5 w-5 shrink-0 text-blue-700 transition-transform motion-reduce:transition-none ${open ? "rotate-180" : ""}`} aria-hidden="true" />
            </button></h3>
            <div id={panelId} role="region" aria-labelledby={triggerId} hidden={!open} className="max-w-4xl pb-5 pr-8 leading-8 text-slate-600">{answer}</div>
          </div>
        );
      })}
    </div>
  );
}
