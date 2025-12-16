import { ExternalLink, Github, Car, ShoppingCart, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, Variants, easeOut } from "framer-motion";

// ----------------------
// Import tech icons (add your actual filenames in assets)
// ----------------------
import reactIcon from "../assets/React-icon.png";
import mongoIcon from "../assets/mongodb.svg";
import socketIcon from "../assets/socket.png";
import jsIcon from "../assets/java script.png";
import expoIcon from "../assets/React-icon.png";
import firebaseIcon from "../assets/firebase.png";
import supabaseIcon from "../assets/supabase.png";
import stripeIcon from "../assets/stripe.png";
import javaIcon from "../assets/java.png";

// ----------------------
// Tech → Icon mapping
// ----------------------
const techIcons: Record<string, string> = {
  "React Native CLI": reactIcon,
  "React Native Expo": expoIcon,
  MongoDB: mongoIcon,
  "Socket.IO": socketIcon,
  JavaScript: jsIcon,
  Firebase: firebaseIcon,
  Supabase: supabaseIcon,
  Stripe: stripeIcon,
  Java: javaIcon,
  OOP: javaIcon,
  "Game Logic": javaIcon,
};

// ----------------------
// Projects Data
// ----------------------
const projects = [
  {
    title: "Omni",
    subtitle: "Ride-Hailing App",
    description:
      "Full-featured ride-hailing application with real-time GPS tracking, driver-rider matching, and fare calculation system.",
    icon: Car,
    tech: ["React Native CLI", "MongoDB", "Socket.IO", "JavaScript"],
    features: ["Real-time GPS tracking", "Driver-rider matching", "Role-based login", "Fare calculation"],
    github: "https://github.com/nikhilme188/Omni",
  },
  {
    title: "OLX Marketplace",
    subtitle: "Full-Stack E-Commerce",
    description:
      "Complete marketplace application with authentication, payment integration, cart system, and admin panel.",
    icon: ShoppingCart,
    tech: ["React Native Expo", "Firebase", "Supabase", "Stripe"],
    features: ["User authentication", "Payment integration", "Order tracking", "Admin panel"],
    github: "https://github.com/Nikhil-Sonkar188/OLX.git",
  },

];

// ----------------------
// Framer Motion Variants
// ----------------------
const parentVariant: Variants = {
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const techVariant: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: easeOut },
  },
};
const iconVariant: Variants = {
  initial: { scale: 1, rotate: 0, y: 0 },
  hover: {
    scale: 1.35,        // Slight enlarge
    rotate: -360,           // Slight rotation
    y: 5,               // Lift up a little
    transition: { type: "spring", stiffness: 2000 },
  },
};

// ----------------------
// Component
// ----------------------
const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-2">Projects</h2>
          <p className="text-primary font-mono ">What I've built</p>

        </div>

        <motion.div
          variants={parentVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              className="glass-effect rounded-2xl overflow-hidden group
                         hover:border-primary/60 transition-all duration-500
                         hover:shadow-[0_0_20px_4px_var(--primary)]
                         dark:hover:shadow-[0_0_25px_6px_rgba(0,150,255,0.6)]
                         transform hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="p-6">
                {/* Project Icon + Title */}
                <div className="flex items-center gap-4 mb-4">
                  {/* <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent
                                  flex items-center justify-center shadow-lg">
                    <project.icon className="text-primary-foreground" size={28} />
                  </div> */}
                  <motion.div
                    variants={iconVariant}
                    initial="initial"
                    whileHover="hover"
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent
             flex items-center justify-center shadow-inner mb-4 
             transition-transform duration-300 hover:shadow-[0_0_15px_3px_rgba(0,255,255,0.4)]"
                  >
                    <project.icon className="text-black" size={32} />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-xl">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Icons with Circular 3D effect */}
                <motion.div
                  variants={parentVariant}
                  className="flex flex-wrap gap-4 mb-6 justify-center"
                >
                  {project.tech.map((tech) => (
                    <motion.div
                      key={tech}
                      variants={techVariant}
                      className="flex flex-col items-center gap-2 px-3 py-3 bg-secondary/40
                                 rounded-xl cursor-pointer text-xs text-foreground
                                 hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.6)]
                                 hover:-translate-y-2 hover:scale-105 transition-all duration-300"
                    >
                      <div className="w-14 h-14 rounded-full bg-white/10 dark:bg-white/5
                                      backdrop-blur-md flex items-center justify-center shadow-inner
                                      transition-transform duration-300 hover:scale-110 hover:rotate-3">
                        {techIcons[tech] && (
                          <img
                            src={techIcons[tech]}
                            alt={tech}
                            className="w-8 h-8 object-contain transition-transform duration-300"
                          />
                        )}
                      </div>
                      <span className="text-xs font-medium">{tech}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Features */}
                {/* <ul className="space-y-1 mb-6">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul> */}
                <ul className="flex flex-wrap gap-2 mb-6">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 px-3 py-1
                 rounded-full bg-secondary/40
                 text-xs text-muted-foreground
                 hover:bg-primary/10 transition"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* GitHub Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:border-primary group-hover:text-primary"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" size={16} />
                    View on GitHub
                    <ExternalLink className="ml-2" size={14} />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Glass effect styling */}
      <style>{`
        .glass-effect {
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(10px);
        }
        .dark .glass-effect {
          background: rgba(255, 255, 255, 0.03);
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
