import { Play, ArrowRight, Circle } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Executive Dysfunction",
    subtitle: "Difficulty starting tasks or\nsustaining momentum",
    image: "/v2.png",
    className: "-translate-y-16",
    imgShift: "top-30",
    imgShiftMobile: "top-40",
  },
  {
    title: "No Off-Switch",
    subtitle: "A brain that never truly rests",
    image: "/v1.png",
    blur: true,
    focus: true,
    imgShift: "bottom-50",
    imgShiftMobile: "bottom-40",
  },
  {
    title: "Cognitive Overheating",
    subtitle: "High mental load from\nconstant context switching",
    image: "/v4.png",
    blur: true,
    blueLeft: true,
    imgShift: "top-40",
    imgShiftMobile: "top-30",
  },
  {
    title: "Emotional Drift",
    subtitle: "Unstable emotional regulation\nunder pressure",
    image: "/v3.png",
    className: "translate-y-20",
    imgShift: "bottom-40",
    imgShiftMobile: "bottom-50",
  },
];

const RestlessMindSection = () => {
  return (
    <motion.section
      className="relative min-h-screen w-full pl-4 bg-[#F3F2EE] py-4 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] w-[1px] bg-black/10 rounded-full"
            initial={{
              x: Math.random() * 800,
              y: Math.random() * 600,
              opacity: 0,
            }}
            whileInView={{
              x: Math.random() * 800,
              y: Math.random() * 600,
              opacity: [0, 0.2, 0],
            }}
            viewport={{ once: true }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* ================= LEFT COPY ================= */}
      <motion.div
        className="absolute left-4 top-8 max-w-sm sm:left-24 sm:top-32"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 0.1 }}
        >
          <Circle className="mb-2 h-1 w-1 fill-black text-black sm:mb-4" />
        </motion.div>

        <motion.h2
          className="text-[20px] font-medium leading-tight text-black sm:text-[28px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          designed for the
          <br />
          restless mind.
        </motion.h2>

        <motion.p
          className="mt-2 text-[11px] leading-relaxed text-black/50 sm:mt-4 sm:text-[13px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Solving the core challenges of
          <br />
          modern neuro-divergent work.
        </motion.p>

        <motion.button
          className="mt-4 flex items-center gap-2 text-[10px] text-[#FF5714] sm:mt-6 sm:text-[12px] relative overflow-hidden group"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF5714]/10 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
          <motion.span
            className="relative"
            animate={{
              x: [0, 2, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Explore the technology
          </motion.span>
          <motion.div
            animate={{
              x: [0, 3, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowRight className="h-3 w-3 relative z-10" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* ================= CARD STACK ================= */}
      <motion.div
        className="relative ml-auto mr-4 mt-32 grid w-full max-w-[520px] grid-cols-2 gap-x-4 gap-y-12 sm:mr-24 sm:mt-24 sm:gap-x-12 sm:gap-y-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={`
              relative h-[280px] w-[150px] overflow-hidden rounded-[100px]
              transition-all duration-700
              sm:h-[360px] sm:w-[220px] sm:rounded-[140px]
              ${card.imgShiftMobile} sm:${card.imgShift}
              ${card.blur ? "blur-[1px] opacity-70 sm:blur-[3px]" : ""}
              ${card.focus ? "scale-105" : ""}
              ${card.className ?? ""}
            `}
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.8,
              rotate: i % 2 === 0 ? -5 : 5,
            }}
            whileInView={{
              opacity: card.blur ? 0.7 : 1,
              y: 0,
              scale: card.focus ? 1.05 : 1,
              rotate: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3 + i * 0.15,
              duration: 0.7,
              type: "spring",
              stiffness: 100,
              damping: 12,
            }}
            whileHover={{
              scale: card.focus ? 1.1 : 1.05,
              zIndex: 10,
              boxShadow: card.focus
                ? "0 25px 50px rgba(0,0,0,0.2)"
                : "0 15px 30px rgba(0,0,0,0.15)",
            }}
          >
            {/* IMAGE with parallax effect */}
            <motion.img
              src={card.image}
              alt={card.title}
              className={`
                absolute left-0 top-0 h-[120%] w-full object-cover
              `}
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.8 }}
            />

            {/* Half blue overlay with animation */}
            {card.blueLeft && (
              <motion.div
                className="absolute inset-y-0 left-0 w-1/2 bg-blue-500/20 mix-blend-multiply"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.15 }}
                whileHover={{ opacity: 0.3 }}
              />
            )}

            {/* Animated Dark overlay */}
            <motion.div
              className="absolute inset-0 bg-black/25"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.25 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.15 }}
              whileHover={{ opacity: 0.15 }}
            />

            {/* Animated Play button */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.6 + i * 0.15,
                type: "spring",
              }}
              whileHover={{ scale: 1.2 }}
            >
              <motion.div
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm sm:h-10 sm:w-10"
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  scale: 1.1,
                }}
              >
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
                  <Play className="h-3 w-3 fill-black text-black sm:h-4 sm:w-4" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Animated Text */}
            <motion.div
              className="absolute bottom-6 left-0 right-0 px-4 text-center text-white sm:bottom-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + i * 0.15 }}
            >
              <motion.h4
                className="mb-1 text-[10px] font-medium sm:text-[12px]"
                whileHover={{ scale: 1.05 }}
              >
                {card.title}
              </motion.h4>
              <motion.p
                className="whitespace-pre-line text-[8px] text-white/70 sm:text-[10px]"
                whileHover={{ color: "#ffffff" }}
              >
                {card.subtitle}
              </motion.p>
            </motion.div>

            {/* Focus card highlight effect */}
            {card.focus && (
              <motion.div
                className="absolute inset-0 rounded-[100px] sm:rounded-[140px] border-2 border-[#FF5714]/30"
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
                  opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
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
      </motion.div>

      {/* Animated decorative dots */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <Circle className="absolute left-1/2 top-1/2 h-1 w-1 fill-black/30 text-black/30" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, type: "spring" }}
      >
        <Circle className="absolute right-4 bottom-8 h-1 w-1 fill-black/30 text-black/30 sm:right-24 sm:bottom-32" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, type: "spring" }}
      >
        <Circle className="absolute left-8 bottom-6 h-1 w-1 fill-black/30 text-black/30 sm:left-40 sm:bottom-24" />
      </motion.div>

      {/* Connection lines between cards (subtle) */}
      {/* <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.path
          d="M15% 40% Q 30% 50%, 50% 45% T 85% 55%"
          stroke="rgba(0,0,0,0.1)"
          strokeWidth="1"
          fill="transparent"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
        <motion.path
          d="M20% 70% Q 40% 60%, 60% 75% T 80% 65%"
          stroke="rgba(0,0,0,0.1)"
          strokeWidth="1"
          fill="transparent"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1 }}
        />
      </svg> */}
    </motion.section>
  );
};

export default RestlessMindSection;
