import { Briefcase, Users, Rocket } from "lucide-react";

const experiences = [
  {
    title: "Frontend Lead",
    company: "Hiring/Work Platform",
    period: "Sep 2025",
    icon: Rocket,
    points: [
      "Led frontend development & launched major features",
      "Introduced multilingual support for wider reach",
      "Improved performance and code quality with structured reviews",
      "Collaborated with backend & design teams efficiently",
    ],
  },
  {
    title: "Intern",
    company: "DRDO (SSPL)",
    period: "Jun – Jul 2025",
    icon: Briefcase,
    points: [
      "Integrated engineering design concepts into functional systems",
      "Worked on quantum computing platform design",
      "Applied mechanical engineering principles to tech solutions",
    ],
  },
  {
    title: "Co-Head",
    company: "E-Cell DTU",
    period: "2023 – Present",
    icon: Users,
    points: [
      "Increased sponsorships by 35%",
      "Organized 10+ events with 5000+ attendees",
      "Led corporate collaborations & workshops",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono mb-2">Where I've worked</p>
          <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <exp.icon className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{exp.title}</h3>
                  <p className="text-primary text-sm">{exp.company}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4 font-mono">{exp.period}</p>
              <ul className="space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
