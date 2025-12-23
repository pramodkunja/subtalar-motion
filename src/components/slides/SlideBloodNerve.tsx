import { SlideSection } from "@/components/presentation/SlideSection";
import { AnimatedText } from "@/components/presentation/AnimatedText";
import { AnatomyImage } from "@/components/presentation/AnatomyImage";
import { LabelTag } from "@/components/presentation/LabelTag";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import supplyImage from "@/assets/blood-nerve-supply.jpg";

export const SlideBloodNerve = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SlideSection id="blood-nerve" bgVariant="subtle">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnatomyImage 
          src={supplyImage}
          alt="Neurovascular supply of ankle"
          delay={0.2}
          effect="slide"
          className="aspect-square max-w-md mx-auto lg:mx-0 order-2 lg:order-1"
        />
        
        <div className="space-y-6 order-1 lg:order-2">
          <LabelTag>Slide 13</LabelTag>
          
          <AnimatedText as="h2" className="medical-heading" delay={0.1}>
            Blood & Nerve Supply
          </AnimatedText>
          
          <div ref={ref} className="grid gap-6 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-card border border-border/50"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Arterial Supply</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <motion.li
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  Posterior tibial artery (primary)
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  Peroneal artery branches
                </motion.li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 rounded-2xl bg-card border border-border/50"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Nerve Supply</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <motion.li
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-yellow-500" />
                  Tibial nerve branches
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  className="flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-yellow-500" />
                  Sural nerve contributions
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideSection>
  );
};
