import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Clock, Users, Briefcase } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const EmploymentCreationPage = () => {
  const employmentImages = [
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600",
    "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600",
    "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600"
  ];

  const stats = [
    { icon: Briefcase, label: "Jobs Created", value: "25" },
    { icon: Users, label: "People Employed", value: "25" },
    { icon: Clock, label: "Program Duration", value: "1 week" },
    { icon: MapPin, label: "Coverage Area", value: "Delhi NCR" }
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
                <Badge variant="secondary" className="bg-primary/20 text-primary">Employment</Badge>
                <span className="text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Delhi
                </span>
              </div>
              <h1 className="text-4xl font-bold text-foreground">Employment Creation Program</h1>
              <p className="text-xl text-muted-foreground mt-2">
                25 individuals got delivery jobs through food distribution network partnerships
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
              Employment Program Gallery
            </h2>
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {employmentImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="overflow-hidden">
                        <img 
                          src={image} 
                          alt={`Employment program ${index + 1}`}
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

          {/* Program Details */}
          <Card className="p-8 bg-gradient-card">
            <h2 className="text-2xl font-bold text-foreground mb-8">Program Milestones</h2>
            <div className="space-y-6">
              {[
                { day: "Day 1", event: "AI identified employment opportunities in food delivery network", status: "completed" },
                { day: "Day 2", event: "25 candidates selected based on location and availability", status: "completed" },
                { day: "Day 3-4", event: "Training provided for food handling and delivery protocols", status: "completed" },
                { day: "Day 5", event: "Background verification and onboarding completed", status: "completed" },
                { day: "Day 6", event: "First deliveries started with mentor support", status: "completed" },
                { day: "Day 7", event: "All 25 individuals successfully placed in jobs", status: "completed" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-primary rounded-full mt-2"></div>
                  <div className="flex-1 border-l border-border pl-6 pb-6 ml-1.5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-primary">{item.day}</span>
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

export default EmploymentCreationPage;