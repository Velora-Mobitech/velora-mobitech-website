import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardSpotlight } from "./CardSpotlight";

const PricingTier = ({
  name,
  price,
  description,
  features,
  isPopular,
  isSelected,
  onSelect,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  isSelected: boolean;
  onSelect: () => void;
}) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    onClick={onSelect}
    className={`cursor-pointer relative ${isSelected ? "z-10" : ""}`}
  >
    <div
      className={`absolute inset-0 rounded-xl transition-all duration-300 pointer-events-none z-20 ${
        isSelected ? "border-2 border-primary shadow-lg shadow-primary/30" : ""
      }`}
    />
    <CardSpotlight
      className={`h-full transition-all duration-300 ${
        isSelected
          ? "border-primary"
          : isPopular
          ? "border-primary"
          : "border-border hover:border-primary/50"
      }`}
    >
      <div className="relative h-full p-6 flex flex-col">
        {isPopular && (
          <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1 w-fit mb-4">
            Most Popular
          </span>
        )}
        <h3 className="text-xl font-medium mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold">{price}</span>
          {price !== "Custom" && price !== "Let's Talk" && (
            <span className="text-muted-foreground">/month</span>
          )}
        </div>
        <p className="text-muted-foreground mb-6">{description}</p>
        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          className={`w-full transition-all duration-300 ${
            isSelected
              ? "button-gradient shadow-lg shadow-primary/30"
              : "button-gradient"
          }`}
        >
          Get Quote
        </Button>
      </div>
    </CardSpotlight>
  </motion.div>
);

export const PricingSection = () => {
  const [selectedCard, setSelectedCard] = useState<string>(
    "Fully Managed Model"
  );

  const pricingData = [
    {
      name: "Travel Allowance Model",
      price: "Per Credit",
      description: "Fixed monthly allowances with automated credit management",
      features: [
        "Monthly credit allocation per employee",
        "Route-based fare deduction",
        "Usage-based company billing",
        "Employee self-service portal",
        "Automated expense tracking",
        "Cost optimization insights",
      ],
      isPopular: false,
    },
    {
      name: "Fully Managed Model",
      price: "Custom",
      description:
        "Complete transportation management with flexible employee access controls",
      features: [
        "Global employee access control",
        "Dashboard-based travel restrictions",
        "Monthly billing based on usage",
        "Real-time fleet management",
        "Advanced analytics & reporting",
        "24/7 priority support",
      ],
      isPopular: true,
    },
    {
      name: "Enterprise Custom",
      price: "Let's Talk",
      description:
        "Tailored solutions for large enterprises with specific requirements",
      features: [
        "Custom integration solutions",
        "API-based HRIS/ERP integration",
        "White-label mobile app",
        "Dedicated account manager",
        "SLA guarantees",
        "Advanced security compliance",
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="container px-4 py-24">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-normal mb-6"
        >
          Choose Your{" "}
          <span className="text-gradient font-medium">Working Model</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-muted-foreground"
        >
          Flexible engagement models designed to fit your company's
          transportation management preferences
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingData.map((tier) => (
          <PricingTier
            key={tier.name}
            name={tier.name}
            price={tier.price}
            description={tier.description}
            features={tier.features}
            isPopular={tier.isPopular}
            isSelected={selectedCard === tier.name}
            onSelect={() => setSelectedCard(tier.name)}
          />
        ))}
      </div>
    </section>
  );
};
