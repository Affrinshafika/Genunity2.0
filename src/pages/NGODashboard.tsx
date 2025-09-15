import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, CheckCircle, Clock, MapPin, BarChart3 } from "lucide-react";

const NGODashboard = () => {
  const pendingVerifications = [
    {
      id: 1,
      type: "Food",
      title: "Family needs groceries",
      location: "Anna Nagar, Chennai",
      timeAgo: "15 min ago",
      priority: "medium",
      aiScore: 94
    },
    {
      id: 2,
      type: "Medical",
      title: "Medicine for elderly",
      location: "T Nagar, Chennai", 
      timeAgo: "32 min ago",
      priority: "high",
      aiScore: 87
    }
  ];

  const activeDistributions = [
    {
      id: 1,
      title: "Food Distribution Drive",
      location: "Multiple locations",
      volunteers: 8,
      beneficiaries: 150,
      status: "ongoing"
    },
    {
      id: 2,
      title: "Medical Camp Setup",
      location: "Egmore",
      volunteers: 12,
      beneficiaries: 200,
      status: "preparing"
    }
  ];

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
              <h1 className="text-4xl font-bold text-foreground">NGO Dashboard</h1>
              <p className="text-muted-foreground">Manage distributions, verify needs, coordinate aid</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 bg-gradient-card text-center">
              <div className="text-3xl font-bold text-primary mb-2">42</div>
              <div className="text-sm text-muted-foreground">Pending Verifications</div>
            </Card>
            <Card className="p-6 bg-gradient-card text-center">
              <div className="text-3xl font-bold text-primary mb-2">28</div>
              <div className="text-sm text-muted-foreground">Active Volunteers</div>
            </Card>
            <Card className="p-6 bg-gradient-card text-center">
              <div className="text-3xl font-bold text-primary mb-2">156</div>
              <div className="text-sm text-muted-foreground">This Week's Impact</div>
            </Card>
            <Card className="p-6 bg-gradient-card text-center">
              <div className="text-3xl font-bold text-primary mb-2">97%</div>
              <div className="text-sm text-muted-foreground">Verification Accuracy</div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pending Verifications */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">AI Suggested Verifications</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              
              {pendingVerifications.map((request) => (
                <Card key={request.id} className="p-6 bg-gradient-card">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Badge 
                        variant="secondary" 
                        className={`${
                          request.type === 'Medical' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'
                        }`}
                      >
                        {request.type}
                      </Badge>
                      <Badge 
                        variant="secondary"
                        className="bg-primary/20 text-primary"
                      >
                        AI Score: {request.aiScore}%
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Verify
                      </Button>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3">{request.title}</h3>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {request.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {request.timeAgo}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Active Distributions */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">Active Distributions</h2>
                <Button variant="hero" size="sm">Create New</Button>
              </div>
              
              {activeDistributions.map((distribution) => (
                <Card key={distribution.id} className="p-6 bg-gradient-card">
                  <div className="flex items-start justify-between mb-4">
                    <Badge 
                      variant="secondary"
                      className={`${
                        distribution.status === 'ongoing' ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'
                      }`}
                    >
                      {distribution.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3">{distribution.title}</h3>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {distribution.location}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {distribution.volunteers} volunteers
                      </span>
                      <span className="font-medium text-primary">
                        {distribution.beneficiaries} beneficiaries
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NGODashboard;