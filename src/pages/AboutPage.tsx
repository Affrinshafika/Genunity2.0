import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Users, Globe, Target, Award, Lightbulb } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Compassion First",
      description: "Every feature we build is designed with empathy and understanding for those in need."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Universal Access",
      description: "Technology should bridge gaps, not create them. We ensure our platform works for everyone."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Impact Focus", 
      description: "We measure success not in downloads, but in lives changed and communities strengthened."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation for Good",
      description: "We harness cutting-edge AI not for profit, but for creating a more equitable world."
    }
  ];

  const teamStats = [
    { number: "50+", label: "AI Engineers" },
    { number: "200+", label: "NGO Partners" }, 
    { number: "15", label: "Countries" },
    { number: "24/7", label: "Support" }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Genunity 1.0 Launch",
      description: "Initial platform connecting donors with verified needs in 3 cities."
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Advanced verification and matching algorithms reduce fraud by 95%."
    },
    {
      year: "2024",
      title: "Regional Expansion", 
      description: "Multi-language support enables operations across 15 countries."
    },
    {
      year: "2025",
      title: "Genunity 2.0",
      description: "Complete AI overhaul with real-time matching and blockchain transparency."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6">About Us</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Building Trust Through
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Technology</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe technology should serve humanity's greatest needs. Genunity 2.0 uses AI to create transparent, efficient connections between those who need help and those ready to give it.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                To eliminate barriers between generosity and genuine need by creating the world's most trusted platform for social impact.
              </p>
              <p className="text-muted-foreground mb-8">
                Every day, millions of people want to help others but don't know how to ensure their contributions make a real difference. Meanwhile, countless genuine needs go unmet due to lack of visibility and trust. We're changing that.
              </p>
              <Button variant="hero" className="gap-2">
                <Users className="h-5 w-5" />
                Join Our Mission
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {teamStats.map((stat, index) => (
                <Card key={index} className="text-center bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every feature we build.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <div className="text-primary mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From a simple idea to a global platform transforming how people help each other.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                  {index !== milestones.length - 1 && (
                    <div className="w-0.5 h-16 bg-primary/30 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{milestone.year}</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">UN Tech for Good</h3>
                <p className="text-sm text-muted-foreground">2024 Innovation Award</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">MIT Solve</h3>
                <p className="text-sm text-muted-foreground">Global Finalist 2024</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Forbes 30 Under 30</h3>
                <p className="text-sm text-muted-foreground">Social Impact 2024</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Be Part of Something Bigger
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in building a world where technology serves humanity's greatest aspirations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero" className="gap-2">
              <Heart className="h-5 w-5" />
              Start Making Impact
            </Button>
            <Button size="lg" variant="outline">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;