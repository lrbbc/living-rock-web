import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Phone } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "PAGES", path: "/pages" },
    { name: "DONATIONS", path: "/donations" },
    { name: "EVENTS", path: "/events" },
    { name: "BLOG", path: "/blog" },
    { name: "SHOP", path: "/shop" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left: Donate Button */}
          <div className="flex items-center gap-4">
            <Link to="/donations">
              <Button
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
              >
                <Heart className="mr-2 h-4 w-4" />
                DONATE
              </Button>
            </Link>
          </div>

          {/* Center: Logo and Nav Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wider transition-all duration-300 ${
                  isActive(link.path)
                    ? "text-accent"
                    : "text-primary-foreground hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link to="/" className="mx-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-10 h-10 text-primary-foreground"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 21V12L12 3L21 12V21H15V14H9V21H3Z" />
                </svg>
              </div>
            </Link>

            {navLinks.slice(3).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wider transition-all duration-300 ${
                  isActive(link.path)
                    ? "text-accent"
                    : "text-primary-foreground hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: Contact Info */}
          <div className="hidden md:flex items-center gap-2 text-primary-foreground">
            <Phone className="h-4 w-4" />
            <span className="text-sm">+000 123 456 789</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-in slide-in-from-top">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium tracking-wider transition-all duration-300 ${
                    isActive(link.path)
                      ? "text-accent"
                      : "text-primary-foreground hover:text-accent"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
