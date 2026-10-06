import React from "react";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function AudienceCard({
  icon: Icon,
  label,
  title,
  description,
  items,
  href,
  linkText,
}) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 sm:p-10">
      <div
        className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-50 transition-transform duration-500 group-hover:scale-125"
        aria-hidden="true"
      />

      <div className="relative">
        <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
          <Icon className="h-7 w-7" />
        </div>

        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          {label}
        </p>

        <h3 className="mt-3 max-w-md text-2xl font-bold text-gray-900 sm:text-3xl">
          {title}
        </h3>

        <p className="mt-4 max-w-lg leading-7 text-gray-600">
          {description}
        </p>

        <ul className="mt-7 space-y-3">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-gray-700"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />

              <span>{item}</span>
            </li>
          ))}
        </ul>

        <NavLink
          to={href}
          className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
        >
          {linkText}

          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </NavLink>
      </div>
    </article>
  );
}