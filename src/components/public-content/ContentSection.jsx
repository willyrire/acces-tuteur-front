import React from "react";

export default function ContentSection({
  id, eyebrow, title, description, children, tone = "white", centered = false,
  className = "",
}) {
  const tones = {
    white: "bg-white",
    soft: "border-y border-blue-100 bg-blue-50/60",
    muted: "border-y border-slate-200 bg-slate-50",
  };
  return (
    <section id={id} className={`scroll-mt-28 ${tones[tone] || tones.white} ${className}`}>
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className={`mb-10 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
          {eyebrow && <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">{eyebrow}</p>}
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
          {description && <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
