import { Smartphone, Wifi, Database, Palette, Zap } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Cross-Platform Mobile Apps",
    description: "Building iOS & Android apps with React Native for maximum code reuse and native performance.",
  },
  {
    icon: Wifi,
    title: "Real-time Applications",
    description: "Socket.IO integration for live updates, chat systems, and real-time data synchronization.",
  },
  {
    icon: Database,
    title: "Backend Integration",
    description: "Seamless connection with Firebase, Supabase, MongoDB, and REST APIs.",
  },
  {
    icon: Palette,
    title: "Mobile UI/UX Design",
    description: "Creating intuitive, beautiful mobile interfaces with modern design principles.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimizing React Native apps for speed, responsiveness, and smooth animations.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono mb-2">What I offer</p>
          <h2 className="text-4xl md:text-5xl font-bold">Services</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 group text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                <service.icon className="text-primary" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
