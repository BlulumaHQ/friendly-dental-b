import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Globe } from "lucide-react";
import logo from "@/assets/friendly-logo.svg";
import { useLanguage } from "@/context/LanguageContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.office") },
    { to: "/services", label: t("nav.services") },
    { to: "/contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleLang = () => setLang(lang === "en" ? "zh" : "en");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card shadow-lg" : "bg-card/95 backdrop-blur-sm"
      }`}
    >
      <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Friendly Dental Centre" className="h-10 md:h-12" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-semibold uppercase tracking-wide transition-colors duration-200 ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-primary transition-colors px-3 py-1.5 rounded-full border border-border hover:border-primary/30"
            aria-label="Switch language"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === "en" ? "中文" : "EN"}
          </button>
          <a href="tel:6042738315" className="btn-primary text-sm">
            <Phone className="w-4 h-4" />
            604-273-8315
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`py-3 px-4 rounded-lg text-sm font-semibold uppercase tracking-wide ${
                  location.pathname === link.to
                    ? "text-primary bg-primary/5"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleLang}
              className="py-3 px-4 rounded-lg text-sm font-semibold uppercase tracking-wide text-foreground/80 hover:text-primary hover:bg-primary/5 flex items-center gap-2 text-left"
            >
              <Globe className="w-4 h-4" />
              {lang === "en" ? "中文（繁體）" : "English"}
            </button>
            <a href="tel:6042738315" className="btn-primary text-sm mt-2 justify-center">
              <Phone className="w-4 h-4" />
              604-273-8315
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
