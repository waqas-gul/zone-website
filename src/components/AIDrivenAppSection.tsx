import { Play, Circle, CircleArrowRight } from "lucide-react";
import { FaApple } from "react-icons/fa";
import { motion } from "framer-motion";

const cards = [
  { title: "Flow", active: false },
  { title: "Deep focus", active: true },
  { title: "Cognitive ease", active: false },
];

const AIDrivenAppSection = () => {
  return (
    <motion.section
      className="relative z-10 min-h-screen w-full overflow-hidden bg-[#0b0b0c]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background gradients with animation */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255, 87, 20,0.08),transparent_55%)]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-px bg-[#FF5714]/20 rounded-full"
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
              opacity: 0,
            }}
            whileInView={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
              opacity: [0, 0.3, 0],
            }}
            viewport={{ once: true }}
            transition={{
              duration: Math.random() * 6 + 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* ================= HEADER ================= */}
      <motion.div
        className="relative z-20 mx-auto max-w-3xl px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20 lg:pt-24 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="mb-3 sm:mb-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-[#D6D4C9]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className="bg-[#FF5714] p-1">
            <Circle className="h-3 w-3 sm:h-3 sm:w-3 text-black fill-black" />
          </div>
          <motion.p
            className="text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            THE APP
          </motion.p>
        </motion.div>

        <motion.h2
          className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-light leading-tight text-[#D6D4C9]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          the AI driven app that
          <br />
          translates your brain-
          <br className="hidden sm:block" />
          waves in tactical advice
        </motion.h2>

        <motion.p
          className="mt-3 sm:mt-4 text-[10px] sm:text-[11px] md:text-[12px] leading-relaxed text-white/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Equipped with medical-grade EEG sensors disguised as{" "}
          <br className="hidden sm:block" /> high-fidelity mesh, we engineered
          the first wearable <br className="hidden sm:block" /> capable of
          quantifying your attention span in real-time.
        </motion.p>

        <motion.div
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.button
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-black text-white rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 hover:opacity-90 transition-opacity shadow-lg w-full sm:w-auto max-w-xs relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FaApple className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
            </motion.div>
            <div className="flex flex-col items-start leading-tight relative z-10">
              <motion.span
                className="text-[9px] sm:text-[10px] text-white/50"
                whileHover={{ color: "#ffffff" }}
              >
                Download on the
              </motion.span>
              <motion.span
                className="text-sm sm:text-md font-light tracking-wide"
                whileHover={{ scale: 1.05 }}
              >
                App Store
              </motion.span>
            </div>
          </motion.button>

          <motion.button
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-black text-white rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 hover:opacity-90 transition-opacity shadow-lg w-full sm:w-auto max-w-xs relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Play className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
            </motion.div>
            <div className="flex flex-col items-start leading-tight relative z-10">
              <motion.span
                className="text-[9px] sm:text-[10px] text-white/50"
                whileHover={{ color: "#ffffff" }}
              >
                Get it On
              </motion.span>
              <motion.span
                className="text-sm sm:text-md font-light tracking-wide"
                whileHover={{ scale: 1.05 }}
              >
                Google store
              </motion.span>
            </div>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* ================= CARDS ================= */}
      <motion.div
        className="relative z-10 mx-auto pt-10 sm:pt-12 md:pt-16 lg:pt-20 px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 overflow-x-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className={`relative w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px] h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] bg-black flex-shrink-0
                ${card.active ? "" : "opacity-40 blur-[1px] sm:blur-[2px] md:blur-[3px] lg:blur-[4px]"}
                transition-all duration-700`}
              initial={{ opacity: 0, y: 50, rotateY: 20 }}
              whileInView={{
                opacity: card.active ? 1 : 0.4,
                y: 0,
                rotateY: 0,
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: 0.2 + i * 0.15,
                duration: 0.7,
                ease: "easeOut",
              }}
              whileHover={{
                scale: card.active ? 1.05 : 1.02,
                boxShadow: card.active
                  ? "0 25px 50px rgba(255, 87, 20, 0.15)"
                  : "0 10px 20px rgba(0,0,0,0.1)",
              }}
            >
              {/* ===== CARD HEADER ===== */}
              <div className="absolute left-4 sm:left-5 md:left-6 right-4 sm:right-5 md:right-6 top-4 sm:top-5 md:top-6">
                {/* Step dots */}
                <motion.div
                  className="mb-3 sm:mb-4 flex items-center gap-1.5 sm:gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                >
                  {[1, 2, 3, 4].map((n) => (
                    <motion.span
                      key={n}
                      className={`flex h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 items-center justify-center rounded-full text-[7px] sm:text-[8px] md:text-[9px]
                        ${
                          n === 2
                            ? "bg-[#FF5714] text-black"
                            : "bg-white/10 text-white/40"
                        }`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.15 + n * 0.05 }}
                      whileHover={{ scale: 1.2 }}
                    >
                      {n}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="mb-4 sm:mb-5 text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-light text-[#FF5714]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {card.title}
                </motion.h3>

                {/* Meta row - improved responsiveness */}
                <motion.div
                  className="flex sm:flex  items-center  justify-between gap-2 text-[8px] sm:text-[9px] md:text-[10px] text-white/60"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                >
                  <div className="flex flex-col items-center">
                    <span className="uppercase tracking-wider text-white/30">
                      Band
                    </span>
                    <span className="whitespace-nowrap">Low Beta</span>
                  </div>

                  <span className="hidden sm:inline h-0.5 w-0.5 sm:h-1 sm:w-1 rounded-full bg-white/30" />

                  <div className="flex flex-col items-center">
                    <span className="uppercase tracking-wider text-white/30">
                      Frequency
                    </span>
                    <span className="font-mono">12–15 Hz</span>
                  </div>

                  <span className="hidden sm:inline h-0.5 w-0.5 sm:h-1 sm:w-1 rounded-full bg-white/30" />

                  {/* Animated Waveform - hidden on mobile */}
                  <div className="col-span-2 sm:col-span-1  flex justify-center mt-2 sm:mt-0">
                    <motion.img
                      src="/wave.png"
                      alt="EEG waveform"
                      className="h-6 w-16 sm:h-6 sm:w-18 md:h-6 md:w-20 object-contain opacity-70"
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: 0.6 + i * 0.15,
                        ease: "easeOut",
                      }}
                      style={{ transformOrigin: "left center" }}
                    />
                  </div>

                  <span className="hidden md:inline h-0.5 w-0.5 sm:h-1 sm:w-1 rounded-full bg-white/30" />

                  <div className="flex flex-col items-center mt-2 sm:mt-0">
                    <span className="uppercase tracking-wider text-white/30">
                      State
                    </span>
                    <span>Output</span>
                  </div>

                  <span className="hidden sm:inline h-0.5 w-0.5 sm:h-1 sm:w-1 rounded-full bg-white/30" />

                  <div className="flex flex-col items-center">
                    <span className="uppercase tracking-wider text-white/30">
                      Marker
                    </span>
                    <span>SMR</span>
                  </div>
                </motion.div>
              </div>

              {/* ===== SPHERE ===== */}
              <motion.div
                className="absolute inset-x-0 top-24 sm:top-28 md:top-32 lg:top-36 flex justify-center"
                initial={{ scale: 0, rotate: 180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.6 + i * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                whileHover={{
                  rotate: 360,
                  transition: { duration: 1 },
                }}
              >
                <img
                  src="./card-img.png"
                  alt=""
                  className="h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 object-contain"
                />
              </motion.div>

              {/* ===== CARD BODY CONTENT ===== */}
              <motion.div
                className="absolute inset-x-4 sm:inset-x-5 md:inset-x-6 bottom-28 sm:bottom-32 md:bottom-36 lg:bottom-40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.15 }}
              >
                {/* Two column layout */}
                <div className="relative top-25 mb-4 sm:mb-5 md:mb-6 flex flex-col sm:flex-row gap-3 sm:gap-4 text-left">
                  {/* LEFT – 40% */}
                  <div className="basis-full sm:basis-[40%]">
                    <div className="text-[8px] sm:text-[9px] text-[#989385] leading-relaxed">
                      Logic Processing Impulse Control <br />
                      Sensory Gating
                    </div>
                  </div>

                  {/* RIGHT – 60% */}
                  <div className="basis-full sm:basis-[60%]">
                    <div className="text-[9px] sm:text-[10px] font-medium uppercase tracking-wider text-[#D6D4C9]">
                      Peak cognitive efficiency.
                    </div>
                    <div className="text-[8px] sm:text-[9px] font-light text-[#D6D4C9] leading-relaxed">
                      Low Beta waves to lock your executive functions onto the
                      task. Pure, stabilized output for deep work.
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ===== BOTTOM ALERT ===== */}
              <motion.div
                className="absolute inset-x-4 sm:inset-x-5 md:inset-x-6 bottom-3 sm:bottom-4 rounded-lg sm:rounded-xl bg-[#9B847D] px-3 py-2 sm:px-4 sm:py-3 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + i * 0.15 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative pr-4 sm:pr-5 md:pr-6">
                  <p className="text-[9px] sm:text-[10px] font-medium">
                    Your focus is likely to break in ~7–12 minutes.
                  </p>
                  <p className="text-[8px] sm:text-[9px] opacity-70">
                    Stabilize now. Tap to start 45-second calibration.
                  </p>
                  {/* Animated Arrow icon */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CircleArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 bg-black rounded-full text-[#9B847D]" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Active card glow effect */}
              {card.active && (
                <motion.div
                  className="absolute inset-0 rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] border border-[#FF5714]/30"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    boxShadow: [
                      "0 0 0px rgba(255, 87, 20, 0)",
                      "0 0 20px rgba(255, 87, 20, 0.3)",
                      "0 0 0px rgba(255, 87, 20, 0)",
                    ],
                  }}
                  transition={{
                    opacity: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AIDrivenAppSection;
