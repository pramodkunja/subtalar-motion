import { SlideSection } from "@/components/presentation/SlideSection";
import { AnimatedText } from "@/components/presentation/AnimatedText";
import { AnatomyImage } from "@/components/presentation/AnatomyImage";
import { LabelTag } from "@/components/presentation/LabelTag";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import movementImage from "@/assets/inversion-eversion.jpg";

export const SlideMovements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const extendedPoints = [
    "Inversion: Sole turns inward",
    "Eversion: Sole turns outward",
    "These movements occur together with plantarflexion and dorsiflexion",
    "Essential for balance on uneven surfaces"
  ];

  return (
    <SlideSection id="movements">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <LabelTag>Slide 10</LabelTag>
          
          <AnimatedText as="h2" className="medical-heading" delay={0.1}>
            Movements
          </AnimatedText>
          
          <AnimatedText as="p" className="text-lg text-muted-foreground leading-relaxed" delay={0.2}>
            The subtalar joint primarily allows two types of rotational movements:
          </AnimatedText>
          
          <div ref={ref} className="grid gap-6 pt-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  animate={isInView ? { rotate: [0, -15, 0] } : {}}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0"
                >
                  <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-2">Inversion</h3>
                  <p className="text-muted-foreground">
                    Sole of the foot turns <span className="font-medium text-foreground">medially</span> (inward). 
                    Range: approximately 20-30°
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  animate={isInView ? { rotate: [0, 15, 0] } : {}}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0"
                >
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Eversion</h3>
                  <p className="text-muted-foreground">
                    Sole of the foot turns <span className="font-medium text-foreground">laterally</span> (outward). 
                    Range: approximately 10-15°
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Extended Matter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-4 p-4 rounded-xl bg-muted/50 border border-border/50"
          >
            <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Key Points</h4>
            <div className="space-y-2">
              {extendedPoints.map((point, index) => (
                <p key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {point}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
        
        <AnatomyImage 
          src={movementImage}
          alt="Inversion and eversion movements"
          delay={0.3}
          effect="zoom"
          className="aspect-square max-w-md mx-auto lg:mx-0"
        />
      </div>
    </SlideSection>
  );
};
