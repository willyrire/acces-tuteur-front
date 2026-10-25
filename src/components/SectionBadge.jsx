import React from "react";

const SectionBadge = ({ icon: Icon, children, className = "" }) => {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border bg-muted/40 px-3 py-1 text-sm text-muted-foreground ${className}`}
    >
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
      <span>{children}</span>
    </div>
  );
};

export default SectionBadge;
