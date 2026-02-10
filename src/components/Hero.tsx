import { useEffect, useState } from "react";
import { Dot } from "lucide-react";
import { IoBagHandleOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { motion } from "framer-motion";

type WaveIconProps = { className?: string };

function WaveIcon({ className }: WaveIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex items-center"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        scale: isHovered ? 1.1 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <svg
        viewBox="0 0 220 40"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="waveform"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            pathOffset: isHovered ? 0.1 : 0,
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          d="M0 20 C10 6, 20 6, 30 20 S50 34, 60 20 S80 6, 90 20 S110 34, 120 20 S140 6, 150 20 S170 34, 180 20 S200 6, 210 20 S220 34, 220 20"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}

function DotPair() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="h-1 w-1 rounded-full bg-black/60"
      />
      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="h-1 w-1 rounded-full bg-black/60"
      />
    </div>
  );
}

function StatBlock({
  label,
  value,
  align = "left",
  className = "",
}: {
  label: string;
  value: React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
}) {
  const alignCls =
    align === "center"
      ? "text-center"
      : align === "right"
        ? "text-right"
        : "text-left";

  return (
    <motion.div
      className={`flex flex-col leading-tight ${alignCls} ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="text-[8px] md:text-[9px] font-semibold tracking-[0.2em] md:tracking-[0.25em] text-black/50 uppercase"
        initial={{ letterSpacing: "0.1em" }}
        animate={{ letterSpacing: "0.2em" }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {label}
      </motion.div>
      <motion.div
        className="text-[10px] md:text-[11px] font-semibold text-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {value}
      </motion.div>
    </motion.div>
  );
}

// Define variants with proper TypeScript types
const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut" as const,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ease: "easeOut" as const,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function Hero() {
  const [, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);

    const handleScroll = () => {
      const progress = window.scrollY / window.innerHeight;
      setScrollProgress(Math.min(progress, 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxY = scrollProgress * 50;

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Animated Background */}
      <motion.div className="absolute inset-0" style={{ y: parallaxY }}>
        <motion.img
          src="/hero-bg.png"
          alt="Background"
          className="h-full w-full object-cover md:object-fill"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div
          className="absolute inset-0 bg-black/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="absolute inset-0 [background:radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.22)_65%,rgba(0,0,0,0.28)_100%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        />
      </motion.div>

      {/* Header */}
      <motion.header
        className="absolute left-0 right-0 top-0 z-40 flex items-center justify-between px-4 md:px-8 py-4 md:py-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.img
            src="/zone_logo.png"
            alt="Zone Logo"
            className="h-8 md:h-8 w-auto object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </motion.div>

        <motion.div
          className="flex items-center gap-2 md:gap-3 text-black/70"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            className="rounded-md p-1.5 md:p-2 transition-colors hover:bg-[#D6D4C9]"
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <IoBagHandleOutline className="size-5 md:size-6" />
          </motion.button>
          <motion.button
            className="rounded-md p-1.5 md:p-2 transition-colors hover:bg-[#D6D4C9]"
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <TbGridDots className="size-5 md:size-6" />
          </motion.button>
        </motion.div>
      </motion.header>

      {/* Center headline */}
      <div className="relative z-20 flex min-h-screen items-center justify-center px-4">
        <motion.h1
          className="select-none text-center text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-light tracking-wide text-white/65"
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            own your foc
          </motion.span>
          <motion.span
            className="blur-[1px] md:blur-[2px]"
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: 1,
              x: 0,
              filter: ["blur(2px)", "blur(1px)", "blur(2px)"],
            }}
            transition={{
              opacity: { delay: 0.6 },
              x: { delay: 0.6 },
              filter: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            us{" "}
          </motion.span>
        </motion.h1>
      </div>

      {/* LEFT MID STRIP */}
      <motion.div
        className="hidden sm:absolute sm:left-4 md:left-10 top-1/2 z-30 -translate-y-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.div
          className="flex items-center gap-3 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <DotPair />
          <motion.div variants={itemVariants}>
            <StatBlock label="BRAIN SCAN" value="Active" />
          </motion.div>
          <DotPair />
          <motion.div variants={itemVariants}>
            <StatBlock label="BRAIN FREQUENCY" value="14.8 HZ" />
          </motion.div>
          <DotPair />
          <motion.div className="flex items-center" variants={itemVariants}>
            <WaveIcon className="h-4 w-16 md:h-5 md:w-24 text-black/55" />
          </motion.div>
          <DotPair />
        </motion.div>
      </motion.div>

      {/* RIGHT MID STRIP */}
      <motion.div
        className="hidden sm:absolute sm:right-4 md:right-14 top-1/2 z-30 -translate-y-1/2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.div
          className="flex items-center gap-3 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <DotPair />
          <motion.div variants={itemVariants}>
            <StatBlock label="DETECTED ZONE" value="Deep Focus" align="left" />
          </motion.div>
          <DotPair />
          <motion.div variants={itemVariants}>
            <StatBlock label="FREQUENCY TONE" value="Low Beta" align="left" />
          </motion.div>
          <DotPair />
          <motion.div variants={itemVariants}>
            <StatBlock label="LEAD LIMIT" value="&gt;21 HZ" align="left" />
          </motion.div>
          <DotPair />
        </motion.div>
      </motion.div>

      {/* Mobile Stats */}
      <motion.div
        className="sm:hidden absolute left-4 right-4 top-1/3 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <motion.div
          className="grid grid-cols-2 gap-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {[
            { label: "BRAIN SCAN", value: "Active" },
            { label: "BRAIN FREQ", value: "14.8 HZ" },
            { label: "ZONE", value: "Deep Focus" },
            { label: "FREQ TONE", value: "Low Beta" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center"
              variants={itemVariants}
            >
              <StatBlock
                label={stat.label}
                value={stat.value}
                align="center"
                className="text-center"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom center copy */}
      <motion.div
        className="absolute bottom-16 md:bottom-12 left-1/2 z-30 -translate-x-1/2 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.p
          className="text-[10px] md:text-[11px] leading-relaxed text-white/40"
          animate={{
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          earbuds, engineered for minds
          <br />
          that don&apos;t have an off-switch.
        </motion.p>
      </motion.div>

      {/* Bottom left date pill */}
      <motion.div
        className="absolute bottom-20 md:bottom-6 left-4 md:left-6 z-30"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9 }}
      >
        <motion.div
          className="rounded border border-black px-2 py-1 text-[8px] md:text-[9px] text-black font-medium backdrop-blur-sm bg-white/80"
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(255,255,255,0.9)",
          }}
          animate={{
            borderColor: ["rgba(0,0,0,1)", "rgba(0,0,0,0.5)", "rgba(0,0,0,1)"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Delivery Begins 2026
        </motion.div>
      </motion.div>

      {/* Bottom right CTA */}
      <motion.div
        className="absolute bottom-20 md:bottom-8 right-4 md:right-8 z-30"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9 }}
      >
        <motion.button
          className="rounded-full bg-black/60 px-4 py-1.5 md:px-5 md:py-2 text-[10px] md:text-[11px] font-medium text-white backdrop-blur hover:bg-[#333330] relative overflow-hidden"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Button shine effect */}
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <span className="relative">Pre order now</span>
        </motion.button>
      </motion.div>

      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] w-[1px] bg-white/10 rounded-full"
            initial={{
              x: Math.random() * 1000,
              y: Math.random() * 1000,
              opacity: 0,
            }}
            animate={{
              x: Math.random() * 1000,
              y: Math.random() * 1000,
              opacity: [0, 0.2, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
}
