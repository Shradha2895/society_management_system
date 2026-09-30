import React from "react";

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
    <path d="M5 3.5v17l14-8.5-14-8.5z" fill="currentColor" fillOpacity=".25" />
    <path d="M5 3.5l9 9M5 20.5l9-8" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
  </svg>
);

const LINKS = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Privacy Policy", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1128]">
      <div className="mx-auto max-w-[1200px] px-4 pt-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-gradient-to-br from-[#0f766e] to-[#14233f] text-sm font-bold text-white">
                M
              </div>
              <div className="leading-tight">
                <div className="text-[16px] font-extrabold text-white">MYTMAKAAN</div>
                <div className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#14b8a6]">
                  Smart Community Living
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-[310px] text-[14px] leading-relaxed text-slate-400">
              Making community living simpler, safer and more connected for residential societies across India.
            </p>
          </div>

          {/* quick links */}
          <div>
            <h4 className="text-[14px] font-bold text-white">Quick Links</h4>
            <ul className="mt-5 space-y-[14px]">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[14px] text-slate-400 transition hover:text-[#14b8a6]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="text-[14px] font-bold text-white">Get in Touch</h4>
            <ul className="mt-5 space-y-[14px] text-[14px] text-slate-400">
              <li className="flex items-center gap-3">
                <MailIcon />
                <a href="mailto:hello@mytmakaan.com" className="hover:text-[#14b8a6]">
                  hello@mytmakaan.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon />
                <a href="tel:+911800000000" className="hover:text-[#14b8a6]">
                  +91 1800-000-000
                </a>
              </li>
            </ul>

            <a
              href="#"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#14b8a6] px-5 py-[13px] text-[14px] font-semibold text-white shadow-md transition hover:bg-[#0d9488]"
            >
              <PlayIcon />
              Download on Google Play
            </a>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 py-7 text-[13px] text-slate-500 md:flex-row">
          <p>© 2024 MYTMAKAAN. All rights reserved.</p>
          <p>Making communities better, one society at a time.</p>
        </div>
      </div>
    </footer>
  );
}