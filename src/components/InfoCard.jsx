import React from "react";

const InfoCard = ({
  icon: Icon,
  title,
  description,
  children,
  className = "",
  iconClassName = "",
}) => {
  return (
    <article className={`rounded-2xl border bg-card p-6 shadow-sm ${className}`}>
      {Icon && (
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary ${iconClassName}`}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
      )}

      <h3 className="mt-5 text-lg font-semibold">{title}</h3>

      {description && (
        <p className="mt-2 leading-7 text-muted-foreground">{description}</p>
      )}

      {children && <div className="mt-4">{children}</div>}
    </article>
  );
};

export default InfoCard;
