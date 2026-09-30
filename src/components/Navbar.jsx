// import { PLAY_STORE_URL } from "../constants";
// const navLinks = [
//   { label: "Home", href: "#home" },
//   { label: "Features", href: "#features" },
//   { label: "How It Works", href: "#how-it-works" },
//   { label: "Benefits", href: "#benefits" },
//   { label: "FAQ", href: "#faq" },
// ];

// const PlayIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
//     <path d="M5 3.5v17l14-8.5-14-8.5z" />
//   </svg>
// );

// const Navbar = () => {
//   return (
//     <header className="sticky top-0 z-50 w-full bg-white/40 backdrop-blur-md">
//       <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-2.5">
//         {/* Logo */}
//         <a href="#home" className="flex items-center gap-2">
//           <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#0f766e] to-[#12305f] text-xs font-bold text-white">
//             M
//           </div>
//           <div className="leading-tight">
//             <p className="text-[14px] font-extrabold tracking-wide text-[#0f1a3d]">MYTMAKAAN</p>
//             <p className="text-[8.5px] font-semibold tracking-wide text-teal-600">SMART COMMUNITY LIVING</p>
//           </div>
//         </a>

//         {/* Links */}
//         <nav className="hidden items-center gap-6 md:flex">
//           {navLinks.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               className="text-[12px] font-medium text-slate-600 transition-colors hover:text-teal-600"
//             >
//               {link.label}
//             </a>
//           ))}
//         </nav>
// <a
//   href={PLAY_STORE_URL}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="flex items-center gap-1.5 rounded-lg bg-teal-500 px-4 py-2 text-[12px] font-bold text-white shadow-md shadow-teal-500/20 transition-colors hover:bg-teal-600"
// ></a>
//         {/* Button */}
//         <a
//           href="#download"
//           className="flex items-center gap-1.5 rounded-lg bg-teal-500 px-4 py-2 text-[12px] font-bold text-white shadow-md shadow-teal-500/20 transition-colors hover:bg-teal-600"
//         >
//           <PlayIcon />
//           Download App
//         </a>
//       </div>
//     </header>
//   );
// };

// export default Navbar;





import { PLAY_STORE_URL } from "../constants";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQ", href: "#faq" },
];

const PlayIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
    <path d="M5 3.5v17l14-8.5-14-8.5z" />
  </svg>
);

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-2.5">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#0f766e] to-[#12305f] text-xs font-bold text-white">
            M
          </div>
          <div className="leading-tight">
            <p className="text-[14px] font-extrabold tracking-wide text-[#0f1a3d]">MYTMAKAAN</p>
            <p className="text-[8.5px] font-semibold tracking-wide text-teal-600">SMART COMMUNITY LIVING</p>
          </div>
        </a>

        {/* Links */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[12px] font-medium text-slate-600 transition-colors hover:text-teal-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Button */}
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-lg bg-teal-500 px-4 py-2 text-[12px] font-bold text-white shadow-md shadow-teal-500/20 transition-colors hover:bg-teal-600"
        >
          <PlayIcon />
          Download App
        </a>
      </div>
    </header>
  );
};

export default Navbar;