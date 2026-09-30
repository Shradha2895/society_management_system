// import React from "react";

// const STEPS = [
//   {
//     no: "01",
//     icon: "📲",
//     title: "Download",
//     desc: "Download MYTMAKAAN on your Android phone from Google Play Store.",
//   },
//   {
//     no: "02",
//     icon: "🔗",
//     title: "Connect",
//     desc: "Register and connect with your residential society in minutes.",
//   },
//   {
//     no: "03",
//     icon: "✨",
//     title: "Manage",
//     desc: "Access all your society services from one organized place.",
//   },
// ];

// const PlayIcon = () => (
//   <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
//     <path d="M5 3.5v17l14-8.5-14-8.5z" fill="currentColor" fillOpacity=".25" />
//     <path d="M5 3.5l9 9M5 20.5l9-8" />
//   </svg>
// );

// export default function GettingStarted() {
//   return (
//     <section id="how-it-works" className="relative overflow-hidden bg-[#101a46] py-24">
//       {/* glow + dots */}
//       <div className="pointer-events-none absolute left-1/4 top-0 h-[400px] w-[600px] rounded-full bg-[#14b8a6]/10 blur-3xl" />
//       <div
//         className="pointer-events-none absolute inset-0 opacity-30"
//         style={{ backgroundImage: "radial-gradient(#334155 1px, transparent 1px)", backgroundSize: "28px 28px" }}
//       />

//       <div className="relative mx-auto max-w-[1200px] px-4">
//         {/* heading */}
//         <div className="text-center">
//           <h2 className="text-[40px] font-extrabold leading-[1.15] tracking-tight text-white">
//             Getting Started Is <span className="text-[#0f9d92]">Simple</span>
//           </h2>
//           <p className="mt-4 text-[17px] text-slate-400">Three easy steps to transform your community living.</p>
//         </div>

//         {/* steps */}
//         <div className="relative mt-16">
//           {/* connecting line */}
//           <div className="absolute left-[16.66%] right-[16.66%] top-[46px] hidden h-[2px] bg-gradient-to-r from-[#14b8a6]/40 via-[#14b8a6]/60 to-[#14b8a6]/40 md:block" />

//           <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
//             {STEPS.map((s) => (
//               <div key={s.no} className="flex flex-col items-center text-center">
//                 <div className="relative flex h-[92px] w-[92px] items-center justify-center rounded-3xl border border-[#14b8a6]/30 bg-[#1a2860] text-[34px] shadow-lg">
//                   {s.icon}
//                   <span className="absolute -right-2 -top-2 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#0f9d92] text-[11px] font-bold text-white ring-2 ring-[#101a46]">
//                     {s.no}
//                   </span>
//                 </div>
//                 <h3 className="mt-6 text-[20px] font-bold text-white">{s.title}</h3>
//                 <p className="mt-3 max-w-[270px] text-[15px] leading-relaxed text-slate-400">{s.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="mt-14 flex justify-center">
//           <a
//             href="#"
//             className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#14b8a6] to-[#0d9488] px-9 py-[17px] text-[16px] font-semibold text-white shadow-lg transition hover:brightness-110"
//           >
//             <PlayIcon />
//             Download MYTMAKAAN Free
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }   
import React from "react";
import { Download, Link2, LayoutGrid } from "lucide-react";

const STEPS = [
  {
    no: "01",
    Icon: Download,
    title: "Download",
    desc: "Download MYTMAKAAN on your Android phone from Google Play Store.",
  },
  {
    no: "02",
    Icon: Link2,
    title: "Connect",
    desc: "Register and connect with your residential society in minutes.",
  },
  {
    no: "03",
    Icon: LayoutGrid,
    title: "Manage",
    desc: "Access all your society services from one organized place.",
  },
];

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
    <path d="M5 3.5v17l14-8.5-14-8.5z" fill="currentColor" fillOpacity=".25" />
    <path d="M5 3.5l9 9M5 20.5l9-8" />
  </svg>
);

export default function GettingStarted() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-[#101a46] py-24">
      {/* glow + dots */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-[400px] w-[600px] rounded-full bg-[#14b8a6]/10 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{ backgroundImage: "radial-gradient(#334155 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <div className="relative mx-auto max-w-[1200px] px-4">
        {/* heading */}
        <div className="text-center">
          <h2 className="text-[40px] font-extrabold leading-[1.15] tracking-tight text-white">
            Getting Started Is <span className="text-[#0f9d92]">Simple</span>
          </h2>
          <p className="mt-4 text-[17px] text-slate-400">Three easy steps to transform your community living.</p>
        </div>

        {/* steps */}
        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-[16.66%] right-[16.66%] top-[46px] hidden h-[2px] bg-gradient-to-r from-[#14b8a6]/40 via-[#14b8a6]/60 to-[#14b8a6]/40 md:block" />

          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
            {STEPS.map(({ no, Icon, title, desc }) => (
              <div key={no} className="flex flex-col items-center text-center">
                <div className="relative flex h-[92px] w-[92px] items-center justify-center rounded-3xl border border-[#14b8a6]/30 bg-[#1a2860] shadow-lg">
                  <Icon size={34} strokeWidth={1.4} className="text-teal-300" />
                  <span className="absolute -right-2 -top-2 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#0f9d92] text-[11px] font-bold text-white ring-2 ring-[#101a46]">
                    {no}
                  </span>
                </div>
                <h3 className="mt-6 text-[20px] font-bold text-white">{title}</h3>
                <p className="mt-3 max-w-[270px] text-[15px] leading-relaxed text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="#"
            className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#14b8a6] to-[#0d9488] px-9 py-[17px] text-[16px] font-semibold text-white shadow-lg transition hover:brightness-110"
          >
            <PlayIcon />
            Download MYTMAKAAN Free
          </a>
        </div>
      </div>
    </section>
  );
}