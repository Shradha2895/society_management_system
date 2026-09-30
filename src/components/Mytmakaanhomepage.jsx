


// import React from "react";
// import { Check, DoorOpen, Megaphone, Waves } from "lucide-react";
// import heroApp from "../assets/hero-app.png";

// const PlayIcon = () => (
//   <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
//     <path d="M5 3.5v17l14-8.5-14-8.5z" fill="currentColor" fillOpacity=".25" />
//     <path d="M5 3.5l9 9M5 20.5l9-8" />
//   </svg>
// );

// const Star = () => (
//   <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-slate-500">
//     <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8L10 1.5z" />
//   </svg>
// );

// const Chip = ({ className = "", icon, iconBg, children }) => (
//   <div
//     className={`absolute z-10 hidden items-center gap-2 whitespace-nowrap rounded-lg bg-white px-2.5 py-1.5 text-[12px] font-medium text-slate-800 shadow-[0_6px_20px_rgba(15,23,42,0.10)] xl:flex ${className}`}
//   >
//     <span className={`flex h-[22px] w-[22px] items-center justify-center rounded-md ${iconBg}`}>{icon}</span>
//     {children}
//   </div>
// );

// const NAV = ["Home", "Features", "How It Works", "Benefits", "FAQ"];

// export default function MytmakaanHomepage() {
//   return (
//     <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#f4f8fd] via-[#eef4fb] to-[#f1f6fc] font-sans">
//       {/* soft glow + dots */}
//       <div className="pointer-events-none absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-[#14b8a6]/10 blur-3xl" />
//       <div className="pointer-events-none absolute right-20 top-40 h-[600px] w-[600px] rounded-full bg-[#dbe7f7]/70 blur-3xl" />
//       <div
//         className="pointer-events-none absolute inset-0 opacity-50"
//         style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "28px 28px" }}
//       />

//       {/* ───────── Navbar ───────── */}
//       <header className="relative z-20 w-full bg-white/70 backdrop-blur">
//         <div className="mx-auto flex h-[62px] max-w-[1200px] items-center justify-between px-4">
//           <div className="flex items-center gap-3">
//             <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-gradient-to-br from-[#0f766e] to-[#14233f] text-sm font-bold text-white">
//               M
//             </div>
//             <div className="leading-tight">
//               <div className="text-[19px] font-extrabold tracking-wide text-[#14233f]">MYTMAKAAN</div>
//               <div className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#14b8a6]">
//                 Smart Community Living
//               </div>
//             </div>
//           </div>

//           <nav className="hidden items-center gap-8 md:flex">
//             {NAV.map((n) => (
//               <a key={n} href="#" className="text-[15px] font-medium text-slate-600 hover:text-[#0d9488]">
//                 {n}
//               </a>
//             ))}
//           </nav>

//           <a
//             href="#"
//             className="flex items-center gap-2 rounded-xl bg-[#14b8a6] px-5 py-[11px] text-[15px] font-semibold text-white shadow-md hover:bg-[#0d9488]"
//           >
//             <PlayIcon />
//             Download App
//           </a>
//         </div>
//       </header>

//       {/* ───────── Hero ───────── */}
//       <main className="relative z-10 mx-auto grid min-h-[calc(100vh-62px)] max-w-[1200px] grid-cols-1 items-center gap-10 px-4 py-16 lg:grid-cols-[1fr_1fr]">
//         {/* Left */}
//         <div className="max-w-[540px]">
//           <div className="inline-flex items-center gap-2 rounded-full border border-[#14b8a6]/25 bg-[#14b8a6]/10 px-4 py-2 text-[13px] font-medium text-[#0f9488]">
//             <span className="h-[6px] w-[6px] rounded-full bg-[#14b8a6]" />
//             The Complete Society Management App
//           </div>

//           <h1 className="mt-6 text-[62px] font-extrabold leading-[1.05] tracking-tight text-[#14233f]">
//             <span className="block">Your Society.</span>
//             <span className="block text-[#0f9d92]">Simpler.</span>
//             <span className="block">Smarter.</span>
//             <span className="block bg-gradient-to-r from-[#14233f] to-[#0f9d92] bg-clip-text text-transparent">
//               Connected.
//             </span>
//           </h1>

//           <p className="mt-7 text-[18px] leading-[1.6] text-slate-600">
//             MYTMAKAAN brings maintenance payments, visitor approvals, amenities, complaints, notices and community
//             communication together in one simple app.
//           </p>

//           <div className="mt-8 flex flex-wrap items-center gap-5">
//             <a
//               href="#"
//               className="flex items-center gap-2 rounded-xl bg-[#14b8a6] px-7 py-[16px] text-[16px] font-semibold text-white shadow-md hover:bg-[#0d9488]"
//             >
//               <PlayIcon />
//               Download the App
//             </a>
//             <a
//               href="#features"
//               className="rounded-xl border-2 border-[#14b8a6] px-[28px] py-[14px] text-[16px] font-semibold text-[#0d9488] hover:bg-[#14b8a6]/10"
//             >
//               Explore Features
//             </a>
//           </div>

//           <div className="mt-8 flex items-center gap-2 text-[14px]">
//             <div className="flex gap-[3px]">
//               {[...Array(5)].map((_, i) => (
//                 <Star key={i} />
//               ))}
//             </div>
//             <span className="font-medium text-[#14233f]">Everything your community needs,</span>
//             <span className="text-slate-500">right from your phone.</span>
//           </div>
//         </div>

//         {/* Right – poster image + floating chips */}
//         <div className="flex justify-center">
//           <div className="animate-float-phone relative w-[440px] max-w-full">
//             <img
//               src={heroApp}
//               alt="MYTMAKAAN app – Apne sheher ka apna trusted makaan app"
//               className="w-full rounded-[32px] shadow-[0_40px_80px_rgba(20,35,63,0.28)]"
//             />

//             <Chip
//               className="-left-[95px] top-[9%]"
//               iconBg="bg-emerald-50"
//               icon={<Check size={13} strokeWidth={2.5} className="text-emerald-500" />}
//             >
//               Maintenance Paid
//             </Chip>
//             <Chip
//               className="-right-[95px] top-[21%]"
//               iconBg="bg-amber-50"
//               icon={<DoorOpen size={13} strokeWidth={2} className="text-amber-500" />}
//             >
//               Visitor Approved
//             </Chip>
//             <Chip
//               className="-right-[105px] top-[50%]"
//               iconBg="bg-rose-50"
//               icon={<Megaphone size={13} strokeWidth={2} className="text-rose-500" />}
//             >
//               New Society Notice
//             </Chip>
//             <Chip
//               className="-left-[110px] top-[84%]"
//               iconBg="bg-sky-50"
//               icon={<Waves size={13} strokeWidth={2} className="text-sky-500" />}
//             >
//               Pool Booking Confirmed
//             </Chip>
//             <Chip
//               className="-right-[95px] bottom-[4%]"
//               iconBg="bg-emerald-50"
//               icon={<Check size={13} strokeWidth={2.5} className="text-emerald-500" />}
//             >
//               Complaint Resolved
//             </Chip>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }



import React from "react";
import { Check, DoorOpen, Megaphone, Waves } from "lucide-react";
import heroApp from "../assets/hero-app.png";
import { PLAY_STORE_URL } from "../constants";

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
    <path d="M5 3.5v17l14-8.5-14-8.5z" fill="currentColor" fillOpacity=".25" />
    <path d="M5 3.5l9 9M5 20.5l9-8" />
  </svg>
);

const Star = () => (
  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-slate-500">
    <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8L10 1.5z" />
  </svg>
);

const Chip = ({ className = "", icon, iconBg, children }) => (
  <div
    className={`absolute z-10 hidden items-center gap-2 whitespace-nowrap rounded-lg bg-white px-2.5 py-1.5 text-[12px] font-medium text-slate-800 shadow-[0_6px_20px_rgba(15,23,42,0.10)] xl:flex ${className}`}
  >
    <span className={`flex h-[22px] w-[22px] items-center justify-center rounded-md ${iconBg}`}>{icon}</span>
    {children}
  </div>
);

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQ", href: "#faq" },
];

export default function MytmakaanHomepage() {
  return (
    <div
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#f4f8fd] via-[#eef4fb] to-[#f1f6fc] font-sans"
    >
      {/* soft glow + dots */}
      <div className="pointer-events-none absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-[#14b8a6]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-20 top-40 h-[600px] w-[600px] rounded-full bg-[#dbe7f7]/70 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      {/* ───────── Navbar ───────── */}
      <header className="relative z-20 w-full bg-white/70 backdrop-blur">
        <div className="mx-auto flex h-[62px] max-w-[1200px] items-center justify-between px-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-gradient-to-br from-[#0f766e] to-[#14233f] text-sm font-bold text-white">
              M
            </div>
            <div className="leading-tight">
              <div className="text-[19px] font-extrabold tracking-wide text-[#14233f]">MYTMAKAAN</div>
              <div className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#14b8a6]">
                Smart Community Living
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className="text-[15px] font-medium text-slate-600 hover:text-[#0d9488]">
                {n.label}
              </a>
            ))}
          </nav>

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-[#14b8a6] px-5 py-[11px] text-[15px] font-semibold text-white shadow-md hover:bg-[#0d9488]"
          >
            <PlayIcon />
            Download App
          </a>
        </div>
      </header>

      {/* ───────── Hero ───────── */}
      <main className="relative z-10 mx-auto grid min-h-[calc(100vh-62px)] max-w-[1200px] grid-cols-1 items-center gap-10 px-4 py-16 lg:grid-cols-[1fr_1fr]">
        {/* Left */}
        <div className="max-w-[540px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#14b8a6]/25 bg-[#14b8a6]/10 px-4 py-2 text-[13px] font-medium text-[#0f9488]">
            <span className="h-[6px] w-[6px] rounded-full bg-[#14b8a6]" />
            The Complete Society Management App
          </div>

          <h1 className="mt-6 text-[62px] font-extrabold leading-[1.05] tracking-tight text-[#14233f]">
            <span className="block">Your Society.</span>
            <span className="block text-[#0f9d92]">Simpler.</span>
            <span className="block">Smarter.</span>
            <span className="block bg-gradient-to-r from-[#14233f] to-[#0f9d92] bg-clip-text text-transparent">
              Connected.
            </span>
          </h1>

          <p className="mt-7 text-[18px] leading-[1.6] text-slate-600">
            MYTMAKAAN brings maintenance payments, visitor approvals, amenities, complaints, notices and community
            communication together in one simple app.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-[#14b8a6] px-7 py-[16px] text-[16px] font-semibold text-white shadow-md hover:bg-[#0d9488]"
            >
              <PlayIcon />
              Download the App
            </a>
            <a
              href="#features"
              className="rounded-xl border-2 border-[#14b8a6] px-[28px] py-[14px] text-[16px] font-semibold text-[#0d9488] hover:bg-[#14b8a6]/10"
            >
              Explore Features
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-[14px]">
            <div className="flex gap-[3px]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} />
              ))}
            </div>
            <span className="font-medium text-[#14233f]">Everything your community needs,</span>
            <span className="text-slate-500">right from your phone.</span>
          </div>
        </div>

        {/* Right – poster image + floating chips */}
        <div className="flex justify-center">
          <div className="animate-float-phone relative w-[440px] max-w-full">
            <img
              src={heroApp}
              alt="MYTMAKAAN app – Apne sheher ka apna trusted makaan app"
              className="w-full rounded-[32px] shadow-[0_40px_80px_rgba(20,35,63,0.28)]"
            />

            <Chip
              className="-left-[95px] top-[9%]"
              iconBg="bg-emerald-50"
              icon={<Check size={13} strokeWidth={2.5} className="text-emerald-500" />}
            >
              Maintenance Paid
            </Chip>
            <Chip
              className="-right-[95px] top-[21%]"
              iconBg="bg-amber-50"
              icon={<DoorOpen size={13} strokeWidth={2} className="text-amber-500" />}
            >
              Visitor Approved
            </Chip>
            <Chip
              className="-right-[105px] top-[50%]"
              iconBg="bg-rose-50"
              icon={<Megaphone size={13} strokeWidth={2} className="text-rose-500" />}
            >
              New Society Notice
            </Chip>
            <Chip
              className="-left-[110px] top-[84%]"
              iconBg="bg-sky-50"
              icon={<Waves size={13} strokeWidth={2} className="text-sky-500" />}
            >
              Pool Booking Confirmed
            </Chip>
            <Chip
              className="-right-[95px] bottom-[4%]"
              iconBg="bg-emerald-50"
              icon={<Check size={13} strokeWidth={2.5} className="text-emerald-500" />}
            >
              Complaint Resolved
            </Chip>
          </div>
        </div>
      </main>
    </div>
  );
}