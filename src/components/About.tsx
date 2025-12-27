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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-display font-semibold">
                Passionate DevOps Engineer
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Abhishek Bhandari, a DevOps Engineer focused on automating delivery and improving system reliability.
                I enjoy building CI/CD pipelines, managing Infrastructure as Code, and creating clear observability
                logging, metrics, alerting so teams can ship faster with confidence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I work closely with developers to standardize builds, deployments, and environments reducing manual steps and making releases repeatable.
                I also care about operational readiness: monitoring, incident response, and continuous improvement after outages.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I’m not working on automation, you’ll find me learning cloud and Kubernetes practices,
                writing project documentation, and improving my portfolio projects with better security and reliability.
              </p>
            </div>
          </div>

          {/* Strengths Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strengths.map((strength, index) => (
              <Card
                key={strength.title}
                className="card-glass card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <strength.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{strength.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
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