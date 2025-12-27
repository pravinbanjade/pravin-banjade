import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Labs", href: "#projects" }, // section id is still "projects"
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/abhishekbhandari1",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/abhishekbhandari3/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:workwithabhishek3@gmail.com",
      label: "Email",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Back to Top Button */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <Button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full btn-hero shadow-lg hover:shadow-[var(--shadow-glow)]"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </div>

      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="font-display text-2xl font-bold text-gradient">
              Abhishek Bhandari
            </div>
            <p className="text-muted-foreground leading-relaxed">
              DevOps Engineer focused on CI/CD, Infrastructure as Code, and reliable deployments.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Bhaktapur, Nepal</p>

              <a
                href="mailto:workwithabhishek3@gmail.com"
                className="block hover:text-primary transition-colors duration-300"
              >
                workwithabhishek3@gmail.com
              </a>

              <a
                href="tel:+9779864022313"
                className="block hover:text-primary transition-colors duration-300"
              >
                +977 9864022313
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm">
            © {currentYear} Abhishek Bhandari. All rights reserved.
          </div>

          <div className="text-muted-foreground text-sm">
            <a
              href="/CV.pdf"
              download
              className="hover:text-primary transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
