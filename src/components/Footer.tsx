import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { label: "How It Works", href: "#features" },
        { label: "For Donors", href: "#donors" },
        { label: "For NGOs", href: "#ngos" },
        { label: "For Restaurants", href: "#restaurants" }
      ]
    },
    {
      title: "AI Features",
      links: [
        { label: "Verification System", href: "#verification" },
        { label: "Smart Matching", href: "#matching" },
        { label: "Transparency", href: "#transparency" },
        { label: "Impact Tracking", href: "#impact" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#help" },
        { label: "Documentation", href: "#docs" },
        { label: "API Access", href: "#api" },
        { label: "Contact Us", href: "#contact" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" }
  ];

  return (
    <footer className="bg-gradient-dark border-t border-border">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold text-foreground">Genunity 2.0</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Where AI Builds Trust, Connects Hearts, and Creates Impact. 
              Join the revolution in humanitarian technology.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@genunity.ai</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-muted-foreground text-sm">
            © 2024 Genunity 2.0. All rights reserved. Built with ❤️ for humanity.
          </div>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:text-primary"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};