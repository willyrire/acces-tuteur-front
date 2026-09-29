export function Card({ className = "", children }) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children }) {
  return <div className={`px-5 pt-5 ${className}`}>{children}</div>;
}

export function CardTitle({ className = "", children }) {
  return <h3 className={`text-lg font-semibold text-slate-900 ${className}`}>{children}</h3>;
}

export function CardDescription({ className = "", children }) {
  return <p className={`mt-1 text-sm text-slate-600 ${className}`}>{children}</p>;
}

export function CardContent({ className = "", children }) {
  return <div className={`px-5 pb-5 pt-4 ${className}`}>{children}</div>;
}

export function CardFooter({ className = "", children }) {
  return <div className={`px-5 pb-5 pt-0 ${className}`}>{children}</div>;
}