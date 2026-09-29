import React from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>

      <p className="mt-5 text-lg leading-8 text-gray-600">
        {description}
      </p>
    </div>
  );
}