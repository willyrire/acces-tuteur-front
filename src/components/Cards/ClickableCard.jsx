import { style } from "framer-motion/client";

export function ClickCard({ className = "", children, href = "#", ...props }) {
  return (
    <a
      href={href}
      className={[
        "block rounded-2xl border border-slate-200 bg-white shadow-sm",
        "transition-all duration-200 ease-out",
        "hover:-translate-y-0.5 hover:shadow-md hover:border-slate-300",
        "active:translate-y-0 active:bg-slate-100 active:shadow-sm",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </a>
  );
}

export function ClickCardHeader({ className = "", children }) {
  return <div className={`px-5 pt-5 ${className}`}>{children}</div>;
}

export function ClickCardTitle({ className = "", children }) {
  return (
    <h3 className={`text-lg font-semibold text-slate-900 ${className}`}>
      {children}
    </h3>
  );
}

export function ClickCardDescription({ className = "", children }) {
  return (
    <p className={`mt-1 text-sm text-slate-600 ${className}`}>{children}</p>
  );
}

export function ClickCardContent({ className = "", children }) {
  return <div className={`px-5 pb-5 pt-4 ${className}`}>{children}</div>;
}

export function ClickCardFooter({ className = "", children }) {
  return <div className={`px-5 pb-5 pt-0 ${className}`}>{children}</div>;
}
