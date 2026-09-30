import { motion } from "framer-motion";
import { Zap } from "lucide-react";

function CTA() {
  return (
    <section className="px-6 pb-24">

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="mx-auto max-w-6xl rounded-3xl bg-[#12244e] px-8 py-16 text-center"
      >

        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500 text-white"
        >
          <Zap size={25} />
        </motion.div>

        <h2 className="mt-5 text-3xl font-bold text-white">
          Ready for Smarter Community Living?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300">
          Bring your society's everyday operations together
          with MYTMAKAAN.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 rounded-lg bg-teal-500 px-7 py-3 text-sm font-semibold text-white"
        >
          Download the App
        </motion.button>

      </motion.div>

    </section>
  );
}

export default CTA;