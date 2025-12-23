import { motion } from "framer-motion";

interface NavigationDotsProps {
  totalSlides: number;
  currentSlide: number;
  onSlideClick: (index: number) => void;
}

export const NavigationDots = ({ 
  totalSlides, 
  currentSlide, 
  onSlideClick 
}: NavigationDotsProps) => {
  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3"
    >
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideClick(index)}
          className={`nav-dot transition-all duration-300 hover:bg-accent/50 ${
            currentSlide === index ? "active" : ""
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </motion.nav>
  );
};
