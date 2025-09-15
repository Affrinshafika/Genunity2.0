import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { User, Mail, Phone, MapPin, Heart, Users, Building2, Utensils, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const GetStartedPage = () => {
  const [userType, setUserType] = useState("individual");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const userTypes = [
    {
      value: "individual",
      label: "Individual Helper",
      description: "I want to help people in need",
      icon: <Heart className="h-8 w-8" />
    },
    {
      value: "seeker",
      label: "Need Help",
      description: "I need assistance or support",
      icon: <User className="h-8 w-8" />
    },
    {
      value: "ngo",
      label: "NGO/Organization",
      description: "I represent an NGO or organization",
      icon: <Building2 className="h-8 w-8" />
    },
    {
      value: "restaurant",
      label: "Restaurant Partner",
      description: "I want to donate surplus food",
      icon: <Utensils className="h-8 w-8" />
    }
  ];

  const onboardingSteps = [
    {
      step: "01",
      title: "Create Account",
      description: "Sign up with your details"
    },
    {
      step: "02", 
      title: "Verify Identity",
      description: "AI verification for trust"
    },
    {
      step: "03",
      title: "Start Connecting",
      description: "Begin making impact"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6">Get Started</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Join the
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Impact Revolution</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Create your account in minutes and start connecting with people who can help or people you can help.
          </p>
          
          {/* Onboarding Steps */}
          <div className="flex justify-center items-center gap-4 md:gap-8 mb-12">
            {onboardingSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mb-2">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-sm">{step.title}</h3>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
                {index < onboardingSteps.length - 1 && (
                  <div className="hidden md:block w-16 h-0.5 bg-primary/30 mt-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Create Your Account</CardTitle>
              <p className="text-muted-foreground text-center">
                Join thousands making a difference in their communities
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-8">
                {/* User Type Selection */}
                <div>
                  <Label className="text-lg font-semibold mb-6 block">I am a...</Label>
                  <RadioGroup 
                    value={userType} 
                    onValueChange={setUserType}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {userTypes.map((type) => (
                      <div key={type.value} className="flex items-center space-x-2">
                        <Card className={`cursor-pointer transition-all duration-300 flex-1 ${
                          userType === type.value ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                        }`}>
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value={type.value} id={type.value} />
                              <div className="text-primary">
                                {type.icon}
                              </div>
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

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="mb-2 block">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="mb-2 block">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="mb-2 block">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="mb-2 block">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 9876543210" />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <Label htmlFor="location" className="mb-2 block">Location</Label>
                  <div className="flex gap-2">
                    <Input 
                      id="location"
                      placeholder="City, State, Country"
                      className="flex-1"
                    />
                    <Button variant="outline" className="gap-2">
                      <MapPin className="h-4 w-4" />
                      Detect
                    </Button>
                  </div>
                </div>

                {/* Organization Details (conditional) */}
                {(userType === "ngo" || userType === "restaurant") && (
                  <>
                    <Separator />
                    <div>
                      <Label htmlFor="orgName" className="mb-2 block">
                        {userType === "ngo" ? "Organization Name" : "Restaurant Name"}
                      </Label>
                      <Input 
                        id="orgName" 
                        placeholder={userType === "ngo" ? "Enter your organization name" : "Enter your restaurant name"} 
                      />
                    </div>
                    <div>
                      <Label htmlFor="orgDescription" className="mb-2 block">Description</Label>
                      <Textarea 
                        id="orgDescription"
                        placeholder={userType === "ngo" ? "Brief description of your NGO's mission and activities" : "Brief description of your restaurant and food donation capacity"}
                        className="min-h-24"
                      />
                    </div>
                  </>
                )}

                {/* Password */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="password" className="mb-2 block">Password</Label>
                    <div className="relative">
                      <Input 
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        className="pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword" className="mb-2 block">Confirm Password</Label>
                    <div className="relative">
                      <Input 
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" className="mt-1" />
                    <label htmlFor="terms" className="text-sm cursor-pointer">
                      I agree to the{" "}
                      <Button variant="link" className="text-primary p-0 h-auto">
                        Terms of Service
                      </Button>{" "}
                      and{" "}
                      <Button variant="link" className="text-primary p-0 h-auto">
                        Privacy Policy
                      </Button>
                    </label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="newsletter" className="mt-1" />
                    <label htmlFor="newsletter" className="text-sm cursor-pointer">
                      I want to receive updates about impact stories and platform news
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button size="lg" variant="hero" className="gap-2 px-8">
                    <Users className="h-5 w-5" />
                    Create My Account
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    By creating an account, you'll undergo AI verification to ensure platform trust and safety.
                  </p>
                </div>

                {/* Sign In Link */}
                <div className="text-center pt-4">
                  <p className="text-muted-foreground">
                    Already have an account?{" "}
                    <Button variant="link" className="text-primary p-0">
                      Sign in here
                    </Button>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Your Trust & Security Matter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">AI Verification</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced AI ensures all users and requests are authentic
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">NGO Partnerships</h3>
                <p className="text-sm text-muted-foreground">
                  Verified NGO network adds an extra layer of trust
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Transparent Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Every action is tracked and verified for complete transparency
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

export default GetStartedPage;