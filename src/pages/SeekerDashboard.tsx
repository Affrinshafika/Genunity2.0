import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus, Camera, Mic, MapPin, Clock } from "lucide-react";

const SeekerDashboard = () => {
  const myRequests = [
    {
      id: 1,
      type: "Medical",
      title: "Blood Donation Required",
      status: "active",
      urgency: "high",
      location: "Apollo Hospital, Chennai",
      timeAgo: "2 hours ago",
      responses: 8
    },
    {
      id: 2,
      type: "Food",
      title: "Food for Family of 4",
      status: "fulfilled",
      urgency: "medium",
      location: "T Nagar, Chennai",
      timeAgo: "1 day ago",
      responses: 3
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
                <h1 className="text-4xl font-bold text-foreground">My Requests</h1>
                <p className="text-muted-foreground">Manage your help requests and track responses</p>
              </div>
            </div>
            <Button variant="hero" size="lg">
              <Plus className="mr-2 h-5 w-5" />
              New Request
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-gradient-card hover:shadow-elevated transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Photo Request</h3>
                  <p className="text-sm text-muted-foreground">Upload image with details</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card hover:shadow-elevated transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mic className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Voice Request</h3>
                  <p className="text-sm text-muted-foreground">Record in local language</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card hover:shadow-elevated transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Emergency</h3>
                  <p className="text-sm text-muted-foreground">Urgent help needed</p>
                </div>
              </div>
            </Card>
          </div>

          {/* My Requests */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Your Requests</h2>
            
            {myRequests.map((request) => (
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
                      className={`${
                        request.urgency === 'high' ? 'bg-red-500/20 text-red-400' : 'bg-orange-500/20 text-orange-400'
                      }`}
                    >
                      {request.urgency} priority
                    </Badge>
                    <Badge 
                      variant="secondary"
                      className={`${
                        request.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                      }`}
                    >
                      {request.status}
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">{request.title}</h3>
                
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
                  <span className="font-medium text-primary">{request.responses} responses</span>
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

export default SeekerDashboard;