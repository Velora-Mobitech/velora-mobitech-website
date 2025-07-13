import { motion } from "framer-motion";
import { TrendingUp, Users, TreePine, Clock } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      number: "40%",
      label: "Cost Reduction",
      description: "Average transportation cost savings",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      number: "10,000+",
      label: "Happy Employees",
      description: "Employees using Velora daily",
    },
    {
      icon: <TreePine className="w-8 h-8 text-primary" />,
      number: "30%",
      label: "CO₂ Reduction",
      description: "Carbon footprint decrease",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      number: "25 min",
      label: "Time Saved",
      description: "Average daily commute reduction",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-normal mb-4">
            Transforming Mobility{" "}
            <span className="text-gradient font-medium">Across Industries</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Real impact delivered to companies and employees worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8 hover:border-primary/20 transition-all duration-300">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-lg font-medium text-primary mb-2">
                  {stat.label}
                </p>
                <p className="text-sm text-gray-400">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
