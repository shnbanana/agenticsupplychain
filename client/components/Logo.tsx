export const Logo = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle for visual hierarchy */}
      <circle cx="32" cy="32" r="30" fill="#0A2342" opacity="0.08" />

      {/* Main T shape with flowing dynamics */}
      {/* Top horizontal bar of T */}
      <rect x="12" y="12" width="40" height="6" rx="3" fill="#27D6F5" />

      {/* Vertical stem of T */}
      <rect x="28" y="18" width="8" height="34" rx="4" fill="#0A2342" />

      {/* Accent flowing element - curved accent line suggesting supply chain flow */}
      <path
        d="M 12 52 Q 32 58, 52 52"
        stroke="#F58A7A"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Dynamic accent dots representing nodes/connections */}
      <circle cx="18" cy="48" r="2.5" fill="#27D6F5" />
      <circle cx="32" cy="54" r="2.5" fill="#27D6F5" />
      <circle cx="46" cy="48" r="2.5" fill="#27D6F5" />
    </svg>
  );
};

export const LogoWithText = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <div className="flex items-center gap-2">
      <Logo className={className} />
      <span className="font-bold text-lg" style={{ color: "#0A2342" }}>
        Transformity
      </span>
    </div>
  );
};
