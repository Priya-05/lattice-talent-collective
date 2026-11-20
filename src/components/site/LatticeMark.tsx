/**
 * Lattice logo mark. With `live`, the L path draws itself on load, the nodes pop in,
 * and an amber spark keeps travelling along the L to the "match" dot, which pulses.
 * Motion is switched off for visitors who ask their device to reduce motion.
 */
export function LatticeMark({ size = 38, live = false }: { size?: number; live?: boolean }) {
  const L = "M8 8V40H40";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={live ? "mark-live overflow-visible" : "overflow-visible"}
    >
      <g stroke="currentColor" strokeWidth="2" opacity=".28" fill="none">
        <path d="M8 8H40M8 24H40M8 40H40M8 8V40M24 8V40M40 8V40M8 24L24 8M24 40L40 24" />
      </g>
      <path
        d={L}
        pathLength={1}
        className="mark-path"
        stroke="currentColor"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={L}
        pathLength={1}
        className="mark-spark"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g fill="currentColor">
        <circle cx="8" cy="8" r="4" className="mark-node" />
        <circle cx="8" cy="24" r="4" className="mark-node" />
        <circle cx="8" cy="40" r="4" className="mark-node" />
        <circle cx="24" cy="40" r="4" className="mark-node" />
      </g>
      <circle cx="40" cy="40" r="5.5" className="mark-ring" />
      <circle cx="40" cy="40" r="5.5" className="mark-match" />
    </svg>
  );
}
