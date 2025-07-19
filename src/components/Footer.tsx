import { Github, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="w-full py-12 mt-20">
      <div className="container px-4">
        <div className="glass glass-hover rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <button
                onClick={scrollToTop}
                className="font-medium text-lg hover:text-primary transition-colors text-left"
              >
                Velora
              </button>
              <p className="text-sm text-muted-foreground">
                Revolutionizing workplace mobility with intelligent e-mobility
                solutions for modern enterprises.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://www.linkedin.com/company/velora-mobitech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://github.com/Velora-Mobitech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://twitter.com/VeloraMobitech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://www.facebook.com/VeloraMobitech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://www.instagram.com/velora_mobitech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Solutions</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Cab & Shuttle Sharing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Company Dashboard
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Mobile App
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("pricing")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Working Models
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Features</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Route Optimization
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Fleet Analytics
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Green Mobility
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    API Integration
                  </button>
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
                <li>
                  <button
                    onClick={() => navigate("/analytics")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Website Analytics
                  </button>
                </li>
              </ul>
            </div>
          </div>{" "}
          <div className="mt-8 pt-8 border-t border-border">
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
