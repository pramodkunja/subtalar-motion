import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface LabelTagProps {
  children: string;
  delay?: number;
  variant?: "default" | "primary" | "outline";
}

export const LabelTag = ({ 
  children, 
  delay = 0,
  variant = "default"
}: LabelTagProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variantClasses = {
    default: "bg-accent/10 text-accent border-accent/20",
    primary: "bg-primary/10 text-primary border-primary/20",
    outline: "bg-transparent text-muted-foreground border-border"
  };

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay }}
      className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium border ${variantClasses[variant]}`}
    >
      {children}
    </motion.span>
  );
};
