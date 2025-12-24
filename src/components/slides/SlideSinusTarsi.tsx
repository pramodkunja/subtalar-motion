import { SlideSection } from "@/components/presentation/SlideSection";
import { AnimatedText } from "@/components/presentation/AnimatedText";
import { AnatomyImage } from "@/components/presentation/AnatomyImage";
import { LabelTag } from "@/components/presentation/LabelTag";
import { ContentCard } from "@/components/presentation/ContentCard";
import sinusImage from "@/assets/sinus-tarsi.jpg";

export const SlideSinusTarsi = () => {
  const extendedPoints = [
    "Located in the sinus tarsi between talus and calcaneus",
    "It is the strongest ligament of the subtalar joint",
    "Controls excessive pronation and supination",
    "Injury to this ligament often causes chronic hindfoot instability"
  ];

  return (
    <SlideSection id="sinus-tarsi">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <LabelTag variant="primary">Slide 08</LabelTag>
          
          <AnimatedText as="h2" className="medical-heading" delay={0.1}>
            Interosseous Ligament
          </AnimatedText>
          
          <AnimatedText as="p" className="text-lg text-muted-foreground leading-relaxed" delay={0.2}>
            The <span className="text-accent font-semibold">interosseous talocalcaneal ligament</span> is 
            the primary stabilizer of the subtalar joint.
          </AnimatedText>
          
          <ContentCard delay={0.3} glow>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-foreground">Location: Sinus Tarsi</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The sinus tarsi is a cone-shaped space between the talus and calcaneus. 
                This ligament runs through this space, providing crucial stability.
              </p>
            </div>
          </ContentCard>
          
          <AnimatedText delay={0.4}>
            <div className="p-4 rounded-xl border border-primary/20 bg-primary/5">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-medium">Clinical Note:</span> Injury to this ligament 
                can result in "sinus tarsi syndrome" — causing chronic lateral foot pain.
              </p>
            </div>
          </AnimatedText>

          {/* Extended Matter */}
          <div className="mt-4 p-4 rounded-xl bg-muted/50 border border-border/50">
            <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Key Points</h4>
            <div className="space-y-2">
              {extendedPoints.map((point, index) => (
                <AnimatedText key={index} delay={0.5 + index * 0.1}>
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {point}
                  </p>
                </AnimatedText>
              ))}
            </div>
          </div>
        </div>
        
        <AnatomyImage 
          src={sinusImage}
          alt="Close-up of sinus tarsi with interosseous ligament"
          delay={0.3}
          effect="zoom"
          className="aspect-square max-w-md mx-auto lg:mx-0"
        />
      </div>
    </SlideSection>
  );
};
