import { ExternalLink, Github, Car, ShoppingCart, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Omni",
    subtitle: "Ride-Hailing App",
    description: "Full-featured ride-hailing application with real-time GPS tracking, driver-rider matching, and fare calculation system.",
    icon: Car,
    tech: ["React Native CLI", "MongoDB", "Socket.IO", "JavaScript"],
    features: ["Real-time GPS tracking", "Driver-rider matching", "Role-based login", "Fare calculation"],
    github: "https://github.com/nikhilsonkar/omni",
  },
  {
    title: "OLX Marketplace",
    subtitle: "Full-Stack E-Commerce",
    description: "Complete marketplace application with authentication, payment integration, cart system, and admin panel.",
    icon: ShoppingCart,
    tech: ["React Native Expo", "Firebase", "Supabase", "Stripe"],
    features: ["User authentication", "Payment integration", "Order tracking", "Admin panel"],
    github: "https://github.com/nikhilsonkar/olx-marketplace",
  },
  {
    title: "Tic-Tac-Toe",
    subtitle: "Java Mini Project",
    description: "Classic Tic-Tac-Toe game built with Java, featuring clean code architecture and intuitive gameplay.",
    icon: Gamepad2,
    tech: ["Java", "OOP", "Game Logic"],
    features: ["Two-player mode", "Win detection", "Game reset"],
    github: "https://github.com/nikhilsonkar/tic-tac-toe",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono mb-2">What I've built</p>
          <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <project.icon className="text-primary-foreground" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <ul className="space-y-1 mb-6">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" size="sm" className="w-full group-hover:border-primary group-hover:text-primary" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" size={16} />
                    View on GitHub
                    <ExternalLink className="ml-2" size={14} />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
