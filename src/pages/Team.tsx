import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

const doctors = [
  {
    name: "Dr. Patrick Wu",
    title: "D.M.D.",
    education: [
      "University of Pennsylvania, School of Dental Medicine, 2009",
      "Clinical assistant professor, University of British Columbia",
      "Associate Fellow, American Association of Implant Dentistry",
    ],
    bio: "Dr. Patrick Wu, an honour graduate from the esteemed University of Pennsylvania, practiced dentistry in New Jersey for four years before returning to his hometown of Vancouver in 2012. Dr. Wu treats patients across all age groups and has profound interest in implant dentistry, orthodontics, pediatrics, and complex restorative cases.",
    image: "https://friendlydental.ca/wp-content/uploads/2023/04/team-member2.png",
  },
  {
    name: "Dr. Mike Pan",
    title: "D.D.S.",
    education: [
      "Chung Shan Medical University, 2005",
      "National Dental Examining Board of Canada, 2015",
    ],
    bio: "Dr. Pan has depth of knowledge and outstanding skills in orthodontics, implant dentistry, wisdom teeth removal and various aspects of dental treatment. He is best known for clinical problem solving and high proficiency. Outside of work, Dr. Pan is equally talented in golfing, skiing, millwork, and music.",
    image: "https://friendlydental.ca/wp-content/uploads/2023/04/team-member1.png",
  },
  {
    name: "Dr. Ivy Lin",
    title: "D.D.S.",
    education: [
      "Shanghai Jiao Tong University, 2005",
      "National Dental Examining Board of Canada, 2015",
    ],
    bio: "Dr. Ivy Lin is gentle, caring and detail-oriented delivering dental care to patients of all ages. She has exceptional skills in restoration and providing her patients with relaxing and pleasant treatment experience.",
    image: "https://friendlydental.ca/wp-content/uploads/2023/04/team-member.png",
  },
  {
    name: "Dr. Jie Chen",
    title: "D.D.S.",
    education: [
      "D.D.S., Masters in Prosthodontics",
      "Shanghai Jiao Tong University, 2008",
      "National Dental Examining Board of Canada, 2022",
    ],
    bio: "Dr. Chen is a highly skilled and experienced prosthodontist with expertise in cosmetic dentistry, complex restorations, dentures and full mouth rehabilitation. Her meticulous work and gentleness are much appreciated by patients. Dr. Chen can help you design a beautiful smile and restore the confidence in you.",
    image: "https://friendlydental.ca/wp-content/uploads/2024/04/dr-ogura88-88.jpg",
  },
];

const Team = () => {
  return (
    <div className="pt-20">
      <section className="bg-primary py-16 md:py-24 text-center">
        <div className="container-max px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Team</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Meet our friendly and experienced dental professionals
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="space-y-16">
            {doctors.map((doc, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className={`grid lg:grid-cols-5 gap-8 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={`lg:col-span-2 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full max-w-sm mx-auto rounded-2xl shadow-xl object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className={`lg:col-span-3 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">{doc.name}</h2>
                    <p className="text-secondary font-semibold text-lg mb-4">{doc.title}</p>
                    <ul className="space-y-1 mb-4">
                      {doc.education.map((edu, j) => (
                        <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          {edu}
                        </li>
                      ))}
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">{doc.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-center">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Meet Our Team?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Schedule your appointment today and experience the Friendly Dental difference.
          </p>
          <Link to="/contact" className="bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-all">
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Team;
