import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, BarChart3, MapPin, Clock, Shield, Users, Zap, Globe } from "lucide-react";

const ForNGOsPage = () => {
  const features = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "AI-Powered Analytics",
      description: "Get detailed insights into community needs, donation patterns, and impact metrics to optimize your operations."
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Smart Location Matching",
      description: "Automatically receive verified requests from your operational areas. AI prioritizes based on urgency and proximity."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Fraud Prevention",
      description: "Advanced AI verification ensures only genuine requests reach you, protecting your resources and reputation."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Real-time Coordination",
      description: "Coordinate with volunteers, track deliveries, and update donors in real-time through our integrated platform."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Volunteer Management",
      description: "Efficiently assign volunteers to verified needs and track their activities with comprehensive dashboards."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Multi-language Support",
      description: "Serve diverse communities with support for Hindi, Tamil, Bengali and other regional languages."
    }
  ];

  const benefits = [
    {
      stat: "70%",
      description: "Reduction in verification time",
      detail: "AI auto-verifies requests in seconds"
    },
    {
      stat: "3x",
      description: "Faster response times",
      detail: "Smart matching reduces coordination delays"
    },
    {
      stat: "95%",
      description: "Fraud detection accuracy",
      detail: "Advanced AI prevents misuse of resources"
    },
    {
      stat: "24/7",
      description: "Continuous monitoring",
      detail: "Round-the-clock need detection and alerts"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6">For NGOs</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Supercharge Your NGO with
            <span className="bg-gradient-primary bg-clip-text text-transparent"> AI Intelligence</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transform how you identify, verify, and respond to community needs. Let AI handle the complex matching while you focus on creating impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero" className="gap-2">
              <Building2 className="h-5 w-5" />
              Register Your NGO
            </Button>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Proven Results for NGOs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {benefit.stat}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {benefit.description}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Everything Your NGO Needs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools designed specifically for NGOs to maximize impact and efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <div className="text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NGO Dashboard Preview */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Your NGO Dashboard
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Monitor operations, track impact, and coordinate resources from a single powerful interface.
            </p>
          </div>
          
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">247</div>
                  <p className="text-sm text-muted-foreground">Active Requests</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">156</div>
                  <p className="text-sm text-muted-foreground">Volunteers Deployed</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">89%</div>
                  <p className="text-sm text-muted-foreground">Response Rate</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="hero" className="gap-2">
                  <Zap className="h-4 w-4" />
                  View Full Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Transform Your NGO Operations?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join leading NGOs who are already using AI to create more impact with less effort.
          </p>
          <Button size="lg" variant="hero" className="gap-2">
            <Building2 className="h-5 w-5" />
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForNGOsPage;