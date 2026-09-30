// import React from "react";

// /* ---------- small shared pieces ---------- */
// const Status = ({ dark = true }) => (
//   <div className={`flex h-[30px] items-center justify-between px-4 text-[9px] font-semibold text-white ${dark ? "bg-[#0d1640]" : "bg-[#0f1a44]"}`}>
//     9:41
//     <span className="h-[6px] w-[10px] rounded-full border border-slate-400" />
//   </div>
// );

// const Header = ({ title, sub }) => (
//   <div className="bg-[#0f1a44] px-4 pb-3 pt-2">
//     <div className="text-[12px] font-bold text-white">{title}</div>
//     {sub && <div className="mt-[2px] text-[8px] text-slate-400">{sub}</div>}
//   </div>
// );

// const Frame = ({ children }) => (
//   <div className="h-[460px] w-[230px] shrink-0 rounded-[36px] bg-[#1c2a5a] p-[8px] shadow-[0_20px_40px_rgba(20,35,63,0.25)]">
//     <div className="relative h-full w-full overflow-hidden rounded-[29px] bg-[#0f1a44]">
//       {children}
//       <div className="absolute bottom-2 left-1/2 h-[3px] w-[40px] -translate-x-1/2 rounded-full bg-slate-400/70" />
//     </div>
//   </div>
// );

// const LightBody = ({ children }) => (
//   <div className="h-full bg-gradient-to-b from-white to-[#e9edf4] px-3 pt-3">{children}</div>
// );

// const Card = ({ className = "", children }) => (
//   <div className={`rounded-xl bg-white shadow-[0_2px_8px_rgba(15,23,42,0.08)] ${className}`}>{children}</div>
// );

// /* ---------- screens ---------- */
// const TILES = [
//   ["Pay", "💳"], ["Visitors", "🚪"], ["Amenities", "🏊"],
//   ["Complaints", "📋"], ["Notices", "📢"], ["Docs", "📄"],
// ];

// const HomeScreen = () => (
//   <>
//     <Status />
//     <div className="flex items-center justify-between bg-[#1a2860] px-4 py-3">
//       <div>
//         <div className="text-[8px] text-slate-400">Good Morning</div>
//         <div className="text-[11px] font-bold text-white">Ravi Kumar</div>
//       </div>
//       <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#14d1b8] text-[8px] font-bold text-[#0f1a44]">RK</div>
//     </div>
//     <div className="px-2 pt-2">
//       <div className="rounded-lg bg-gradient-to-br from-[#12a89b] to-[#0f9488] p-3">
//         <div className="text-[8px] text-white/80">Maintenance Due</div>
//         <div className="mt-[2px] text-[16px] font-bold text-white">₹3,500</div>
//         <div className="mt-2 inline-block rounded bg-white/20 px-2 py-[3px] text-[8px] font-semibold text-white">Pay Now →</div>
//       </div>
//       <div className="mt-2 grid grid-cols-3 gap-[6px]">
//         {TILES.map(([l, i]) => (
//           <div key={l} className="flex h-[50px] flex-col items-center justify-center gap-1 rounded-lg bg-[#1a2860] text-[8px] font-medium text-slate-300">
//             <span className="text-[12px]">{i}</span>{l}
//           </div>
//         ))}
//       </div>
//       <div className="mt-2 rounded-lg bg-[#17245a] p-2">
//         <div className="text-[8px] text-slate-400">Recent Activity</div>
//         <div className="mt-1 flex items-center justify-between border-t border-white/10 py-[5px] text-[8px] font-medium text-white">
//           <span className="flex items-center gap-1"><i className="h-1 w-1 rounded-full bg-emerald-400" />Visitor Approved</span>
//           <span className="text-[7px] text-slate-400">2m ago</span>
//         </div>
//         <div className="flex items-center justify-between border-t border-white/10 pt-[5px] text-[8px] font-medium text-white">
//           <span className="flex items-center gap-1"><i className="h-1 w-1 rounded-full bg-blue-400" />Notice: Annual AGM</span>
//           <span className="text-[7px] text-slate-400">1h ago</span>
//         </div>
//       </div>
//     </div>
//   </>
// );

// const PayScreen = () => (
//   <>
//     <Status dark={false} />
//     <Header title="Maintenance Payment" sub="October 2024" />
//     <LightBody>
//       <Card className="flex items-center justify-between p-3">
//         <div>
//           <div className="text-[16px] font-bold text-[#14233f]">₹3,500</div>
//           <div className="text-[8px] text-slate-500">Society Maintenance</div>
//         </div>
//         <span className="rounded-full bg-emerald-100 px-2 py-[3px] text-[8px] font-semibold text-emerald-600">Paid ✓</span>
//       </Card>
//       <div className="mt-2 flex items-center gap-2 rounded-xl bg-gradient-to-br from-[#12a89b] to-[#0f9488] p-3">
//         <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white/25 text-[11px]">💳</span>
//         <div>
//           <div className="text-[10px] font-bold text-white">Pay Instantly</div>
//           <div className="text-[7px] text-white/80">UPI · Card · Net Banking</div>
//         </div>
//       </div>
//       <Card className="mt-2 p-3">
//         <div className="text-[9px] font-bold text-[#14233f]">Payment History</div>
//         {["Sep 2024", "Aug 2024", "Jul 2024"].map((m) => (
//           <div key={m} className="mt-[6px] flex items-center justify-between border-t border-slate-100 pt-[6px] text-[8px] text-slate-500">
//             {m}<span className="font-semibold text-emerald-600">✓ Paid</span>
//           </div>
//         ))}
//       </Card>
//     </LightBody>
//   </>
// );

// const VisitorScreen = () => (
//   <>
//     <Status dark={false} />
//     <Header title="Visitor Management" />
//     <LightBody>
//       <div className="rounded-xl border border-yellow-200 bg-[#fdf6d8] p-3">
//         <div className="flex items-center gap-2">
//           <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-yellow-300 text-[12px]">👤</span>
//           <div>
//             <div className="text-[10px] font-bold text-[#14233f]">Delivery — Swiggy</div>
//             <div className="text-[7px] text-slate-500">At gate · 2 mins ago</div>
//           </div>
//         </div>
//         <div className="mt-2 flex gap-2 text-[8px] font-semibold">
//           <span className="rounded-full bg-emerald-500 px-3 py-[3px] text-white">Allow</span>
//           <span className="rounded-full bg-red-100 px-3 py-[3px] text-red-500">Deny</span>
//         </div>
//       </div>
//       <Card className="mt-3 p-3">
//         <div className="text-[9px] font-bold text-[#14233f]">Recent Visitors</div>
//         {[["Rahul Sharma", "Approved"], ["Amazon Delivery", "Approved"], ["Unknown", "Denied"]].map(([n, s]) => (
//           <div key={n} className="mt-[8px] flex items-center justify-between text-[8px] text-slate-500">
//             {n}
//             <span className={`font-semibold ${s === "Denied" ? "text-red-500" : "text-emerald-600"}`}>{s}</span>
//           </div>
//         ))}
//       </Card>
//     </LightBody>
//   </>
// );

// const AMENITIES = [
//   ["🏊", "Swimming Pool", "Available", true],
//   ["🏛️", "Clubhouse", "Booked 3pm", false],
//   ["🎾", "Tennis Court", "Available", true],
//   ["💪", "Gymnasium", "Available", true],
// ];

// const AmenityScreen = () => (
//   <>
//     <Status dark={false} />
//     <Header title="Book Amenities" />
//     <LightBody>
//       <div className="space-y-2">
//         {AMENITIES.map(([i, n, s, ok]) => (
//           <Card key={n} className="flex items-center gap-2 p-2">
//             <span className="flex h-[26px] w-[26px] items-center justify-center rounded-lg bg-[#e8f4f2] text-[13px]">{i}</span>
//             <div className="flex-1">
//               <div className="text-[9px] font-bold text-[#14233f]">{n}</div>
//               <span className={`rounded px-[5px] py-[1px] text-[7px] font-semibold ${ok ? "bg-emerald-100 text-emerald-600" : "bg-orange-100 text-orange-600"}`}>{s}</span>
//             </div>
//             <span className="rounded bg-[#0f9d92] px-2 py-[4px] text-[8px] font-semibold text-white">Book</span>
//           </Card>
//         ))}
//       </div>
//     </LightBody>
//   </>
// );

// const SCREENS = [
//   { label: "Home Dashboard", el: <HomeScreen /> },
//   { label: "Maintenance Payment", el: <PayScreen /> },
//   { label: "Visitor Approval", el: <VisitorScreen /> },
//   { label: "Amenity Booking", el: <AmenityScreen /> },
//   { label: "Complaint Tracking", el: <PayScreen /> },
//   { label: "Notices", el: <HomeScreen /> },
// ];

// export default function AppScreens() {
//   return (
//     <section className="bg-[#f8fafd] pt-24">
//       <div className="mx-auto max-w-[800px] px-4 text-center">
//         <h2 className="text-[38px] font-extrabold leading-[1.15] tracking-tight text-[#14233f]">
//           A Better Way to Experience <span className="text-[#0f9d92]">Community Living</span>
//         </h2>
//         <p className="mt-4 text-[16px] text-slate-500">Explore the MYTMAKAAN experience across every feature.</p>
//       </div>

//       <div className="mt-14 bg-gradient-to-b from-[#e8ebf2] to-[#f3f5f9]">
//         <div className="overflow-x-auto">
//           <div className="mx-auto flex w-max min-w-full justify-center gap-[14px] px-6 pt-10">
//             {SCREENS.map((s, i) => (
//               <div key={i} className="flex flex-col items-center">
//                 <div className="animate-float-phone" style={{ animationDelay: `${-i * 0.8}s` }}>
//                   <Frame>{s.el}</Frame>
//                 </div>
//                 <div className="pb-5 pt-4 text-[13px] font-semibold text-slate-600">{s.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="h-16" />
//     </section>
//   );
// }


import React from "react";
import overview from "../assets/hero-app.png";
import parking from "../assets/app-parking.png";
import bills from "../assets/app-bills.png";
import visitor from "../assets/app-visitor.png";
import chat from "../assets/app-chat.png";

const SCREENS = [
  { label: "Society Overview", img: overview },
  { label: "Smart Parking", img: parking },
  { label: "Maintenance Bills", img: bills },
  { label: "Visitor Entry", img: visitor },
  { label: "Community Chat", img: chat },
];

export default function AppScreens() {
  return (
    <section className="bg-[#f8fafd] pt-24">
      <div className="mx-auto max-w-[800px] px-4 text-center">
        <h2 className="text-[38px] font-extrabold leading-[1.15] tracking-tight text-[#14233f]">
          A Better Way to Experience <span className="text-[#0f9d92]">Community Living</span>
        </h2>
        <p className="mt-4 text-[16px] text-slate-500">Explore the MYTMAKAAN experience across every feature.</p>
      </div>

      <div className="mt-14 bg-gradient-to-b from-[#e8ebf2] to-[#f3f5f9]">
        <div className="overflow-x-auto">
          <div className="mx-auto flex w-max min-w-full justify-center gap-6 px-6 pt-10">
            {SCREENS.map((s, i) => (
              <div key={s.label} className="flex flex-col items-center">
                <div className="animate-float-phone" style={{ animationDelay: `${-i * 0.8}s` }}>
                  <img
                    src={s.img}
                    alt={s.label}
                    className="h-[460px] w-[259px] shrink-0 rounded-3xl object-cover shadow-[0_20px_40px_rgba(20,35,63,0.25)]"
                  />
                </div>
                <div className="pb-5 pt-4 text-[13px] font-semibold text-slate-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-16" />
    </section>
  );
}