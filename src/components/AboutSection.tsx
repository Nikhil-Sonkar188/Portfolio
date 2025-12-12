import { Code2, Smartphone, Server, Zap } from "lucide-react";

const highlights = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native CLI & Expo specialist",
  },
  {
    icon: Server,
    title: "Backend Integration",
    description: "Firebase, MongoDB, Supabase",
  },
  {
    icon: Code2,
    title: "Real-time Systems",
    description: "Socket.IO for live applications",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimized, scalable solutions",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono mb-2">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-semibold">Nikhil Sonkar</span>, a passionate developer pursuing B.Tech in Mechanical Engineering at <span className="text-primary">Delhi Technological University</span> (2023–2027) with a CGPA of 7.2.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              While my degree is in Mechanical Engineering, my true passion lies in mobile app development and building real-time application systems. I specialize in <span className="text-foreground font-semibold">React Native</span> development and have experience working with Redux Toolkit, Firebase, MongoDB, and Socket.IO.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I'm a proactive leader serving as Co-Head at <span className="text-primary">E-Cell DTU</span> and PR Co-Head at DTU Sports Council, managing large-scale events and corporate collaborations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-effect p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
