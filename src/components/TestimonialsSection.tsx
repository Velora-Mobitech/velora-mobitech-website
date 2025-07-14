"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "HR Director, TechCorp India",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content:
      "Velora transformed our employee transportation management. The cost savings through shared rides and optimized routes have been remarkable, while employee satisfaction has significantly increased.",
  },
  {
    name: "Priya Sharma",
    role: "Operations Manager, FinanceFirst",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content:
      "The dashboard analytics have given us complete visibility into our transportation costs and carbon footprint. The automated billing and real-time tracking features are game-changers.",
  },
  {
    name: "Amit Patel",
    role: "Facility Head, ManufacturingPlus",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content:
      "Our employees love the flexibility of the mobile app. The intelligent route optimization has reduced commute times by 30%, and the Green-Miles rewards have boosted sustainability awareness.",
  },
  {
    name: "Sneha Reddy",
    role: "CFO, StartupHub",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content:
      "The travel allowance model perfectly fits our startup culture. Employees manage their credits efficiently, and we have complete cost predictability with detailed usage analytics.",
  },
  {
    name: "Vikram Singh",
    role: "Admin Manager, ConsultingPro",
    image: "https://avatars.githubusercontent.com/u/5678901?v=4",
    content:
      "Implementation was seamless with excellent support. The HRIS integration and automated reporting have eliminated manual transportation management overhead completely.",
  },
  {
    name: "Kavya Nair",
    role: "Sustainability Officer, GreenTech Ltd",
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content:
      "Velora's Scope-3 CO₂ tracking and BRSR compliance features have been instrumental in achieving our sustainability goals. The platform makes green mobility effortless for our organization.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-muted-foreground text-lg">
            Join hundreds of forward-thinking organizations transforming their
            mobility with Velora
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={`${index}-1`}
                  className="w-[400px] shrink-0 glass hover:border-primary/20 transition-all duration-300 p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={`${index}-2`}
                  className="w-[400px] shrink-0 glass hover:border-primary/20 transition-all duration-300 p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
