import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("subject", formData.subject);
      form.append("message", formData.message);

      // FormSubmit settings
      form.append("_captcha", "false");

      const res = await fetch(
        "https://formsubmit.co/ajax/035619f57b73883eac6fb566096439e2",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: form,
        }
      );

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("[FormSubmit] error:", error);

      toast({
        title: "Error!",
        description: "Something went wrong while sending your message.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pravinbanjade9@gmail.com",
      href: "mailto:pravinbanjade9@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+977 9860298863",
      href: "tel:+9779860298863",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Katunje, Bhaktapur, Nepal",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/pravinbanjade",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pravinbanjade/",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 scroll-animate animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 md:mb-8"></div>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Open to DevOps opportunities, collaborations, and cloud automation projects. Feel free to reach out anytime
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
                Let's Start a Conversation
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                Whether you have a project in mind, need technical consultation, or just want to connect, feel free to reach out through any of the channels below
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((contact, index) => (
                <Card
                  key={contact.label}
                  className="card-glass card-hover scroll-animate animate-scale-in transition-smooth"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-4 md:p-6">
                    <a href={contact.href} className="flex items-center gap-3 md:gap-4 group">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                        <contact.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs md:text-sm text-muted-foreground">{contact.label}</p>
                        <p className="text-sm md:text-base font-medium group-hover:text-primary transition-colors duration-300 truncate">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social */}
            <div>
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4">Connect</h4>
              <div className="flex gap-3 md:gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-glass">
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="text-xl md:text-2xl">Send Message</CardTitle>
            </CardHeader>

            <CardContent className="p-4 md:p-6 pt-0">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs md:text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                      className="text-sm md:text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs md:text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="you@example.com"
                      className="text-sm md:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs md:text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                    className="text-sm md:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Your message..."
                    rows={5}
                    className="resize-none text-sm md:text-base"
                  />
                </div>

                <Button type="submit" className="w-full btn-hero py-5 md:py-6 text-sm md:text-base transition-spring hover:scale-105" disabled={isLoading}>
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
