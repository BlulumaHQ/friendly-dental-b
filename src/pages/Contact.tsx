import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      <section className="bg-primary py-16 md:py-24 text-center">
        <div className="container-max px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{t("contact.title")}</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <AnimatedSection>
                <h2 className="section-title mb-6">{t("contact.sendMsg")}</h2>
                <ContactForm />
              </AnimatedSection>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection animation="fade-in-right">
                <h2 className="section-title mb-6">{t("contact.getInTouch")}</h2>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{t("contact.phone")}</h3>
                      <a href="tel:6042738315" className="text-muted-foreground hover:text-primary transition-colors">
                        (604) 273-8315
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{t("contact.email")}</h3>
                      <a href="mailto:info@friendlydental.ca" className="text-muted-foreground hover:text-primary transition-colors">
                        info@friendlydental.ca
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{t("contact.address")}</h3>
                      <a
                        href="https://maps.app.goo.gl/siy6NG1vN6Ckz9zR9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        120 - 5508 Hollybridge Way, Richmond, BC
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{t("contact.hours")}</h3>
                      <div className="text-muted-foreground text-sm space-y-1">
                        <p>{t("footer.monFri")}</p>
                        <p>{t("footer.sat")}</p>
                        <p>{t("footer.sun")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-right" delay={200}>
                <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.7!2d-123.1178!3d49.1897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548674a5912a7e2f%3A0x87e1c6e0c7a0f4b!2s5508+Hollybridge+Way%2C+Richmond%2C+BC!5e0!3m2!1sen!2sca!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Friendly Dental Centre Location"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
