import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Camera, Mic, MapPin, Clock, Heart, Upload, Send } from "lucide-react";
import { useState } from "react";

const StartImpactPage = () => {
  const [selectedType, setSelectedType] = useState("need");
  const [selectedCategory, setSelectedCategory] = useState("");

  const requestTypes = [
    { value: "need", label: "I Need Help", description: "Post a request for assistance" },
    { value: "offer", label: "I Want to Help", description: "Offer your resources or time" }
  ];

  const needCategories = [
    "Emergency Medical", "Food & Nutrition", "Education", "Employment", 
    "Shelter & Housing", "Emergency Relief", "Blood Donation", "Other"
  ];

  const offerCategories = [
    "Financial Donation", "Food Surplus", "Volunteer Time", "Professional Skills",
    "Medical Support", "Educational Resources", "Transportation", "Other"
  ];

  const categories = selectedType === "need" ? needCategories : offerCategories;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6">Start Making Impact</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Your Journey to
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Impact Begins Here</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you need help or want to provide it, our AI will connect you with the right people at the right time.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Create Your Request</CardTitle>
              <p className="text-muted-foreground text-center">
                AI-powered verification ensures your request reaches the right people
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-8">
                {/* Request Type Selection */}
                <div>
                  <Label className="text-lg font-semibold mb-4 block">What would you like to do?</Label>
                  <RadioGroup 
                    value={selectedType} 
                    onValueChange={setSelectedType}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {requestTypes.map((type) => (
                      <div key={type.value} className="flex items-center space-x-2">
                        <Card className={`cursor-pointer transition-all duration-300 flex-1 ${
                          selectedType === type.value ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                        }`}>
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value={type.value} id={type.value} />
                              <div>
                                <label htmlFor={type.value} className="font-semibold cursor-pointer">
                                  {type.label}
                                </label>
                                <p className="text-sm text-muted-foreground">{type.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Category Selection */}
                <div>
                  <Label className="text-lg font-semibold mb-4 block">Category</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        className="h-auto p-3 text-sm"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <div>
                  <Label htmlFor="title" className="text-lg font-semibold mb-2 block">
                    Title
                  </Label>
                  <Input 
                    id="title"
                    placeholder={selectedType === "need" ? "e.g., Urgent blood donation needed for surgery" : "e.g., Offering free tutoring for underprivileged children"}
                    className="text-lg"
                  />
                </div>

                {/* Description */}
                <div>
                  <Label htmlFor="description" className="text-lg font-semibold mb-2 block">
                    Description
                  </Label>
                  <Textarea 
                    id="description"
                    placeholder="Provide detailed information about your request. AI will verify the authenticity of your submission."
                    className="min-h-32 text-base"
                  />
                </div>

                {/* Media Upload */}
                <div>
                  <Label className="text-lg font-semibold mb-4 block">Add Photos or Voice Message</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="cursor-pointer hover:border-primary/50 transition-colors">
                      <CardContent className="p-6 text-center">
                        <Camera className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="font-semibold">Upload Photos</p>
                        <p className="text-sm text-muted-foreground">AI verifies authenticity</p>
                      </CardContent>
                    </Card>
                    <Card className="cursor-pointer hover:border-primary/50 transition-colors">
                      <CardContent className="p-6 text-center">
                        <Mic className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="font-semibold">Voice Message</p>
                        <p className="text-sm text-muted-foreground">Supports local languages</p>
                      </CardContent>
                    </Card>
                    <Card className="cursor-pointer hover:border-primary/50 transition-colors">
                      <CardContent className="p-6 text-center">
                        <Upload className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="font-semibold">Documents</p>
                        <p className="text-sm text-muted-foreground">Medical reports, certificates</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <Label htmlFor="location" className="text-lg font-semibold mb-2 block">
                    Location
                  </Label>
                  <div className="flex gap-2">
                    <Input 
                      id="location"
                      placeholder="Enter your city or area"
                      className="flex-1"
                    />
                    <Button variant="outline" className="gap-2">
                      <MapPin className="h-4 w-4" />
                      Use Current Location
                    </Button>
                  </div>
                </div>

                {/* Urgency Level */}
                <div>
                  <Label className="text-lg font-semibold mb-4 block">Urgency Level</Label>
                  <RadioGroup defaultValue="medium" className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="low" id="low" />
                      <label htmlFor="low" className="cursor-pointer">Low - Within a week</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="medium" id="medium" />
                      <label htmlFor="medium" className="cursor-pointer">Medium - Within 2 days</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="high" id="high" />
                      <label htmlFor="high" className="cursor-pointer">High - Within 24 hours</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="critical" id="critical" />
                      <label htmlFor="critical" className="cursor-pointer">Critical - Immediate</label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button size="lg" variant="hero" className="gap-2 px-8">
                    <Send className="h-5 w-5" />
                    Submit for AI Verification
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Your submission will be verified by AI and matched with relevant helpers within minutes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              AI-Powered Verification & Matching
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our advanced AI ensures your request is authentic and reaches the right people.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Instant Verification</h3>
                <p className="text-sm text-muted-foreground">
                  AI analyzes photos, location data, and content to verify authenticity in seconds.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Smart Matching</h3>
                <p className="text-sm text-muted-foreground">
                  Automatically connects you with nearby donors, volunteers, and NGOs.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Real-time Updates</h3>
                <p className="text-sm text-muted-foreground">
                  Track your request status and receive updates as help is on the way.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StartImpactPage;