import { Award, Cloud, Server, Building2, Globe, Boxes, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

type Project = {
  title: string;
  client: string;
  description: string;
  achievements: string[];
  tech: string[];
  icon: any;
};

const Projects = () => {
  const experiences: Experience[] = [
    {
      title: "Senior DevOps Engineer",
      company: "YoungInnovations Pvt. Ltd.",
      location: "Nepal",
      period: "Apr 2024 – Present",
      description: [
        "Architected and maintained CI/CD pipelines in GitLab for 15+ microservices, reducing deployment time by 40% and enabling multiple production releases daily across development, testing, and production environments.",
        "Oversaw multi-environment infrastructure on AWS, ensuring 99%+ uptime and implementing automated failover and disaster recovery strategies with defined RPO/RTO targets.",
        "Designed and implemented observability stack using Prometheus and Grafana across 20+ applications, improving incident detection by 25% and reducing mean time to detection (MTTD) from 45 to 15 minutes.",
        "Led release management strategy, implementing Git branching workflows (GitFlow), coordinating seamless multi-service deployments, and conducting post-deployment reviews to minimize rollback incidents.",
        "Mentored 3 junior DevOps engineers on Kubernetes, Terraform, and CI/CD best practices, fostering a culture of continuous learning and knowledge sharing through internal documentation and hands-on pair sessions.",
        "Developed and tested disaster recovery and business continuity plans, conducting quarterly drills to ensure system resilience and compliance with SLA requirements.",
        "Implemented security hardening across infrastructure: IAM role policies, secrets management, vulnerability scanning in CI pipelines, and network segmentation via VPC and security groups."
      ]
    },
    {
      title: "DevOps Engineer II",
      company: "YoungInnovations Pvt. Ltd. / Coding Mountain",
      location: "Nepal",
      period: "Mar 2022 – Mar 2024",
      description: [
        "Built and maintained CI/CD pipelines on AWS and GCP, supporting 10+ client applications and enabling 30% faster software delivery while reducing change failure rate from 18% to 8%.",
        "Managed multi-account AWS infrastructure (EC2, RDS, S3, CloudFront, Lambda, IAM) and GCP compute resources (GKE, Cloud Storage), implementing right-sizing and lifecycle policies that reduced monthly cloud spend by 20%.",
        "Implemented performance monitoring and alerting systems using Prometheus and CloudWatch, reducing incident response time by 35% (from 30 to 10 minutes MTTR).",
        "Automated repetitive operational tasks using Bash and Python scripts, eliminating ~15 manual hours per week and improving team productivity by 20%.",
        "Collaborated closely with development and operations teams to align infrastructure with project goals, participating in architectural reviews and defining non-functional requirements (availability, performance, security)."
      ]
    },
    {
      title: "DevOps Engineer",
      company: "Cellapp / SmartPalika",
      location: "Nepal",
      period: "Mar 2019 – Feb 2022",
      description: [
        "Administered and optimized Linux servers across production and staging environments, achieving 98%+ system reliability and implementing proactive monitoring to prevent critical incidents.",
        "Deployed containerized applications using Docker and Kubernetes (self-managed and cloud-based), consolidating infrastructure and reducing hosting costs by 25%.",
        "Led organization-wide migration to Git-based version control, establishing standardized branching strategies and CI/CD workflows that improved developer collaboration and code quality.",
        "Set up cloud-based collaboration and infrastructure tools (GitLab, monitoring dashboards), enhancing team productivity by 15% and reducing onboarding time for new engineers."
      ]
    },
    {
      title: "Frontend Developer",
      company: "Bits Innovations",
      location: "Nepal",
      period: "Oct 2017 – Jul 2018",
      description: [
        "Developed responsive, mobile-first user interfaces using React.js and modern JavaScript, improving user engagement by 20% and reducing bounce rates.",
        "Collaborated with design and product teams to create intuitive, device-agnostic web applications and contributed to design system standards."
      ]
    }
  ];

  const projects: Project[] = [
    {
      title: "Preprlabs",
      client: "Prepr",
      description: "Built Jenkins pipelines for automated deployments, integrated with Serverless and Laravel Vapor, and added telemetry for observability, enabling seamless scaling across environments.",
      achievements: ["Optimized cloud platform cost reducing it by 45%"],
      tech: ["Jenkins", "Serverless", "Laravel Vapor", "AWS"],
      icon: Cloud
    },
    {
      title: "Voyanti Platform",
      client: "Voyanti",
      description: "Designed and provisioned AWS infrastructure (VPC, ECS, ECR, RDS, S3, CloudFront, Secrets Manager, and others) using Terraform for microservices platform.",
      achievements: ["Implemented Github CI/CD pipelines for automated testing and deployment", "Improved deployment efficiency by 40% while meeting security, compliance, and uptime requirements"],
      tech: ["AWS", "Terraform", "GitHub Actions", "ECS", "RDS"],
      icon: Boxes
    },
    {
      title: "ATFM-ACDM",
      client: "TIA Airport",
      description: "Designed and deployed a Proxmox-based virtualization cluster for Air Traffic Flow Management at Tribhuvan International Airport.",
      achievements: ["Configured HA, secure VM provisioning, and storage redundancy to support mission-critical operations"],
      tech: ["Proxmox", "Virtualization", "High Availability"],
      icon: Server
    },
    {
      title: "IATI Publishing Tool",
      client: "IATI",
      description: "Designed and provisioned AWS infrastructure with Terraform (VPC, ECS, RDS, S3, CloudFront) and implemented GitLab CI pipelines.",
      achievements: ["Improved data update efficiency by 30% while meeting security and availability requirements"],
      tech: ["AWS", "Terraform", "GitLab CI", "CloudFront"],
      icon: Globe
    },
    {
      title: "NPBMIS",
      client: "National Planning Commission",
      description: "Built multi-cloud infrastructure with Terraform, integrated secure secret management, and enabled real-time monitoring for government planning projects.",
      achievements: [],
      tech: ["Multi-Cloud", "Terraform", "Monitoring"],
      icon: Building2
    },
    {
      title: "AidStream",
      client: "In-house Product",
      description: "Integrated DevSecOps practices in CI/CD, enhancing transparency and data security for small organizations.",
      achievements: [],
      tech: ["DevSecOps", "CI/CD", "Security"],
      icon: Cloud
    },
    {
      title: "Census Nepal",
      client: "Nepal Government Project",
      description: "Managed secure, scalable deployments for Nepal's census data visualization.",
      achievements: [],
      tech: ["Deployment", "Data Visualization", "Security"],
      icon: Building2
    },
    {
      title: "Weaver Management System",
      client: "Label Step",
      description: "Automated order and wage tracking pipelines.",
      achievements: ["Reduced manual processing by 50%"],
      tech: ["Automation", "Pipelines"],
      icon: TrendingUp
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 scroll-animate animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Project <span className="text-gradient">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 md:mb-8"></div>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Selected client projects showcasing DevOps implementation and cloud infrastructure expertise
          </p>
        </div>

        {/* Selected Projects */}
        <div>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
            <Award className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-3 text-primary flex-shrink-0" />
            Client Projects
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card
                  key={project.title}
                  className="card-glass card-hover scroll-animate animate-scale-in transition-smooth group relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary-glow/0 group-hover:from-primary/5 group-hover:to-primary-glow/10 transition-all duration-500 pointer-events-none" />
                  
                  <CardContent className="p-5 md:p-6 relative z-10">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base md:text-lg font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h4>
                        <Badge variant="secondary" className="text-xs">
                          {project.client}
                        </Badge>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="text-xs bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Achievements */}
                    {project.achievements.length > 0 && (
                      <div className="pt-4 border-t border-border/50">
                        <div className="space-y-2">
                          {project.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                              <span className="text-xs text-muted-foreground leading-relaxed">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
