



// import React from "react";
// import logo from "../assets/logo.png";
// import { PLAY_STORE_URL } from "../constants";

// const NAV = [
//   { label: "Home", href: "#home" },
//   { label: "Features", href: "#features" },
//   { label: "How It Works", href: "#how-it-works" },
//   { label: "Benefits", href: "#benefits" },
//   { label: "FAQ", href: "#faq" },
// ];

// /* Google Play logo (4 colours) */
// const GooglePlayLogo = ({ className = "h-5 w-5" }) => (
//   <svg viewBox="0 0 24 24" className={className}>
//     <path d="M3.6 2.2L13.2 12 3.6 21.8C3.3 21.5 3.1 21 3.1 20.4V3.6C3.1 3 3.3 2.5 3.6 2.2Z" fill="#00C3FF" />
//     <path d="M16.5 8.7L13.2 12 3.6 2.2C3.9 1.9 4.4 1.8 5 2.1L16.5 8.7Z" fill="#00E676" />
//     <path d="M16.5 15.3L5 21.9C4.4 22.2 3.9 22.1 3.6 21.8L13.2 12 16.5 15.3Z" fill="#FF3A44" />
//     <path d="M20.4 10.8C21.1 11.2 21.1 12.8 20.4 13.2L16.5 15.3 13.2 12 16.5 8.7 20.4 10.8Z" fill="#FFD500" />
//   </svg>
// );

// export default function Navbar() {
//   return (
//     /* same top colour as the page gradient, stays on top while scrolling */
//     <header className="sticky top-0 z-50 w-full bg-[#f4f8fd]/95 backdrop-blur">
//       <div className="mx-auto flex h-[62px] max-w-[1200px] items-center justify-between px-4">
//         {/* logo */}
//         <a href="#home" className="flex items-center gap-3">
//           <img src={logo} alt="MYTMAKAAN" className="h-[42px] w-[42px] rounded-[10px] object-cover" />
//           <div className="leading-tight">
//             <div className="text-[19px] font-extrabold tracking-wide text-[#14233f]">MYTMAKAAN</div>
//             <div className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#14b8a6]">
//               Smart Community Living
//             </div>
//           </div>
//         </a>

//         {/* links */}
//         <nav className="hidden items-center gap-8 md:flex">
//           {NAV.map((n) => (
//             <a key={n.label} href={n.href} className="text-[15px] font-medium text-slate-600 hover:text-[#0d9488]">
//               {n.label}
//             </a>
//           ))}
//         </nav>

//         {/* button */}
//         <a
//           href={PLAY_STORE_URL}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-2 rounded-xl bg-[#14b8a6] px-5 py-[11px] text-[15px] font-semibold text-white shadow-md hover:bg-[#0d9488]"
//         >
//           <GooglePlayLogo />
//           Download App
//         </a>
//       </div>
//     </header>
//   );
// }


import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { PLAY_STORE_URL } from "../constants";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQ", href: "#faq" },
];

/* Google Play logo (4 colours) */
const GooglePlayLogo = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M3.6 2.2L13.2 12 3.6 21.8C3.3 21.5 3.1 21 3.1 20.4V3.6C3.1 3 3.3 2.5 3.6 2.2Z" fill="#00C3FF" />
    <path d="M16.5 8.7L13.2 12 3.6 2.2C3.9 1.9 4.4 1.8 5 2.1L16.5 8.7Z" fill="#00E676" />
    <path d="M16.5 15.3L5 21.9C4.4 22.2 3.9 22.1 3.6 21.8L13.2 12 16.5 15.3Z" fill="#FF3A44" />
    <path d="M20.4 10.8C21.1 11.2 21.1 12.8 20.4 13.2L16.5 15.3 13.2 12 16.5 8.7 20.4 10.8Z" fill="#FFD500" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    /* -mb-[62px] lets the hero slide under the navbar, so the page background shows through */
    <header
      className={`sticky top-0 z-50 -mb-[62px] w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#eef4fb]/90 shadow-[0_2px_12px_rgba(15,23,42,0.06)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[62px] max-w-[1200px] items-center justify-between px-4">
        {/* logo */}
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="MYTMAKAAN" className="h-[42px] w-[42px] rounded-[10px] object-cover" />
          <div className="leading-tight">
            <div className="text-[19px] font-extrabold tracking-wide text-[#14233f]">MYTMAKAAN</div>
            <div className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#14b8a6]">
              Smart Community Living
            </div>
          </div>
        </a>

        {/* links */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} className="text-[15px] font-medium text-slate-600 hover:text-[#0d9488]">
              {n.label}
            </a>
          ))}
        </nav>

        {/* button */}
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl bg-[#14b8a6] px-5 py-[11px] text-[15px] font-semibold text-white shadow-md hover:bg-[#0d9488]"
        >
          <GooglePlayLogo />
          Download App
        </a>
      </div>
    </header>
  );
}