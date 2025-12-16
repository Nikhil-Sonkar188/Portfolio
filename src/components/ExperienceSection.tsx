import { Briefcase, Users, Rocket } from "lucide-react";
import { motion, Variants, easeOut } from "framer-motion";

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
];

// ----------------------
// Framer Motion Variants
// ----------------------
const parentVariant: Variants = {
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: easeOut } },
};


// Icon hover + floating effect
// const iconVariant: Variants = {
//   initial: { scale: 1, rotate: 0, y: 0 },
//   hover: { scale: 1.15, rotate: 360, y: -3, transition: { type: "spring", stiffness: 200 } },
//   float: { y: [0, -4, 0], transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } },
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
const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Experience</h2>
          <p className="text-primary font-mono ">Where I've worked</p>

        </div>

        <motion.div
          variants={parentVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              className="w-full md:w-[48%] lg:w-[30%] glass-effect p-6 rounded-2xl hover:border-primary/50
                         transition-all duration-500 group hover:shadow-[0_0_20px_4px_var(--primary)]
                         dark:hover:shadow-[0_0_25px_6px_rgba(0,150,255,0.6)]
                         transform hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4 mb-6">
                {/* Icon with floating + hover effect */}
                <motion.div
                  variants={iconVariant}
                  initial="initial"
                  animate="float"
                  whileHover="hover"
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20
             flex items-center justify-center shadow-inner mb-4 
             transition-transform duration-300 hover:shadow-[0_0_15px_3px_rgba(0,255,255,0.4)]"
                >
                  <exp.icon className="text-[#43BCF4]" size={28} />
                </motion.div>

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

export default ExperienceSection;
