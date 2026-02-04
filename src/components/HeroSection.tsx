import { Shield, Wrench, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/constants";
import heroImage from "@/assets/hero-technician.jpeg";

// Force refresh
const badges = [
  { icon: Shield, text: "Garantia" },
  { icon: Wrench, text: "Técnicos certificados" },
  { icon: Clock, text: "Atendimento rápido" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-navy-dark/70" />
        {/* Frost texture */}
        <div className="absolute inset-0 frost-overlay opacity-30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-20 lg:pb-24">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
            Conserto e manutenção de refrigeração com{" "}
            <span className="text-gold">atendimento rápido</span> na região de BH.
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-xl text-white/90 mb-6 animate-fade-in-up font-medium" style={{ animationDelay: "0.1s" }}>
            Diagnóstico técnico, orientação clara e agendamento direto pelo WhatsApp.
          </p>

          {/* 24/7 Badge - DESTAQUE */}
          <div className="inline-flex items-center gap-3 bg-gold/90 backdrop-blur-sm px-6 py-3 rounded-full mb-8 animate-pulse shadow-lg border-2 border-gold">
            <Clock className="w-6 h-6 text-navy animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-navy font-bold text-lg md:text-xl">
              Atendimento 24 Horas • Todos os Dias
            </span>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-navy-dark/60 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 md:px-4 md:py-2"
              >
                <badge.icon className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                <span className="text-white text-xs md:text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="xl" className="gap-2 w-full sm:w-auto text-sm md:text-base">
                <FaWhatsapp className="w-5 h-5" />
                Agendar pelo WhatsApp
              </Button>
            </a>
            <a href="#servicos">
              <Button variant="outline-hero" size="xl" className="w-full sm:w-auto text-sm md:text-base">
                Ver serviços
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
