import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

const services = [
  {
    id: "implants",
    title: "Implants",
    desc: "Dental implants are a stable and secure surgical option for replacing one or more missing teeth. A dental implant uses an artificial root usually made of titanium. The implant is surgically inserted into the upper or lower jawbone and an artificial tooth is attached to the implant. The implant acts as an anchor to hold the replacement tooth in place.",
    image: "https://friendlydental.ca/wp-content/uploads/2023/08/stock-photo-first-person-shot-female-doctor-talking-to-a-young-woman-patient-discussion-of-the-treatment-plan-1975416662-2.png",
    icon: "🦷",
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    desc: "Whether you are an adult or a teen, a healthy smile with bright, well-aligned teeth can be an important part of your self-image. While well-aligned teeth can make a beautiful and confident smile, the benefits can reach far beyond. Improper alignments can also affect speech, chewing and digestion. In addition, teeth that are not well aligned or overcrowded may be more difficult to clean and cause decay or gum disease.",
    image: "https://friendlydental.ca/wp-content/uploads/2023/08/welcome-lm-img.png-2.png",
    icon: "😁",
  },
  {
    id: "pediatric",
    title: "Pediatric",
    desc: "We offer children's dentistry services to help your child maintain a healthy smile from an early age. We are experienced in working with children and will make sure your child feels comfortable and at ease during their dental visit. Our children's dentistry services include regular checkups, cleanings, and preventive care to help keep their teeth and gums healthy.",
    image: "https://friendlydental.ca/wp-content/uploads/2023/08/welcome-lm-img.png.png",
    icon: "👶",
  },
  {
    id: "maintenance",
    title: "Maintenance",
    desc: "Regular dental maintenance, including professional cleanings and comprehensive exams, is critical for maintaining good oral health. Professional cleaning is the most effective way of tackling tartar build-up and removing plaque, and regular cleanings are essential to combat tooth decay. A comprehensive dental exam is also critical to catching dental problems early and preventing them from becoming more serious and costly to treat.",
    image: "https://friendlydental.ca/wp-content/uploads/2023/08/welcome-lm-img.png-3.png",
    icon: "🪥",
  },
  {
    id: "restoratives",
    title: "Restoratives",
    desc: "Our restorative dentistry services can help repair damage caused by decay, injury, or other factors and restore your teeth to their optimal health and function. From filling cavities to root canals to repairing broken or missing teeth with dental implants or bridges, we offer a range of restorative dentistry services to help you regain your smile and confidence.",
    image: "https://friendlydental.ca/wp-content/uploads/2023/08/welcome-lm-img.png-1.png",
    icon: "🔧",
  },
  {
    id: "esthetics",
    title: "Esthetics",
    desc: "We believe that a beautiful smile can boost your confidence and improve your overall quality of life. Our esthetic dentistry services, including veneers, teeth whitening, direct composite bonding, and other cosmetic treatments, can help enhance the appearance of your teeth and give you the smile you've always wanted. From covering up chips or cracks in your teeth with veneers to brightening your smile with professional teeth whitening, we offer a range of esthetic dentistry services to help you achieve the perfect smile.",
    image: "https://friendlydental.ca/wp-content/uploads/2023/08/welcome-lm-img.png-4.png",
    icon: "✨",
  },
];

const Services = () => {
  return (
    <div className="pt-20">
      <section className="bg-primary py-16 md:py-24 text-center">
        <div className="container-max px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Services</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            We have the knowledge and experience to achieve your optimal oral health
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max space-y-20">
          {services.map((service, i) => (
            <AnimatedSection key={service.id} delay={100}>
              <div
                id={service.id}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "" : ""
                }`}
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
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{service.title}</h2>
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
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Contact us today to schedule your appointment and take the first step toward a healthier smile.
          </p>
          <Link
            to="/contact"
            className="bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
