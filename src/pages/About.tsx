import AnimatedSection from "@/components/AnimatedSection";
import officeImage from "@/assets/office-interior.jpg";
import teamImage from "@/assets/team-group.jpg";
import { MapPin, Clock, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-24 text-center">
        <div className="container-max px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Office</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            A warm and welcoming environment designed for your comfort
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-left">
              <img src={officeImage} alt="Friendly Dental Centre office" className="rounded-2xl shadow-xl w-full" loading="lazy" />
            </AnimatedSection>
            <AnimatedSection animation="fade-in-right">
              <h2 className="section-title mb-6">
                Welcome to <span className="text-secondary">Friendly Dental Centre</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our friendly team is committed to providing you with the highest level of professional
                services and personalized care in a warm and welcoming environment. We believe that building
                strong relationships with our patients is the key to exceptional dental care.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We understand that visiting the dentist can be stressful. Our highly trained and knowledgeable
                team is dedicated to providing you with personalized care in a warm and inviting environment.
                We take time learning about your concerns and answering your questions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Let us take care of your dental needs while keeping your mind at ease.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Team Preview */}
      <section className="section-padding bg-section-alt">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="section-title mb-6">Meet Our <span className="text-secondary">Friendly Team</span></h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our team of highly skilled dentists includes Dr. Patrick Wu, Dr. Mike Pan, Dr. Ivy Lin,
                and Dr. Jie Chen. Together, they bring decades of combined experience and a shared passion
                for delivering exceptional dental care.
              </p>
              <Link to="/team" className="btn-primary">
                Meet Our Dentists
              </Link>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-right">
              <img src={teamImage} alt="Friendly Dental team" className="rounded-2xl shadow-xl w-full" loading="lazy" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-title mb-4">Visit Us</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="w-8 h-8 text-secondary" />,
                title: "Our Location",
                lines: ["120 - 5508 Hollybridge Way", "Richmond, BC"],
                link: "https://maps.app.goo.gl/siy6NG1vN6Ckz9zR9",
              },
              {
                icon: <Clock className="w-8 h-8 text-secondary" />,
                title: "Office Hours",
                lines: ["Mon–Fri: 9:00am – 6:00pm", "Sat: 9:00am – 5:00pm", "Sun: Closed"],
              },
              {
                icon: <Phone className="w-8 h-8 text-secondary" />,
                title: "Contact Us",
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
                      {item.link.startsWith("tel") ? "Call Now" : "Get Directions"} →
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
