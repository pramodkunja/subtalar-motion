import { SlideSection } from "@/components/presentation/SlideSection";
import { AnimatedText } from "@/components/presentation/AnimatedText";
import { AnatomyImage } from "@/components/presentation/AnatomyImage";
import { LabelTag } from "@/components/presentation/LabelTag";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ligamentsImage from "@/assets/ligaments-overview.jpg";

export const SlideLigaments = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const ligaments = [
    { name: "Interosseous Talocalcaneal", key: true },
    { name: "Cervical Ligament", key: true },
    { name: "Lateral Talocalcaneal", key: false },
    { name: "Medial Talocalcaneal", key: false },
    { name: "Posterior Talocalcaneal", key: false }
  ];

  const extendedPoints = [
    "Ligaments are the primary stabilizers of the subtalar joint",
    "They prevent excessive inversion and eversion",
    "Damage to these ligaments leads to instability and pain",
    "Ligament integrity is crucial for normal foot mechanics"
  ];

  return (
    <SlideSection id="ligaments" bgVariant="subtle">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnatomyImage 
          src={ligamentsImage}
          alt="Subtalar joint ligaments anatomy"
          delay={0.2}
          effect="slide"
          className="aspect-square max-w-md mx-auto lg:mx-0 order-2 lg:order-1"
        />
        
        <div className="space-y-6 order-1 lg:order-2">
          <LabelTag>Slide 07</LabelTag>
          
          <AnimatedText as="h2" className="medical-heading" delay={0.1}>
            Ligaments Overview
          </AnimatedText>
          
          <AnimatedText as="p" className="text-lg text-muted-foreground leading-relaxed" delay={0.2}>
            Several ligaments reinforce the subtalar joint and maintain its stability:
          </AnimatedText>
          
          <div ref={ref} className="grid gap-2 pt-4">
            {ligaments.map((ligament, index) => (
              <motion.div
                key={ligament.name}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                  ligament.key 
                    ? "bg-accent/10 border border-accent/20" 
                    : "bg-card border border-border/50"
                }`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className={`w-3 h-3 rounded-full ${ligament.key ? "bg-accent" : "bg-border"}`}
                />
                <span className={`font-medium ${ligament.key ? "text-accent" : "text-foreground"}`}>
                  {ligament.name}
                </span>
                {ligament.key && (
                  <span className="ml-auto text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                    Primary
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Extended Matter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-4 p-4 rounded-xl bg-card border border-border/50"
          >
            <div className="space-y-2">
              {extendedPoints.map((point, index) => (
                <p key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  {point}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SlideSection>
  );
};
