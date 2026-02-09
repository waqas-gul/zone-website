import { ArrowRight, Headphones, Waves, Activity, Brain } from "lucide-react";
import { motion } from "framer-motion";

type IconWithDotsProps = {
  active?: boolean;
  children: React.ReactNode;
  index?: number;
};

const IconWithDots = ({ active, children, index = 0 }: IconWithDotsProps) => {
  const dotColor = active ? "bg-[#FF5714]" : "bg-white/25";
  const iconColor = active ? "text-[#FF5714]" : "text-white/40";

  return (
    <motion.div
      className="relative flex h-5 w-5 md:h-6 md:w-6 items-center justify-center"
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: index * 0.1,
      }}
      whileHover={{ scale: 1.2 }}
    >
      <span
        className={`absolute -top-0.5 md:-top-1 h-0.5 w-0.5 md:h-1 md:w-1 rounded-full ${dotColor}`}
      />
      <span
        className={`absolute -bottom-0.5 md:-bottom-1 h-0.5 w-0.5 md:h-1 md:w-1 rounded-full ${dotColor}`}
      />
      <span
        className={`absolute -left-0.5 md:-left-1 h-0.5 w-0.5 md:h-1 md:w-1 rounded-full ${dotColor}`}
      />
      <span
        className={`absolute -right-0.5 md:-right-1 h-0.5 w-0.5 md:h-1 md:w-1 rounded-full ${dotColor}`}
      />

      <motion.div className={iconColor} whileHover={{ scale: 1.3 }}>
        {children}
      </motion.div>
    </motion.div>
  );
};

const TechnologySection = () => {
  const features = [
    {
      icon: <Headphones size={12} className="sm:size-[14px]" />,
      text: "High-fidelity audio drivers",
      active: false,
    },
    {
      icon: <Waves size={12} className="sm:size-[14px]" />,
      text: "EEG brainwave sensors",
      active: false,
    },
    {
      icon: <Activity size={12} className="sm:size-[14px]" />,
      text: "Pro-grade Active Noise Cancellation",
      active: true,
    },
    {
      icon: <Brain size={12} className="sm:size-[14px]" />,
      text: "Real-time focus tracking",
      active: false,
    },
    {
      icon: <Activity size={12} className="sm:size-[14px]" />,
      text: "10-hour battery life",
      active: false,
    },
  ];

  return (
    <motion.section
      className="relative w-full min-h-screen overflow-hidden bg-black px-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,87,20,0.08),transparent_45%)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div className="flex flex-col justify-center max-w-sm mx-auto lg:mx-0 px-4 sm:px-0">
            <motion.div
              className="mb-3 flex items-center gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#FF5714]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                className="h-0.5 w-0.5 sm:h-1 sm:w-1 rounded-full bg-[#FF5714]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              />
              Zone Pro 1
            </motion.div>

            <motion.h2
              className="mb-4 text-[28px] sm:text-[32px] md:text-[34px] font-light leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              brain-sensing
              <br />
              earbuds
            </motion.h2>

            <motion.p
              className="mb-8 sm:mb-12 text-[11px] sm:text-[12px] leading-relaxed text-white/45"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Equipped with medical-grade EEG sensors disguised as high-fidelity
              audio, we engineered the first wearable capable of quantifying
              your attention span in real-time.
            </motion.p>

            <div className="flex flex-col gap-4 sm:gap-6 pl-1">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <IconWithDots active={feature.active} index={index}>
                    {feature.icon}
                  </IconWithDots>
                  <motion.span
                    className={`text-[10px] sm:text-[11px] ${
                      feature.active ? "text-[#FF5714]" : "text-white/45"
                    }`}
                    whileHover={{
                      color: feature.active ? "#ff7e14" : "#ffffff",
                    }}
                  >
                    {feature.text}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end px-4 sm:px-8 lg:px-0">
            {/* Blurred background image - coming from right */}
            <motion.img
              src="/brain_sensing.png"
              alt="Earbud blurred"
              className="absolute right-4 sm:right-8 lg:right-10 top-1/2 w-40 sm:w-48 md:w-56 -translate-y-1/2"
              initial={{ opacity: 0, x: 100, scale: 0.9 }} // Starting from right
              whileInView={{ opacity: 0.6, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                filter: "blur(12px)",
              }}
            />

            {/* Main image - sliding in from right */}
            <motion.img
              src="/brain_sensing.png"
              alt="Earbud"
              className="relative z-10 sm:w-72 md:w-80 lg:w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] sm:drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
              initial={{
                opacity: 0,
                scale: 0.85,
                x: 100, // Start off-screen to the right
                rotateY: -15, // Adjusted for right-to-left movement
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                x: 0, // Move to normal position
                rotateY: 0,
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 2.2,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2, // Slight delay for staggered effect
              }}
              whileHover={{
                scale: 1.04,
                x: -10, // Slight left movement on hover for depth
              }}
              style={{
                transformPerspective: 1200,
              }}
            />
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 md:bottom-10 right-4 md:right-6 lg:right-10 z-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <motion.button
          className="group flex items-center gap-2 text-xs sm:text-sm text-[#FF5714] hover:text-[#ff7e14] transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore the technology
          <motion.div
            animate={{ x: [0, 3, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowRight className="size-3 sm:size-4" />
          </motion.div>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default TechnologySection;
