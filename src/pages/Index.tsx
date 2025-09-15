import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { RoleSelection } from "@/components/RoleSelection";
import { AIFeatures } from "@/components/AIFeatures";
import { Impact } from "@/components/Impact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <RoleSelection />
      <AIFeatures />
      <div id="impact">
        <Impact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
