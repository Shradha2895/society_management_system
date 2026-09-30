import React, { useEffect, useState } from "react";

/* ---------- own SVG icons (no emoji) ---------- */
const Svg = ({ children, className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const ICONS = {
  bell: (
    <Svg>
      <path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 003.4 0" />
    </Svg>
  ),
  door: (
    <Svg>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <circle cx="15" cy="12" r="1" fill="currentColor" />
    </Svg>
  ),
  approve: (
    <Svg>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M8 12l3 3 5-6" />
    </Svg>
  ),
  card: (
    <Svg>
      <rect x="2" y="5" width="20" height="14" rx="2.5" />
      <path d="M2 10h20M6 15h4" />
    </Svg>
  ),
  pool: (
    <Svg>
      <circle cx="16" cy="6" r="2" />
      <path d="M3 13c2 0 2-2 4.5-2S10 13 12 13M2 17c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 21c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />
    </Svg>
  ),
  megaphone: (
    <Svg>
      <path d="M3 11v2a1 1 0 001 1h2l7 4V6L6 10H4a1 1 0 00-1 1zM16 9a4 4 0 010 6" />
    </Svg>
  ),
  resolved: (
    <Svg>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </Svg>
  ),
};

const ITEMS = [
  { label: "Resident receives notice", icon: "bell", tone: "text-amber-400/70" },
  { label: "Visitor arrives at gate", icon: "door", tone: "text-orange-400/70" },
  { label: "Visitor approved instantly", icon: "approve", tone: "text-emerald-400/70" },
  { label: "Maintenance payment done", icon: "card", tone: "text-sky-400/70" },
  { label: "Pool booking confirmed", icon: "pool", tone: "text-cyan-400/70" },
  { label: "Society notice published", icon: "megaphone", tone: "text-pink-400/70" },
  { label: "Complaint resolved", icon: "resolved", tone: "text-slate-300/80" },
];

/* window pattern: 1 = lit, 0 = dark */
const WINDOWS = [
  [1, 0, 0, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 0, 0, 1],
];

const Building = () => (
  <svg viewBox="0 0 300 320" className="w-full max-w-[360px]" fill="none">
    {/* glow */}
    <defs>
      <radialGradient id="bglow" cx="50%" cy="55%" r="55%">
        <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
      </radialGradient>
    </defs>
    <ellipse cx="150" cy="180" rx="150" ry="150" fill="url(#bglow)" />

    {/* signal lines */}
    <path className="oa-dash" d="M55 175 L12 132" stroke="#14b8a6" strokeOpacity=".6" strokeWidth="1.5" strokeDasharray="3 5" />
    <path className="oa-dash" d="M245 175 L288 132" stroke="#14b8a6" strokeOpacity=".6" strokeWidth="1.5" strokeDasharray="3 5" />

    {/* antenna */}
    <rect x="147" y="14" width="6" height="38" rx="2" fill="#0f9d92" />
    <circle className="oa-pulse" cx="163" cy="10" r="5" fill="#14b8a6" />

    {/* body */}
    <rect x="93" y="50" width="114" height="56" rx="4" fill="#2a4384" />
    <rect x="55" y="90" width="190" height="205" rx="5" fill="#22336a" />

    {/* windows */}
    {WINDOWS.map((row, r) =>
      row.map((on, c) => (
        <rect
          key={`${r}-${c}`}
          x={70 + c * 45}
          y={108 + r * 38}
          width="30"
          height="28"
          rx="3"
          fill={on ? "#14a89b" : "#131f4d"}
          className={on ? "oa-twinkle" : ""}
          style={on ? { animationDelay: `${(r * 4 + c) * 0.45}s` } : undefined}
        />
      ))
    )}

    {/* door */}
    <rect x="125" y="258" width="50" height="37" rx="3" fill="#0f9d92" />
    <text x="150" y="282" textAnchor="middle" fontSize="15" fontWeight="800" fill="#fff" fontFamily="Inter, sans-serif">
      M
    </text>

    {/* base */}
    <rect x="35" y="295" width="230" height="8" rx="3" fill="#22336a" />
  </svg>
);

export default function OneApp() {
  const [active, setActive] = useState(2);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % ITEMS.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0f1a44] py-24">
      {/* local animations */}
      <style>{`
        @keyframes oa-twinkle { 0%,100% { opacity: 1 } 50% { opacity: .45 } }
        @keyframes oa-pulse { 0%,100% { opacity: 1; transform: scale(1) } 50% { opacity: .4; transform: scale(1.5) } }
        @keyframes oa-dash { to { stroke-dashoffset: -16 } }
        @keyframes oa-fade { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes oa-glow { 0%,100% { box-shadow: 0 0 30px rgba(20,184,166,.35) } 50% { box-shadow: 0 0 60px rgba(20,184,166,.65) } }
        .oa-twinkle { animation: oa-twinkle 3s ease-in-out infinite }
        .oa-pulse { transform-box: fill-box; transform-origin: center; animation: oa-pulse 1.8s ease-in-out infinite }
        .oa-dash { animation: oa-dash 1.2s linear infinite }
        .oa-fade { animation: oa-fade .5s ease both }
        .oa-glow { animation: oa-glow 3s ease-in-out infinite }
        @media (prefers-reduced-motion: reduce) {
          .oa-twinkle, .oa-pulse, .oa-dash, .oa-glow, .oa-fade { animation: none }
        }
      `}</style>

      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{ backgroundImage: "radial-gradient(#334155 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <div className="relative mx-auto max-w-[1100px] px-4">
        {/* heading */}
        <div className="text-center">
          <h2 className="text-[38px] font-extrabold leading-[1.15] tracking-tight text-white">
            One App. <span className="text-[#0f9d92]">Entire Community.</span>
          </h2>
          <p className="mt-4 text-[16px] text-slate-400">
            MYTMAKAAN connects every part of your residential community.
          </p>
        </div>

        {/* body */}
        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-[320px_1fr_260px]">
          {/* left list */}
          <ul className="space-y-3">
            {ITEMS.map((it, i) => {
              const on = i === active;
              return (
                <li
                  key={it.label}
                  className={`flex items-center gap-4 rounded-xl px-5 py-[13px] text-[14px] font-semibold transition-all duration-500 ${
                    on
                      ? "-translate-x-1 scale-[1.03] bg-[#dcfce7] text-[#15803d] shadow-[0_10px_30px_rgba(74,222,128,0.18)]"
                      : "bg-[#1a2860] text-slate-400"
                  }`}
                >
                  <span className={on ? "text-emerald-500" : it.tone}>{ICONS[on && it.icon !== "resolved" ? "approve" : it.icon]}</span>
                  {it.label}
                </li>
              );
            })}
          </ul>

          {/* center building */}
          <div className="flex justify-center">
            <Building />
          </div>

          {/* right app icon */}
          <div className="flex flex-col items-center">
            <div className="oa-glow flex h-[80px] w-[80px] items-center justify-center rounded-[22px] bg-gradient-to-br from-[#0f9d92] to-[#1a2f66] text-center text-[13px] font-extrabold leading-[1.1] text-white">
              MYT
              <br />
              MAKAAN
            </div>
            <div className="mt-3 text-[13px] font-medium text-[#14b8a6]">Connected</div>
            <div className="mt-3 h-[50px] w-px bg-gradient-to-b from-[#14b8a6] to-transparent" />
            <div
              key={active}
              className="oa-fade mt-3 flex items-center gap-2 whitespace-nowrap rounded-lg bg-[#dcfce7] px-4 py-[10px] text-[13px] font-semibold text-[#15803d]"
            >
              <span className="flex h-[16px] w-[16px] items-center justify-center rounded bg-emerald-400 text-[10px] text-white">✓</span>
              {ITEMS[active].label}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}