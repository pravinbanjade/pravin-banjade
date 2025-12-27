import { Zap, Workflow, Cloud, Boxes, Activity } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type LabCategory = "CI/CD" | "IaC" | "Containers" | "Observability";

type Lab = {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  category: LabCategory;
};

const Projects = () => {
  const projects: Lab[] = [
    {
      title: "CI/CD Pipeline Lab (GitHub Actions)",
      description:
        "Automated build/test, Docker image publishing, and deployment workflow using pipeline-as-code.",
      techStack: ["GitHub Actions", "Git", "Docker", "Linux"],
      features: ["Build & test stages", "Image publish", "Env-based deploy", "Reusable workflow"],
      category: "CI/CD",
    },
    {
      title: "Terraform IaC Lab (AWS VPC)",
      description:
        "Provisioned cloud networking with Terraform using version-controlled IaC and repeatable environments.",
      techStack: ["Terraform", "AWS", "VPC", "IAM"],
      features: ["Reusable modules", "Remote state", "Outputs", "Plan/apply workflow"],
      category: "IaC",
    },
    {
      title: "Docker & Compose Lab",
      description:
        "Containerized an application and set up local multi-service environments using Docker Compose.",
      techStack: ["Docker", "Docker Compose"],
      features: ["Multi-stage builds", "Service networking", "Env variables", "Health checks"],
      category: "Containers",
    },
    {
      title: "Observability Lab (Prometheus + Grafana)",
      description:
        "Set up metrics dashboards and basic alerting to improve visibility into service health.",
      techStack: ["Prometheus", "Grafana"],
      features: ["Dashboards", "Service metrics", "Alerts", "Runbook notes"],
      category: "Observability",
    },
  ];

  const categoryIcons: Record<LabCategory, React.ElementType> = {
    "CI/CD": Workflow,
    IaC: Cloud,
    Containers: Boxes,
    Observability: Activity,
  };

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Labs & <span className="text-gradient">Automations</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hands-on labs and automations focused on CI/CD, Infrastructure as Code, containers, and
            observability built to be repeatable, documented, and easy to demo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = categoryIcons[project.category] || Zap;

            return (
              <Card
                key={project.title}
                className="card-glass card-hover group animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3 gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>

                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Features</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.features.map((feature) => (
                          <Badge key={feature} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} className="text-xs bg-primary/10 text-primary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
