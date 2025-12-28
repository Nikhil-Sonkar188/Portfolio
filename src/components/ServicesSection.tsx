import { Smartphone, Wifi, Database, Palette, Zap } from "lucide-react";
import { motion, Variants, easeOut } from "framer-motion";

const services = [
  {
    icon: Smartphone,
    title: "Cross-Platform Mobile Apps",
    description:
      "Building iOS & Android apps with React Native for maximum code reuse and native performance.",
  },
  {
    icon: Wifi,
    title: "Real-time Applications",
    description:
      "Socket.IO integration for live updates, chat systems, and real-time data synchronization.",
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
    description:
      "Optimizing React Native apps for speed, responsiveness, and smooth animations.",
  },
];

// ----------------------
// Framer Motion Variants
// ----------------------
const parentVariant: Variants = {
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
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

// Icon floating + hover effect
// const iconVariant: Variants = {
//   initial: { scale: 1, rotate: 0, y: 0 },
//   hover: { scale: 1.15, rotate: 5, y: -3, transition: { type: "spring", stiffness: 200 } },
//   float: { y: [0, -5, 0], transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } },
// };
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
const ServicesSection = () => {
  return (
    <section className="py-24 ">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Services</h2>
          <p className="text-primary font-mono ">What I offer</p>
          
        </div>

        <motion.div
          variants={parentVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              className="glass-effect p-6 rounded-2xl text-center
                         hover:border-primary/50 transition-all duration-500
                         hover:shadow-[0_0_20px_4px_var(--primary)]
                         dark:hover:shadow-[0_0_25px_6px_rgba(0,150,255,0.6)]
                         transform hover:-translate-y-2 hover:scale-[1.02]"
            >
              {/* Icon with floating & hover animation */}
              <motion.div
                variants={iconVariant}
                initial="initial"
                animate="float"
                whileHover="hover"
                className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20
             flex items-center justify-center mx-auto  shadow-innershadow-inner mb-4 
             transition-transform duration-300 hover:shadow-[0_0_15px_3px_rgba(0,255,255,0.4)]"
              // className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20
              //            flex items-center justify-center mx-auto mb-4 shadow-inner
              //            transition-transform duration-300
              //            hover:shadow-[0_0_15px_3px_rgba(0,255,255,0.4)]"
              >
                <service.icon className="text-primary" size={32} />
              </motion.div>

              <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
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

export default ServicesSection;
