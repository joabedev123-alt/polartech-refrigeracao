import { Suspense, lazy } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BrandsSection } from "@/components/BrandsSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

// Lazy load below-the-fold components for performance optimization
const HowItWorksSection = lazy(() => import("@/components/HowItWorksSection").then(module => ({ default: module.HowItWorksSection })));
const AreaSection = lazy(() => import("@/components/AreaSection").then(module => ({ default: module.AreaSection })));
const BenefitsSection = lazy(() => import("@/components/BenefitsSection").then(module => ({ default: module.BenefitsSection })));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection").then(module => ({ default: module.TestimonialsSection })));
const FAQSection = lazy(() => import("@/components/FAQSection").then(module => ({ default: module.FAQSection })));
const ContactSection = lazy(() => import("@/components/ContactSection").then(module => ({ default: module.ContactSection })));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <BrandsSection />

        <Suspense fallback={<div className="py-20 text-center">Carregando...</div>}>
          <HowItWorksSection />
          <AreaSection />
          <BenefitsSection />
          <TestimonialsSection />
          <FAQSection />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
