import AnimatedSection from "@/components/AnimatedSection";
import officeImage from "@/assets/office-interior.jpg";
import teamImage from "@/assets/team-group.jpg";
import { MapPin, Clock, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      <section className="bg-primary py-16 md:py-24 text-center">
        <div className="container-max px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{t("about.title")}</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">{t("about.subtitle")}</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-left">
              <img src={officeImage} alt="Friendly Dental Centre office" className="rounded-2xl shadow-xl w-full" loading="lazy" />
            </AnimatedSection>
            <AnimatedSection animation="fade-in-right">
              <h2 className="section-title mb-6">
                {t("about.welcome.title1")} <span className="text-secondary">{t("about.welcome.title2")}</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t("about.welcome.p1")}</p>
              <p className="text-muted-foreground leading-relaxed mb-4">{t("about.welcome.p2")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("about.welcome.p3")}</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="section-title mb-6">
                {t("about.team.title1")} <span className="text-secondary">{t("about.team.title2")}</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{t("about.team.desc")}</p>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-right">
              <img src={teamImage} alt="Friendly Dental team" className="rounded-2xl shadow-xl w-full" loading="lazy" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-title mb-4">{t("about.visitUs")}</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="w-8 h-8 text-secondary" />,
                title: t("about.location"),
                lines: ["120 - 5508 Hollybridge Way", "Richmond, BC"],
                link: "https://maps.app.goo.gl/siy6NG1vN6Ckz9zR9",
              },
              {
                icon: <Clock className="w-8 h-8 text-secondary" />,
                title: t("about.officeHours"),
                lines: [t("footer.monFri"), t("footer.sat"), t("footer.sun")],
              },
              {
                icon: <Phone className="w-8 h-8 text-secondary" />,
                title: t("about.contactUs"),
                lines: ["(604) 273-8315", "info@friendlydental.ca"],
                link: "tel:6042738315",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="bg-card rounded-2xl p-8 shadow-md text-center h-full">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  {item.lines.map((line, j) => (
                    <p key={j} className="text-muted-foreground text-sm">{line}</p>
                  ))}
                  {item.link && (
                    <a
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : undefined}
                      rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-block mt-3 text-primary font-semibold text-sm hover:text-secondary transition-colors"
                    >
                      {item.link.startsWith("tel") ? t("about.callNow") : t("about.getDirections")} →
                    </a>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
