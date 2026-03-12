import { Link, useLocation } from "react-router-dom";
import { Phone, MapPin, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import footerLogo from "@/assets/friendly-footer-logo.svg";
import footerBadge from "@/assets/footer-logo-bottom.png";

const Footer = () => {
  const location = useLocation();

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <img src={footerLogo} alt="Friendly Dental Centre" className="h-12" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Our friendly team is committed to providing you with the highest level of professional services and personalized care.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "Our Office" },
                { to: "/team", label: "Our Team" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} onClick={handleLinkClick} className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {["Implants", "Orthodontics", "Pediatric", "Maintenance", "Restoratives", "Esthetics"].map((service) => (
                <li key={service}>
                  <Link to="/services" onClick={handleLinkClick} className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:6042738315" className="flex items-center gap-2 text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  (604) 273-8315
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/siy6NG1vN6Ckz9zR9" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  120 - 5508 Hollybridge Way, Richmond, BC
                </a>
              </li>
              <li>
                <a href="mailto:info@friendlydental.ca" className="flex items-center gap-2 text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  info@friendlydental.ca
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h5 className="font-semibold text-sm mb-2">Office Hours</h5>
              <div className="text-primary-foreground/70 text-sm space-y-1">
                <p>Mon – Fri: 9:00am – 6:00pm</p>
                <p>Saturday: 9:00am – 5:00pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={footerBadge} alt="Friendly Dental" className="w-6 h-6" />
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} Friendly Dental Centre | Web Design by{" "}
              <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                Bluluma.com
              </a>
            </p>
          </div>
          <p className="text-primary-foreground/40 text-xs">
            Visit our Vancouver Office:{" "}
            <a href="https://littlemountaindental.ca/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
              Little Mountain Dental Centre
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
