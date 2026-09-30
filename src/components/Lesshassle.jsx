// import React from "react";

// const OLD = [
//   { icon: "📄", text: "Paper notices everywhere" },
//   { icon: "🏦", text: "Manual bank payments" },
//   { icon: "📞", text: "Phone calls for visitors" },
//   { icon: "⏰", text: "Long complaint follow-ups" },
//   { icon: "📪", text: "Missed announcements" },
// ];

// const NEW = [
//   "Digital payment confirmed",
//   "Visitor approved instantly",
//   "Amenity booking confirmed",
//   "Complaint resolved",
//   "Notice received instantly",
// ];

// export default function LessHassle() {
//   return (
//     <section className="bg-white py-24">
//       <div className="mx-auto max-w-[1270px] px-4">
//         {/* heading */}
//         <div className="text-center">
//           <h2 className="text-[40px] font-extrabold leading-[1.15] tracking-tight text-[#14233f]">
//             Less Hassle. <span className="text-[#0f9d92]">More Community.</span>
//           </h2>
//           <p className="mt-4 text-[17px] text-slate-500">
//             See how MYTMAKAAN transforms your everyday society experience.
//           </p>
//         </div>

//         {/* comparison */}
//         <div className="mt-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
//           {/* old way */}
//           <div className="rounded-3xl border border-[#fbd9d9] bg-[#fef1f1] p-6">
//             <div className="flex items-center gap-3 text-[19px] font-bold text-[#c81e1e]">
//               <span className="text-[24px]">😫</span>
//               <h3>The Old Way</h3>
//             </div>
//             <ul className="mt-5 space-y-3">
//               {OLD.map((o) => (
//                 <li
//                   key={o.text}
//                   className="flex items-center gap-4 rounded-xl bg-white/70 px-5 py-[15px] text-[15px] font-medium text-slate-500"
//                 >
//                   <span className="text-[18px]">{o.icon}</span>
//                   <span className="line-through decoration-[#e05252]">{o.text}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* center logo + arrow */}
//           <div className="flex flex-col items-center gap-3">
//             <div className="flex h-[58px] w-[58px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#0f9d92] to-[#14233f] text-center text-[11px] font-extrabold leading-[1.1] text-white shadow-lg">
//               MYT
//               <br />
//               MAKAAN
//             </div>
//             <span className="text-[22px] text-[#14b8a6]">→</span>
//           </div>

//           {/* new way */}
//           <div className="rounded-3xl border border-[#c9f0d8] bg-[#eefcf3] p-6">
//             <div className="flex items-center gap-3 text-[19px] font-bold text-[#15803d]">
//               <span className="text-[24px]">😊</span>
//               <h3>The MYTMAKAAN Way</h3>
//             </div>
//             <ul className="mt-5 space-y-3">
//               {NEW.map((t) => (
//                 <li
//                   key={t}
//                   className="flex items-center gap-4 rounded-xl bg-white/70 px-5 py-[15px] text-[15px] font-semibold text-[#166534]"
//                 >
//                   <span className="flex h-[22px] w-[22px] items-center justify-center rounded-md bg-[#34d399] text-[13px] font-bold text-white">
//                     ✓
//                   </span>
//                   {t}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import {
  FileText,
  Landmark,
  PhoneCall,
  Clock,
  MailX,
  Frown,
  Smile,
  ArrowRight,
  Check,
} from "lucide-react";

const OLD = [
  { Icon: FileText, text: "Paper notices everywhere" },
  { Icon: Landmark, text: "Manual bank payments" },
  { Icon: PhoneCall, text: "Phone calls for visitors" },
  { Icon: Clock, text: "Long complaint follow-ups" },
  { Icon: MailX, text: "Missed announcements" },
];

const NEW = [
  "Digital payment confirmed",
  "Visitor approved instantly",
  "Amenity booking confirmed",
  "Complaint resolved",
  "Notice received instantly",
];

export default function LessHassle() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1270px] px-4">
        {/* heading */}
        <div className="text-center">
          <h2 className="text-[40px] font-extrabold leading-[1.15] tracking-tight text-[#14233f]">
            Less Hassle. <span className="text-[#0f9d92]">More Community.</span>
          </h2>
          <p className="mt-4 text-[17px] text-slate-500">
            See how MYTMAKAAN transforms your everyday society experience.
          </p>
        </div>

        {/* comparison */}
        <div className="mt-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
          {/* old way */}
          <div className="rounded-3xl border border-[#fbd9d9] bg-[#fef1f1] p-6">
            <div className="flex items-center gap-3 text-[19px] font-bold text-[#c81e1e]">
              <Frown size={24} strokeWidth={1.7} />
              <h3>The Old Way</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {OLD.map(({ Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-4 rounded-xl bg-white/70 px-5 py-[15px] text-[15px] font-medium text-slate-500"
                >
                  <Icon size={18} strokeWidth={1.7} className="shrink-0 text-slate-400" />
                  <span className="line-through decoration-[#e05252]">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* center logo + arrow */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-[58px] w-[58px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#0f9d92] to-[#14233f] text-center text-[11px] font-extrabold leading-[1.1] text-white shadow-lg">
              MYT
              <br />
              MAKAAN
            </div>
            <ArrowRight size={22} strokeWidth={2} className="text-[#14b8a6]" />
          </div>

          {/* new way */}
          <div className="rounded-3xl border border-[#c9f0d8] bg-[#eefcf3] p-6">
            <div className="flex items-center gap-3 text-[19px] font-bold text-[#15803d]">
              <Smile size={24} strokeWidth={1.7} />
              <h3>The MYTMAKAAN Way</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {NEW.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-4 rounded-xl bg-white/70 px-5 py-[15px] text-[15px] font-semibold text-[#166534]"
                >
                  <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-md bg-[#34d399] text-white">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}