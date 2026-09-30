// import React from "react";

// const ITEMS = [
//   {
//     icon: "⚡",
//     title: "Simple",
//     desc: "Easy-to-understand interface designed for everyday users of all ages.",
//     card: "border-[#f6e9b0] bg-[#fefae9]",
//   },
//   {
//     icon: "🔗",
//     title: "Connected",
//     desc: "Keep residents and society management seamlessly connected at all times.",
//     card: "border-[#c9f0e8] bg-[#effcf9]",
//   },
//   {
//     icon: "📱",
//     title: "Convenient",
//     desc: "Complete common society activities right from your phone, anytime.",
//     card: "border-[#d3e2fa] bg-[#eef4fe]",
//   },
//   {
//     icon: "📁",
//     title: "Organized",
//     desc: "Keep payments, bookings, complaints and notices neatly in one place.",
//     card: "border-[#e3dcfa] bg-[#f5f3ff]",
//   },
// ];

// export default function DesignedAround() {
//   return (
//     <section className="bg-[#f5f7fb] py-24">
//       <div className="mx-auto max-w-[1200px] px-4">
//         {/* heading */}
//         <div className="text-center">
//           <h2 className="text-[38px] font-extrabold leading-[1.15] tracking-tight text-[#14233f]">
//             Designed Around <span className="text-[#0f9d92]">Your Community</span>
//           </h2>
//           <p className="mt-4 text-[16px] text-slate-500">
//             MYTMAKAAN is built with one purpose: making community living better.
//           </p>
//         </div>

//         {/* cards */}
//         <div className="mx-auto mt-14 grid max-w-[1200px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
//           {ITEMS.map((it) => (
//             <div
//               key={it.title}
//               className={`rounded-2xl border p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl ${it.card}`}
//             >
//               <div className="text-[34px] leading-none">{it.icon}</div>
//               <h3 className="mt-5 text-[19px] font-bold text-[#14233f]">{it.title}</h3>
//               <p className="mt-3 text-[14px] leading-relaxed text-slate-500">{it.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





import React from "react";
import { Zap, Link2, Smartphone, FolderOpen } from "lucide-react";

const ITEMS = [
  {
    Icon: Zap,
    title: "Simple",
    desc: "Easy-to-understand interface designed for everyday users of all ages.",
    card: "border-[#f6e9b0] bg-[#fefae9]",
    iconColor: "text-[#b45309]",
  },
  {
    Icon: Link2,
    title: "Connected",
    desc: "Keep residents and society management seamlessly connected at all times.",
    card: "border-[#c9f0e8] bg-[#effcf9]",
    iconColor: "text-[#0f766e]",
  },
  {
    Icon: Smartphone,
    title: "Convenient",
    desc: "Complete common society activities right from your phone, anytime.",
    card: "border-[#d3e2fa] bg-[#eef4fe]",
    iconColor: "text-[#1d4ed8]",
  },
  {
    Icon: FolderOpen,
    title: "Organized",
    desc: "Keep payments, bookings, complaints and notices neatly in one place.",
    card: "border-[#e3dcfa] bg-[#f5f3ff]",
    iconColor: "text-[#6d28d9]",
  },
];

export default function DesignedAround() {
  return (
    <section className="bg-[#f5f7fb] py-24">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* heading */}
        <div className="text-center">
          <h2 className="text-[38px] font-extrabold leading-[1.15] tracking-tight text-[#14233f]">
            Designed Around <span className="text-[#0f9d92]">Your Community</span>
          </h2>
          <p className="mt-4 text-[16px] text-slate-500">
            MYTMAKAAN is built with one purpose: making community living better.
          </p>
        </div>

        {/* cards */}
        <div className="mx-auto mt-14 grid max-w-[1200px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it) => (
            <div
              key={it.title}
              className={`rounded-2xl border p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl ${it.card}`}
            >
              <div
                className={`flex h-[48px] w-[48px] items-center justify-center rounded-xl bg-white/70 ${it.iconColor}`}
              >
                <it.Icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 text-[19px] font-bold text-[#14233f]">{it.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-slate-500">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}