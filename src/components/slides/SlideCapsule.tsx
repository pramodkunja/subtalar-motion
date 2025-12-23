import { SlideSection } from "@/components/presentation/SlideSection";
import { AnimatedText } from "@/components/presentation/AnimatedText";
import { AnatomyImage } from "@/components/presentation/AnatomyImage";
import { LabelTag } from "@/components/presentation/LabelTag";
import capsuleImage from "@/assets/joint-capsule.jpg";

export const SlideCapsule = () => {
  return (
    <SlideSection id="capsule">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <LabelTag>Slide 06</LabelTag>
          
          <AnimatedText as="h2" className="medical-heading" delay={0.1}>
            Joint Capsule
          </AnimatedText>
          
          <AnimatedText as="p" className="text-lg text-muted-foreground leading-relaxed" delay={0.2}>
            The subtalar joint is enclosed by a <span className="text-accent font-semibold">thin fibrous capsule</span> that 
            is attached to the margins of the articular surfaces.
          </AnimatedText>
          
          <div className="grid gap-4 pt-4">
            <AnimatedText delay={0.3}>
              <div className="p-5 rounded-xl bg-gradient-to-br from-card to-muted/30 border border-border/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-foreground">Fibrous Layer</h4>
                </div>
                <p className="text-muted-foreground text-sm pl-13">
                  Outer layer made of dense connective tissue providing structural support
                </p>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={0.4}>
              <div className="p-5 rounded-xl bg-gradient-to-br from-card to-muted/30 border border-border/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-foreground">Synovial Membrane</h4>
                </div>
                <p className="text-muted-foreground text-sm pl-13">
                  Inner lining that secretes synovial fluid for joint lubrication and cartilage nutrition
                </p>
              </div>
            </AnimatedText>
          </div>
        </div>
        
        <AnatomyImage 
          src={capsuleImage}
          alt="Transparent joint capsule illustration"
          delay={0.3}
          effect="zoom"
          className="aspect-square max-w-md mx-auto lg:mx-0"
        />
      </div>
    </SlideSection>
  );
};
