import { SlideSection } from "@/components/presentation/SlideSection";
import { AnimatedText } from "@/components/presentation/AnimatedText";
import { AnatomyImage } from "@/components/presentation/AnatomyImage";
import { LabelTag } from "@/components/presentation/LabelTag";
import { ContentCard } from "@/components/presentation/ContentCard";
import bonesImage from "@/assets/talus-calcaneus.jpg";

export const SlideBones = () => {
  const extendedPoints = [
    "The talus transmits body weight from the tibia to the foot",
    "The calcaneus forms the heel and provides leverage for walking",
    "The articulation between these bones forms the subtalar joint",
    "Their unique shapes allow controlled rotational movement"
  ];

  return (
    <SlideSection id="bones" bgVariant="subtle">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnatomyImage 
          src={bonesImage}
          alt="Talus and Calcaneus bones"
          delay={0.2}
          effect="slide"
          className="aspect-square max-w-md mx-auto lg:mx-0 order-2 lg:order-1"
        />
        
        <div className="space-y-6 order-1 lg:order-2">
          <LabelTag>Slide 03</LabelTag>
          
          <AnimatedText as="h2" className="medical-heading" delay={0.1}>
            Bones Involved
          </AnimatedText>
          
          <AnimatedText as="p" className="text-lg text-muted-foreground leading-relaxed" delay={0.2}>
            The subtalar joint is formed by the articulation of two tarsal bones:
          </AnimatedText>
          
          <div className="grid gap-4 pt-4">
            <ContentCard delay={0.3}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">T</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">Talus</h3>
                  <p className="text-muted-foreground">
                    The ankle bone that connects the leg to the foot. It articulates superiorly 
                    with the tibia and fibula, and inferiorly with the calcaneus.
                  </p>
                </div>
              </div>
            </ContentCard>
            
            <ContentCard delay={0.4}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">C</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">Calcaneus</h3>
                  <p className="text-muted-foreground">
                    The heel bone, the largest tarsal bone. It bears the weight of the body 
                    and provides attachment for the Achilles tendon.
                  </p>
                </div>
              </div>
            </ContentCard>
          </div>

          {/* Extended Matter */}
          <div className="mt-4 p-4 rounded-xl bg-card border border-border/50">
            <div className="space-y-2">
              {extendedPoints.map((point, index) => (
                <AnimatedText key={index} delay={0.5 + index * 0.1}>
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    {point}
                  </p>
                </AnimatedText>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideSection>
  );
};
