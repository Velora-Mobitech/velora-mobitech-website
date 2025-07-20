import {
  BarChart3,
  ShieldCheck,
  Wallet,
  ArrowUpDown,
  Users,
  MapPin,
  Calendar,
  Leaf,
} from "lucide-react";

export const features = [
  {
    title: "Exclusive Company Travel Model",
    description:
      "Dedicated transportation services for single companies with custom scheduling, flexible grouping (1-3 employees per cab), and full transport management.",
    icon: <ShieldCheck className="w-0.0005 h-0.005" />,
    image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png",
  },
  {
    title: "Pooled Inter-Company Travel Model",
    description:
      "Shared rides across multiple companies for higher efficiency, environmental impact reduction, and optimized vehicle usage in dense corporate zones.",
    icon: <Users className="w-0.0005 h-0.005" />,
    image: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png",
  },
  {
    title: "Employee Dashboard & Analytics",
    description:
      "Personalized dashboards showing travel history, costs, and analytics. Eliminates repeated booking and reimbursement claims for employees.",
    icon: <BarChart3 className="w-0.0005 h-0.005" />,
    image: "/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png",
  },
  {
    title: "Smart Transport Matching Algorithm",
    description:
      "Intelligent algorithm determining optimal vehicle types, scheduling based on bookings, and real-time routing for cost-effectiveness and minimal environmental impact.",
    icon: <ArrowUpDown className="w-0.0005 h-0.005" />,
    image: "/lovable-uploads/79f2b901-8a4e-42a5-939f-fae0828e0aef.png",
  },
  {
    title: "Company-Level Control & Transparency",
    description:
      "Employers can monitor routes, ensure official use only, reduce inflated expenses and fraudulent claims with complete transport management.",
    icon: <Wallet className="w-0.0005 h-0.005" />,
    image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png",
  },
  {
    title: "Sustainable Transport Ecosystem",
    description:
      "Focus on reducing CO₂ emissions and urban traffic congestion through intelligent pooling and optimized routing for corporate mobility.",
    icon: <Leaf className="w-0.0005 h-0.005" />,
    image: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png",
  },
];
