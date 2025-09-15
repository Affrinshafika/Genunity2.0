import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Upload, Brain, Users, Eye, Heart } from "lucide-react";

const HowItWorksPage = () => {
  const steps = [
    {
      number: "01",
      title: "Post Your Need",
      description: "Upload photos, describe your situation in text or voice using local languages. Our AI verifies authenticity instantly.",
      icon: <Upload className="h-8 w-8" />,
      features: ["Photo verification", "Voice recognition", "Multi-language support"]
    },
    {
      number: "02", 
      title: "AI Verification",
      description: "Advanced AI checks location metadata, timestamps, and cross-references with partner NGOs to ensure genuine requests.",
      icon: <Brain className="h-8 w-8" />,
      features: ["Fraud detection", "Metadata analysis", "NGO validation"]
    },
    {
      number: "03",
      title: "Smart Matching",
      description: "AI connects you with nearby donors, NGOs, volunteers, or restaurants based on urgency and proximity.",
      icon: <Users className="h-8 w-8" />,
      features: ["Location-based matching", "Urgency prioritization", "Multi-stakeholder connection"]
    },
    {
      number: "04",
      title: "Real-time Tracking",
      description: "Track your help in real-time with transparent updates. Donors see exactly how their contribution made an impact.",
      icon: <Eye className="h-8 w-8" />,
      features: ["Live tracking", "Impact reports", "Transparent receipts"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6">How It Works</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            AI-Powered Trust in
            <span className="bg-gradient-primary bg-clip-text text-transparent"> 4 Simple Steps</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From posting a need to receiving help - our AI ensures every step is transparent, verified, and impactful.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex items-center gap-4 min-w-fit">
                      <div className="text-6xl font-bold text-primary/20">
                        {step.number}
                      </div>
                      <div className="text-primary">
                        {step.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-lg">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-primary">
                            <CheckCircle className="h-4 w-4" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already creating positive change in their communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero" className="gap-2">
              <Heart className="h-5 w-5" />
              Start Making Impact
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo Video
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;