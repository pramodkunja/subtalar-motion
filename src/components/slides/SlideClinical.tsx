import { SlideSection } from "@/components/presentation/SlideSection";
import { AnimatedText } from "@/components/presentation/AnimatedText";
import { AnatomyImage } from "@/components/presentation/AnatomyImage";
import { LabelTag } from "@/components/presentation/LabelTag";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import clinicalImage from "@/assets/clinical-comparison.jpg";

export const SlideClinical = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const conditions = [
    {
      name: "Subtalar Arthritis",
      description: "Degenerative changes causing pain and stiffness",
      icon: "🦴"
    },
    {
      name: "Flat Foot (Pes Planus)",
      description: "Loss of medial arch with excessive eversion",
      icon: "👣"
    },
    {
      name: "Ankle Sprains",
      description: "Ligament injuries affecting joint stability",
      icon: "⚡"
    },
    {
      name: "Sinus Tarsi Syndrome",
      description: "Chronic pain from interosseous ligament damage",
      icon: "🔴"
    }
  ];

  const extendedPoints = [
    "Subtalar arthritis causes pain and restricted movement",
    "Excessive pronation can lead to flat foot deformity",
    "Commonly involved in ankle sprains",
    "Frequently assessed in orthopedic and physiotherapy practice"
  ];

  return (
    <SlideSection id="clinical">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <LabelTag variant="primary">Slide 14</LabelTag>
          
          <AnimatedText as="h2" className="medical-heading" delay={0.1}>
            Clinical Importance
          </AnimatedText>
          
          <AnimatedText as="p" className="text-lg text-muted-foreground leading-relaxed" delay={0.2}>
            Understanding subtalar joint anatomy is crucial for diagnosing and treating various conditions:
          </AnimatedText>
          
          <div ref={ref} className="grid gap-4 pt-4">
            {conditions.map((condition, index) => (
              <motion.div
                key={condition.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="p-4 rounded-xl bg-card border border-border/50 hover:border-accent/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{condition.icon}</span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{condition.name}</h4>
                    <p className="text-sm text-muted-foreground">{condition.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Extended Matter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
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
          src={clinicalImage}
          alt="Normal vs pathological subtalar joint"
          delay={0.3}
          effect="zoom"
          className="aspect-square max-w-md mx-auto lg:mx-0"
        />
      </div>
    </SlideSection>
  );
};
