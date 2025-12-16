import React from "react";
import { motion, Variants, easeOut } from "framer-motion";

// ----------------------
//  Import Skill Icons
// ----------------------
import reactIcon from "../assets/React-icon.png";
import reduxIcon from "../assets/redux.png";
import firebaseIcon from "../assets/firebase.png";
import mongoIcon from "../assets/mongodb.svg";
import supabaseIcon from "../assets/supabase.png";
import socketIcon from "../assets/socket.png";
import jsIcon from "../assets/java script.png";
import tsIcon from "../assets/Typescript.png";
import javaIcon from "../assets/java.png";
import gitIcon from "../assets/github.svg";
import stripeIcon from "../assets/stripe.png";
import apiIcon from "../assets/rest api.png";
import postmanIcon from "../assets/postman.jpg";
import uiux from "../assets/uiux.png";
// ----------------------
// Skill → Icon mapping
// ----------------------
const skillIcons: Record<string, string> = {
  "React Native CLI": reactIcon,
  "React Native Expo": reactIcon,
  "Redux Toolkit": reduxIcon,
  Firebase: firebaseIcon,
  MongoDB: mongoIcon,
  Supabase: supabaseIcon,
  "Socket.IO": socketIcon,
  JavaScript: jsIcon,
  TypeScript: tsIcon,
  Java: javaIcon,
  "Git/GitHub": gitIcon,
  Stripe: stripeIcon,
  "APIs": apiIcon,
  Postman: postmanIcon,
  "Mobile UI/UX": uiux,
};

// ----------------------
// Skill Categories
// ----------------------
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
    skills: ["Git/GitHub", "Stripe", "APIs", "Postman"],
  },
];

// ----------------------
// Framer Motion Variants
// ----------------------
const containerVariant: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easeOut, // FIXED FOR TYPESCRIPT
    },
  },
};

// ----------------------
// Component
// ----------------------
const SkillsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold mb-2">Skills</h2>
          <p className="text-primary font-mono ">My toolkit</p>
         
        </div>

        {/* Main Animated Grid */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto p-0 "
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              className="glass-effect p-6 rounded-2xl border border-transparent overflow-hidden
                         transition-all duration-500 hover:border-primary/50 
                         hover:shadow-[0_0_15px_rgba(0,200,255,0.6)]
                         dark:hover:shadow-[0_0_15px_rgba(0,150,255,0.6)] "
            >
              <h3 className="font-semibold text-lg mb-4 text-primary">
                {category.title}
              </h3>

              {/* Skills inside card */}
              <motion.div
                variants={containerVariant}
                className="grid grid-cols-2 gap-5"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariant}
                    className="flex flex-col items-center gap-2 px-0 py-4 
                               bg-secondary/40 rounded-xl text-sm text-foreground w-26
                               transition-all duration-300 cursor-pointer
                               hover:-translate-y-2 hover:scale-105 hover:rotate-1
                               hover:bg-primary/10 
                               hover:shadow-[0_0_12px_rgba(0,255,255,0.7)]
                               dark:hover:shadow-[0_0_12px_rgba(0,255,180,0.7)]"
                  >
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="w-14 h-14 rounded-full bg-white/10 dark:bg-white/5 
                                 backdrop-blur-md flex items-center justify-center 
                                 shadow-inner border border-white/20"
                    >
                      {skillIcons[skill] && (
                        <motion.img
                          src={skillIcons[skill]}
                          alt={skill}
                          className="w-8 h-8 object-contain"
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        />
                      )}
                    </motion.div>

                    <p className="text-center text-xs font-medium">{skill}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Custom styling */}
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

export default SkillsSection;
