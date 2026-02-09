import { motion } from "framer-motion";

export default function ZoneComposition() {
  return (
    <div className="bg-white flex items-center justify-center px-4 py-12 sm:py-16 md:py-20 lg:p-8 md:min-h-screen">
      <motion.div 
        className="max-w-2xl w-full space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* First paragraph */}
        <motion.p 
          className="text-[#2C2C2C] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-relaxed font-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut" 
          }}
        >
          zone was engineered for minds that don't have an off-switch.
        </motion.p>

        {/* Second paragraph */}
        <motion.p 
          className="text-[#2C2C2C] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-relaxed font-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut" 
          }}
        >
          For days that feel loud, fast, scattered — whe{" "}
          <motion.span 
            className="text-[#D6D4C9] blur-[0.5px] sm:blur-[0.75px] md:blur-[1px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              delay: 0.4
            }}
          >
            n focus slips the moment you need it most.
          </motion.span>
        </motion.p>

        {/* Third paragraph */}
        <motion.p 
          className="text-[#D6D4C9] blur-[1px] sm:blur-[1.5px] md:blur-[2px] lg:blur-[3px] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-relaxed font-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            delay: 0.4,
            ease: "easeOut" 
          }}
        >
          zone neural earbuds read your brain activity in real time and gently
          steer you into your zone. less noise. better signals. where deep work
          lives.
        </motion.p>

        {/* Optional: Add a subtle floating effect to the blurred text */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-[#D6D4C9]/20 to-transparent"
              style={{
                top: `${20 + i * 25}%`,
                left: "10%",
                right: "10%"
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ 
                scaleX: 1, 
                opacity: [0, 0.3, 0] 
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                delay: 0.6 + i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}