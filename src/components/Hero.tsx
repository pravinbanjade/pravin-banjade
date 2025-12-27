import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/photo.jpg';

const Hero = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'CV.pdf';
    link.click();
  };

  return (
    <section id="home" className="section-padding min-h-screen flex items-center bg-gradient-to-br from-background to-secondary/20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient">Abhishek Bhandari</span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
                DevOps Engineer
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Building reliable CI/CD pipelines, Infrastructure as Code, and observable systems for faster, safer releases.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={downloadCV}
                className="btn-hero px-8 py-6 text-lg font-semibold"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button
                variant="outline"
                className="btn-outline px-8 py-6 text-lg font-semibold"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              <a
                href="https://github.com/abhishekbhandari1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishekbhandari3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:workwithabhishek3@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="relative animate-slide-up lg:animate-fade-in">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-full blur-3xl animate-float"></div>

              {/* Photo Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-[var(--shadow-glow)]">
                <img
                  src={profilePhoto}
                  alt="Abhishek Bhandari"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary-glow/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;