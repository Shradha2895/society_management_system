



import React, { useState } from "react";
import {
  CreditCard,
  DoorOpen,
  CalendarDays,
  MessageSquareWarning,
  Megaphone,
  FileText,
  Users,
} from "lucide-react";
import homePhone from "../assets/hero-phone.png";
import billsPhone from "../assets/phone-bills.png";

const LEFT = [
  { label: "Maintenance Payments", Icon: CreditCard },
  { label: "Visitor Management", Icon: DoorOpen },
  { label: "Amenity Booking", Icon: CalendarDays },
  { label: "Complaints", Icon: MessageSquareWarning },
];

const RIGHT = [
  { label: "Notices & Alerts", Icon: Megaphone },
  { label: "Society Documents", Icon: FileText },
  { label: "Community Connect", Icon: Users },
];

/* Which pill shows which phone screen - change here when you get more screens */
const IMAGES = {
  "Maintenance Payments": billsPhone,
  "Visitor Management": homePhone,
  "Amenity Booking": homePhone,
  Complaints: homePhone,
  "Notices & Alerts": homePhone,
  "Society Documents": homePhone,
  "Community Connect": homePhone,
};

const Pill = ({ item, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex w-[225px] items-center gap-4 rounded-xl px-5 py-[15px] text-left text-[13px] font-semibold transition-all duration-300 ${
      active
        ? "bg-[#0f1a44] text-white shadow-[0_10px_25px_rgba(15,26,68,0.25)]"
        : "bg-[#f3f5fa] text-slate-600 hover:bg-[#e9edf6]"
    }`}
  >
    <item.Icon size={18} strokeWidth={1.7} className="shrink-0" />
    {item.label}
  </button>
);

export default function AppShowcase() {
  const [active, setActive] = useState("Maintenance Payments");

  return (
    <section id="app-showcase" className="relative overflow-hidden bg-white py-16">
      {/* heading */}
      <div className="mx-auto max-w-[700px] px-4 text-center">
        <h2 className="text-[40px] font-extrabold leading-[1.15] tracking-tight text-[#14233f]">
          Everything Your Society Needs.
          <span className="block text-[#0f9d92]">In One App.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[420px] text-[15px] leading-relaxed text-slate-500">
          From everyday payments to visitor management, MYTMAKAAN keeps your community connected and organized.
        </p>
      </div>

      {/* showcase */}
      <div className="relative mx-auto mt-14 flex max-w-[1200px] items-center justify-center gap-10 px-4 lg:gap-16">
        {/* soft glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(226,232,244,0.8),transparent)]" />

        {/* left pills */}
        <div className="relative z-10 hidden flex-col gap-[15px] md:flex">
          {LEFT.map((p) => (
            <Pill key={p.label} item={p} active={active === p.label} onClick={() => setActive(p.label)} />
          ))}
        </div>

        {/* center phone */}
        <div className="animate-float-phone relative z-10 w-[300px] shrink-0">
          <img
            key={active}
            src={IMAGES[active]}
            alt={active}
            className="w-full drop-shadow-[0_40px_60px_rgba(20,35,63,0.25)]"
          />
        </div>

        {/* right pills */}
        <div className="relative z-10 hidden flex-col gap-[15px] md:flex">
          {RIGHT.map((p) => (
            <Pill key={p.label} item={p} active={active === p.label} onClick={() => setActive(p.label)} />
          ))}
        </div>
      </div>
    </section>
  );
}