import { SlideSection } from "@/components/presentation/SlideSection";
import { AnimatedText } from "@/components/presentation/AnimatedText";
import { AnatomyImage } from "@/components/presentation/AnatomyImage";
import { LabelTag } from "@/components/presentation/LabelTag";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import musclesImage from "@/assets/muscles-leg.jpg";

export const SlideMuscles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const invertors = [
    "Tibialis posterior",
    "Tibialis anterior",
    "Gastrocnemius",
    "Soleus"
  ];

  const evertors = [
    "Peroneus longus",
    "Peroneus brevis",
    "Peroneus tertius"
  ];

  const extendedPoints = [
    "Invertors help maintain the medial arch",
    "Evertors provide lateral stability",
    "Muscle balance is crucial for joint health",
    "Weakness can lead to deformities like flat foot"
  ];

  return (
    <SlideSection id="muscles">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <LabelTag>Slide 12</LabelTag>
          
          <AnimatedText as="h2" className="medical-heading" delay={0.1}>
            Muscles Acting on the Joint
          </AnimatedText>
          
          <AnimatedText as="p" className="text-lg text-muted-foreground leading-relaxed" delay={0.2}>
            Multiple muscles control subtalar joint movements:
          </AnimatedText>
          
          <div ref={ref} className="grid md:grid-cols-2 gap-6 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-5 rounded-2xl bg-primary/5 border border-primary/20"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <h4 className="font-semibold text-primary">Invertors</h4>
              </div>
              <ul className="space-y-2">
                {invertors.map((muscle, index) => (
                  <motion.li
                    key={muscle}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {muscle}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-5 rounded-2xl bg-accent/5 border border-accent/20"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <h4 className="font-semibold text-accent">Evertors</h4>
              </div>
              <ul className="space-y-2">
                {evertors.map((muscle, index) => (
                  <motion.li
                    key={muscle}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                    {muscle}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Extended Matter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.9 }}
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
          src={musclesImage}
          alt="Lower leg muscles anatomy"
          delay={0.3}
          effect="zoom"
          className="aspect-square max-w-md mx-auto lg:mx-0"
        />
      </div>
    </SlideSection>
  );
};
