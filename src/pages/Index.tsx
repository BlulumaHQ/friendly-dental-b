import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-patient.png";
import officeImage from "@/assets/office-interior.jpg";
import FloatingDots from "@/components/FloatingDots";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    title: "Implants",
    desc: "Stable and secure surgical option for replacing one or more missing teeth using artificial titanium roots.",
    icon: "🦷",
  },
  {
    title: "Orthodontics",
    desc: "Achieve a healthy smile with well-aligned teeth that improve your self-image, speech, and digestion.",
    icon: "😁",
  },
  {
    title: "Pediatric",
    desc: "Children's dentistry services to help your child maintain a healthy smile from an early age.",
    icon: "👶",
  },
  {
    title: "Maintenance",
    desc: "Regular cleanings and comprehensive exams to combat tooth decay and maintain oral health.",
    icon: "🪥",
  },
  {
    title: "Restoratives",
    desc: "Repair damage caused by decay, injury, or other factors and restore teeth to optimal health.",
    icon: "🔧",
  },
  {
    title: "Esthetics",
    desc: "Veneers, teeth whitening, and cosmetic treatments to enhance the appearance of your smile.",
    icon: "✨",
  },
];

const faqs = [
  {
    q: "What services does Friendly Dental Centre offer?",
    a: "We offer a comprehensive range of dental services including implants, orthodontics, pediatric dentistry, regular maintenance and cleanings, restorative dentistry, and esthetic treatments like veneers and teeth whitening.",
  },
  {
    q: "What are your office hours?",
    a: "We are open Monday through Friday from 9:00am to 6:00pm, Saturday from 9:00am to 5:00pm, and closed on Sunday.",
  },
  {
    q: "Do you accept new patients?",
    a: "Yes! We warmly welcome new patients of all ages. Our friendly team is committed to making your first visit comfortable and informative. Please call us at (604) 273-8315 to schedule your appointment.",
  },
  {
    q: "What should I expect during my first visit?",
    a: "During your first visit, our team will conduct a thorough examination, take any necessary X-rays, and discuss your dental health goals. We take time to learn about your concerns and answer all your questions in a warm and welcoming environment.",
  },
  {
    q: "How can I schedule an appointment?",
    a: "You can schedule an appointment by calling us at (604) 273-8315, emailing info@friendlydental.ca, or using the contact form on our website. We look forward to hearing from you!",
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-hero-bg pt-24 pb-0 overflow-hidden">
        <FloatingDots />
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
            <AnimatedSection animation="fade-in-left" className="py-12 lg:py-20">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                Friendly Dental Centre
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Richmond's{" "}
                <span className="text-secondary">Trusted</span>
                <br />
                Dental Professionals
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg mb-8">
                Our friendly team is committed to providing you with the highest level of professional
                services and personalized care in a warm and welcoming environment.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="tel:6042738315" className="btn-primary">
                  <Phone className="w-4 h-4" />
                  (604) 273-8315
                </a>
                <Link to="/services" className="btn-secondary">
                  Our Services
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right" className="relative flex justify-center lg:justify-end">
              <img
                src={heroImage}
                alt="Smiling patient at Friendly Dental Centre"
                className="w-full max-w-md lg:max-w-lg rounded-t-3xl object-cover"
                loading="eager"
              />
            </AnimatedSection>
          </div>
        </div>

        {/* Contact Form below hero */}
        <div className="container-max px-4 sm:px-6 lg:px-8 -mb-16 relative z-10 pb-4">
          <ContactForm />
        </div>
      </section>

      {/* Spacer for form overlap */}
      <div className="h-20 bg-background" />

      {/* Welcome Section */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="section-title mb-6">
                Welcome to{" "}
                <span className="text-secondary">Friendly Dental Centre</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our friendly team is committed to providing you with the highest level of professional
                services and personalized care in a warm and welcoming environment. We believe that
                building strong relationships with our patients is the key to exceptional dental care,
                and we look forward to knowing you and your unique needs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Thank you for choosing Friendly Dental in achieving your optimal oral health.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-right">
              <img
                src={officeImage}
                alt="Friendly Dental Centre office interior"
                className="rounded-2xl shadow-xl w-full"
                loading="lazy"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="section-padding bg-section-alt">
        <div className="container-max text-center">
          <AnimatedSection>
            <h2 className="section-title mb-4">
              Why Trust <span className="text-secondary">Friendly Dental?</span>
            </h2>
            <p className="section-subtitle mx-auto mb-12">
              We understand that visiting the dentist can be stressful. Our highly trained and
              knowledgeable team is dedicated to providing you with personalized care in a warm and
              inviting environment.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Experienced Team",
                desc: "Our doctors bring decades of combined experience and advanced training from top dental schools worldwide.",
                icon: "🏆",
              },
              {
                title: "Patient-Centered Care",
                desc: "We take time learning about your concerns and answering your questions to keep your mind at ease.",
                icon: "❤️",
              },
              {
                title: "Modern Technology",
                desc: "We use state-of-the-art dental equipment to ensure the most effective and comfortable treatments.",
                icon: "⚡",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-title mb-4">
              Our <span className="text-secondary">Friendly Services</span>
            </h2>
            <p className="section-subtitle mx-auto">
              We have the knowledge and experience to achieve your optimal oral health.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <Link to="/services" className="card-service p-6 hover:border-secondary/30 group">
                  <div className="text-3xl mb-3">{service.icon}</div>
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

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10+", label: "Years in Business" },
              { value: "4", label: "Expert Dentists" },
              { value: "6", label: "Dental Services" },
              { value: "1000+", label: "Happy Patients" },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="text-primary-foreground">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-section-alt">
        <div className="container-max">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-title mb-4">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Have a question? Find answers to our most commonly asked questions below.
            </p>
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

      {/* CTA */}
      <section className="section-padding bg-primary text-center">
        <div className="container-max">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready for Your Best Smile?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Our team is happy to help you and your family achieve that perfect smile!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6042738315" className="bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-all inline-flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <Link
                to="/contact"
                className="bg-primary-foreground text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary-foreground/90 transition-all"
              >
                Book Online
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
