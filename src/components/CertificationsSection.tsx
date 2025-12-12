import { Award, Medal, Star, Trophy } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "DRDO (SSPL) Quantum Internship Certificate",
    description: "Completed internship in quantum computing platform design",
  },
  {
    icon: Star,
    title: "Campus Ambassador",
    description: "Interns-Elite platform representative at DTU",
  },
  {
    icon: Medal,
    title: "Gold Medalist — Computer Olympiad",
    description: "National-level achievement in computer science",
  },
  {
    icon: Trophy,
    title: "Academic Excellence",
    description: "95% each in Physics & Chemistry",
  },
];

const CertificationsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono mb-2">Recognition</p>
          <h2 className="text-4xl md:text-5xl font-bold">Certifications & Achievements</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/30 transition-colors">
                <item.icon className="text-accent-foreground" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
