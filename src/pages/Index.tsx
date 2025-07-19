import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import LogoCarousel from "@/components/LogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import BenefitsSection from "@/components/BenefitsSection";
import StatsSection from "@/components/StatsSection";
import IntegrationSection from "@/components/IntegrationSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useNavigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

const Index = () => {
  const navigate = useNavigate();

  const navigateToGetDemo = () => {
    navigate("/get-demo");
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-background/80" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
        >
          <span className="text-sm font-medium">
            <img
              src="/favicon.ico"
              alt="Velora Icon"
              className="w-4 h-4 inline-block mr-2"
            />
            Smart E-Mobility Solutions for Enterprises
          </span>
        </motion.div>
        {/* chnaged animation effect for main heading */}
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-left">
            <span className="text-muted-foreground">
              <TextGenerateEffect words="Revolutionize your" />
            </span>
            <br />
            <span className="text-foreground font-medium">
              <TextGenerateEffect words="workplace mobility" delay={1.9} />
            </span>
          </h1>
          <br />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl text-left"
          >
            Velora offers intelligent e-mobility solutions for companies,
            providing optimized transportation facilities with cab/shuttle
            sharing, smart routing, and comprehensive fleet management.{" "}
            <span className="text-foreground">
              Transform your employee transportation today.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Button
              size="lg"
              className="button-gradient"
              onClick={() => window.open("https://dashboard.veloramobitech.systems/", "_blank")}
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="link"
              className="text-foreground"
              onClick={navigateToGetDemo}
            >
              Request Demo <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative mx-auto max-w-5xl mt-20"
        >
          <div className="glass rounded-xl overflow-hidden">
            <img
              src="/lovable-uploads/c32c6788-5e4a-4fee-afee-604b03113c7f.png"
              alt="Velora Commute Dashboard"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <div id="features" className="bg-background">
        <FeaturesSection />
      </div>

      {/* Benefits Section */}
      <div className="bg-background">
        <BenefitsSection />
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-background">
        <PricingSection />
      </div>

      {/* Integration Section */}
      <div className="bg-background">
        <IntegrationSection />
      </div>

      {/* Testimonials Section */}
      <div className="bg-background">
        <TestimonialsSection />
      </div>

      {/* Meet Our Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="container px-4 py-20 bg-background"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-gradient">Expert Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced professionals are dedicated to revolutionizing
              your company's transportation with innovative e-mobility
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Team Member 1 - Krishna Vamsi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="relative mb-6">
                <img
                  src="/lovable-uploads/krishna-vamsi.jpg"
                  alt="Krishna Vamsi Veerisetti"
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Krishna Vamsi Veerisetti
              </h3>
              <p className="text-primary font-medium mb-3">CEO & Founder</p>
              <p className="text-muted-foreground text-sm mb-4">
                Leading innovation in smart e-mobility solutions and enterprise
                transportation
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">
                      kv@veloramobitech.systems
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">+91 8688505081</span>
                </div>
              </div>
            </motion.div>

            {/* Team Member 2 - Vijaya Balaji */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="glass rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="relative mb-6">
                <img
                  src="/lovable-uploads/vijaya-balaji.jpg"
                  alt="Vijaya Balaji Tatta"
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Vijaya Balaji Tatta
              </h3>
              <p className="text-primary font-medium mb-3">CTO & Co-Founder</p>
              <p className="text-muted-foreground text-sm mb-4">
                Expert in AI/ML technologies and smart transportation system
                architecture
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">tvb@veloramobitech.systems</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">+91 9347767825</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="container px-4 py-20 relative bg-background" aria-label="Velora E-Mobility Solutions CTA">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'url("/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-background/80 backdrop-blur-lg border border-border rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to transform your company's mobility with Velora?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Velora E-Mobility Solutions is India's leading startup for smart transportation, cab sharing, shuttle management, fleet analytics, and sustainable mobility for enterprises, corporates, and startups. Our platform, VeloraMobitech, empowers companies to optimize employee transportation, reduce costs, and achieve green mobility goals. Join innovative companies, HR teams, and business leaders who trust Velora for AI-powered route optimization, real-time analytics, and seamless integration with HRIS, ERP, and finance systems. Discover how VeloraMobitech can revolutionize your workplace mobility, boost productivity, and support your sustainability mission.
          </p>
          <Button
            size="lg"
            className="button-gradient"
            onClick={() => window.open("https://dashboard.veloramobitech.systems/", "_blank")}
          >
            Get Started with Velora E-Mobility
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="bg-background">
        <Footer />
      </div>
      <Analytics />
    </div>
  );
};

export default Index;
