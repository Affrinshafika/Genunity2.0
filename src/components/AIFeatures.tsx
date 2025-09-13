import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Shield, Target, BarChart3, Globe, Briefcase } from "lucide-react";
import aiVerification from "@/assets/ai-verification.jpg";
import aiMatching from "@/assets/ai-matching.jpg";
import transparency from "@/assets/transparency.jpg";

export const AIFeatures = () => {
  const features = [
    {
      icon: Shield,
      title: "AI Need Detection & Verification",
      description: "Advanced verification through photo analysis, metadata cross-checking, and partner NGO validation",
      image: aiVerification,
      badge: "Fraud Detection",
      details: [
        "Cross-check metadata (location, timestamp)",
        "Partner NGO validation network",
        "Duplicate request detection",
        "Fake profile identification"
      ]
    },
    {
      icon: Target,
      title: "Smart Matching Engine",
      description: "Intelligent connections based on urgency, location proximity, and resource availability",
      image: aiMatching,
      badge: "Real-time",
      details: [
        "Blood requests → nearby donors & hospitals",
        "Restaurant surplus → NGOs before expiry",
        "Job opportunities → skill matching",
        "Emergency prioritization system"
      ]
    },
    {
      icon: BarChart3,
      title: "Transparency & Trust Layer",
      description: "Blockchain-style immutable records tracking every donation from source to impact",
      image: transparency,
      badge: "Zero Misuse",
      details: [
        "Donation tracking like receipts",
        "Real-time impact reporting",
        "Auto-generated success stories",
        "Immutable transaction records"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: Brain,
      title: "AI Storytelling",
      description: "NLP generates compelling human stories in multiple regional languages",
      features: ["30-sec video clips", "Audio stories", "Success summaries"]
    },
    {
      icon: Globe,
      title: "Inclusive Access",
      description: "Voice-enabled chatbot supporting rural users with low bandwidth",
      features: ["Voice commands", "Multi-language", "Offline capability"]
    },
    {
      icon: Briefcase,
      title: "Employment Creation",
      description: "Dual impact connecting surplus food distribution with job opportunities",
      features: ["Delivery jobs", "Food handling", "Skills training"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powered by <span className="text-primary">Advanced AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Six revolutionary AI systems working together to ensure trust, efficiency, and maximum impact
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="overflow-hidden bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {feature.badge}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {feature.features.map((feat, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {feat}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};