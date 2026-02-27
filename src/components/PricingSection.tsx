import { Check, Circle } from "lucide-react";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion";
import { type PointerEventHandler, useMemo, useRef, useState } from "react";

const FRAMES_X = 96;
const FRAMES_Y = 8;
const GRAB_ROTATE_DISTANCE_X = 1000;
const GRAB_ROTATE_DISTANCE_Y = 500;

const getFrameSrc = (x: number, y: number) => {
  const frameNumber = y * FRAMES_X + x + 1;
  return `/3d_model/images/Frame${String(frameNumber).padStart(6, "0")}.png`;
};

const BudsModelViewer = () => {
  const [frameX, setFrameX] = useState(0);
  const [frameY, setFrameY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({
    x: 0,
    y: 0,
    frameX: 0,
    frameY: 0,
  });

  const src = useMemo(() => getFrameSrc(frameX, frameY), [frameX, frameY]);

  const onPointerDown: PointerEventHandler<HTMLDivElement> = (event) => {
    dragStart.current = {
      x: event.clientX,
      y: event.clientY,
      frameX,
      frameY,
    };
    setDragging(true);
  };

  const onPointerMove: PointerEventHandler<HTMLDivElement> = (event) => {
    if (!dragging) return;

    const deltaX = event.clientX - dragStart.current.x;
    const deltaY = event.clientY - dragStart.current.y;

    const frameDiffX = Math.round((deltaX / GRAB_ROTATE_DISTANCE_X) * FRAMES_X);
    const frameDiffY = Math.round((deltaY / GRAB_ROTATE_DISTANCE_Y) * FRAMES_Y);

    const nextFrameX =
      ((dragStart.current.frameX + frameDiffX) % FRAMES_X + FRAMES_X) % FRAMES_X;
    const nextFrameY = Math.max(
      0,
      Math.min(FRAMES_Y - 1, dragStart.current.frameY + frameDiffY),
    );

    setFrameX(nextFrameX);
    setFrameY(nextFrameY);
  };

  const onPointerUp: PointerEventHandler<HTMLDivElement> = () => {
    if (!dragging) return;
    setDragging(false);
  };

  return (
    <div
      className="select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      onPointerCancel={onPointerUp}
      style={{ cursor: dragging ? "grabbing" : "grab" }}
    >
      <img
        src={src}
        alt="Zone Alpha Buds 360 model"
        className="w-[260px] sm:w-[300px] lg:w-[460px]"
        draggable={false}
      />
    </div>
  );
};

const PricingSection = () => {
  const features = [
    "Receive your Alpha earbuds first.",
    "Beta Testing Access to the Product.",
    "6-Month Free App Subscription.",
    "Priority Customer Support.",
  ];

  return (
    <motion.section
      className="relative w-full bg-white py-12 sm:py-20 lg:py-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated decorative dots */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        <Circle className="absolute left-4 top-12 h-1 w-1 fill-black/30 text-black/30 sm:left-1/4 sm:top-24" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, type: "spring" }}
      >
        <Circle className="absolute right-4 top-12 h-1 w-1 fill-black/30 text-black/30 sm:right-1/4 sm:top-24" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, type: "spring" }}
      >
        <Circle className="absolute left-4 bottom-12 h-1 w-1 fill-black/30 text-black/30 sm:left-1/4 sm:bottom-24" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <Circle className="absolute right-4 bottom-12 h-1 w-1 fill-black/30 text-black/30 sm:right-1/4 sm:bottom-24" />
      </motion.div>

      <div className="mx-auto  grid max-w-6xl grid-cols-1 gap-12 px-4 sm:grid-cols-2 sm:gap-16 sm:px-6 lg:gap-20 lg:px-10">
        {/* ================= LEFT CONTENT ================= */}
        <div className=" flex flex-col gap-10">
          {/* Title + Price */}
          <motion.div
            className="flex items-start justify-between mb-6 sm:mb-8 "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <motion.h2
              className="text-[22px] font-medium leading-tight text-black sm:text-[26px] lg:text-[28px]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              zone alpha
              <br />
              earbuds
            </motion.h2>
            <motion.div
              className="flex flex-col items-end sm:items-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="text-[22px] font-medium text-black sm:text-[24px] lg:text-[26px]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.4,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                whileHover={{ scale: 1.1 }}
              >
                $199
              </motion.div>

              <motion.span
                className="mt-1 inline-block border rounded-sm border-[#333330] px-2 py-0.5 text-[9px] text-[#333330] sm:px-3 sm:py-1 sm:text-[10px]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(51, 51, 48, 0.05)",
                }}
              >
                Delivery Begins 2025
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Feature list */}
          <motion.ul
            className="mb-8 space-y-2 text-[11px]  text-black/60 sm:mb-10 sm:space-y-3 sm:text-[12px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {features.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5 + i * 0.1,
                    type: "spring",
                  }}
                  whileHover={{ rotate: 360 }}
                >
                  <Check className="mt-0.5 h-3 w-3 flex-shrink-0 text-black/50" />
                </motion.div>
                <motion.span whileHover={{ color: "#000000" }}>
                  {item}
                </motion.span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Special offer card */}
          <motion.div
            className="mb-6 rounded-xl bg-[#F3F2EE] p-4 sm:p-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
            }}
          >
            <motion.h4
              className="mb-2 text-[11px] font-medium text-black sm:text-[12px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              Special Pre-Order Offer
            </motion.h4>

            <motion.p
              className="text-[10px] leading-relaxed text-black/50 sm:text-[11px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              Save up to $40 when you pre-order this edition of zone alpha.
              Additionally, trials for the DeepWork app will be sent via email
              on shipment day.
            </motion.p>

            <motion.button
              className="mt-2 flex items-center gap-2 text-[10px] text-[#FF5714] sm:text-[11px] relative overflow-hidden group"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 }}
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
                <FaLocationArrow className="relative z-10" />
              </motion.div>
              <motion.span
                className="relative z-10"
                whileHover={{ color: "#ff7e14" }}
              >
                Learn more
              </motion.span>
            </motion.button>
          </motion.div>

          {/* CTA */}
          <motion.button
            className="w-full rounded-full bg-[#FF5714] px-6 py-3 text-[12px] font-medium text-white transition hover:bg-orange-600 sm:w-auto sm:px-8 lg:px-10 lg:text-[13px] relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#e64a19",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">Reserve with $1 deposit</span>
          </motion.button>
        </div>

        {/* ================= RIGHT VISUALS ================= */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <BudsModelViewer />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PricingSection;
