import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePlaceholder from "@/assets/profile-placeholder.png";
import { motion, useMotionValue, useTransform, Variants } from "framer-motion";

/* ------------------ VARIANTS ------------------ */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ------------------ COMPONENT ------------------ */
const HeroSection = () => {
  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-50, 50], [10, -10]);
  const rotateY = useTransform(mouseX, [-50, 50], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />

      {/* Animated Blobs */}
      <div className="blob1" />
      <div className="blob2" />

      {/* Optional existing circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ---------------- IMAGE (Left) ---------------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 flex justify-center"
          >
            <motion.div
              onMouseMove={handleMouseMove}
              style={{ rotateX, rotateY }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="relative perspective-[1200px]"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl animate-pulse" />

              {/* Avatar */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary to-accent p-1 animate-float">
                <div className="w-full h-full rounded-full overflow-hidden bg-secondary">
                  <img
                    src={profilePlaceholder}
                    alt="Nikhil Sonkar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl p-4 shadow-lg"
              >
                <p className="text-sm text-muted-foreground">Experience</p>
                <p className="text-2xl font-bold text-blue-400">6 Months</p>
              </motion.div>

              {/* Floating particles */}
              {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white/20 rounded-full w-2 h-2"
                  animate={{
                    x: [0, 50, -30, 0],
                    y: [0, -20, 40, 0],
                    opacity: [0.3, 0.8, 0.3, 0.5],
                  }}
                  transition={{
                    duration: 8 + i,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* ---------------- TEXT (Right) ---------------- */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="order-1 lg:order-2"
          >
            <motion.p
              variants={item}
              className="text-primary font-mono text-lg mb-4"
              whileHover={{ scale: 1.1, x: 5, color: "#3b82f6" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              variants={item}
              className="text-5xl md:text-7xl font-bold mb-4"
              whileHover={{ scale: 1.05, x: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Nikhil{" "}
              <motion.span
                className="bg-gradient-to-r from-blue-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent font-bold"
                animate={{ backgroundPositionX: ["0%", "100%"] }} // continuous animation
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              >
                Sonkar
              </motion.span>
            </motion.h1>

            <motion.h2
              variants={item}
              className="text-2xl md:text-3xl text-muted-foreground mb-6"
              whileHover={{ scale: 1.03, x: 8, color: "#facc15" }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              React Native Developer & Cross-Platform App Engineer
            </motion.h2>

            <motion.p
              variants={item}
              className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
              whileHover={{ scale: 1.02, x: 5, opacity: 0.9 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Building scalable mobile applications with real-time systems,
              modern UI, and optimized performance. Currently pursuing B.Tech at
              DTU, Delhi, India.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-4 mb-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                  asChild
                >
                  <a href="#projects">Explore Projects</a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:bg-yellow-600 hover:text-white"
                  asChild
                >
                  <a
                    href="https://drive.google.com/file/d/1O7X_gvs0H64GEldx_jFFVvfvMGqmwKLw/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={item} className="flex items-center gap-6">
              <span className="text-muted-foreground text-sm">Follow me:</span>
              <div className="flex gap-4">
                {[Linkedin, Github, Mail].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href={
                      i === 0
                        ? "https://linkedin.com/in/nikhil-sonkar"
                        : i === 1
                        ? "https://github.com/nikhilme188"
                        : "mailto:nikhil.sonkar1001@gmail.com"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary"
        >
          <ArrowDown size={32} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
