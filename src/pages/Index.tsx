import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatusCards from "@/components/StatusCards";
import FeaturedWork from "@/components/FeaturedWork";
import ContactCTA from "@/components/ContactCTA";
import AboutSection from "@/components/AboutSection";
import { ScrollableSection } from "@/components/utils/ScrollableSection";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

const Index = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const handelScrollToRef = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <StarField />
      <Navbar />
      <div className="relative z-10">
        <HeroSection />
        <StatusCards />
        <ScrollableSection id="about">
          <AboutSection />
        </ScrollableSection>
        <ScrollableSection id="projects">
          <FeaturedWork />
        </ScrollableSection>
        <ScrollableSection id="contact">
          <ContactCTA />
        </ScrollableSection>
        <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
          {t("footer.rights", { year: new Date().getFullYear() })}
        </footer>
      </div>
    </div>
  );
};

export default Index;
