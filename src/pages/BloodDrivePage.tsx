import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowLeft, Clock, MapPin, Users, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BloodDrivePage = () => {
  const navigate = useNavigate();

  const donationImages = [
    {
      src: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=800&h=600&fit=crop",
      alt: "Blood donation drive in progress",
      caption: "Community members donating blood during the emergency drive"
    },
    {
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop", 
      alt: "Medical staff collecting blood",
      caption: "Trained medical professionals ensuring safe collection"
    },
    {
      src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop",
      alt: "Blood bags ready for transport",
      caption: "Collected blood units ready for immediate transport to hospital"
    },
    {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      alt: "Volunteers coordinating donations",
      caption: "AI-matched volunteers coordinating the emergency response"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-card border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/')}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </div>
          
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="bg-primary/20 text-primary">
                  Medical Emergency
                </Badge>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  Chennai
                </span>
              </div>
              
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Emergency Blood Drive Success Story
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                AI matched blood request to 15 donors within 30 minutes, saving a critical patient's life
              </p>
            </div>
            
            <div className="bg-primary/10 p-4 rounded-lg">
              <Heart className="h-8 w-8 text-primary mb-2" />
              <div className="text-sm text-muted-foreground">Impact</div>
              <div className="text-lg font-bold text-primary">1 Life Saved</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-gradient-card">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">30 min</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-gradient-card">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">15</div>
                <div className="text-sm text-muted-foreground">Donors Matched</div>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-gradient-card">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">O-</div>
                <div className="text-sm text-muted-foreground">Blood Type Needed</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Carousel */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Emergency Response in Action
          </h2>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {donationImages.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden">
                    <div className="aspect-video relative">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                        <p className="text-foreground font-medium">{image.caption}</p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Story Details */}
        <Card className="p-8 bg-gradient-card">
          <h3 className="text-xl font-bold text-foreground mb-4">How AI Made the Difference</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              At 2:30 AM, a critical patient in Apollo Hospital Chennai required immediate O-negative blood transfusion. 
              The hospital's blood bank was running low, and traditional methods would have taken hours to coordinate.
            </p>
            <p>
              Within seconds of the request being posted on Genunity 2.0, our AI verification system confirmed the 
              authenticity through hospital partner APIs and medical record cross-referencing.
            </p>
            <p>
              The AI matching engine instantly identified 23 registered O-negative donors within a 10km radius, 
              prioritized by proximity and availability. Push notifications were sent, and 15 donors responded 
              within 15 minutes.
            </p>
            <p className="text-primary font-medium">
              Result: The patient received the required blood transfusion within 30 minutes, making a full recovery. 
              This success story demonstrates the life-saving potential of AI-driven humanitarian coordination.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BloodDrivePage;