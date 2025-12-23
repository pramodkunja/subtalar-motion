import { SlideSection } from "@/components/presentation/SlideSection";
import { AnimatedText } from "@/components/presentation/AnimatedText";
import { AnatomyImage } from "@/components/presentation/AnatomyImage";
import { LabelTag } from "@/components/presentation/LabelTag";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import summaryImage from "@/assets/summary-joint.jpg";

export const SlideSummary = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const keyPoints = [
    { icon: "🦴", text: "Plane synovial joint between talus and calcaneus" },
    { icon: "🔄", text: "Primary movements: inversion and eversion" },
    { icon: "🎯", text: "Three articular facets on each bone" },
    { icon: "💪", text: "Stabilized by interosseous ligament" },
    { icon: "🚶", text: "Essential for gait and terrain adaptation" },
    { icon: "⚕️", text: "Clinically significant for foot pathology" }
  ];

  return (
    <SlideSection id="summary" bgVariant="subtle">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnatomyImage 
          src={summaryImage}
          alt="Subtalar joint summary illustration"
          delay={0.2}
          effect="slide"
          className="aspect-square max-w-md mx-auto lg:mx-0 order-2 lg:order-1"
        />
        
        <div className="space-y-6 order-1 lg:order-2">
          <LabelTag>Slide 15</LabelTag>
          
          <AnimatedText as="h2" className="medical-heading" delay={0.1}>
            Summary & Takeaway
          </AnimatedText>
          
          <AnimatedText as="p" className="text-lg text-muted-foreground leading-relaxed" delay={0.2}>
            Key points to remember about the subtalar joint:
          </AnimatedText>
          
          <div ref={ref} className="grid gap-3 pt-4">
            {keyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4 p-3 rounded-lg bg-card border border-border/50"
              >
                <span className="text-xl">{point.icon}</span>
                <span className="text-foreground">{point.text}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="pt-6 text-center lg:text-left"
          >
            <p className="text-muted-foreground italic">
              "A thorough understanding of subtalar joint anatomy is fundamental 
              for diagnosing and treating foot and ankle pathology."
            </p>
          </motion.div>
        </div>
      </div>
    </SlideSection>
  );
};
