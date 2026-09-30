// // // import { motion } from "framer-motion";
// // // import {
// // //   CreditCard,
// // //   Users,
// // //   CalendarCheck,
// // //   MessageSquare,
// // //   Bell,
// // //   FileText,
// // // } from "lucide-react";

// // // const features = [
// // //   {
// // //     icon: CreditCard,
// // //     title: "Maintenance Payments",
// // //     description:
// // //       "Pay society maintenance quickly and securely from your phone.",
// // //   },
// // //   {
// // //     icon: Users,
// // //     title: "Visitor Management",
// // //     description:
// // //       "Approve visitors and manage guest entries with ease.",
// // //   },
// // //   {
// // //     icon: CalendarCheck,
// // //     title: "Amenity Booking",
// // //     description:
// // //       "Book clubhouse, pool, gym and other society amenities.",
// // //   },
// // //   {
// // //     icon: MessageSquare,
// // //     title: "Complaints",
// // //     description:
// // //       "Raise complaints and track their resolution status.",
// // //   },
// // //   {
// // //     icon: Bell,
// // //     title: "Society Notices",
// // //     description:
// // //       "Receive important announcements and community updates.",
// // //   },
// // //   {
// // //     icon: FileText,
// // //     title: "Digital Documents",
// // //     description:
// // //       "Access society documents whenever you need them.",
// // //   },
// // // ];

// // // function Features() {
// // //   return (
// // //     <section
// // //       id="features"
// // //       className="bg-white px-6 py-24"
// // //     >
// // //       <div className="mx-auto max-w-6xl">

// // //         {/* Heading */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.7 }}
// // //           className="mx-auto max-w-2xl text-center"
// // //         >
// // //           <span className="text-xs font-bold uppercase tracking-widest text-teal-500">
// // //             Everything in one place
// // //           </span>

// // //           <h2 className="mt-3 text-4xl font-bold text-[#13244d]">
// // //             Your Society,
// // //             <span className="text-teal-500">
// // //               {" "}Connected.
// // //             </span>
// // //           </h2>

// // //           <p className="mt-4 text-sm leading-7 text-slate-500">
// // //             Everything residents and management committees need
// // //             to manage community living efficiently.
// // //           </p>
// // //         </motion.div>

// // //         {/* Cards */}
// // //         <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

// // //           {features.map((feature, index) => {
// // //             const Icon = feature.icon;

// // //             return (
// // //               <motion.div
// // //                 key={feature.title}
// // //                 initial={{
// // //                   opacity: 0,
// // //                   y: 40,
// // //                 }}
// // //                 whileInView={{
// // //                   opacity: 1,
// // //                   y: 0,
// // //                 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{
// // //                   duration: 0.6,
// // //                   delay: index * 0.1,
// // //                 }}
// // //                 whileHover={{
// // //                   y: -8,
// // //                 }}
// // //                 className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:shadow-xl"
// // //               >

// // //                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-500 transition group-hover:bg-teal-500 group-hover:text-white">
// // //                   <Icon size={21} />
// // //                 </div>

// // //                 <h3 className="mt-5 text-lg font-bold text-[#13244d]">
// // //                   {feature.title}
// // //                 </h3>

// // //                 <p className="mt-2 text-sm leading-6 text-slate-500">
// // //                   {feature.description}
// // //                 </p>

// // //               </motion.div>
// // //             );
// // //           })}

// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // export default Features;




// // import React from "react";

// // const Icon = ({ children }) => (
// //   <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// //     {children}
// //   </svg>
// // );

// // const FEATURES = [
// //   {
// //     title: "Easy Maintenance Payments",
// //     desc: "Pay maintenance and other society charges digitally and receive instant receipts.",
// //     tag: "Instant Receipt",
// //     tagIcon: "💳",
// //     gradient: "from-[#14b8a6] to-[#0d9488]",
// //     tagStyle: "bg-[#e6f7f4] text-[#0f766e]",
// //     icon: (
// //       <Icon>
// //         <rect x="2" y="5" width="20" height="14" rx="2" />
// //         <path d="M2 10h20" />
// //       </Icon>
// //     ),
// //   },
// //   {
// //     title: "Smart Visitor Management",
// //     desc: "Pre-approve visitors and delivery personnel for a smoother, contactless entry experience.",
// //     tag: "Contactless Entry",
// //     tagIcon: "🚪",
// //     gradient: "from-[#3b82f6] to-[#2563eb]",
// //     tagStyle: "bg-[#e8f0fe] text-[#1d4ed8]",
// //     icon: (
// //       <Icon>
// //         <circle cx="9" cy="8" r="3.5" />
// //         <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 4.5a3.5 3.5 0 010 7M21 20c0-2.6-1.6-4.8-4-5.6" />
// //       </Icon>
// //     ),
// //   },
// //   {
// //     title: "Book Amenities",
// //     desc: "Book your clubhouse, swimming pool, sports facilities and other amenities with ease.",
// //     tag: "Instant Booking",
// //     tagIcon: "🏊",
// //     gradient: "from-[#a855f7] to-[#7c3aed]",
// //     tagStyle: "bg-[#f3e8ff] text-[#6d28d9]",
// //     icon: (
// //       <Icon>
// //         <rect x="3" y="4" width="18" height="17" rx="2" />
// //         <path d="M3 10h18M8 2v4M16 2v4" />
// //       </Icon>
// //     ),
// //   },
// //   {
// //     title: "Raise Complaints",
// //     desc: "Register complaints and track their resolution status in real time.",
// //     tag: "Track in Real Time",
// //     tagIcon: "📋",
// //     gradient: "from-[#fb923c] to-[#ea580c]",
// //     tagStyle: "bg-[#ffedd5] text-[#c2410c]",
// //     icon: (
// //       <Icon>
// //         <circle cx="12" cy="12" r="9" />
// //         <path d="M12 7v6M12 16.5v.5" />
// //       </Icon>
// //     ),
// //   },
// //   {
// //     title: "Notices & Alerts",
// //     desc: "Stay updated with society announcements, notifications and emergency alerts.",
// //     tag: "Instant Alerts",
// //     tagIcon: "📢",
// //     gradient: "from-[#fbbf24] to-[#d97706]",
// //     tagStyle: "bg-[#fef3c7] text-[#b45309]",
// //     icon: (
// //       <Icon>
// //         <path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 003.4 0" />
// //       </Icon>
// //     ),
// //   },
// //   {
// //     title: "Community Connect",
// //     desc: "Access important documents and stay connected with your neighbours and community.",
// //     tag: "Stay Connected",
// //     tagIcon: "👥",
// //     gradient: "from-[#22c55e] to-[#16a34a]",
// //     tagStyle: "bg-[#dcfce7] text-[#15803d]",
// //     icon: (
// //       <Icon>
// //         <circle cx="9" cy="8" r="3.5" />
// //         <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 4.5a3.5 3.5 0 010 7M21 20c0-2.6-1.6-4.8-4-5.6" />
// //       </Icon>
// //     ),
// //   },
// // ];

// // export default function Features() {
// //   return (
// //     <section id="features-grid" className="bg-[#f5f7fb] py-24">
// //       <div className="mx-auto max-w-[1200px] px-4">
// //         {/* heading */}
// //         <div className="mx-auto max-w-[640px] text-center">
// //           <h2 className="text-[40px] font-extrabold leading-[1.15] tracking-tight text-[#14233f]">
// //             Powerful Features,
// //             <span className="block text-[#0f9d92]">Effortlessly Simple.</span>
// //           </h2>
// //           <p className="mx-auto mt-5 max-w-[440px] text-[18px] leading-relaxed text-slate-500">
// //             Every feature is designed to make everyday society life easier for everyone.
// //           </p>
// //         </div>

// //         {/* cards */}
// //         <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
// //           {FEATURES.map((f) => (
// //             <div
// //               key={f.title}
// //               className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
// //             >
// //               <div
// //                 className={`flex h-[48px] w-[48px] items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md ${f.gradient}`}
// //               >
// //                 {f.icon}
// //               </div>
// //               <h3 className="mt-5 text-[19px] font-bold text-[#14233f]">{f.title}</h3>
// //               <p className="mt-3 text-[15px] leading-relaxed text-slate-500">{f.desc}</p>
// //               <span
// //                 className={`mt-5 inline-flex items-center gap-2 rounded-full px-3 py-[6px] text-[12px] font-semibold ${f.tagStyle}`}
// //               >
// //                 <span>{f.tagIcon}</span>
// //                 {f.tag}
// //               </span>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// import React from "react";
// import {
//   CreditCard,
//   UserCheck,
//   CalendarDays,
//   MessageSquareWarning,
//   Bell,
//   Users,
//   Receipt,
//   DoorOpen,
//   CalendarCheck,
//   ClipboardList,
//   BellRing,
// } from "lucide-react";

// const FEATURES = [
//   {
//     title: "Easy Maintenance Payments",
//     desc: "Pay maintenance and other society charges digitally and receive instant receipts.",
//     tag: "Instant Receipt",
//     Icon: CreditCard,
//     TagIcon: Receipt,
//     gradient: "from-[#14b8a6] to-[#0d9488]",
//     tagStyle: "bg-[#e6f7f4] text-[#0f766e]",
//   },
//   {
//     title: "Smart Visitor Management",
//     desc: "Pre-approve visitors and delivery personnel for a smoother, contactless entry experience.",
//     tag: "Contactless Entry",
//     Icon: UserCheck,
//     TagIcon: DoorOpen,
//     gradient: "from-[#3b82f6] to-[#2563eb]",
//     tagStyle: "bg-[#e8f0fe] text-[#1d4ed8]",
//   },
//   {
//     title: "Book Amenities",
//     desc: "Book your clubhouse, swimming pool, sports facilities and other amenities with ease.",
//     tag: "Instant Booking",
//     Icon: CalendarDays,
//     TagIcon: CalendarCheck,
//     gradient: "from-[#a855f7] to-[#7c3aed]",
//     tagStyle: "bg-[#f3e8ff] text-[#6d28d9]",
//   },
//   {
//     title: "Raise Complaints",
//     desc: "Register complaints and track their resolution status in real time.",
//     tag: "Track in Real Time",
//     Icon: MessageSquareWarning,
//     TagIcon: ClipboardList,
//     gradient: "from-[#fb923c] to-[#ea580c]",
//     tagStyle: "bg-[#ffedd5] text-[#c2410c]",
//   },
//   {
//     title: "Notices & Alerts",
//     desc: "Stay updated with society announcements, notifications and emergency alerts.",
//     tag: "Instant Alerts",
//     Icon: Bell,
//     TagIcon: BellRing,
//     gradient: "from-[#fbbf24] to-[#d97706]",
//     tagStyle: "bg-[#fef3c7] text-[#b45309]",
//   },
//   {
//     title: "Community Connect",
//     desc: "Access important documents and stay connected with your neighbours and community.",
//     tag: "Stay Connected",
//     Icon: Users,
//     TagIcon: Users,
//     gradient: "from-[#22c55e] to-[#16a34a]",
//     tagStyle: "bg-[#dcfce7] text-[#15803d]",
//   },
// ];

// export default function Features() {
//   return (
//     <section id="features-grid" className="bg-[#f5f7fb] py-24">
//       <div className="mx-auto max-w-[1200px] px-4">
//         {/* heading */}
//         <div className="mx-auto max-w-[640px] text-center">
//           <h2 className="text-[40px] font-extrabold leading-[1.15] tracking-tight text-[#14233f]">
//             Powerful Features,
//             <span className="block text-[#0f9d92]">Effortlessly Simple.</span>
//           </h2>
//           <p className="mx-auto mt-5 max-w-[440px] text-[18px] leading-relaxed text-slate-500">
//             Every feature is designed to make everyday society life easier for everyone.
//           </p>
//         </div>

//         {/* cards */}
//         <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {FEATURES.map((f) => (
//             <div
//               key={f.title}
//               className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
//             >
//               <div
//                 className={`flex h-[48px] w-[48px] items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md ${f.gradient}`}
//               >
//                 <f.Icon size={22} strokeWidth={1.9} />
//               </div>
//               <h3 className="mt-5 text-[19px] font-bold text-[#14233f]">{f.title}</h3>
//               <p className="mt-3 text-[15px] leading-relaxed text-slate-500">{f.desc}</p>
//               <span
//                 className={`mt-5 inline-flex items-center gap-2 rounded-full px-3 py-[6px] text-[12px] font-semibold ${f.tagStyle}`}
//               >
//                 <f.TagIcon size={14} strokeWidth={2.2} />
//                 {f.tag}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

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
    <section id="features-grid" className="bg-[#f5f7fb] py-24">
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