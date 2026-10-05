import React from "react";
import members from "../assets/app-members.png";
import profile from "../assets/app-profile.png";
import forum from "../assets/app-forum.png";
import home from "../assets/app-home.png";
import hall from "../assets/app-hall.png";

const SCREENS = [
  { label: "Society Members", img: members },
  { label: "Member Profile", img: profile },
  { label: "Society Forum", img: forum },
  { label: "Amenities", img: home },
  { label: "Party Hall Booking", img: hall },
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
                  {/* Phone frame is already part of the image (200:400 ratio) */}
                  <img
                    src={s.img}
                    alt={s.label}
                    className="h-[460px] w-[230px] shrink-0 object-contain drop-shadow-[0_24px_30px_rgba(20,35,63,0.28)]"
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
