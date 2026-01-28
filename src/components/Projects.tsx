import { Briefcase, Award } from "lucide-react";
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
      achievements: ["Optimized cloud platform cost reducing it by 45%"]
    },
    {
      title: "Voyanti Platform",
      client: "Voyanti",
      description: "Designed and provisioned AWS infrastructure (VPC, ECS, ECR, RDS, S3, CloudFront, Secrets Manager, and others) using Terraform for microservices platform.",
      achievements: ["Implemented Github CI/CD pipelines for automated testing and deployment", "Improved deployment efficiency by 40% while meeting security, compliance, and uptime requirements"]
    },
    {
      title: "ATFM-ACDM",
      client: "TIA Airport",
      description: "Designed and deployed a Proxmox-based virtualization cluster for Air Traffic Flow Management at Tribhuvan International Airport.",
      achievements: ["Configured HA, secure VM provisioning, and storage redundancy to support mission-critical operations"]
    },
    {
      title: "IATI Publishing Tool",
      client: "IATI",
      description: "Designed and provisioned AWS infrastructure with Terraform (VPC, ECS, RDS, S3, CloudFront) and implemented GitLab CI pipelines.",
      achievements: ["Improved data update efficiency by 30% while meeting security and availability requirements"]
    },
    {
      title: "NPBMIS",
      client: "National Planning Commission",
      description: "Built multi-cloud infrastructure with Terraform, integrated secure secret management, and enabled real-time monitoring for government planning projects.",
      achievements: []
    },
    {
      title: "AidStream",
      client: "In-house Product",
      description: "Integrated DevSecOps practices in CI/CD, enhancing transparency and data security for small organizations.",
      achievements: []
    },
    {
      title: "Census Nepal",
      client: "Nepal Government Project",
      description: "Managed secure, scalable deployments for Nepal's census data visualization.",
      achievements: []
    },
    {
      title: "Weaver Management System",
      client: "Label Step",
      description: "Automated order and wage tracking pipelines.",
      achievements: ["Reduced manual processing by 50%"]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 scroll-animate animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 md:mb-8"></div>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            7+ years of experience in DevOps engineering across multiple industries and technologies.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 flex items-center">
            <Briefcase className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-3 text-primary flex-shrink-0" />
            Work Experience
          </h3>
          
          <div className="space-y-6 md:space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={exp.title + exp.company}
                className="card-glass card-hover scroll-animate animate-slide-up transition-smooth"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader className="pb-3 md:pb-4 p-4 md:p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-2">
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary mb-1 md:mb-2">
                        {exp.title}
                      </h4>
                      <p className="text-base md:text-lg font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="secondary" className="self-start text-xs md:text-sm whitespace-nowrap">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">{exp.location}</p>
                </CardHeader>

                <CardContent className="p-4 md:p-6 pt-0">
                  <ul className="space-y-2 md:space-y-3">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 md:gap-3">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Selected Projects */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 flex items-center">
            <Award className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-3 text-primary flex-shrink-0" />
            Selected Projects
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="card-glass card-hover scroll-animate animate-scale-in transition-smooth"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 md:p-6">
                  <div className="mb-3 md:mb-4">
                    <h4 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h4>
                    <Badge variant="secondary" className="text-xs mb-2 md:mb-3">
                      Client: {project.client}
                    </Badge>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {project.achievements.length > 0 && (
                    <div>
                      <h5 className="text-xs md:text-sm font-medium mb-2">Key Achievements</h5>
                      <ul className="space-y-1.5 md:space-y-2">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-primary rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                            <span className="text-xs md:text-sm text-muted-foreground leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Achievements */}
        <div className="mt-12 md:mt-16">
          <Card className="card-glass">
            <CardContent className="p-4 md:p-6 lg:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center">
                Technical Achievements & Impact
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <h4 className="text-sm md:text-base font-semibold mb-2 flex items-start">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                    Reliability & Uptime
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Designed and operated infrastructure supporting 99%+ availability across production systems serving enterprise and government clients.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold mb-2 flex items-start">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                    Cost Optimization
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Implemented cloud resource management strategies resulting in $5,000+/month savings through right-sizing, reserved instances, and workload consolidation.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold mb-2 flex items-start">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                    Deployment Velocity
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Improved deployment frequency by 40% and reduced lead time for changes, enabling rapid feature delivery and quick incident response.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold mb-2 flex items-start">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                    Incident Management
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Established monitoring and alerting frameworks that reduced mean time to detection (MTTD) and mean time to resolution (MTTR) by 25–35%.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
