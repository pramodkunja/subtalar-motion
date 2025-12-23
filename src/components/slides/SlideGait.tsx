import { SlideSection } from "@/components/presentation/SlideSection";
import { AnimatedText } from "@/components/presentation/AnimatedText";
import { AnatomyImage } from "@/components/presentation/AnatomyImage";
import { LabelTag } from "@/components/presentation/LabelTag";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import gaitImage from "@/assets/gait-cycle.jpg";

export const SlideGait = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const gaitPhases = [
    { phase: "Heel Strike", role: "Joint everts to absorb impact" },
    { phase: "Midstance", role: "Transitions from eversion to inversion" },
    { phase: "Toe Off", role: "Joint inverts to create rigid lever" }
  ];

  return (
    <SlideSection id="gait" bgVariant="subtle">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnatomyImage 
          src={gaitImage}
          alt="Gait cycle with subtalar joint function"
          delay={0.2}
          effect="slide"
          className="aspect-square max-w-md mx-auto lg:mx-0 order-2 lg:order-1"
        />
        
        <div className="space-y-6 order-1 lg:order-2">
          <LabelTag>Slide 11</LabelTag>
          
          <AnimatedText as="h2" className="medical-heading" delay={0.1}>
            Functional Role in Gait
          </AnimatedText>
          
          <AnimatedText as="p" className="text-lg text-muted-foreground leading-relaxed" delay={0.2}>
            The subtalar joint is essential for normal walking by providing:
          </AnimatedText>
          
          <div className="grid gap-3 pt-2">
            <AnimatedText delay={0.3}>
              <div className="flex items-center gap-3 text-foreground">
                <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="font-medium">Shock absorption during heel strike</span>
              </div>
            </AnimatedText>
            <AnimatedText delay={0.4}>
              <div className="flex items-center gap-3 text-foreground">
                <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="font-medium">Terrain adaptation on uneven surfaces</span>
              </div>
            </AnimatedText>
          </div>
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-5 rounded-2xl bg-card border border-border/50"
          >
            <h4 className="font-semibold text-foreground mb-4">During the Gait Cycle:</h4>
            <div className="space-y-3">
              {gaitPhases.map((item, index) => (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.15 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </span>
                  <div>
                    <span className="font-medium text-foreground">{item.phase}:</span>
                    <span className="text-muted-foreground ml-1">{item.role}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SlideSection>
  );
};
