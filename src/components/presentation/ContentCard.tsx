import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ContentCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  glow?: boolean;
}

export const ContentCard = ({ 
  children, 
  delay = 0,
  className = "",
  glow = false
}: ContentCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={`
        anatomy-card bg-card border border-border/50
        ${glow ? "glow-effect" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};
