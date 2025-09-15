import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Building2, UtensilsCrossed, HandHeart } from "lucide-react";

export const RoleSelection = () => {
  const roles = [
    {
      icon: HandHeart,
      title: "I Need Help",
      description: "Post verified requests for food, medical aid, or employment",
      color: "text-primary",
      action: "Post Request"
    },
    {
      icon: Heart,
      title: "I Want to Donate",
      description: "Connect with verified needs and track your impact",
      color: "text-primary",
      action: "Find Needs"
    },
    {
      icon: Building2,
      title: "NGO/Volunteer",
      description: "Manage distributions, verify needs, coordinate aid",
      color: "text-primary",
      action: "Manage Aid"
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurant Partner",
      description: "Connect surplus food with NGOs and create employment",
      color: "text-primary",
      action: "Connect Surplus"
    }
  ];

  return (
    <section className="py-20 bg-background-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your <span className="text-primary">Role</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our AI-powered ecosystem of trust and impact. Every role creates meaningful change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <Card 
                key={index} 
                className="p-8 bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer group hover:scale-[1.02]"
                onClick={() => {
                  if (index === 0) window.location.href = '/seeker-dashboard';
                  else if (index === 1) window.location.href = '/donor-dashboard';
                  else if (index === 2) window.location.href = '/ngo-dashboard';
                  else if (index === 3) window.location.href = '/restaurant-dashboard';
                }}
              >
                <div className="text-center space-y-6">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className={`h-8 w-8 ${role.color}`} />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">{role.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{role.description}</p>
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    {role.action}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};