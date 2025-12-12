import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePlaceholder from "@/assets/profile-placeholder.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <p className="text-primary font-mono text-lg mb-4">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Nikhil <span className="text-gradient">Sonkar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              React Native Developer & Cross-Platform App Engineer
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Building scalable mobile applications with real-time systems, modern UI, and optimized performance. Currently pursuing B.Tech at DTU.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" asChild>
                <a href="#projects">Explore Projects</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">View Resume</a>
              </Button>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-muted-foreground text-sm">Follow me:</span>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/nikhil-sonkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/nikhilsonkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="mailto:nikhilsonkar_23me188@dtu.ac.in"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-secondary">
                  <img
                    src={profilePlaceholder}
                    alt="Nikhil Sonkar - React Native Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl p-4 shadow-lg">
                <p className="text-sm text-muted-foreground">Experience</p>
                <p className="text-2xl font-bold text-primary">2+ Years</p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
