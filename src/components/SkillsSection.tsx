const skillCategories = [
  {
    title: "Mobile Development",
    skills: ["React Native CLI", "React Native Expo", "Redux Toolkit", "Mobile UI/UX"],
  },
  {
    title: "Backend & Realtime",
    skills: ["Firebase", "MongoDB", "Supabase", "Socket.IO"],
  },
  {
    title: "Programming",
    skills: ["JavaScript", "TypeScript", "Java"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git/GitHub", "Stripe", "REST APIs", "Postman"],
  },
  {
    title: "Engineering",
    skills: ["NX CAD", "ANSYS", "System Integration"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono mb-2">My toolkit</p>
          <h2 className="text-4xl md:text-5xl font-bold">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-2xl hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="font-semibold text-lg mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-secondary/50 rounded-lg text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
