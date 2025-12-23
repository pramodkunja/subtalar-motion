import { SlideSection } from "@/components/presentation/SlideSection";
import { AnimatedText } from "@/components/presentation/AnimatedText";
import { AnatomyImage } from "@/components/presentation/AnatomyImage";
import { LabelTag } from "@/components/presentation/LabelTag";
import skeletonImage from "@/assets/skeleton-foot-glow.jpg";

export const SlideIntroduction = () => {
  return (
    <SlideSection id="introduction">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <LabelTag>Slide 02</LabelTag>
          
          <AnimatedText as="h2" className="medical-heading" delay={0.1}>
            Introduction
          </AnimatedText>
          
          <AnimatedText as="p" className="text-lg text-muted-foreground leading-relaxed" delay={0.2}>
            The <span className="text-accent font-semibold">subtalar joint</span> (talocalcaneal joint) 
            is a synovial joint connecting the talus and calcaneus bones of the foot.
          </AnimatedText>
          
          <AnimatedText as="p" className="text-lg text-muted-foreground leading-relaxed" delay={0.3}>
            It plays a <span className="text-primary font-medium">critical role</span> in:
          </AnimatedText>
          
          <div className="space-y-3 pt-2">
            <AnimatedText delay={0.4}>
              <div className="flex items-center gap-3 text-foreground">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Maintaining posture and balance
              </div>
            </AnimatedText>
            <AnimatedText delay={0.5}>
              <div className="flex items-center gap-3 text-foreground">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Adapting foot to uneven terrain
              </div>
            </AnimatedText>
            <AnimatedText delay={0.6}>
              <div className="flex items-center gap-3 text-foreground">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Efficient gait mechanics
              </div>
            </AnimatedText>
          </div>
        </div>
        
        <AnatomyImage 
          src={skeletonImage}
          alt="Skeleton foot with highlighted subtalar joint"
          delay={0.3}
          effect="zoom"
          className="aspect-square max-w-md mx-auto lg:mx-0"
        />
      </div>
    </SlideSection>
  );
};
