import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus, Utensils, Clock, MapPin, Users, TrendingUp } from "lucide-react";

const RestaurantDashboard = () => {
  const surplusItems = [
    {
      id: 1,
      item: "Vegetarian Biriyani",
      quantity: "15 portions",
      expiryTime: "2 hours",
      category: "Main Course",
      status: "available"
    },
    {
      id: 2,
      item: "Fresh Bread Rolls", 
      quantity: "25 pieces",
      expiryTime: "4 hours",
      category: "Bakery",
      status: "matched"
    },
    {
      id: 3,
      item: "Mixed Vegetable Curry",
      quantity: "20 portions", 
      expiryTime: "3 hours",
      category: "Main Course",
      status: "picked_up"
    }
  ];

  const recentPickups = [
    {
      id: 1,
      ngo: "Chennai Food Bank",
      items: "45 meal portions",
      pickedUp: "2 hours ago",
      beneficiaries: 45,
      rating: 5
    },
    {
      id: 2,
      ngo: "Helping Hands NGO",
      items: "30 bread items",
      pickedUp: "1 day ago", 
      beneficiaries: 30,
      rating: 5
    }
  ];

  const jobOpportunities = [
    {
      role: "Delivery Associate",
      applicants: 8,
      positions: 3,
      urgency: "high"
    },
    {
      role: "Food Packing Assistant",
      applicants: 12,
      positions: 2,
      urgency: "medium"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => window.location.href = '/'}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-4xl font-bold text-foreground">Restaurant Dashboard</h1>
                <p className="text-muted-foreground">Connect surplus food with NGOs and create employment</p>
              </div>
            </div>
            <Button variant="hero" size="lg">
              <Plus className="mr-2 h-5 w-5" />
              Add Surplus
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 bg-gradient-card text-center">
              <div className="text-3xl font-bold text-primary mb-2">247</div>
              <div className="text-sm text-muted-foreground">Meals Donated</div>
            </Card>
            <Card className="p-6 bg-gradient-card text-center">
              <div className="text-3xl font-bold text-primary mb-2">18</div>
              <div className="text-sm text-muted-foreground">NGO Partners</div>
            </Card>
            <Card className="p-6 bg-gradient-card text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Food Utilization</div>
            </Card>
            <Card className="p-6 bg-gradient-card text-center">
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <div className="text-sm text-muted-foreground">Jobs Created</div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Current Surplus */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">Current Surplus</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              
              {surplusItems.map((item) => (
                <Card key={item.id} className="p-6 bg-gradient-card">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">
                        {item.category}
                      </Badge>
                      <Badge 
                        variant="secondary"
                        className={`${
                          item.status === 'available' ? 'bg-green-500/20 text-green-400' :
                          item.status === 'matched' ? 'bg-orange-500/20 text-orange-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}
                      >
                        {item.status.replace('_', ' ')}
                      </Badge>
                    </div>
                    {item.status === 'available' && (
                      <Button variant="outline" size="sm">Find NGO</Button>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3">{item.item}</h3>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Utensils className="h-4 w-4" />
                        {item.quantity}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {item.expiryTime} left
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Job Opportunities & Recent Activity */}
            <div className="space-y-8">
              {/* Job Opportunities */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Employment Opportunities</h2>
                
                {jobOpportunities.map((job, index) => (
                  <Card key={index} className="p-6 bg-gradient-card">
                    <div className="flex items-start justify-between mb-4">
                      <Badge 
                        variant="secondary"
                        className={`${
                          job.urgency === 'high' ? 'bg-red-500/20 text-red-400' : 'bg-orange-500/20 text-orange-400'
                        }`}
                      >
                        {job.urgency} priority
                      </Badge>
                      <Button variant="outline" size="sm">View Applications</Button>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-3">{job.role}</h3>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{job.applicants} applicants</span>
                      <span className="font-medium text-primary">{job.positions} positions</span>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Recent Pickups */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Recent Pickups</h2>
                
                {recentPickups.map((pickup) => (
                  <Card key={pickup.id} className="p-6 bg-gradient-card">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex gap-1">
                        {[...Array(pickup.rating)].map((_, i) => (
                          <div key={i} className="w-4 h-4 bg-primary rounded-full"></div>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm">
                        <TrendingUp className="mr-2 h-4 w-4" />
                        View Impact
                      </Button>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-3">{pickup.ngo}</h3>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Utensils className="h-4 w-4" />
                        {pickup.items}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {pickup.pickedUp}
                        </span>
                        <span className="font-medium text-primary">
                          {pickup.beneficiaries} people fed
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RestaurantDashboard;