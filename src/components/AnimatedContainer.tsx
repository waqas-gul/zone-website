// components/AnimatedContainer.tsx
import { motion } from "framer-motion";
import type { ReactNode } from 'react'; 
interface AnimatedContainerProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export const AnimatedContainer = ({
  children,
  delay = 0,
  className = "",
  once = true,
}: AnimatedContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.1 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
