import { Cloud, Activity, Users, Workflow } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';


const About = () => {
  const strengths = [
    {
      icon: Workflow,
      title: 'Automation',
      description: 'Eliminating repetitive work with CI/CD pipelines and scripts to make delivery consistent and fast.'
    },
    {
      icon: Cloud,
      title: 'Infrastructure as Code',
      description: 'Provisioning and managing infrastructure through version-controlled code for repeatable environments.'
    },
    {
      icon: Activity,
      title: 'Observability',
      description: 'Implementing monitoring, logging, dashboards, and alerting to detect issues early and reduce downtime.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working across dev and ops to align releases, troubleshoot incidents, and improve processes.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 scroll-animate animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 md:mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-4 md:space-y-6 scroll-animate animate-slide-in-left">
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                Senior DevOps Engineer
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I'm Pravin Banjade, a Senior DevOps Engineer with 7+ years of experience designing, implementing, and optimizing cloud-native infrastructure, CI/CD pipelines, and automation frameworks for high-availability systems. 
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I have proven expertise in Kubernetes orchestration, multi-cloud deployments (AWS, GCP, Azure), and Infrastructure as Code (Terraform, CloudFormation), with a track record of improving deployment frequency, reducing infrastructure costs by up to 20%, and maintaining production systems at 99%+ uptime.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Skilled at mentoring engineering teams, leading reliability initiatives, and implementing security best practices across development and production environments. Passionate about leveraging modern DevOps and SRE practices to align infrastructure with business objectives and drive operational excellence.
              </p>
            </div>
          </div>

          {/* Strengths Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {strengths.map((strength, index) => (
              <Card
                key={strength.title}
                className="card-glass card-hover scroll-animate animate-scale-in transition-smooth"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="mb-3 md:mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <strength.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{strength.title}</h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {strength.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
