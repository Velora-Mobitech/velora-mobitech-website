import { motion } from "framer-motion";
import {
  Building2,
  Users,
  BarChart3,
  Clock,
  DollarSign,
  MapPin,
  Smartphone,
  Leaf,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

const BenefitsSection = () => {
  const companyBenefits = [
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: "Hassle-Free Management",
      description: "Complete travel management solution with automated systems",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Cost Optimization",
      description:
        "Significant cost savings through optimized fleet usage and sharing",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Punctuality Tracking",
      description:
        "Real-time vehicle tracking ensuring timely employee arrivals",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Advanced Analytics",
      description:
        "Comprehensive insights on cost, utilization, and carbon emissions",
    },
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: "Sustainability Reporting",
      description: "BRSR/CSRD compliance with Scope-3 CO₂ tracking",
    },
  ];

  const employeeBenefits = [
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Multiple Travel Modes",
      description:
        "Choose from various transportation options based on convenience",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Flexible Booking",
      description: "Simple app-based booking with flexible scheduling options",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Smart Sharing",
      description:
        "Cost-effective shared rides with intelligent route matching",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Time Optimization",
      description:
        "Intelligent routing to avoid delays and reduce commute time",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        {/* Company Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-normal mb-4">
              What's in it for{" "}
              <span className="text-gradient font-medium">Companies?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your organization's transportation management with
              comprehensive solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass hover:border-primary/20 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Employee Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-normal mb-4">
              What's in it for{" "}
              <span className="text-gradient font-medium">Employees?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empower your workforce with convenient, flexible, and intelligent
              transportation options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {employeeBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass hover:border-primary/20 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
