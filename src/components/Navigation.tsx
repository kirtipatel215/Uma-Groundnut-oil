import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass h-16" : "h-20 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/logo.jpg"
            alt="Uma Groundnut Oil"
            className="h-12 w-auto object-contain rounded-[50%] mix-blend-multiply"
          />
          <span className={cn(
            "text-2xl font-bold tracking-tight transition-colors",
            scrolled ? "text-primary" : "text-primary shadow-sm"
          )}>
            Uma<span className="text-foreground/80 font-medium">Oil</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                isActive(link.path)
                  ? "bg-primary text-white shadow-md"
                  : "text-foreground/80 hover:bg-white/50 hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 px-6 py-2 bg-primary text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all transform hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors glass rounded-full"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 glass border-t border-white/20 p-4 md:hidden animate-fade-in flex flex-col gap-2 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-4 py-3 rounded-xl text-center font-medium transition-colors",
                isActive(link.path)
                  ? "bg-primary text-white shadow-md"
                  : "hover:bg-white/50 text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
