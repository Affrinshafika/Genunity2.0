import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Lock, Eye, EyeOff, Phone, Heart, Shield, Globe } from "lucide-react";
import { useState } from "react";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signInMethod, setSignInMethod] = useState("email");

  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Verified Requests",
      description: "AI-verified needs ensure your help reaches genuine cases"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Real Impact",
      description: "Track exactly how your contributions make a difference"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Community",
      description: "Join millions creating positive change worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-20 pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Benefits */}
            <div className="order-2 lg:order-1">
              <Badge variant="secondary" className="mb-6">Welcome Back</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Continue Your
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Impact Journey</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Sign in to access your dashboard, track your contributions, and connect with your community.
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-primary mt-1">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Sign In Form */}
            <div className="order-1 lg:order-2">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Sign In</CardTitle>
                  <p className="text-muted-foreground text-center">
                    Choose your preferred sign-in method
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  {/* Sign In Method Toggle */}
                  <div className="flex gap-2 mb-6">
                    <Button 
                      variant={signInMethod === "email" ? "default" : "outline"}
                      className="flex-1"
                      onClick={() => setSignInMethod("email")}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                    <Button 
                      variant={signInMethod === "phone" ? "default" : "outline"}
                      className="flex-1"
                      onClick={() => setSignInMethod("phone")}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Phone
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {/* Email/Phone Input */}
                    <div>
                      <Label htmlFor="credential" className="mb-2 block">
                        {signInMethod === "email" ? "Email Address" : "Phone Number"}
                      </Label>
                      <Input 
                        id="credential"
                        type={signInMethod === "email" ? "email" : "tel"}
                        placeholder={signInMethod === "email" ? "your@email.com" : "+91 9876543210"}
                        className="text-base"
                      />
                    </div>

                    {/* Password */}
                    <div>
                      <Label htmlFor="password" className="mb-2 block">Password</Label>
                      <div className="relative">
                        <Input 
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="text-base pr-10"
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

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <label htmlFor="remember" className="text-sm cursor-pointer">
                          Remember me
                        </label>
                      </div>
                      <Button variant="link" className="text-sm p-0">
                        Forgot password?
                      </Button>
                    </div>

                    {/* Sign In Button */}
                    <Button size="lg" variant="hero" className="w-full">
                      Sign In
                    </Button>

                    {/* Separator */}
                    <div className="relative">
                      <Separator />
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-background px-2 text-sm text-muted-foreground">
                          or continue with
                        </span>
                      </span>
                    </div>

                    {/* Social Sign In */}
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="w-full">
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        Google
                      </Button>
                      <Button variant="outline" className="w-full">
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        Facebook
                      </Button>
                    </div>

                    {/* Sign Up Link */}
                    <div className="text-center pt-4">
                      <p className="text-muted-foreground">
                        Don't have an account?{" "}
                        <Button variant="link" className="text-primary p-0">
                          Sign up for free
                        </Button>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SignInPage;