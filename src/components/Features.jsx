
import React from "react";
import {
  CreditCard,
  UserCheck,
  CalendarDays,
  MessageSquareWarning,
  Bell,
  Users,
  Receipt,
  DoorOpen,
  CalendarCheck,
  ClipboardList,
  BellRing,
} from "lucide-react";

const FEATURES = [
  {
    title: "Easy Maintenance Payments",
    desc: "Pay maintenance and other society charges digitally and receive instant receipts.",
    tag: "Instant Receipt",
    Icon: CreditCard,
    TagIcon: Receipt,
    iconStyle: "bg-[#e6f7f4] text-[#0f766e] group-hover:bg-[#0f9d92] group-hover:text-white",
    tagStyle: "bg-[#e6f7f4] text-[#0f766e]",
  },
  {
    title: "Smart Visitor Management",
    desc: "Pre-approve visitors and delivery personnel for a smoother, contactless entry experience.",
    tag: "Contactless Entry",
    Icon: UserCheck,
    TagIcon: DoorOpen,
    iconStyle: "bg-[#e8f0fe] text-[#1d4ed8] group-hover:bg-[#2563eb] group-hover:text-white",
    tagStyle: "bg-[#e8f0fe] text-[#1d4ed8]",
  },
  {
    title: "Book Amenities",
    desc: "Book your clubhouse, swimming pool, sports facilities and other amenities with ease.",
    tag: "Instant Booking",
    Icon: CalendarDays,
    TagIcon: CalendarCheck,
    iconStyle: "bg-[#f3e8ff] text-[#6d28d9] group-hover:bg-[#7c3aed] group-hover:text-white",
    tagStyle: "bg-[#f3e8ff] text-[#6d28d9]",
  },
  {
    title: "Raise Complaints",
    desc: "Register complaints and track their resolution status in real time.",
    tag: "Track in Real Time",
    Icon: MessageSquareWarning,
    TagIcon: ClipboardList,
    iconStyle: "bg-[#ffedd5] text-[#c2410c] group-hover:bg-[#ea580c] group-hover:text-white",
    tagStyle: "bg-[#ffedd5] text-[#c2410c]",
  },
  {
    title: "Notices & Alerts",
    desc: "Stay updated with society announcements, notifications and emergency alerts.",
    tag: "Instant Alerts",
    Icon: Bell,
    TagIcon: BellRing,
    iconStyle: "bg-[#fef3c7] text-[#b45309] group-hover:bg-[#d97706] group-hover:text-white",
    tagStyle: "bg-[#fef3c7] text-[#b45309]",
  },
  {
    title: "Community Connect",
    desc: "Access important documents and stay connected with your neighbours and community.",
    tag: "Stay Connected",
    Icon: Users,
    TagIcon: Users,
    iconStyle: "bg-[#dcfce7] text-[#15803d] group-hover:bg-[#16a34a] group-hover:text-white",
    tagStyle: "bg-[#dcfce7] text-[#15803d]",
  },
];

export default function Features() {
  return (
    // <section id="features-grid" className="bg-[#f5f7fb] py-24">
    <section
  id="features"
  className="scroll-mt-20 bg-[#f5f7fb] py-24"
>
      <div className="mx-auto max-w-[1200px] px-4">
        {/* heading */}
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="text-[40px] font-extrabold leading-[1.15] tracking-tight text-[#14233f]">
            Powerful Features,
            <span className="block text-[#0f9d92]">Effortlessly Simple.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[440px] text-[18px] leading-relaxed text-slate-500">
            Every feature is designed to make everyday society life easier for everyone.
          </p>
        </div>

        {/* cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className={`flex h-[46px] w-[46px] items-center justify-center rounded-xl transition-colors duration-300 ${f.iconStyle}`}
              >
                <f.Icon size={21} strokeWidth={1.6} />
              </div>
              <h3 className="mt-5 text-[19px] font-bold text-[#14233f]">{f.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-500">{f.desc}</p>
              <span
                className={`mt-5 inline-flex items-center gap-2 rounded-full px-3 py-[6px] text-[12px] font-semibold ${f.tagStyle}`}
              >
                <f.TagIcon size={14} strokeWidth={2} />
                {f.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}