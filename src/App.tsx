import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BloodDrivePage from "./pages/BloodDrivePage";
import HowItWorksPage from "./pages/HowItWorksPage";
import ForNGOsPage from "./pages/ForNGOsPage";
import AboutPage from "./pages/AboutPage";
import StartImpactPage from "./pages/StartImpactPage";
import SignInPage from "./pages/SignInPage";
import GetStartedPage from "./pages/GetStartedPage";
import RestaurantSurplusPage from "./pages/RestaurantSurplusPage";
import EmploymentCreationPage from "./pages/EmploymentCreationPage";
import SeekerDashboard from "./pages/SeekerDashboard";
import DonorDashboard from "./pages/DonorDashboard";
import NGODashboard from "./pages/NGODashboard";
import RestaurantDashboard from "./pages/RestaurantDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blood-drive" element={<BloodDrivePage />} />
          <Route path="/restaurant-surplus" element={<RestaurantSurplusPage />} />
          <Route path="/employment-creation" element={<EmploymentCreationPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/for-ngos" element={<ForNGOsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/start-impact" element={<StartImpactPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/seeker-dashboard" element={<SeekerDashboard />} />
          <Route path="/donor-dashboard" element={<DonorDashboard />} />
          <Route path="/ngo-dashboard" element={<NGODashboard />} />
          <Route path="/restaurant-dashboard" element={<RestaurantDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
