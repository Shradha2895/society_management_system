const PlayIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
    <path d="M5 3.5v17l14-8.5-14-8.5z" />
  </svg>
);

const quickActions = [
  { icon: "💳", label: "Pay" },
  { icon: "🚪", label: "Visitors" },
  { icon: "🏊", label: "Amenities" },
  { icon: "📋", label: "Complaints" },
  { icon: "📢", label: "Notices" },
  { icon: "📄", label: "Docs" },
];

const floatingChips = [
  { icon: "✓", iconClass: "text-emerald-500", text: "Maintenance Paid", position: "left-[-69px] top-[15px]" },
  { icon: "🚪", iconClass: "", text: "Visitor Approved", position: "right-[-82px] top-[72px]" },
  { icon: "📢", iconClass: "", text: "New Society Notice", position: "right-[-94px] top-[283px]" },
  { icon: "🏊", iconClass: "", text: "Pool Booking Confirmed", position: "left-[-81px] bottom-[88px]" },
  { icon: "✓", iconClass: "text-emerald-500", text: "Complaint Resolved", position: "right-[-70px] bottom-[39px]" },
];

const Hero = () => {
  return (
    <section id="home" className="mx-auto max-w-5xl px-6 pb-24 pt-16 md:pt-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* ---------- Left side ---------- */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/80 px-3 py-1.5 text-[10px] font-bold text-teal-600">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
            The Complete Society Management App
          </span>

          <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight text-[#0f1a3d]">
            Your Society.
            <br />
            <span className="text-teal-500">Simpler.</span>
            <br />
            Smarter.
            <br />
            <span className="bg-gradient-to-r from-[#0f1a3d] to-teal-500 bg-clip-text text-transparent">
              Connected.
            </span>
          </h1>

          <p className="mt-5 max-w-[420px] text-[15px] leading-relaxed text-slate-500">
            MYTMAKAAN brings maintenance payments, visitor approvals, amenities, complaints, notices and community
            communication together in one simple app.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#download"
              className="flex items-center gap-2 rounded-lg bg-teal-500 px-5 py-3 text-[13px] font-bold text-white shadow-lg shadow-teal-500/25 transition-colors hover:bg-teal-600"
            >
              <PlayIcon />
              Download the App
            </a>
            <a
              href="#features"
              className="rounded-lg border border-teal-500 px-5 py-3 text-[13px] font-bold text-teal-600 transition-colors hover:bg-teal-50"
            >
              Explore Features
            </a>
          </div>

          <p className="mt-6 flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <span className="tracking-tighter text-slate-400">★★★★★</span>
            <span className="font-semibold text-[#0f1a3d]">Everything your community needs,</span>
            <span>right from your phone.</span>
          </p>
        </div>

        {/* ---------- Right side (Phone) ---------- */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Phone body */}
            <div className="relative h-[560px] w-[282px] overflow-hidden rounded-[44px] border-[7px] border-[#1b2a5e] bg-[#0f1a3d] shadow-2xl shadow-slate-900/20">
              {/* Status bar */}
              <div className="flex justify-end px-5 pt-3">
                <span className="h-2 w-3 rounded-sm border border-slate-400" />
              </div>

              {/* Greeting */}
              <div className="mt-2 flex items-center justify-between bg-[#1b2a5e] px-4 py-3">
                <div>
                  <p className="text-[9px] text-slate-400">Good Morning</p>
                  <p className="text-[12px] font-bold text-white">Ravi Kumar</p>
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-400 text-[8px] font-bold text-[#0f1a3d]">
                  RK
                </div>
              </div>

              <div className="px-2.5 pt-2.5">
                {/* Maintenance card */}
                <div className="rounded-xl bg-teal-500 p-3">
                  <p className="text-[9px] text-teal-50">Maintenance Due</p>
                  <p className="mt-1 text-[17px] font-bold text-white">₹3,500</p>
                  <button className="mt-1.5 rounded-md bg-white/20 px-2 py-1 text-[8px] font-semibold text-white">
                    Pay Now →
                  </button>
                </div>

                {/* Quick actions */}
                <div className="mt-2 grid grid-cols-3 gap-1.5">
                  {quickActions.map((item) => (
                    <div
                      key={item.label}
                      className="flex h-[48px] flex-col items-center justify-center gap-1 rounded-lg bg-[#1b2a5e]"
                    >
                      <span className="text-sm leading-none">{item.icon}</span>
                      <span className="text-[8px] text-slate-300">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Recent activity */}
                <div className="mt-2 rounded-lg bg-[#1b2a5e] p-2.5">
                  <p className="border-b border-white/10 pb-1.5 text-[8px] font-semibold text-slate-300">
                    Recent Activity
                  </p>
                  <div className="mt-1.5 flex items-center justify-between border-b border-white/10 pb-1.5">
                    <p className="flex items-center gap-1.5 text-[8px] font-semibold text-white">
                      <span className="h-1 w-1 rounded-full bg-emerald-400" />
                      Visitor Approved
                    </p>
                    <span className="text-[7px] text-slate-400">2m ago</span>
                  </div>
                  <div className="mt-1.5 flex items-center justify-between">
                    <p className="flex items-center gap-1.5 text-[8px] font-semibold text-white">
                      <span className="h-1 w-1 rounded-full bg-blue-400" />
                      Notice: Annual AGM
                    </p>
                    <span className="text-[7px] text-slate-400">1h ago</span>
                  </div>
                </div>
              </div>

              {/* Home bar */}
              <div className="absolute bottom-3 left-1/2 h-1 w-14 -translate-x-1/2 rounded-full bg-slate-500" />
            </div>

            {/* Floating chips */}
            {floatingChips.map((chip) => (
              <div
                key={chip.text}
                className={`absolute flex items-center gap-2 whitespace-nowrap rounded-xl bg-white px-3 py-2 text-[11px] font-medium text-[#0f1a3d] shadow-lg shadow-slate-300/50 ${chip.position}`}
              >
                <span className={`text-xs ${chip.iconClass}`}>{chip.icon}</span>
                {chip.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;