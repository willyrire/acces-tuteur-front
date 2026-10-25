import React from "react";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function RelatedContentLinks({ items }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map(({ to, icon: Icon, title, description }) => (
        <NavLink key={to} to={to} className="group flex flex-col justify-between rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition-colors hover:border-blue-300 hover:bg-blue-50/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">
          <div>
            {Icon && <Icon className="mb-4 h-6 w-6 text-blue-700" aria-hidden="true" />}
            <h3 className="text-lg font-semibold text-slate-950 group-hover:text-blue-700">{title}</h3>
            <p className="mt-2 leading-7 text-slate-600">{description}</p>
          </div>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">En savoir plus<ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
        </NavLink>
      ))}
    </div>
  );
}
