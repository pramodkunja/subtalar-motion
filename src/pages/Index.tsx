import { useEffect, useState } from "react";
import { SlideHero } from "@/components/slides/SlideHero";
import { SlideIntroduction } from "@/components/slides/SlideIntroduction";
import { SlideBones } from "@/components/slides/SlideBones";
import { SlideJointType } from "@/components/slides/SlideJointType";
import { SlideFacets } from "@/components/slides/SlideFacets";
import { SlideCapsule } from "@/components/slides/SlideCapsule";
import { SlideLigaments } from "@/components/slides/SlideLigaments";
import { SlideSinusTarsi } from "@/components/slides/SlideSinusTarsi";
import { SlideAxis } from "@/components/slides/SlideAxis";
import { SlideMovements } from "@/components/slides/SlideMovements";
import { SlideGait } from "@/components/slides/SlideGait";
import { SlideMuscles } from "@/components/slides/SlideMuscles";
import { SlideBloodNerve } from "@/components/slides/SlideBloodNerve";
import { SlideClinical } from "@/components/slides/SlideClinical";
import { SlideTalocalcaneoNavicular } from "@/components/slides/SlideTalocalcaneoNavicular";
import { SlideSummary } from "@/components/slides/SlideSummary";
import { NavigationDots } from "@/components/presentation/NavigationDots";

const slideIds = [
  "hero", "introduction", "bones", "joint-type", "facets",
  "capsule", "ligaments", "sinus-tarsi", "axis", "movements",
  "gait", "muscles", "blood-nerve", "clinical", "talocalcaneo-navicular", "summary"
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = slideIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(slideIds[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSlide(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    const element = document.getElementById(slideIds[index]);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative">
      <NavigationDots 
        totalSlides={slideIds.length} 
        currentSlide={currentSlide}
        onSlideClick={scrollToSlide}
      />
      
      <div id="hero">
        <SlideHero />
      </div>
      <SlideIntroduction />
      <SlideBones />
      <SlideJointType />
      <SlideFacets />
      <SlideCapsule />
      <SlideLigaments />
      <SlideSinusTarsi />
      <SlideAxis />
      <SlideMovements />
      <SlideGait />
      <SlideMuscles />
      <SlideBloodNerve />
      <SlideClinical />
      <SlideTalocalcaneoNavicular />
      <SlideSummary />
      
      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground text-center">
        <p className="text-sm opacity-70">
          Subtalar Joint — Medical Education Presentation
        </p>
        <p className="text-xs opacity-50 mt-2">
          Anatomy • Movements • Clinical Significance
        </p>
      </footer>
    </main>
  );
};

export default Index;
