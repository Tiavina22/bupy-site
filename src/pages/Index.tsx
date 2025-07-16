import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { InstallationSection } from "@/components/InstallationSection";
import { ConfigurationSection } from "@/components/ConfigurationSection";
import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <InstallationSection />
      <ConfigurationSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
