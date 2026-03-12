import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";
import iconImplants from "@/assets/icon-implants.svg";
import iconOrthodontics from "@/assets/icon-orthodontics.svg";
import iconPediatric from "@/assets/icon-pediatric.svg";
import iconMaintenance from "@/assets/icon-maintenance.svg";
import iconRestoratives from "@/assets/icon-restoratives.svg";
import iconEsthetics from "@/assets/icon-esthetics.svg";

const serviceIcons: Record<string, string> = {
  implants: iconImplants,
  orthodontics: iconOrthodontics,
  pediatric: iconPediatric,
  maintenance: iconMaintenance,
  restoratives: iconRestoratives,
  esthetics: iconEsthetics,
};

const serviceKeys = ["implants", "orthodontics", "pediatric", "maintenance", "restoratives", "esthetics"];

const serviceImages = [
  "https://friendlydental.ca/wp-content/uploads/2023/08/stock-photo-first-person-shot-female-doctor-talking-to-a-young-woman-patient-discussion-of-the-treatment-plan-1975416662-2.png",
  "https://friendlydental.ca/wp-content/uploads/2023/08/welcome-lm-img.png-2.png",
  "https://friendlydental.ca/wp-content/uploads/2023/08/welcome-lm-img.png.png",
  "https://friendlydental.ca/wp-content/uploads/2023/08/welcome-lm-img.png-3.png",
  "https://friendlydental.ca/wp-content/uploads/2023/08/welcome-lm-img.png-1.png",
  "https://friendlydental.ca/wp-content/uploads/2023/08/welcome-lm-img.png-4.png",
];

const Services = () => {
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location.hash]);

  const services = serviceKeys.map((key, i) => ({
    id: key,
    title: t(`service.${key}`),
    desc: t(`service.${key}.full`),
    icon: serviceIcons[key],
    image: serviceImages[i],
  }));

  return (
    <div className="pt-20">
      <section className="bg-primary py-16 md:py-24 text-center">
        <div className="container-max px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {t("servicesPage.title")}
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            {t("servicesPage.subtitle")}
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max space-y-20">
          {services.map((service, i) => (
            <AnimatedSection key={service.id} delay={100}>
              <div
                id={service.id}
                className="grid lg:grid-cols-2 gap-10 items-center scroll-mt-24"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-xl w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-16 mb-3 service-icon-blue"
                  />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-center">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {t("servicesPage.cta.title")}
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            {t("servicesPage.cta.desc")}
          </p>
          <Link
            to="/contact"
            className="bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-all"
          >
            {t("servicesPage.cta.btn")}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
