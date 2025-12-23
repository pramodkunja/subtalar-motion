import { SlideSection } from "@/components/presentation/SlideSection";
import { AnimatedText } from "@/components/presentation/AnimatedText";
import { AnatomyImage } from "@/components/presentation/AnatomyImage";
import { LabelTag } from "@/components/presentation/LabelTag";
import jointImage from "@/assets/joint-crosssection.jpg";

export const SlideJointType = () => {
  return (
    <SlideSection id="joint-type">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <LabelTag>Slide 04</LabelTag>
          
          <AnimatedText as="h2" className="medical-heading" delay={0.1}>
            Type of Joint
          </AnimatedText>
          
          <AnimatedText as="p" className="text-lg text-muted-foreground leading-relaxed" delay={0.2}>
            The subtalar joint is classified as a <span className="text-accent font-semibold">plane synovial joint</span> 
            (also called arthrodial or gliding joint).
          </AnimatedText>
          
          <div className="space-y-4 pt-4">
            <AnimatedText delay={0.3}>
              <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
                <h4 className="font-semibold text-foreground mb-2">Synovial Characteristics</h4>
                <p className="text-muted-foreground text-sm">
                  Contains synovial fluid for lubrication and nutrition of articular cartilage
                </p>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={0.4}>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                <h4 className="font-semibold text-foreground mb-2">Movement Type</h4>
                <p className="text-muted-foreground text-sm">
                  Allows rotational gliding movements — primarily inversion and eversion
                </p>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={0.5}>
              <div className="p-4 rounded-xl bg-muted border border-border">
                <h4 className="font-semibold text-foreground mb-2">Articular Surfaces</h4>
                <p className="text-muted-foreground text-sm">
                  Flat or slightly curved surfaces covered with hyaline cartilage
                </p>
              </div>
            </AnimatedText>
          </div>
        </div>
        
        <AnatomyImage 
          src={jointImage}
          alt="Cross-section of subtalar joint showing synovial structure"
          delay={0.3}
          effect="zoom"
          className="aspect-square max-w-md mx-auto lg:mx-0"
        />
      </div>
    </SlideSection>
  );
};
