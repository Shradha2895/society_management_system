import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Download the App",
    description:
      "Install MYTMAKAAN and create your resident account.",
  },
  {
    number: "02",
    title: "Connect Your Society",
    description:
      "Join your society and access your community dashboard.",
  },
  {
    number: "03",
    title: "Manage Everything",
    description:
      "Pay maintenance, book amenities, approve visitors and more.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#f6fafc] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-teal-500">
            Simple Process
          </span>

          <h2 className="mt-3 text-4xl font-bold text-[#13244d]">
            How It Works
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              className="text-center"
            >

              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-500 text-xl font-bold text-white shadow-lg"
              >
                {step.number}
              </motion.div>

              <h3 className="mt-5 text-lg font-bold text-[#13244d]">
                {step.title}
              </h3>

              <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-500">
                {step.description}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;