import { Plus, Circle, Mail } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  "How do Niura’s Alpha earbuds work?",
  "Are there any subscription fees for using Niura’s services?",
  "Can anyone use Niura’s earbuds?",
  "How can I stay updated on Niura’s latest developments and features?",
];

const FAQSection = () => {
  return (
    <motion.section 
      className="relative w-full overflow-hidden bg-[#1e1e1c] py-16 lg:px-16 sm:py-20 md:py-24 lg:py-28 xl:py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* ================= ANIMATED BACKGROUND GRADIENT ================= */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,120,60,0.12),transparent_55%)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_50%)]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] w-[1px] bg-white/10 rounded-full"
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
              opacity: 0
            }}
            whileInView={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
              opacity: [0, 0.15, 0]
            }}
            viewport={{ once: true }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* ================= ANIMATED DECORATIVE DOTS ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        <Circle className="absolute left-4 sm:left-6 md:left-8 lg:left-16 xl:left-24 top-8 sm:top-12 md:top-16 lg:top-24 xl:top-32 h-0.5 w-0.5 sm:h-0.75 sm:w-0.75 md:h-1 md:w-1 fill-white/30 text-white/30" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, type: "spring" }}
      >
        <Circle className="absolute left-4 sm:left-6 md:left-8 lg:left-16 xl:left-24 bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-24 xl:bottom-40 h-0.5 w-0.5 sm:h-0.75 sm:w-0.75 md:h-1 md:w-1 fill-white/30 text-white/30" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, type: "spring" }}
      >
        <Circle className="absolute right-4 sm:right-6 md:right-8 lg:right-16 xl:right-40 top-8 sm:top-12 md:top-16 lg:top-24 xl:top-40 h-0.5 w-0.5 sm:h-0.75 sm:w-0.75 md:h-1 md:w-1 fill-white/30 text-white/30" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <Circle className="absolute right-4 sm:right-6 md:right-8 lg:right-16 xl:right-40 bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 xl:bottom-32 h-0.5 w-0.5 sm:h-0.75 sm:w-0.75 md:h-1 md:w-1 fill-white/30 text-white/30" />
      </motion.div>

      <motion.div 
        className="relative mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 sm:gap-12 md:gap-16 lg:gap-24 xl:gap-32 px-4 sm:px-6 md:px-8 lg:px-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* ================= LEFT COLUMN ================= */}
        <motion.div 
          className="text-center lg:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <motion.h2 
            className="mb-4 sm:mb-5 md:mb-6 text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-light leading-tight text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.button 
            className="mt-4 w-full flex items-center justify-center lg:justify-start gap-2 text-[11px] sm:text-[12px] text-[#FF5714] hover:text-[#ff7e14] transition-colors relative overflow-hidden group"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF5714]/10 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Mail className="h-2.5 w-2.5 sm:h-3 sm:w-3 relative z-10" />
            </motion.div>
            <motion.span 
              className="relative z-10"
              animate={{
                x: [0, 2, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Email us
            </motion.span>
          </motion.button>
        </motion.div >

        {/* ================= RIGHT COLUMN ================= */}
        <motion.div 
          className="relative space-y-4 sm:space-y-5 md:space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {faqs.map((q, i) => (
            <motion.div
              key={i}
              className="relative flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (i * 0.15) }}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
            >
              {/* Animated corner dots */}
              {[
                { position: "top-0 -left-3 sm:-left-4 md:-left-5" },
                { position: "-right-3 sm:-right-4 md:-right-5 top-0" },
                { position: "-left-3 sm:-left-4 md:-left-5 bottom-0" },
                { position: "-right-3 sm:-right-4 md:-right-5 bottom-0" }
              ].map((dot, dotIndex) => (
                <motion.span 
                  key={dotIndex}
                  className={`hidden sm:block absolute ${dot.position} h-0.5 w-0.5 sm:h-0.75 sm:w-0.75 md:h-1 md:w-1 rounded-full bg-white/25`}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.4 + (i * 0.15) + (dotIndex * 0.05),
                    type: "spring"
                  }}
                />
              ))}

              <motion.p 
                className="text-[12px] sm:text-[13px] text-white/70 pr-2 sm:pr-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + (i * 0.15) }}
                whileHover={{ color: "#ffffff" }}
              >
                {q}
              </motion.p>

              <motion.button 
                className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full border border-white/20 text-white/50 hover:border-white/40 hover:text-white/80 transition flex-shrink-0 relative overflow-hidden group"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.6 + (i * 0.15),
                  type: "spring"
                }}
                whileHover={{ 
                  scale: 1.1,
                  borderColor: "#FF5714",
                  color: "#FF5714"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF5714]/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  animate={{
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Plus className="h-2.5 w-2.5 sm:h-3 sm:w-3 relative z-10" />
                </motion.div>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Connection lines animation */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.path
          d="M15% 50% Q 30% 40%, 45% 50% T 75% 45%"
          stroke="rgba(255, 87, 20, 0.1)"
          strokeWidth="1"
          fill="transparent"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
      </svg>
    </motion.section>
  );
};

export default FAQSection;