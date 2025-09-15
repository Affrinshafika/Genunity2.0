import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, MapPin, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Impact = () => {
  const navigate = useNavigate();
  const stats = [
    {
      icon: Users,
      number: "500K+",
      label: "Lives Impacted",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Verification Accuracy",
      color: "text-primary"
    },
    {
      icon: Clock,
      number: "2.3hrs",
      label: "Average Response Time",
      color: "text-primary"
    },
    {
      icon: MapPin,
      number: "120+",
      label: "Cities Connected",
      color: "text-primary"
    }
  ];

  const impactStories = [
    {
      title: "Emergency Blood Drive",
      location: "Chennai",
      description: "AI matched blood request to 15 donors within 30 minutes, saving a critical patient",
      impact: "1 Life Saved",
      time: "30 min response",
      badge: "Medical"
    },
    {
      title: "Restaurant Surplus to NGO",
      location: "Mumbai", 
      description: "1200 meals from 5 restaurants distributed to homeless shelters before expiry",
      impact: "1200 Meals",
      time: "Same day",
      badge: "Food"
    },
    {
      title: "Employment Creation",
      location: "Delhi",
      description: "25 individuals got delivery jobs through food distribution network partnerships",
      impact: "25 Jobs Created",
      time: "1 week program",
      badge: "Employment"
    }
  ];

  return (
    <section className="py-20 bg-background-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Real <span className="text-primary">Impact</span> Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent tracking shows the true power of AI-driven humanitarian action
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6 text-center bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Impact Stories */}
        <div className="space-y-4 mb-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Recent Success Stories</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactStories.map((story, index) => (
              <Card 
                key={index} 
                className="p-6 bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer hover:scale-105"
                onClick={() => {
                  if (index === 0) navigate('/blood-drive');
                  else if (index === 1) navigate('/restaurant-surplus');
                  else if (index === 2) navigate('/employment-creation');
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="text-xs bg-primary/20 text-primary">
                    {story.badge}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{story.location}</span>
                </div>
                
                <h4 className="text-lg font-semibold text-foreground mb-3">{story.title}</h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">{story.description}</p>
                
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div className="text-sm">
                    <div className="font-semibold text-primary">{story.impact}</div>
                    <div className="text-muted-foreground">{story.time}</div>
                  </div>
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};