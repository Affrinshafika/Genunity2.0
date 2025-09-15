import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart, MapPin, Clock, TrendingUp } from "lucide-react";

const DonorDashboard = () => {
  const nearbyNeeds = [
    {
      id: 1,
      type: "Medical",
      title: "O+ Blood Required Urgently",
      location: "2.3 km away",
      urgency: "high",
      timeLeft: "4 hours left",
      verified: true
    },
    {
      id: 2,
      type: "Food", 
      title: "Meals for Homeless Shelter",
      location: "1.8 km away",
      urgency: "medium",
      timeLeft: "Today",
      verified: true
    },
    {
      id: 3,
      type: "Education",
      title: "Books for Rural School",
      location: "5.2 km away", 
      urgency: "low",
      timeLeft: "This week",
      verified: true
    }
  ];

  const myImpact = {
    totalDonations: 12,
    livesImpacted: 47,
    thisMonth: 3,
    trustScore: 98
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" size="icon" onClick={() => window.location.href = '/'}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-4xl font-bold text-foreground">Donor Dashboard</h1>
              <p className="text-muted-foreground">Find verified needs and track your impact</p>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 bg-gradient-card text-center">
              <div className="text-3xl font-bold text-primary mb-2">{myImpact.totalDonations}</div>
              <div className="text-sm text-muted-foreground">Total Donations</div>
            </Card>
            <Card className="p-6 bg-gradient-card text-center">
              <div className="text-3xl font-bold text-primary mb-2">{myImpact.livesImpacted}</div>
              <div className="text-sm text-muted-foreground">Lives Impacted</div>
            </Card>
            <Card className="p-6 bg-gradient-card text-center">
              <div className="text-3xl font-bold text-primary mb-2">{myImpact.thisMonth}</div>
              <div className="text-sm text-muted-foreground">This Month</div>
            </Card>
            <Card className="p-6 bg-gradient-card text-center">
              <div className="text-3xl font-bold text-primary mb-2">{myImpact.trustScore}%</div>
              <div className="text-sm text-muted-foreground">Trust Score</div>
            </Card>
          </div>

          {/* Nearby Verified Needs */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Nearby Verified Needs</h2>
              <Button variant="outline">View All</Button>
            </div>
            
            {nearbyNeeds.map((need) => (
              <Card key={need.id} className="p-6 bg-gradient-card hover:shadow-elevated transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Badge 
                      variant="secondary" 
                      className={`${
                        need.type === 'Medical' ? 'bg-red-500/20 text-red-400' : 
                        need.type === 'Food' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-green-500/20 text-green-400'
                      }`}
                    >
                      {need.type}
                    </Badge>
                    <Badge 
                      variant="secondary"
                      className={`${
                        need.urgency === 'high' ? 'bg-red-500/20 text-red-400' : 
                        need.urgency === 'medium' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}
                    >
                      {need.urgency} priority
                    </Badge>
                    {need.verified && (
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                        AI Verified
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">View Details</Button>
                    <Button variant="hero" size="sm">
                      <Heart className="mr-2 h-4 w-4" />
                      Help Now
                    </Button>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">{need.title}</h3>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {need.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {need.timeLeft}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-primary">
                    <TrendingUp className="h-4 w-4" />
                    View Impact
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DonorDashboard;