import { Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-20">
      <div className="container px-4">
        <div className="glass glass-hover rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Velora</h3>
              <p className="text-sm text-muted-foreground">
                Revolutionizing workplace mobility with intelligent e-mobility
                solutions for modern enterprises.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Solutions</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Cab & Shuttle Sharing
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Company Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Mobile App
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Working Models
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Features</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Route Optimization
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Fleet Analytics
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Green Mobility
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    API Integration
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>{" "}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Velora E-Mobility Solutions. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
