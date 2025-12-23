import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export const AnimatedText = ({ 
  children, 
  delay = 0, 
  className = "",
  as: Component = "div"
}: AnimatedTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Component className={className}>{children}</Component>
    </motion.div>
  );
};

interface AnimatedListProps {
  items: string[];
  className?: string;
  itemClassName?: string;
}

export const AnimatedList = ({ 
  items, 
  className = "",
  itemClassName = ""
}: AnimatedListProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <ul ref={ref} className={className}>
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.15,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className={itemClassName}
        >
          {item}
        </motion.li>
      ))}
    </ul>
  );
};
