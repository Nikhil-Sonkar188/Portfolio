import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech (Mechanical Engineering)",
    institution: "Delhi Technological University (DTU)",
    period: "2023 – 2027",
    grade: "CGPA: 7.2",
    icon: GraduationCap,
  },
  {
    degree: "12th CBSE",
    institution: "Kendriya Vidyalaya, Varanasi",
    period: "2023",
    grade: "91.2%",
    icon: Award,
  },
];

const EducationSection = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono mb-2">My Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            {education.map((item, index) => (
              <div key={index} className="relative pl-20 pb-12 last:pb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                
                <div className="glass-effect p-6 rounded-2xl hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold">{item.degree}</h3>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                          {item.grade}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{item.institution}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.period}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
