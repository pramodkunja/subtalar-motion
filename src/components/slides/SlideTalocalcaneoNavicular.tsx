import { SlideSection } from "../presentation/SlideSection";
import { AnimatedText } from "../presentation/AnimatedText";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import talocalcaneoNavicularImg from "@/assets/talocalcaneo-navicular.jpg";

export const SlideTalocalcaneoNavicular = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contentSections = [
    {
      title: "Overview",
      items: [
        "Forms the anterior part of the subtalar joint",
        "Classified as a compound, multiaxial synovial joint",
        "Plays a key role in pronation and supination"
      ]
    },
    {
      title: "Articulating Surfaces",
      items: [
        "Convex ovoid head of talus",
        "Concavity formed by navicular bone",
        "Middle and anterior facets of calcaneus",
        "Plantar calcaneonavicular (spring) ligament",
        "This concavity forms a socket for the talar head"
      ]
    },
    {
      title: "Ligaments",
      items: [
        "Talonavicular ligament – between neck of talus and navicular",
        "Spring ligament – broad, thick, extends from sustentaculum tali to navicular",
        "Supports head of talus and maintains medial longitudinal arch"
      ]
    },
    {
      title: "Capsule & Synovial Cavity",
      items: [
        "Fibrous capsule – posteriorly thick",
        "Synovial cavity communicates with talocalcaneal and talonavicular joints"
      ]
    },
    {
      title: "Muscular & Nerve Support",
      items: [
        "Supported by: Tibialis posterior, Flexor hallucis longus, Flexor digitorum longus",
        "Nerve supply: Deep peroneal nerve, Medial plantar nerve"
      ]
    }
  ];

  return (
    <SlideSection id="talocalcaneo-navicular">
      <div ref={ref} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left: Anatomical Image with Sequential Highlights */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
            <img 
              src={talocalcaneoNavicularImg} 
              alt="Talocalcaneo-navicular joint anatomy showing talus, calcaneus, navicular, and spring ligament"
              className="w-full h-auto object-cover"
            />
            
            {/* Highlight overlays that appear sequentially */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute inset-0 pointer-events-none"
            >
              {/* Subtle glow effect for talus region */}
              <div className="absolute top-[30%] left-[40%] w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="absolute inset-0 pointer-events-none"
            >
              {/* Subtle glow effect for navicular region */}
              <div className="absolute top-[35%] left-[55%] w-20 h-20 bg-teal-accent/20 rounded-full blur-xl animate-pulse" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="absolute inset-0 pointer-events-none"
            >
              {/* Subtle glow effect for calcaneus region */}
              <div className="absolute top-[50%] left-[30%] w-28 h-20 bg-primary/15 rounded-full blur-xl animate-pulse" />
            </motion.div>

            {/* Spring ligament draw effect */}
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 1.5, delay: 2.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 35 55 Q 45 60 55 52"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="0.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.5, delay: 2.5, ease: "easeInOut" }}
              />
            </motion.svg>

            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
          </motion.div>

          {/* Image caption */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 3 }}
            className="text-sm text-muted-foreground text-center mt-4 italic"
          >
            Medial view showing the talocalcaneo-navicular joint complex
          </motion.p>
        </div>

        {/* Right: Text Content */}
        <div className="space-y-6">
          <div>
            <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold text-primary mb-2">
              Talocalcaneo-Navicular Joint
            </AnimatedText>
            <AnimatedText as="p" delay={0.2} className="text-lg text-accent font-medium">
              Anterior Component of the Subtalar Joint
            </AnimatedText>
          </div>

          <div className="space-y-5 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin">
            {contentSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.5 + sectionIndex * 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="bg-cream-dark/50 rounded-xl p-4 border border-border/30"
              >
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {section.title}
                </h3>
                <ul className="space-y-1.5">
                  {section.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.7 + sectionIndex * 0.3 + itemIndex * 0.1 
                      }}
                      className="text-sm text-foreground/80 pl-3 border-l-2 border-border/50"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Closing statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="mt-6 pt-4 border-t border-border/30"
          >
            <p className="text-sm md:text-base text-primary/90 italic leading-relaxed">
              "This joint forms the socket for the talar head and is essential for medial longitudinal arch support and multiaxial foot movements."
            </p>
          </motion.div>
        </div>
      </div>
    </SlideSection>
  );
};
