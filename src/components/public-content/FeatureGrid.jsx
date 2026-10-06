import React from "react";

export default function FeatureGrid({ items, className = "" }) {
  return (
    <div className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {items.map(({ id, icon: Icon, title, description }) => (
        <article key={id || title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          {Icon && <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><Icon className="h-5 w-5" aria-hidden="true" /></div>}
          <h3 className="mt-5 text-lg font-semibold text-slate-950">{title}</h3>
          <p className="mt-3 leading-7 text-slate-600">{description}</p>
        </article>
      ))}
    </div>
  );
}
