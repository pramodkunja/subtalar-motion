import { SlideSection } from "@/components/presentation/SlideSection";
import { AnimatedText } from "@/components/presentation/AnimatedText";
import { AnatomyImage } from "@/components/presentation/AnatomyImage";
import { LabelTag } from "@/components/presentation/LabelTag";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import facetsImage from "@/assets/calcaneus-facets.jpg";

export const SlideFacets = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const facets = [
    { name: "Anterior Facet", description: "Smallest facet, often merged with the middle facet", color: "bg-teal-light" },
    { name: "Middle Facet", description: "Located on the sustentaculum tali of the calcaneus", color: "bg-accent" },
    { name: "Posterior Facet", description: "Largest and most important for joint movement", color: "bg-primary" }
  ];

  return (
    <SlideSection id="facets" bgVariant="subtle">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnatomyImage 
          src={facetsImage}
          alt="Superior view of calcaneus showing articular facets"
          delay={0.2}
          effect="slide"
          className="aspect-square max-w-md mx-auto lg:mx-0 order-2 lg:order-1"
        />
        
        <div className="space-y-6 order-1 lg:order-2">
          <LabelTag>Slide 05</LabelTag>
          
          <AnimatedText as="h2" className="medical-heading" delay={0.1}>
            Articular Facets
          </AnimatedText>
          
          <AnimatedText as="p" className="text-lg text-muted-foreground leading-relaxed" delay={0.2}>
            The subtalar joint has <span className="text-accent font-semibold">three articular facets</span> on 
            both the talus and calcaneus that correspond to each other:
          </AnimatedText>
          
          <div ref={ref} className="space-y-4 pt-4">
            {facets.map((facet, index) => (
              <motion.div
                key={facet.name}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50"
              >
                <div className={`w-4 h-4 rounded-full ${facet.color} mt-1 flex-shrink-0`} />
                <div>
                  <h4 className="font-semibold text-foreground">{facet.name}</h4>
                  <p className="text-sm text-muted-foreground">{facet.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideSection>
  );
};
