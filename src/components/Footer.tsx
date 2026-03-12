import { Link } from "react-router-dom";
import { Phone, MapPin, Mail } from "lucide-react";
import footerLogo from "@/assets/friendly-footer-logo.svg";
import footerBadge from "@/assets/footer-logo-bottom.png";
import { useLanguage } from "@/context/LanguageContext";

const serviceLinks = [
  { label: "Implants", labelZh: "植牙", anchor: "implants" },
  { label: "Orthodontics", labelZh: "矯正牙科", anchor: "orthodontics" },
  { label: "Pediatric", labelZh: "兒童牙科", anchor: "pediatric" },
  { label: "Maintenance", labelZh: "牙齒保健", anchor: "maintenance" },
  { label: "Restoratives", labelZh: "修復牙科", anchor: "restoratives" },
  { label: "Esthetics", labelZh: "美學牙科", anchor: "esthetics" },
];

const Footer = () => {
  const { lang, t } = useLanguage();

  const quickLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.office") },
    { to: "/services", label: t("nav.services") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <img src={footerLogo} alt="Friendly Dental Centre" className="h-12" />
            <p className="text-primary-foreground/50 text-sm">
              {t("footer.visitVancouver")}{" "}
              <a
                href="https://littlemountaindental.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                {t("footer.littleMountain")}
              </a>
            </p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t("footer.desc")}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.anchor}>
                  <Link
                    to={`/services#${service.anchor}`}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {lang === "zh" ? service.labelZh : service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">{t("footer.contactInfo")}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:6042738315"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  (604) 273-8315
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/siy6NG1vN6Ckz9zR9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  120 - 5508 Hollybridge Way, Richmond, BC
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@friendlydental.ca"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  info@friendlydental.ca
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h5 className="font-semibold text-sm mb-2">{t("footer.officeHours")}</h5>
              <div className="text-primary-foreground/70 text-sm space-y-1">
                <p>{t("footer.monFri")}</p>
                <p>{t("footer.sat")}</p>
                <p>{t("footer.sun")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={footerBadge} alt="Friendly Dental" className="w-6 h-6" />
            <a
              href="https://www.drpatrickwu.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 text-sm hover:text-secondary transition-colors font-medium"
            >
              Dr. Patrick Wu
            </a>
            <span className="text-primary-foreground/30">|</span>
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} Friendly Dental Centre
            </p>
          </div>
          <p className="text-primary-foreground/15 text-xs">
            Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground/30 transition-colors"
            >
              Bluluma.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
