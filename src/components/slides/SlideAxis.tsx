import { SlideSection } from "@/components/presentation/SlideSection";
import { AnimatedText } from "@/components/presentation/AnimatedText";
import { AnatomyImage } from "@/components/presentation/AnatomyImage";
import { LabelTag } from "@/components/presentation/LabelTag";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import axisImage from "@/assets/movement-axis.jpg";

export const SlideAxis = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SlideSection id="axis" bgVariant="subtle">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnatomyImage 
          src={axisImage}
          alt="Subtalar joint axis of movement"
          delay={0.2}
          effect="slide"
          className="aspect-square max-w-md mx-auto lg:mx-0 order-2 lg:order-1"
        />
        
        <div className="space-y-6 order-1 lg:order-2">
          <LabelTag>Slide 09</LabelTag>
          
          <AnimatedText as="h2" className="medical-heading" delay={0.1}>
            Axis of Movement
          </AnimatedText>
          
          <AnimatedText as="p" className="text-lg text-muted-foreground leading-relaxed" delay={0.2}>
            The subtalar joint moves around an <span className="text-accent font-semibold">oblique axis</span> that 
            runs diagonally through the foot.
          </AnimatedText>
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 rounded-2xl bg-card border border-border/50"
          >
            <h4 className="font-semibold text-foreground mb-4">Axis Orientation:</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  42°
                </div>
                <span className="text-muted-foreground">Inclined upward from the horizontal plane</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                  16°
                </div>
                <span className="text-muted-foreground">Deviated medially from the midline</span>
              </div>
            </div>
          </motion.div>
          
          <AnimatedText delay={0.4}>
            <p className="text-sm text-muted-foreground italic">
              This unique oblique orientation allows combined movements of inversion/eversion 
              with slight plantar/dorsiflexion components.
            </p>
          </AnimatedText>
        </div>
      </div>
    </SlideSection>
  );
};
