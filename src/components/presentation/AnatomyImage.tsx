import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnatomyImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  effect?: "zoom" | "fade" | "slide";
}

export const AnatomyImage = ({ 
  src, 
  alt, 
  className = "",
  delay = 0,
  effect = "zoom"
}: AnatomyImageProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    zoom: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 }
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    },
    slide: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={variants[effect].initial}
      animate={isInView ? variants[effect].animate : variants[effect].initial}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={`relative overflow-hidden rounded-2xl shadow-lg ${className}`}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
    </motion.div>
  );
};
