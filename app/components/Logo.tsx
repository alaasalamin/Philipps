export function LogoMark({ size = 38 }: { size?: number }) {
  return (
    <svg viewBox="0 0 96 96" width={size} height={size} aria-hidden="true">
      <path
        d="M30 84V14h21a17 17 0 0 1 0 34H30"
        fill="none"
        stroke="#C58B3F"
        strokeWidth="11"
        strokeLinejoin="round"
      />
      <path d="M44 51v11" stroke="#C58B3F" strokeWidth="11" />
      <path
        d="M44 70c3.5 5 5.5 7.6 5.5 10.4a5.5 5.5 0 1 1-11 0C38.5 77.6 40.5 75 44 70Z"
        fill="#C58B3F"
      />
    </svg>
  );
}

export function LogoWordmark({ large = false }: { large?: boolean }) {
  return (
    <span className="flex flex-col">
      <span
        className={`font-display font-bold leading-none text-cream tracking-[0.04em] ${large ? "text-2xl" : "text-[22px]"}`}
      >
        PHILIPPS
      </span>
      <span
        className={`font-semibold text-brass tracking-[0.28em] ${large ? "text-[7.5px]" : "text-[7px]"}`}
      >
        SCHANKANLAGENSERVICE
      </span>
    </span>
  );
}
