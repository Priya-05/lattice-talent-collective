const G = 5;
const STEP = 80;
const O = 40;
const P = (i: number, j: number) => [O + i * STEP, O + j * STEP] as const;

const edges: Array<[number, number, number, number]> = [];
for (let i = 0; i < G; i++)
  for (let j = 0; j < G; j++) {
    const [x, y] = P(i, j);
    if (i < G - 1) edges.push([x, y, ...P(i + 1, j)]);
    if (j < G - 1) edges.push([x, y, ...P(i, j + 1)]);
    if (i < G - 1 && j < G - 1 && (i + j) % 2 === 0) edges.push([x, y, ...P(i + 1, j + 1)]);
  }

const nodes: Array<{ x: number; y: number; on: boolean }> = [];
for (let i = 0; i < G; i++)
  for (let j = 0; j < G; j++) {
    if (i === 4 && j === 4) continue;
    const [x, y] = P(i, j);
    nodes.push({ x, y, on: (i === 0 && j % 2 === 0) || (j === 4 && i % 2 === 0 && i > 0) });
  }

const path = (
  [
    [0, 0],
    [0, 2],
    [0, 4],
    [2, 4],
    [4, 4],
  ] as const
)
  .map(([i, j]) => P(i, j).join(","))
  .join(" ");
const [mx, my] = P(4, 4);

export function LatticeGraphic({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      role="img"
      aria-label="A network of connected points forming an L toward a highlighted match"
      className={`h-auto max-h-[440px] w-full ${className}`}
    >
      {edges.map(([x1, y1, x2, y2], k) => (
        <line key={k} className="lat-edge" x1={x1} y1={y1} x2={x2} y2={y2} />
      ))}
      <polyline className="lat-path" pathLength={1} points={path} />
      {nodes.map((n, k) => (
        <circle
          key={k}
          className="lat-node"
          cx={n.x}
          cy={n.y}
          r={n.on ? 9 : 5}
          opacity={n.on ? 1 : 0.35}
        />
      ))}
      <circle className="lat-match" cx={mx} cy={my} r={16} />
    </svg>
  );
}
