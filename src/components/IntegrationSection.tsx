import { motion } from "framer-motion";
import { Zap, Database, Shield, Cpu, Globe, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const IntegrationSection = () => {
  const integrations = [
    {
      icon: <Database className="w-6 h-6" />,
      name: "HRIS Integration",
      description: "Seamlessly connect with your HR systems",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      name: "ERP Systems",
      description: "Full integration with enterprise resource planning",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      name: "Access Control",
      description: "Security and authentication systems",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      name: "Finance Systems",
      description: "Automated billing and expense management",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-normal mb-6">
              Enterprise-Grade{" "}
              <span className="text-gradient font-medium">Integrations</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Velora's modular architecture seamlessly integrates with your
              existing enterprise systems, providing API-based connections that
              scale with your organization's needs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {integrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 glass rounded-lg"
                >
                  <div className="text-primary mt-1">{integration.icon}</div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">
                      {integration.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {integration.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button className="button-gradient">
              View Integration Docs
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl"></div>

              <div className="relative space-y-6">
                <div className="flex items-center gap-3">
                  <Zap className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Real-time API
                    </h3>
                    <p className="text-muted-foreground">
                      Live data synchronization
                    </p>
                  </div>
                </div>

                <div className="glass rounded-lg p-4 font-mono text-sm">
                  <div className="text-primary">POST /api/v1/rides</div>
                  <div className="text-muted-foreground mt-2">
                    {`{
  "employee_id": "EMP001",
  "pickup": "Office Complex A",
  "destination": "Metro Station",
  "ride_type": "shared"
}`}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="glass rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                  <div className="glass rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">
                      &lt; 100ms
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Response Time
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
