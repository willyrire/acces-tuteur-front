import React from "react";
import { AlertCircle } from "lucide-react";

const ErrorBox = ({ error }) => {
  return (
    <div className="mt-3 flex gap-2 rounded-2xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
      <p>{error}</p>
    </div>
  );
};

export default ErrorBox;