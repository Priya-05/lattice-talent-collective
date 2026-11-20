export function LatticeMark({ size = 38 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2" opacity=".28" fill="none">
        <path d="M8 8H40M8 24H40M8 40H40M8 8V40M24 8V40M40 8V40M8 24L24 8M24 40L40 24" />
      </g>
      <path
        d="M8 8V40H40"
        stroke="currentColor"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g fill="currentColor">
        <circle cx="8" cy="8" r="4" />
        <circle cx="8" cy="24" r="4" />
        <circle cx="8" cy="40" r="4" />
        <circle cx="24" cy="40" r="4" />
      </g>
      <circle cx="40" cy="40" r="5.5" className="mark-match" />
    </svg>
  );
}
