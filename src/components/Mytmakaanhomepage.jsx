



import React from "react";
import { Check, DoorOpen, Megaphone, Waves } from "lucide-react";
import heroPhone from "../assets/hero-phone.png";
import { PLAY_STORE_URL } from "../constants";

/* Google Play logo (4 colours) */
const GooglePlayLogo = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M3.6 2.2L13.2 12 3.6 21.8C3.3 21.5 3.1 21 3.1 20.4V3.6C3.1 3 3.3 2.5 3.6 2.2Z" fill="#00C3FF" />
    <path d="M16.5 8.7L13.2 12 3.6 2.2C3.9 1.9 4.4 1.8 5 2.1L16.5 8.7Z" fill="#00E676" />
    <path d="M16.5 15.3L5 21.9C4.4 22.2 3.9 22.1 3.6 21.8L13.2 12 16.5 15.3Z" fill="#FF3A44" />
    <path d="M20.4 10.8C21.1 11.2 21.1 12.8 20.4 13.2L16.5 15.3 13.2 12 16.5 8.7 20.4 10.8Z" fill="#FFD500" />
  </svg>
);

const Star = () => (
  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-slate-500">
    <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8L10 1.5z" />
  </svg>
);

const Chip = ({ className = "", icon, iconBg, children }) => (
  <div
    className={`absolute z-10 hidden items-center gap-2 whitespace-nowrap rounded-lg bg-white px-2.5 py-1.5 text-[12px] font-medium text-slate-800 shadow-[0_6px_20px_rgba(15,23,42,0.10)] lg:flex ${className}`}
  >
    <span className={`flex h-[22px] w-[22px] items-center justify-center rounded-md ${iconBg}`}>{icon}</span>
    {children}
  </div>
);

export default function MytmakaanHomepage() {
  return (
    <div
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#f4f8fd] via-[#eef4fb] to-[#f1f6fc] pt-[62px] font-sans"
    >
      {/* soft glow + dots */}
      <div className="pointer-events-none absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-[#14b8a6]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-20 top-40 h-[600px] w-[600px] rounded-full bg-[#dbe7f7]/70 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      {/* ───────── Hero (navbar comes from Navbar.jsx) ───────── */}
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
              className="flex items-center gap-3 rounded-xl bg-[#14b8a6] px-7 py-[16px] text-[16px] font-semibold text-white shadow-md hover:bg-[#0d9488]"
            >
              <GooglePlayLogo className="h-[22px] w-[22px]" />
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

        {/* Right – phone image + floating chips */}
        <div className="flex justify-center">
          <div className="animate-float-phone relative w-[330px] max-w-full">
            <img
              src={heroPhone}
              alt="MYTMAKAAN app home screen"
              className="w-full drop-shadow-[0_40px_60px_rgba(20,35,63,0.25)]"
            />

            <Chip
              className="-left-[120px] top-[9%]"
              iconBg="bg-emerald-50"
              icon={<Check size={13} strokeWidth={2.5} className="text-emerald-500" />}
            >
              Maintenance Paid
            </Chip>
            <Chip
              className="-right-[115px] top-[21%]"
              iconBg="bg-amber-50"
              icon={<DoorOpen size={13} strokeWidth={2} className="text-amber-500" />}
            >
              Visitor Approved
            </Chip>
            <Chip
              className="-right-[135px] top-[50%]"
              iconBg="bg-rose-50"
              icon={<Megaphone size={13} strokeWidth={2} className="text-rose-500" />}
            >
              New Society Notice
            </Chip>
            <Chip
              className="-left-[150px] top-[82%]"
              iconBg="bg-sky-50"
              icon={<Waves size={13} strokeWidth={2} className="text-sky-500" />}
            >
              Pool Booking Confirmed
            </Chip>
            <Chip
              className="-right-[130px] bottom-[5%]"
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