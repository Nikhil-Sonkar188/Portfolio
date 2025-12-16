// import { Code2, Smartphone, Server, Zap } from "lucide-react";

// const highlights = [
//   {
//     icon: Smartphone,
//     title: "Mobile Development",
//     description: "React Native CLI & Expo specialist",
//   },
//   {
//     icon: Server,
//     title: "Backend Integration",
//     description: "Firebase, MongoDB, Supabase",
//   },
//   {
//     icon: Code2,
//     title: "Real-time Systems",
//     description: "Socket.IO for live applications",
//   },
//   {
//     icon: Zap,
//     title: "Performance",
//     description: "Optimized, scalable solutions",
//   },
// ];

// const AboutSection = () => {
//   return (
//     <section id="about" className="py-24 relative">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <p className="text-primary font-mono mb-2">Get to know me</p>
//           <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               I'm <span className="text-foreground font-semibold">Nikhil Sonkar</span>, a passionate developer pursuing B.Tech in Mechanical Engineering at <span className="text-primary">Delhi Technological University</span> (2023–2027) with a CGPA of 7.2.
//             </p>
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               While my degree is in Mechanical Engineering, my true passion lies in mobile app development and building real-time application systems. I specialize in <span className="text-foreground font-semibold">React Native</span> development and have experience working with Redux Toolkit, Firebase, MongoDB, and Socket.IO.
//             </p>
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               Beyond coding, I'm a proactive leader serving as Co-Head at <span className="text-primary">E-Cell DTU</span> and PR Co-Head at DTU Sports Council, managing large-scale events and corporate collaborations.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             {highlights.map((item, index) => (
//               <div
//                 key={item.title}
//                 className="glass-effect p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 group"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
//                   <item.icon className="text-primary" size={24} />
//                 </div>
//                 <h3 className="font-semibold mb-2">{item.title}</h3>
//                 <p className="text-sm text-muted-foreground">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;




import { Code2, Smartphone, Server, Zap } from "lucide-react";
import { motion, Variants, easeOut } from "framer-motion";

// ----------------------
// Highlight Data
// ----------------------
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

// Floating icon animation
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
const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">About Me</h2>
          <p className="text-primary font-mono ">Get to know me</p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left About Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-semibold">Nikhil Sonkar</span>, a passionate developer pursuing B.Tech in Mechanical Engineering at
              <span className="text-primary"> Delhi Technological University</span> (2023–2027).
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              While my degree is in Mechanical Engineering, my true passion lies in mobile app development and building real-time systems.
              I specialize in <span className="text-foreground font-semibold">React Native</span> and have experience with Redux Toolkit, NodeJs, Firebase, MongoDB, and Socket.IO and many more.
            </p>

            {/* <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I'm a proactive leader: Co-Head at <span className="text-primary">E-Cell DTU</span> and PR Co-Head at DTU Sports Council,
              managing large-scale events and corporate collaborations.
            </p> */}
          </div>

          {/* Right Highlight Cards */}
          <motion.div
            variants={parentVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                variants={cardVariant}
                className="glass-effect p-6 rounded-2xl group 
                           transition-all duration-500
                           hover:border-primary/50
                           hover:shadow-[0_0_20px_4px_var(--primary)]
                           dark:hover:shadow-[0_0_25px_6px_rgba(0,150,255,0.6)]
                           transform hover:-translate-y-2 hover:scale-[1.02]"
              >
                {/* Floating + Hover Icon */}
                <motion.div
                  variants={iconVariant}
                  initial="initial"
                  animate="float"
                  whileHover="hover"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20
             flex items-center justify-center shadow-inner mb-4 
             transition-transform duration-300 hover:shadow-[0_0_15px_3px_rgba(0,255,255,0.4)]"
                // className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center 
                //            mb-4 shadow-inner transition-transform duration-300 
                //            group-hover:bg-primary/20
                //            hover:shadow-[0_0_12px_2px_rgba(0,255,255,0.4)]"
                >
                  <item.icon className="text-primary" size={24} />
                </motion.div>

                <h3 className="font-semibold mb-2">{item.title}</h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Glass Effect */}
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

export default AboutSection;
