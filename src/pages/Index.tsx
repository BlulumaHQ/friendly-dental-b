import { Phone, CheckCircle, Shield, Clock, Star, ArrowDown, Sparkles, Heart, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import officeImage from "@/assets/office-interior.jpg";
import FloatingDots from "@/components/FloatingDots";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";
import iconImplants from "@/assets/icon-implants.svg";
import iconOrthodontics from "@/assets/icon-orthodontics.svg";
import iconPediatric from "@/assets/icon-pediatric.svg";
import iconMaintenance from "@/assets/icon-maintenance.svg";
import iconRestoratives from "@/assets/icon-restoratives.svg";
import iconEsthetics from "@/assets/icon-esthetics.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const serviceIcons: Record<string, string> = {
  implants: iconImplants,
  orthodontics: iconOrthodontics,
  pediatric: iconPediatric,
  maintenance: iconMaintenance,
  restoratives: iconRestoratives,
  esthetics: iconEsthetics,
};

const serviceKeys = ["implants", "orthodontics", "pediatric", "maintenance", "restoratives", "esthetics"];

const doctors = [
  {
    name: "Dr. Patrick Wu",
    title: "D.M.D.",
    image: "https://friendly-dental-centre.netlify.app/assets/dentist-wu-DYVYygme.jpg",
    bio: "Dr. Patrick Wu graduated with honours from the University of Pennsylvania School of Dental Medicine. After practicing dentistry in New Jersey for four years, he returned to Vancouver in 2012. Dr. Wu provides comprehensive care for patients of all ages, with special interests in implant dentistry, orthodontics, pediatric care, and complex restorative treatments.",
  },
  {
    name: "Dr. Mike Pan",
    title: "D.D.S.",
    image: "https://friendly-dental-centre.netlify.app/assets/dentist-pan-DRhoM6FV.jpg",
    bio: "Dr. Mike Pan is known for his strong clinical skills and thoughtful approach to dental treatment. His areas of expertise include orthodontics, dental implants, wisdom teeth removal, and comprehensive dental care. Outside of dentistry, Dr. Pan enjoys golfing, skiing, woodworking, and music.",
  },
  {
    name: "Dr. Ivy Lin",
    title: "D.D.S.",
    image: "https://friendly-dental-centre.netlify.app/assets/dentist-lin-BUPgALLK.jpg",
    bio: "Dr. Ivy Lin is known for her gentle and patient-centered approach to dentistry. She provides comprehensive care for patients of all ages and has particular strength in restorative dentistry. Dr. Lin focuses on creating a comfortable and relaxing experience while delivering high-quality dental treatment.",
  },
  {
    name: "Dr. Jie Chen",
    title: "D.D.S., MSc Prosthodontics",
    image: "https://friendly-dental-centre.netlify.app/assets/dentist-chen-BmBUUUN_.jpg",
    bio: "Dr. Jie Chen is an experienced prosthodontist specializing in cosmetic dentistry and complex restorative treatments. Her expertise includes dentures, implant restorations, and full-mouth rehabilitation. Dr. Chen is known for her meticulous work and gentle care, helping patients restore both their smiles and confidence.",
  },
];

const Index = () => {
  const { t } = useLanguage();

  const services = serviceKeys.map((key) => ({
    key,
    title: t(`service.${key}`),
    desc: t(`service.${key}.desc`),
    icon: serviceIcons[key],
  }));

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  return (
    <div>
      {/* ═══ 1. HOOK — Full-screen hero with video ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster={officeImage}
          >
            <source src="/videos/hero-desktop.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/40" />
        </div>

        <FloatingDots />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <AnimatedSection animation="fade-in-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4">
                {t("hero.tag")}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {t("hero.title1")}{" "}
                <span className="text-secondary">{t("hero.title2")}</span>
                <br />
                {t("hero.title3")}
              </h1>
              <p className="text-lg text-white/80 max-w-lg mb-8">
                {t("hero.desc")}
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <a href="tel:6042738315" className="btn-primary text-lg px-8 py-4">
                  <Phone className="w-5 h-5" />
                  {t("hero.call")}
                </a>
                <a
                  href="#contact-form-section"
                  className="btn-secondary text-lg px-8 py-4"
                >
                  {t("nav.bookNow")}
                </a>
              </div>
              {/* Urgency micro-copy */}
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <CheckCircle className="w-4 h-4 text-secondary" />
                <span>{t("funnel.accepting")}</span>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-right">
              <div className="w-full max-w-md lg:max-w-none mx-auto">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
            <ArrowDown className="w-6 h-6 text-white/50" />
          </div>
        </div>
      </section>

      {/* ═══ 2. PROBLEM — Pain point identification ═══ */}
      <section className="py-16 md:py-20 bg-foreground text-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-4">{t("funnel.problem.tag")}</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
              {t("funnel.problem.title")}
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              {t("funnel.problem.desc")}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ 3. AGITATION — Emphasize consequences ═══ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-title mb-4">{t("funnel.agitate.title")}</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: t("funnel.agitate.item1.title"), desc: t("funnel.agitate.item1.desc") },
              { icon: Heart, title: t("funnel.agitate.item2.title"), desc: t("funnel.agitate.item2.desc") },
              { icon: Zap, title: t("funnel.agitate.item3.title"), desc: t("funnel.agitate.item3.desc") },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="bg-card rounded-2xl p-8 shadow-md border border-border text-center">
                  <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-destructive" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. SOLUTION — Welcome + What we offer ═══ */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-3">{t("funnel.solution.tag")}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 leading-tight">
                {t("welcome.title1")}{" "}
                <span className="text-secondary">{t("welcome.title2")}</span>
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">{t("welcome.p1")}</p>
              <p className="text-primary-foreground/80 leading-relaxed mb-8">{t("welcome.p2")}</p>
              <a href="#contact-form-section" className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold hover:bg-secondary/90 transition-all inline-flex items-center gap-2 text-lg">
                {t("nav.bookNow")}
              </a>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-right">
              <img
                src={officeImage}
                alt="Friendly Dental Centre office interior"
                className="rounded-2xl shadow-2xl w-full"
                loading="lazy"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══ 5. BENEFITS — Why trust us + value ═══ */}
      <section className="py-16 md:py-20 bg-section-alt">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="section-title mb-4">
              {t("trust.title1")} <span className="text-secondary">{t("trust.title2")}</span>
            </h2>
            <p className="section-subtitle mx-auto mb-12">{t("trust.subtitle")}</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t("trust.item1.title"), desc: t("trust.item1.desc"), icon: Shield },
              { title: t("trust.item2.title"), desc: t("trust.item2.desc"), icon: Heart },
              { title: t("trust.item3.title"), desc: t("trust.item3.desc"), icon: Sparkles },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-border">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Inline CTA */}
          <AnimatedSection className="mt-12">
            <a href="#contact-form-section" className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-2">
              {t("cta.bookOnline")}
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ 6. SERVICES — Clear value breakdown ═══ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-title mb-4">
              {t("services.title1")} <span className="text-secondary">{t("services.title2")}</span>
            </h2>
            <p className="section-subtitle mx-auto">{t("services.subtitle")}</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.key} delay={i * 100}>
                <Link to={`/services#${service.key}`} className="card-service p-6 hover:border-secondary/30 group flex flex-col h-full">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-14 h-14 mb-3 service-icon-blue"
                  />
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{service.desc}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7. TRUST — Stats + Team credibility ═══ */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
            {[
              { value: "10+", label: t("stats.years") },
              { value: "5", label: t("stats.dentists") },
              { value: "6", label: t("stats.services") },
              { value: "1000+", label: t("stats.patients") },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="text-primary-foreground">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Dentists Title */}
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              {t("team.title")}
            </h2>
          </AnimatedSection>

          {/* Dentists Grid - 3 top, 2 bottom left-aligned */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doc, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-3 border-white/20"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-bold text-primary-foreground">{doc.name}</h3>
                  <p className="text-secondary text-sm font-medium">{doc.title}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Trust CTA */}
          <AnimatedSection className="text-center mt-12">
            <a href="#contact-form-section" className="bg-secondary text-secondary-foreground px-10 py-4 rounded-full font-semibold hover:bg-secondary/90 transition-all inline-flex items-center gap-2 text-lg">
              <Phone className="w-5 h-5" />
              {t("funnel.trustCta")}
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ 8. OFFER — FAQ to remove objections ═══ */}
      <section className="py-16 md:py-20 bg-section-alt">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-title mb-4">{t("faq.title")}</h2>
            <p className="section-subtitle mx-auto">{t("faq.subtitle")}</p>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card rounded-xl border border-border px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ═══ 9. CTA — Primary conversion push ═══ */}
      <section className="py-16 md:py-20 bg-foreground text-center">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
              {t("cta.desc")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:6042738315"
                className="bg-secondary text-secondary-foreground px-10 py-4 rounded-full font-semibold hover:bg-secondary/90 transition-all inline-flex items-center gap-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                {t("cta.callNow")}
              </a>
              <a
                href="#contact-form-section"
                className="bg-white text-foreground px-10 py-4 rounded-full font-semibold hover:bg-white/90 transition-all text-lg"
              >
                {t("cta.bookOnline")}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ 10. FINAL CTA — Contact Form + Map ═══ */}
      <section id="contact-form-section" className="py-16 md:py-20 bg-background">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-3">{t("funnel.final.tag")}</p>
            <h2 className="section-title mb-4">
              {t("map.title")}
            </h2>
            <p className="section-subtitle mx-auto">{t("map.subtitle")}</p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-8">
            <AnimatedSection>
              <ContactForm />
            </AnimatedSection>
            <AnimatedSection animation="fade-in-right">
              <div className="rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px]">
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
      </section>
    </div>
  );
};

export default Index;
