import { Instagram, Circle } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  const links = [
    "Home",
    "FAQ",
    "Privacy Policy",
    "Terms of Service",
    "Contact us",
    "Cookie Policy",
  ];

  const socialIcons = [
    { Icon: Instagram, name: "Instagram" },
    { Icon: FaLinkedin, name: "LinkedIn" },
    { Icon: BsTwitterX, name: "Twitter" },
  ];

  return (
    <motion.footer
      className="relative h-auto min-h-[70vh] sm:h-[95vh] w-full overflow-hidden bg-black text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* ================= ANIMATED BACKGROUND ================= */}
      <motion.img
        src="/hero-bg.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover blur-sm"
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <motion.img
        src="/hero-bg.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover blur-[60px] scale-110 opacity-60"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      />

      {/* ================= ANIMATED GRADIENT STACK ================= */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.55),transparent_55%)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(255,87,51,0.45),transparent_40%)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 1 }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_edges,rgba(0,0,0,0.75),transparent_45%)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 1 }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] w-[1px] bg-white/10 rounded-full"
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
              opacity: 0,
            }}
            whileInView={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
              opacity: [0, 0.2, 0],
            }}
            viewport={{ once: true }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* ================= GIANT LOGO ANIMATION ================= */}
      <motion.div
        className="relative z-10 flex h-full items-center justify-center pb-32 sm:pb-0 sm:bottom-32 pt-8 sm:pt-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <motion.img
          src="/footer_logo.png"
          alt="Zone Logo"
          className="pointer-events-none select-none w-[60vw] sm:w-[50vw] lg:w-[60vw] h-auto opacity-85"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.85, scale: 1 }}
          viewport={{ once: true }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.85, 0.7, 0.85],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* ================= BOTTOM CONTENT ANIMATIONS ================= */}
      <motion.div
        className="absolute inset-x-0 bottom-0 z-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 items-start sm:items-end">
          {/* ========== COLUMN 1: SOCIAL ========== */}
          <motion.div
            className="flex items-center justify-center gap-4 sm:gap-6 order-1 sm:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {socialIcons.map(({ Icon, name }, i) => (
              <motion.button
                key={name}
                className="relative group"
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.9 + i * 0.15,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Follow us on ${name}`}
              >
                {/* Smaller corner dots */}
                <span className="absolute -top-0.5 -left-0.5 sm:-top-1 sm:-left-1 h-1 w-1 rounded-full bg-black/60" />
                <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 h-1 w-1 rounded-full bg-black/60" />
                <span className="absolute -bottom-0.5 -left-0.5 sm:-bottom-1 sm:-left-1 h-1 w-1 rounded-full bg-black/60" />
                <span className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 h-1 w-1 rounded-full bg-black/60" />

                {/* Main icon container */}
                <div className="relative p-2 bg-white/5 rounded-lg backdrop-blur-sm group-hover:bg-white/10 transition-colors">
                  <Icon className="h-5 w-5 sm:h-4 sm:w-6 text-white" />
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* ========== COLUMN 2: LINKS ========== */}
          <motion.div
            className="flex flex-col gap-2 sm:gap-3 text-[11px] sm:text-[12px] text-white/70 order-3 lg:order-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {links.map((item, i) => (
              <motion.div
                key={item}
                className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 + i * 0.08 }}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 1.15 + i * 0.08,
                    type: "spring",
                  }}
                >
                  <Circle className="h-1 w-1 fill-white/50 group-hover:fill-[#FF5714] transition-colors" />
                </motion.div>
                <motion.span
                  className="hover:text-white transition-colors"
                  whileHover={{ color: "#FF5714" }}
                >
                  {item}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>

          {/* ========== COLUMN 3: TAGLINE ========== */}
          <motion.div
            className="text-center order-2 sm:order-3 lg:order-3 col-span-full sm:col-span-1 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <motion.p
              className="text-lg flex items-center justify-center sm:text-xl tracking-wide text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
              >
                own your foc
              </motion.span>
              <motion.span
                className="blur-[1px] ml-1"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.6 }}
              >
                us
                <motion.span
                  className="inline-block"
                  animate={{
                    filter: ["blur(1px)", "blur(2px)", "blur(1px)"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.7 }}
              >
                .
              </motion.span>
            </motion.p>
          </motion.div>

          {/* ========== COLUMN 4: COPYRIGHT ========== */}
          <motion.div
            className="flex items-center justify-center sm:justify-end gap-2 sm:gap-3 text-[11px] sm:text-[12px] text-white/70 order-4 sm:order-4 lg:order-4 mt-4 sm:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 1.6,
                type: "spring",
              }}
            >
              <Circle className="h-1 w-1 fill-white/50" />
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.7 }}
            >
              © 2026. All rights reserved. zone LLC
            </motion.span>
          </motion.div>
        </div>

        {/* Mobile indicator */}
        <motion.div
          className="mt-6 sm:hidden text-center text-[10px] text-white/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.8 }}
        >
          <p>Scroll to see more content</p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
