// import React from "react";

// const PlayIcon = () => (
//   <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
//     <path d="M5 3.5v17l14-8.5-14-8.5z" fill="currentColor" fillOpacity=".25" />
//     <path d="M5 3.5l9 9M5 20.5l9-8" />
//   </svg>
// );

// const I = ({ children }) => (
//   <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//     {children}
//   </svg>
// );

// const TILES = [
//   {
//     label: "Pay",
//     tone: "text-sky-400",
//     icon: (
//       <I>
//         <rect x="2" y="5" width="20" height="14" rx="2.5" />
//         <path d="M2 10h20M6 15h4" />
//       </I>
//     ),
//   },
//   {
//     label: "Visitors",
//     tone: "text-orange-400",
//     icon: (
//       <I>
//         <rect x="5" y="3" width="14" height="18" rx="1.5" />
//         <circle cx="15" cy="12" r="1" fill="currentColor" />
//       </I>
//     ),
//   },
//   {
//     label: "Amenities",
//     tone: "text-cyan-400",
//     icon: (
//       <I>
//         <circle cx="16" cy="6" r="2" />
//         <path d="M3 13c2 0 2-2 4.5-2S10 13 12 13M2 17c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />
//       </I>
//     ),
//   },
//   {
//     label: "Complaints",
//     tone: "text-amber-400",
//     icon: (
//       <I>
//         <rect x="6" y="4" width="12" height="17" rx="2" />
//         <path d="M9 4h6v3H9zM9 12h6M9 16h4" />
//       </I>
//     ),
//   },
//   {
//     label: "Notices",
//     tone: "text-pink-400",
//     icon: (
//       <I>
//         <path d="M3 11v2a1 1 0 001 1h2l7 4V6L6 10H4a1 1 0 00-1 1zM16 9a4 4 0 010 6" />
//       </I>
//     ),
//   },
//   {
//     label: "Docs",
//     tone: "text-slate-300",
//     icon: (
//       <I>
//         <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8zM14 3v5h5M9 13h6M9 17h4" />
//       </I>
//     ),
//   },
// ];

// export default function CtaSection() {
//   return (
//     <section
//       id="download"
//       className="relative overflow-hidden bg-[linear-gradient(135deg,#0f1a44_0%,#1b3870_50%,#0f9d92_100%)] py-24"
//     >
//       <div
//         className="pointer-events-none absolute inset-0 opacity-20"
//         style={{ backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)", backgroundSize: "28px 28px" }}
//       />

//       <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-[1fr_365px]">
//         {/* left text */}
//         <div>
//           <h2 className="text-[44px] font-extrabold leading-[1.15] tracking-tight text-white">
//             Make Community Living <span className="text-[#0f9d92]">Simpler.</span>
//           </h2>
//           <p className="mt-5 text-[18px] text-slate-300">
//             Bring everyday society management closer to your fingertips with MYTMAKAAN.
//           </p>

//           <div className="mt-8 flex flex-wrap items-center gap-5">
//             <a
//               href="#"
//               className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#14b8a6] to-[#0d9488] px-8 py-[18px] text-[16px] font-semibold text-white shadow-[0_10px_30px_rgba(20,184,166,0.35)] transition hover:brightness-110"
//             >
//               <PlayIcon />
//               Download MYTMAKAAN
//             </a>
//             <a
//               href="#features-grid"
//               className="rounded-xl border-2 border-white/30 px-8 py-[16px] text-[16px] font-semibold text-white transition hover:bg-white/10"
//             >
//               Explore Features
//             </a>
//           </div>
//         </div>

//         {/* right phone */}
//         <div className="hidden justify-center lg:flex">
//           <div className="animate-float-phone h-[735px] w-[365px] rounded-[52px] bg-[#1c2a5a] p-[10px] shadow-[0_50px_100px_rgba(0,0,0,0.35)]">
//             <div className="relative h-full w-full overflow-hidden rounded-[44px] bg-[#0f1a44]">
//               <div className="flex h-[40px] items-center justify-between bg-[#0d1640] px-6 text-[11px] font-semibold text-white">
//                 9:41
//                 <span className="h-[8px] w-[12px] rounded-full border border-slate-400" />
//               </div>

//               <div className="flex items-center justify-between bg-[#1a2860] px-5 py-3">
//                 <div>
//                   <div className="text-[11px] text-slate-400">Good Morning</div>
//                   <div className="text-[14px] font-bold text-white">Ravi Kumar</div>
//                 </div>
//                 <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#14d1b8] text-[10px] font-bold text-[#0f1a44]">
//                   RK
//                 </div>
//               </div>

//               <div className="px-3 pt-3">
//                 <div className="rounded-xl bg-gradient-to-br from-[#12a89b] to-[#0f9488] p-4">
//                   <div className="text-[11px] text-white/80">Maintenance Due</div>
//                   <div className="mt-1 text-[22px] font-bold text-white">₹3,500</div>
//                   <div className="mt-2 inline-block rounded-md bg-white/20 px-3 py-[5px] text-[11px] font-semibold text-white">
//                     Pay Now →
//                   </div>
//                 </div>

//                 <div className="mt-3 grid grid-cols-3 gap-2">
//                   {TILES.map((t) => (
//                     <div
//                       key={t.label}
//                       className="flex h-[70px] flex-col items-center justify-center gap-2 rounded-xl bg-[#1a2860] text-[11px] font-medium text-slate-300"
//                     >
//                       <span className={t.tone}>{t.icon}</span>
//                       {t.label}
//                     </div>
//                   ))}
//                 </div>

//                 <div className="mt-3 rounded-xl bg-[#17245a] p-3">
//                   <div className="text-[11px] font-medium text-slate-400">Recent Activity</div>
//                   <div className="mt-2 flex items-center justify-between border-t border-white/10 py-2 text-[11px] font-medium text-white">
//                     <span className="flex items-center gap-2">
//                       <i className="h-[5px] w-[5px] rounded-full bg-emerald-400" />
//                       Visitor Approved
//                     </span>
//                     <span className="text-[9px] text-slate-400">2m ago</span>
//                   </div>
//                   <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[11px] font-medium text-white">
//                     <span className="flex items-center gap-2">
//                       <i className="h-[5px] w-[5px] rounded-full bg-blue-400" />
//                       Notice: Annual AGM
//                     </span>
//                     <span className="text-[9px] text-slate-400">1h ago</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute bottom-3 left-1/2 h-[4px] w-[64px] -translate-x-1/2 rounded-full bg-slate-400/70" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }







import React from "react";
import { PLAY_STORE_URL } from "../constants";

/* Google Play logo (4 colours) */
const GooglePlayLogo = () => (
  <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]">
    <path d="M3.6 2.2L13.2 12 3.6 21.8C3.3 21.5 3.1 21 3.1 20.4V3.6C3.1 3 3.3 2.5 3.6 2.2Z" fill="#00C3FF" />
    <path d="M16.5 8.7L13.2 12 3.6 2.2C3.9 1.9 4.4 1.8 5 2.1L16.5 8.7Z" fill="#00E676" />
    <path d="M16.5 15.3L5 21.9C4.4 22.2 3.9 22.1 3.6 21.8L13.2 12 16.5 15.3Z" fill="#FF3A44" />
    <path d="M20.4 10.8C21.1 11.2 21.1 12.8 20.4 13.2L16.5 15.3 13.2 12 16.5 8.7 20.4 10.8Z" fill="#FFD500" />
  </svg>
);

const I = ({ children }) => (
  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const TILES = [
  {
    label: "Pay",
    tone: "text-sky-400",
    icon: (
      <I>
        <rect x="2" y="5" width="20" height="14" rx="2.5" />
        <path d="M2 10h20M6 15h4" />
      </I>
    ),
  },
  {
    label: "Visitors",
    tone: "text-orange-400",
    icon: (
      <I>
        <rect x="5" y="3" width="14" height="18" rx="1.5" />
        <circle cx="15" cy="12" r="1" fill="currentColor" />
      </I>
    ),
  },
  {
    label: "Amenities",
    tone: "text-cyan-400",
    icon: (
      <I>
        <circle cx="16" cy="6" r="2" />
        <path d="M3 13c2 0 2-2 4.5-2S10 13 12 13M2 17c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />
      </I>
    ),
  },
  {
    label: "Complaints",
    tone: "text-amber-400",
    icon: (
      <I>
        <rect x="6" y="4" width="12" height="17" rx="2" />
        <path d="M9 4h6v3H9zM9 12h6M9 16h4" />
      </I>
    ),
  },
  {
    label: "Notices",
    tone: "text-pink-400",
    icon: (
      <I>
        <path d="M3 11v2a1 1 0 001 1h2l7 4V6L6 10H4a1 1 0 00-1 1zM16 9a4 4 0 010 6" />
      </I>
    ),
  },
  {
    label: "Docs",
    tone: "text-slate-300",
    icon: (
      <I>
        <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8zM14 3v5h5M9 13h6M9 17h4" />
      </I>
    ),
  },
];

export default function CtaSection() {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#0f1a44_0%,#1b3870_50%,#0f9d92_100%)] py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{ backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-[1fr_365px]">
        {/* left text */}
        <div>
          <h2 className="text-[44px] font-extrabold leading-[1.15] tracking-tight text-white">
            Make Community Living <span className="text-[#0f9d92]">Simpler.</span>
          </h2>
          <p className="mt-5 text-[18px] text-slate-300">
            Bring everyday society management closer to your fingertips with MYTMAKAAN.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#14b8a6] to-[#0d9488] px-8 py-[18px] text-[16px] font-semibold text-white shadow-[0_10px_30px_rgba(20,184,166,0.35)] transition hover:brightness-110"
            >
              <GooglePlayLogo />
              Download MYTMAKAAN
            </a>
            <a
              href="#features-grid"
              className="rounded-xl border-2 border-white/30 px-8 py-[16px] text-[16px] font-semibold text-white transition hover:bg-white/10"
            >
              Explore Features
            </a>
          </div>
        </div>

        {/* right phone */}
        <div className="hidden justify-center lg:flex">
          <div className="animate-float-phone h-[735px] w-[365px] rounded-[52px] bg-[#1c2a5a] p-[10px] shadow-[0_50px_100px_rgba(0,0,0,0.35)]">
            <div className="relative h-full w-full overflow-hidden rounded-[44px] bg-[#0f1a44]">
              <div className="flex h-[40px] items-center justify-between bg-[#0d1640] px-6 text-[11px] font-semibold text-white">
                9:41
                <span className="h-[8px] w-[12px] rounded-full border border-slate-400" />
              </div>

              <div className="flex items-center justify-between bg-[#1a2860] px-5 py-3">
                <div>
                  <div className="text-[11px] text-slate-400">Good Morning</div>
                  <div className="text-[14px] font-bold text-white">Ravi Kumar</div>
                </div>
                <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#14d1b8] text-[10px] font-bold text-[#0f1a44]">
                  RK
                </div>
              </div>

              <div className="px-3 pt-3">
                <div className="rounded-xl bg-gradient-to-br from-[#12a89b] to-[#0f9488] p-4">
                  <div className="text-[11px] text-white/80">Maintenance Due</div>
                  <div className="mt-1 text-[22px] font-bold text-white">₹3,500</div>
                  <div className="mt-2 inline-block rounded-md bg-white/20 px-3 py-[5px] text-[11px] font-semibold text-white">
                    Pay Now →
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  {TILES.map((t) => (
                    <div
                      key={t.label}
                      className="flex h-[70px] flex-col items-center justify-center gap-2 rounded-xl bg-[#1a2860] text-[11px] font-medium text-slate-300"
                    >
                      <span className={t.tone}>{t.icon}</span>
                      {t.label}
                    </div>
                  ))}
                </div>

                <div className="mt-3 rounded-xl bg-[#17245a] p-3">
                  <div className="text-[11px] font-medium text-slate-400">Recent Activity</div>
                  <div className="mt-2 flex items-center justify-between border-t border-white/10 py-2 text-[11px] font-medium text-white">
                    <span className="flex items-center gap-2">
                      <i className="h-[5px] w-[5px] rounded-full bg-emerald-400" />
                      Visitor Approved
                    </span>
                    <span className="text-[9px] text-slate-400">2m ago</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[11px] font-medium text-white">
                    <span className="flex items-center gap-2">
                      <i className="h-[5px] w-[5px] rounded-full bg-blue-400" />
                      Notice: Annual AGM
                    </span>
                    <span className="text-[9px] text-slate-400">1h ago</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-3 left-1/2 h-[4px] w-[64px] -translate-x-1/2 rounded-full bg-slate-400/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}