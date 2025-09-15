import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              <span className="text-primary">Genunity 2.0</span>
              <br />
              Where AI Builds Trust
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              AI-driven platform connecting hearts, verifying needs, and creating transparent impact. 
              Millions in need meet timely help through intelligent matching and trust.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" onClick={() => window.location.href = '/start-impact'}>
              Start Making Impact
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4" onClick={() => window.location.href = '/how-it-works'}>
              See How It Works
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="p-6 bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
              <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">AI Verification</h3>
              <p className="text-muted-foreground">Every request verified through advanced AI fraud detection</p>
            </Card>
            
            <Card className="p-6 bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Smart Matching</h3>
              <p className="text-muted-foreground">Intelligent connections based on proximity and urgency</p>
            </Card>
            
            <Card className="p-6 bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
              <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Real-time Impact</h3>
              <p className="text-muted-foreground">Transparent tracking from donation to delivery</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow-pulse delay-1000" />
    </section>
  );
};