import { motion } from "framer-motion";
import {
  Building2,
  Check,
  CreditCard,
  Bell,
  ShieldCheck,
  Users,
} from "lucide-react";

const benefits = [
  "Save time on everyday society tasks",
  "Reduce paperwork and manual processes",
  "Keep residents connected",
  "Transparent complaint management",
  "Easy visitor approvals",
  "Secure digital payments",
];

function Benefits() {
  return (
    <section
      id="benefits"
      className="px-6 py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">

        {/* Left */}
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
        >

          <span className="text-xs font-bold uppercase tracking-widest text-teal-500">
            Built for modern communities
          </span>

          <h2 className="mt-3 text-4xl font-bold leading-tight text-[#13244d]">
            Make Society Management
            <span className="text-teal-500">
              {" "}Effortless.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-500">
            MYTMAKAAN simplifies everyday community operations
            by bringing important services into one connected platform.
          </p>

          <div className="mt-8 space-y-4">

            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-50 text-teal-500">
                  <Check size={14} />
                </div>

                <span className="text-sm text-slate-600">
                  {benefit}
                </span>
              </div>
            ))}

          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >

          <div className="relative flex h-[360px] w-[360px] items-center justify-center rounded-full bg-teal-50">

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-8 rounded-full border border-dashed border-teal-300"
            />

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="flex h-32 w-32 items-center justify-center rounded-3xl bg-teal-500 text-white shadow-2xl"
            >
              <Building2 size={55} />
            </motion.div>

            <div className="absolute left-4 top-20 rounded-xl bg-white p-3 shadow-lg">
              <Users className="text-teal-500" size={20} />
            </div>

            <div className="absolute right-5 top-14 rounded-xl bg-white p-3 shadow-lg">
              <Bell className="text-teal-500" size={20} />
            </div>

            <div className="absolute bottom-20 left-10 rounded-xl bg-white p-3 shadow-lg">
              <CreditCard className="text-teal-500" size={20} />
            </div>

            <div className="absolute bottom-14 right-8 rounded-xl bg-white p-3 shadow-lg">
              <ShieldCheck className="text-teal-500" size={20} />
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Benefits;