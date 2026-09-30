import React, { useState } from "react";

const FAQS = [
  {
    q: "What is MYTMAKAAN?",
    a: "MYTMAKAAN is a smart society management app that brings maintenance payments, visitor approvals, amenity booking, complaints, notices and community communication together in one simple app.",
  },
  {
    q: "Who can use MYTMAKAAN?",
    a: "Residents, society committee members and security staff can all use MYTMAKAAN. Each group gets the tools they need for everyday society life.",
  },
  {
    q: "Can I pay my society maintenance through the app?",
    a: "Yes. You can pay maintenance and other society charges digitally using UPI, cards or net banking, and receive an instant receipt.",
  },
  {
    q: "Can I approve visitors through the app?",
    a: "Yes. When a visitor or delivery person arrives at the gate, you get a request on your phone and can allow or deny entry instantly.",
  },
  {
    q: "Can I book society amenities?",
    a: "Yes. You can check availability and book the clubhouse, swimming pool, sports facilities and other amenities in a few taps.",
  },
  {
    q: "Can I raise and track complaints?",
    a: "Yes. Register a complaint from the app and follow its status in real time until it is resolved.",
  },
  {
    q: "Where can I download MYTMAKAAN?",
    a: "MYTMAKAAN is available for Android phones on the Google Play Store.",
  },
];

const Chevron = ({ open }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-4 w-4 shrink-0 text-[#14b8a6] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="bg-[#f5f7fb] py-20">
      <div className="mx-auto max-w-[760px] px-4">
        {/* heading */}
        <div className="text-center">
          <h2 className="text-[38px] font-extrabold leading-[1.15] tracking-tight text-[#14233f]">
            Frequently Asked <span className="text-[#0f9d92]">Questions</span>
          </h2>
          <p className="mt-3 text-[15px] text-slate-500">Everything you need to know about MYTMAKAAN.</p>
        </div>

        {/* accordion */}
        <div className="mx-auto mt-14 max-w-[700px] space-y-3">
          {FAQS.map((f, i) => {
            const open = openIndex === i;
            return (
              <div
                key={f.q}
                className={`rounded-2xl border bg-white transition-shadow duration-300 ${
                  open ? "border-[#14b8a6]/40 shadow-md" : "border-slate-200"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-6 py-[22px] text-left"
                >
                  <span className="text-[16px] font-semibold text-[#14233f]">{f.q}</span>
                  <Chevron open={open} />
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[15px] leading-relaxed text-slate-500">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}