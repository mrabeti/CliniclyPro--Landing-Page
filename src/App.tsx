import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { InfoSection } from "./components/InfoSection";
import { ProductShowcase } from "./components/ProductShowcase";
import { Testimonial } from "./components/Testimonial";
import { Pricing } from "./components/Pricing";
import { StatsSection } from "./components/StatsSection";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <InfoSection />
      <ProductShowcase />
      <Testimonial />
      <Pricing />
      <StatsSection />
      <Footer />
      <Toaster />
    </div>
  );
}