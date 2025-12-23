import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface SlideSectionProps {
  children: ReactNode;
  id: string;
  className?: string;
  bgVariant?: "default" | "subtle" | "dark";
}

export const SlideSection = ({ 
  children, 
  id, 
  className = "",
  bgVariant = "default" 
}: SlideSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const bgClasses = {
    default: "bg-background",
    subtle: "bg-cream-dark",
    dark: "bg-primary text-primary-foreground"
  };

  return (
    <section
      id={id}
      ref={ref}
      className={`slide-section py-20 md:py-32 ${bgClasses[bgVariant]} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="content-container"
      >
        {children}
      </motion.div>
    </section>
  );
};
