import React from "react";

/**
 * SuccessCheck
 * - Cercle vert qui se trace + check qui se dessine
 * - Espace texte sous l’icône (children ou text)
 */
const SuccessCheck = ({
  text = "Succès",
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
        className="sc"
        role="img"
        aria-label="Succès"
      >
        {/* Cercle */}
        <circle className="sc__circle" cx="26" cy="26" r="25" fill="none" />
        {/* Check */}
        <path className="sc__check" fill="none" d="M14 27 L23 36 L38 18" />
      </svg>

      <div className="text-center">
        {children ?? <span className="text-sm font-medium">{text}</span>}
      </div>

      <style>{`
        .sc{
          overflow: visible;
          transform: translateZ(0);
          animation: scPop 520ms cubic-bezier(.2,.9,.2,1) both;
        }

        /* Cercle qui se trace */
        .sc__circle{
          stroke: #22c55e;            /* green-500 */
          stroke-width: 4.5;
          stroke-linecap: round;
          stroke-dasharray: 166;      /* ~2πr (r=25) */
          stroke-dashoffset: 166;
          animation: scDrawCircle 1000ms cubic-bezier(.16,.9,.12,1) forwards;
          filter: drop-shadow(0 6px 18px rgba(34,197,94,.25));
        }

        /* Check qui se dessine */
        .sc__check{
          stroke: #22c55e;
          stroke-width: 5.2;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: scDrawCheck 720ms cubic-bezier(.16,.9,.12,1) 320ms forwards;
          filter: drop-shadow(0 6px 18px rgba(34,197,94,.18));
        }

        @keyframes scDrawCircle{
          0%   { stroke-dashoffset: 166; opacity: 0.25; }
          12%  { opacity: 1; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes scDrawCheck{
          0%   { stroke-dashoffset: 48; opacity: 0; }
          25%  { opacity: 1; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes scPop{
          0%   { transform: scale(.92); opacity: 0; }
          60%  { transform: scale(1.02); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce){
          .sc, .sc__circle, .sc__check{ animation: none !important; }
          .sc__circle{ stroke-dashoffset: 0; }
          .sc__check{ stroke-dashoffset: 0; opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default SuccessCheck;