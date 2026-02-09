import {
  Cpu,
  Weight,
  ShieldCheck,
  Battery,
  Bluetooth,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

const specsLeft = [
  {
    icon: Cpu,
    title: "Sensors",
    text: `Red and infrared LEDs measure blood oxygen levels.
Digital sensor measures temperature trends.
Accelerometer tracks movement and activity 24/7.`,
  },
  {
    icon: Weight,
    title: "Weight and Dimensions",
    text: `Width: 22.8mm
Thickness: 28.8mm (similar to a wedding band)
Weight: 3.3 to 5.2 grams depending on ring size`,
  },
  {
    icon: Layers,
    title: "Quality Materials",
    text: `Non-allergenic titanium on inner & outer surfaces
Seamless titanium interior
Minor scratches from regular wear are normal`,
  },
];

const specsRight = [
  {
    icon: ShieldCheck,
    title: "Compatibility",
    text: `App available in English, Finnish, Japanese, German
Supports metrics and insights
Integrates with 40+ apps`,
  },
  {
    icon: Battery,
    title: "Battery Life",
    text: `5–8 days of battery life*
Typical charging time: ~20–80 minutes
Water resistant up to 100 meters`,
  },
  {
    icon: Bluetooth,
    title: "Connectivity",
    text: `Bluetooth Low Energy
Automatic firmware updates
EMF-safe
FCC-certified`,
  },
];

const SpecBlock = ({ icon: Icon, title, text, index, side }: any) => (
  <motion.div
    className="relative flex gap-3 rounded-lg px-3  py-2 sm:gap-4 sm:px-3 sm:py-2"
    initial={{ opacity: 0, x: side === "left" ? -30 : 30, y: 20 }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true }}
    transition={{
      delay: 0.2 + index * 0.15,
      duration: 0.6,
      ease: "easeOut",
    }}
    whileHover={{
      scale: 1.02,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
    }}
  >
    {/* Animated corner dots */}
    {[
      { position: "left-0 top-0" },
      { position: "right-0 top-0" },
      { position: "left-0 bottom-0" },
      { position: "right-0 bottom-0" },
    ].map((dot, dotIndex) => (
      <motion.span
        key={dotIndex}
        className={`absolute ${dot.position} h-1 w-1 rounded-full bg-[#D6D4C9]`}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.3 + index * 0.15 + dotIndex * 0.05,
          type: "spring",
        }}
      />
    ))}

    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.25 + index * 0.15,
        type: "spring",
      }}
      whileHover={{ rotate: 360 }}
    >
      <Icon className="mt-1 h-4 w-4 flex-shrink-0 text-[#D6D4C9] sm:h-4 sm:w-4" />
    </motion.div>

    <div>
      <motion.h4
        className="mb-1 text-[12px] font-medium text-white sm:text-[13px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 + index * 0.15 }}
        whileHover={{ color: "#FF5714" }}
      >
        {title}
      </motion.h4>
      <motion.p
        className="whitespace-pre-line text-[11px] leading-relaxed text-[#D6D4C9] sm:text-[12px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45 + index * 0.15 }}
      >
        {text}
      </motion.p>
    </div>
  </motion.div>
);

const TechnicalSpecificationsSection = () => {
  return (
    <motion.section
      className="relative w-full bg-[#42413E] py-12 text-white/80 sm:py-20 px-10 lg:py-28 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] w-[1px] bg-[#D6D4C9]/10 rounded-full"
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
              opacity: 0,
            }}
            whileInView={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
              opacity: [0, 0.1, 0],
            }}
            viewport={{ once: true }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* ================= HEADER ================= */}
        <motion.div
          className="mb-10 flex flex-col gap-4 sm:mb-16 sm:flex-row items-center justify-between lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-[24px] flex flex-col items-center justify-center font-medium leading-tight text-white sm:text-[26px] lg:text-[28px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Technical
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Specifications
            </motion.span>
          </motion.h2>

          <motion.button
            className="self-center text-[11px] text-[#FF5714] hover:text-[#FF5714] sm:self-auto sm:text-[12px] relative overflow-hidden group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF5714]/10 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">Learn more</span>
          </motion.button>
        </motion.div>

        {/* ================= CONTENT GRID ================= */}
        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16 xl:gap-20">
          {/* LEFT COLUMN - Image and "What's Included" card */}
          <motion.div
            className="order-2  lg:order-1 flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <motion.div className="w-full h-full  flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
              }}
            >
              <img
                src="/Buds_case_3.png"
                alt="Zone earbuds"
                className="mb-6 w-full   lg:mb-8 drop-shadow-xl"
              />
            </motion.div>

            <motion.div
              className="relative w-full rounded-xl bg-black/20 p-4 sm:p-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(0, 0, 0, 0.25)",
              }}
            >
              {/* Animated corner dots */}
              {[
                { position: "left-3 top-3" },
                { position: "right-3 top-3" },
                { position: "left-3 bottom-3" },
                { position: "right-3 bottom-3" },
              ].map((dot, dotIndex) => (
                <motion.span
                  key={dotIndex}
                  className={`absolute ${dot.position} h-1 w-1 rounded-full bg-[#D6D4C9]`}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.6 + dotIndex * 0.1,
                    type: "spring",
                  }}
                />
              ))}

              <motion.h4
                className="mb-3 text-[13px] font-medium text-white sm:text-[14px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                What's Included
              </motion.h4>

              <motion.ul
                className="space-y-2 text-[12px] text-[#D6D4C9] sm:text-[13px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.85 }}
                  whileHover={{ x: 5 }}
                >
                  Zone earbuds
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                  whileHover={{ x: 5 }}
                >
                  Size-specific charger
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.95 }}
                  whileHover={{ x: 5 }}
                >
                  USB-C cable
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Technical specifications */}
          <motion.div
            className="order-3 lg:order-2 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-x-12 lg:gap-y-14 xl:gap-x-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {/* Left specs column */}
            <motion.div
              className="space-y-6 sm:space-y-8 lg:space-y-14"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {specsLeft.map((spec, i) => (
                <SpecBlock key={i} {...spec} index={i} side="left" />
              ))}
            </motion.div>

            {/* Right specs column */}
            <motion.div
              className="space-y-6 sm:space-y-8 lg:space-y-14"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {specsRight.map((spec, i) => (
                <SpecBlock key={i} {...spec} index={i} side="right" />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TechnicalSpecificationsSection;
