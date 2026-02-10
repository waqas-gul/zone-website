import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slides = [
    {
      image: "./user1.png",
      title: "Unlock peak",
      subtitle: "productivity",
    },
    {
      image: "./user2.png",
      title: "Catch the drift",
      subtitle: "before it's too late",
    },
    {
      image: "./user3.png",
      title: "Silence the noise",
      subtitle: "in your head",
    },
    {
      image: "./user4.png",
      title: "Silence the noise",
      subtitle: "in your head",
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  return (
    <motion.div
      className="min-h-screen bg-[#F3F2EE] flex flex-col pb-10 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Header Section */}
      <motion.div
        className="flex flex-col md:flex-row z-10 justify-between items-start gap-6 my-4 sm:my-6 md:my-8 mx-4 sm:mx-8 md:mx-12 lg:mx-16"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Left: Header Text */}
        <div className="max-w-md w-full">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#333330] mb-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            tune out the world.
          </motion.h1>
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-[#989385] mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            tune in to your mind.
          </motion.h2>
          <motion.p
            className="text-xs sm:text-sm text-[#333330] max-w-xs leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Designed with neural-grade tech that we can designed to help you
            reach flow state. On demand.
          </motion.p>
        </div>

        {/* Navigation Arrows - Horizontal alignment at top right */}
        <motion.div
          className="flex gap-2 mt-0 md:mt-24 md:self-end"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring" }}
        >
          <motion.button
            onClick={prevSlide}
            className="bg-white rounded-full p-2 sm:p-3 shadow-md hover:bg-gray-50 transition-colors relative overflow-hidden group"
            aria-label="Previous slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 relative z-10" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="bg-[#FF5714] rounded-full p-2 sm:p-3 shadow-md hover:bg-[#ff7e14] transition-colors relative overflow-hidden group"
            aria-label="Next slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white relative z-10" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Carousel Container */}
      <motion.div
        className="flex-1 z-20 flex items-center justify-center md:justify-end relative overflow-hidden w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="w-full max-w-6xl relative px-0">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                initial={{
                  x: direction > 0 ? 300 : -300,
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  x: direction < 0 ? 300 : -300,
                  opacity: 0,
                  scale: 0.9,
                }}
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.3 },
                }}
                className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 px-4 sm:px-0"
              >
                <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                  {slides.map((slide, index) => (
                    <motion.div
                      key={`${currentSlide}-${index}`}
                      className="flex-shrink-0 w-40 xs:w-44 sm:w-56 md:w-64 lg:w-80 max-w-[80vw] sm:max-w-none relative"
                      initial={{ opacity: 0, scale: 0.9, y: 20, zIndex: 1 }}
                      animate={{
                        opacity: 1,
                        scale: index === currentSlide ? 1 : 0.95,
                        y: 0,
                        zIndex: 1,
                      }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      whileHover={{
                        scale: index === currentSlide ? 1.05 : 1,
                        zIndex: 50,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <div className="relative rounded-full overflow-hidden aspect-[2/3] bg-[#F3F2EE] shadow-xl w-full">
                        <motion.img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover object-center"
                          initial={{ scale: 1.1 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.7 }}
                          whileHover={{ scale: 1.15 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <motion.div
                          className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-0 right-0 text-center text-white px-2 sm:px-3 md:px-4 lg:px-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <motion.p
                            className="text-xs sm:text-sm md:text-base font-light"
                            whileHover={{ scale: 1.05 }}
                          >
                            {slide.title}
                          </motion.p>
                          <motion.p
                            className="text-xs sm:text-sm md:text-base font-light"
                            whileHover={{ scale: 1.05 }}
                          >
                            {slide.subtitle}
                          </motion.p>
                        </motion.div>

                        {/* Glow effect for active slide */}
                        {index === currentSlide && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FF5714]/10 to-transparent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            transition={{ delay: 0.5 }}
                          />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right side blur gradient */}
            <motion.div
              className="hidden sm:block absolute top-0 right-0 bottom-0 w-24 sm:w-32 md:w-48 bg-gradient-to-l from-[#F3F2EE] to-transparent pointer-events-none z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            />
          </div>

          {/* Dots Indicator */}
          <motion.div
            className="flex justify-center gap-2 mt-4 sm:mt-6 md:mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full relative overflow-hidden ${
                  index === currentSlide
                    ? "bg-[#FF5714]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                style={{ width: index === currentSlide ? "32px" : "8px" }}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {/* Active dot pulse effect */}
                {index === currentSlide && (
                  <motion.div
                    className="absolute inset-0 bg-[#FF5714] rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 0, 0.7],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Floating particles background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] w-[1px] bg-[#FF5714]/20 rounded-full"
              initial={{
                x: Math.random() * 800,
                y: Math.random() * 600,
                opacity: 0,
              }}
              animate={{
                x: Math.random() * 800,
                y: Math.random() * 600,
                opacity: [0, 0.2, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
