import React from "react";

/**
 * ErrorCheck
 * - Cercle rouge qui se trace + X qui se dessine
 * - Espace texte sous l’icône (children ou text)
 */
const ErrorCheck = ({
  text = "Erreur",
  children,
  size = 96,
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 52 52"
        className="ec"
        role="img"
        aria-label="Erreur"
      >
        {/* Cercle */}
        <circle className="ec__circle" cx="26" cy="26" r="25" fill="none" />

        {/* X (2 traits) */}
        <path className="ec__x ec__x1" fill="none" d="M17 17 L35 35" />
        <path className="ec__x ec__x2" fill="none" d="M35 17 L17 35" />
      </svg>

      <div className="text-center">
        {children ?? <span className="text-sm font-medium">{text}</span>}
      </div>

      <style>{`
        .ec{
          overflow: visible;
          transform: translateZ(0);
          animation: ecPop 520ms cubic-bezier(.2,.9,.2,1) both;
        }

        /* Cercle qui se trace */
        .ec__circle{
          stroke: #ef4444;            /* red-500 */
          stroke-width: 4.5;
          stroke-linecap: round;
          stroke-dasharray: 166;      /* ~2πr (r=25) */
          stroke-dashoffset: 166;
          animation: ecDrawCircle 720ms cubic-bezier(.16,.9,.12,1) forwards;
          filter: drop-shadow(0 6px 18px rgba(239,68,68,.22));
        }

        /* Traits du X */
        .ec__x{
          stroke: #ef4444;
          stroke-width: 5.2;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 26;
          stroke-dashoffset: 26;
          filter: drop-shadow(0 6px 18px rgba(239,68,68,.16));
        }

        .ec__x1{
          animation: ecDrawX 360ms cubic-bezier(.16,.9,.12,1) 300ms forwards;
        }
        .ec__x2{
          animation: ecDrawX 360ms cubic-bezier(.16,.9,.12,1) 430ms forwards;
        }

        @keyframes ecDrawCircle{
          0%   { stroke-dashoffset: 166; opacity: 0.25; }
          12%  { opacity: 1; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes ecDrawX{
          0%   { stroke-dashoffset: 26; opacity: 0; }
          25%  { opacity: 1; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes ecPop{
          0%   { transform: scale(.92); opacity: 0; }
          60%  { transform: scale(1.02); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce){
          .ec, .ec__circle, .ec__x{ animation: none !important; }
          .ec__circle{ stroke-dashoffset: 0; }
          .ec__x{ stroke-dashoffset: 0; opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default ErrorCheck;