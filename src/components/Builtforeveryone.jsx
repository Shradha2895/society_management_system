// import React from "react";

// const Check = ({ className }) => (
//   <svg viewBox="0 0 20 20" className={`h-[18px] w-[18px] shrink-0 ${className}`} fill="currentColor">
//     <path
//       fillRule="evenodd"
//       d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 00-1.4 1.4l2 2a1 1 0 001.4 0l4-4z"
//       clipRule="evenodd"
//     />
//   </svg>
// );

// const GROUPS = [
//   {
//     icon: "🏠",
//     title: "Residents",
//     desc: "Everything you need for everyday society life.",
//     items: ["Maintenance Payments", "Visitor Approvals", "Amenity Booking", "Raise Complaints", "Read Notices"],
//     card: "border-[#bfeae4] bg-gradient-to-br from-[#e4f6f3] to-[#f1fbf9]",
//     titleColor: "text-[#0f9d92]",
//     checkColor: "text-[#14a89b]",
//   },
//   {
//     icon: "🏢",
//     title: "Society Committee",
//     desc: "Manage your community more efficiently.",
//     items: ["Send Notices", "Manage Documents", "Resolve Complaints", "Track Payments", "Community Engagement"],
//     card: "border-slate-300 bg-gradient-to-br from-[#e6e7ec] to-[#f1f2f5]",
//     titleColor: "text-[#14233f]",
//     checkColor: "text-[#14233f]",
//   },
//   {
//     icon: "🛡️",
//     title: "Security Team",
//     desc: "Make visitor entry simpler and more organized.",
//     items: ["Visitor Requests", "Delivery Entries", "Entry Approvals", "Resident Alerts", "Entry Logs"],
//     card: "border-[#fde3a6] bg-gradient-to-br from-[#fff1de] to-[#fffaf0]",
//     titleColor: "text-[#e57a0b]",
//     checkColor: "text-[#f5a524]",
//   },
// ];

// export default function BuiltForEveryone() {
//   return (
//     <section className="bg-white py-24">
//       <div className="mx-auto max-w-[1200px] px-4">
//         {/* heading */}
//         <div className="text-center">
//           <h2 className="text-[38px] font-extrabold leading-[1.15] tracking-tight text-[#14233f]">
//             Built for <span className="text-[#0f9d92]">Everyone</span> in the Community
//           </h2>
//           <p className="mx-auto mt-4 max-w-[700px] text-[16px] text-slate-500">
//             Whether you're a resident, committee member, or security personnel — MYTMAKAAN works for you.
//           </p>
//         </div>

//         {/* cards */}
//         <div className="mx-auto mt-14 grid max-w-[1180px] grid-cols-1 gap-6 md:grid-cols-3">
//           {GROUPS.map((g) => (
//             <div
//               key={g.title}
//               className={`rounded-2xl border p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl ${g.card}`}
//             >
//               <div className="text-[40px] leading-none">{g.icon}</div>
//               <h3 className={`mt-5 text-[20px] font-bold ${g.titleColor}`}>{g.title}</h3>
//               <p className="mt-2 text-[14px] text-slate-600">{g.desc}</p>

//               <ul className="mt-5 space-y-3">
//                 {g.items.map((it) => (
//                   <li key={it} className="flex items-center gap-3 text-[14px] text-slate-600">
//                     <Check className={g.checkColor} />
//                     {it}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { House, Building2, ShieldCheck } from "lucide-react";

const Check = ({ className }) => (
  <svg viewBox="0 0 20 20" className={`h-[18px] w-[18px] shrink-0 ${className}`} fill="currentColor">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 00-1.4 1.4l2 2a1 1 0 001.4 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const GROUPS = [
  {
    Icon: House,
    title: "Residents",
    desc: "Everything you need for everyday society life.",
    items: ["Maintenance Payments", "Visitor Approvals", "Amenity Booking", "Raise Complaints", "Read Notices"],
    card: "border-[#bfeae4] bg-gradient-to-br from-[#e4f6f3] to-[#f1fbf9]",
    titleColor: "text-[#0f9d92]",
    checkColor: "text-[#14a89b]",
  },
  {
    Icon: Building2,
    title: "Society Committee",
    desc: "Manage your community more efficiently.",
    items: ["Send Notices", "Manage Documents", "Resolve Complaints", "Track Payments", "Community Engagement"],
    card: "border-slate-300 bg-gradient-to-br from-[#e6e7ec] to-[#f1f2f5]",
    titleColor: "text-[#14233f]",
    checkColor: "text-[#14233f]",
  },
  {
    Icon: ShieldCheck,
    title: "Security Team",
    desc: "Make visitor entry simpler and more organized.",
    items: ["Visitor Requests", "Delivery Entries", "Entry Approvals", "Resident Alerts", "Entry Logs"],
    card: "border-[#fde3a6] bg-gradient-to-br from-[#fff1de] to-[#fffaf0]",
    titleColor: "text-[#e57a0b]",
    checkColor: "text-[#f5a524]",
  },
];

export default function BuiltForEveryone() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* heading */}
        <div className="text-center">
          <h2 className="text-[38px] font-extrabold leading-[1.15] tracking-tight text-[#14233f]">
            Built for <span className="text-[#0f9d92]">Everyone</span> in the Community
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[16px] text-slate-500">
            Whether you're a resident, committee member, or security personnel — MYTMAKAAN works for you.
          </p>
        </div>

        {/* cards */}
        <div className="mx-auto mt-14 grid max-w-[1180px] grid-cols-1 gap-6 md:grid-cols-3">
          {GROUPS.map((g) => (
            <div
              key={g.title}
              className={`rounded-2xl border p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl ${g.card}`}
            >
              <div
                className={`flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-white/70 ${g.titleColor}`}
              >
                <g.Icon size={26} strokeWidth={1.5} />
              </div>
              <h3 className={`mt-5 text-[20px] font-bold ${g.titleColor}`}>{g.title}</h3>
              <p className="mt-2 text-[14px] text-slate-600">{g.desc}</p>

              <ul className="mt-5 space-y-3">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 text-[14px] text-slate-600">
                    <Check className={g.checkColor} />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
