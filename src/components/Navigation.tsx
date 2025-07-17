import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ThemeToggle } from "./ThemeToggle";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
    if (sectionId === "testimonials") {
      const testimonialSection = document.querySelector(".animate-marquee");
      if (testimonialSection) {
        const yOffset = -100; // Offset to account for the fixed header
        const y =
          testimonialSection.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else if (sectionId === "cta") {
      const ctaSection = document.querySelector(".button-gradient");
      if (ctaSection) {
        const yOffset = -100;
        const y =
          ctaSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navItems = [
    {
      name: "Solutions",
      href: "#features",
      onClick: () => scrollToSection("features"),
    },
    {
      name: "Pricing",
      href: "#pricing",
      onClick: () => scrollToSection("pricing"),
    },
    {
      name: "Success Stories",
      href: "#testimonials",
      onClick: () => scrollToSection("testimonials"),
    },
  ];

  return (
    <header
      className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
        isScrolled
          ? "h-14 bg-background/40 backdrop-blur-xl border border-border scale-95 w-[90%] max-w-2xl"
          : "h-14 bg-background w-[95%] max-w-3xl"
      }`}
    >
      <div className="mx-auto h-full px-6">
        <nav className="flex items-center justify-between h-full">
          <div className="flex items-center gap-2">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src="/favicon.ico"
                alt="Velora Logo"
                className="w-0.0005 h-0.005"
              />
              <span className="font-bold text-base">Velora</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.onClick) {
                    item.onClick();
                  }
                }}
                className="text-sm font-semibold text-foreground hover:text-primary transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
            <Button
              onClick={() => navigate("/get-demo")}
              size="sm"
              className="button-gradient"
            >
              Get Demo
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="glass">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-background border-border">
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                        if (item.onClick) {
                          item.onClick();
                        }
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                  <Button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigate("/get-demo");
                    }}
                    className="button-gradient mt-4"
                  >
                    Get Demo
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
