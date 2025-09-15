import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Clock, Users, Utensils } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const RestaurantSurplusPage = () => {
  const donationImages = [
    "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=600",
    "https://images.unsplash.com/photo-1606502280394-02b0e2aa9fc5?w=800&h=600", 
    "https://images.unsplash.com/photo-1605807646983-377bc5a76493?w=800&h=600",
    "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600",
    "https://images.unsplash.com/photo-1593113616828-6f22bce8d82f?w=800&h=600"
  ];

  const stats = [
    { icon: Utensils, label: "Meals Distributed", value: "1,200" },
    { icon: Users, label: "People Fed", value: "400+" },
    { icon: Clock, label: "Distribution Time", value: "4 hours" },
    { icon: MapPin, label: "Locations", value: "8 shelters" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" size="icon" onClick={() => window.history.back()}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Badge variant="secondary" className="bg-primary/20 text-primary">Food</Badge>
                <span className="text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Mumbai
                </span>
              </div>
              <h1 className="text-4xl font-bold text-foreground">Restaurant Surplus to NGO</h1>
              <p className="text-xl text-muted-foreground mt-2">
                1200 meals from 5 restaurants distributed to homeless shelters before expiry
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="p-6 bg-gradient-card text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              );
            })}
          </div>

          {/* Image Carousel */}
          <Card className="p-8 bg-gradient-card mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Food Distribution Gallery
            </h2>
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {donationImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="overflow-hidden">
                        <img 
                          src={image} 
                          alt={`Food distribution ${index + 1}`}
                          className="w-full h-[400px] object-cover"
                        />
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </Card>

          {/* Timeline */}
          <Card className="p-8 bg-gradient-card">
            <h2 className="text-2xl font-bold text-foreground mb-8">Distribution Timeline</h2>
            <div className="space-y-6">
              {[
                { time: "8:00 AM", event: "AI detected surplus food from 5 restaurants", status: "completed" },
                { time: "8:30 AM", event: "Matched with nearby NGOs and shelters", status: "completed" },
                { time: "9:00 AM", event: "Pickup teams dispatched to restaurants", status: "completed" },
                { time: "11:00 AM", event: "Food collected and quality checked", status: "completed" },
                { time: "12:00 PM", event: "Distribution began at 8 shelter locations", status: "completed" },
                { time: "4:00 PM", event: "All 1,200 meals successfully distributed", status: "completed" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-primary rounded-full mt-2"></div>
                  <div className="flex-1 border-l border-border pl-6 pb-6 ml-1.5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-primary">{item.time}</span>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                        Completed
                      </Badge>
                    </div>
                    <p className="text-foreground">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RestaurantSurplusPage;