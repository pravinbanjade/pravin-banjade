import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GitBranch, 
  Cloud, 
  FileCode2, 
  Shield, 
  BarChart3, 
  Container, 
  Terminal,
  type LucideIcon
} from 'lucide-react';

const Skills = () => {
  const skillCategories: Array<{
    title: string;
    icon: LucideIcon;
    skills: Array<{ name: string; level: string }>;
  }> = [
    {
      title: 'CI/CD & GitOps',
      icon: GitBranch,
      skills: [
        { name: 'Jenkins', level: 'Advanced' },
        { name: 'GitLab CI/CD', level: 'Advanced' },
        { name: 'GitHub Actions', level: 'Advanced' },
        { name: 'Argo CD', level: 'Intermediate' },
        { name: 'Travis CI', level: 'Intermediate' }
      ]
    },
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 'Expert' },
        { name: 'Azure', level: 'Intermediate' },
        { name: 'GCP', level: 'Intermediate' },
        { name: 'DigitalOcean', level: 'Intermediate' }
      ]
    },
    {
      title: 'Infrastructure as Code',
      icon: FileCode2,
      skills: [
        { name: 'Terraform', level: 'Advanced' },
        { name: 'AWS CloudFormation', level: 'Advanced' },
        { name: 'Modules & State Management', level: 'Advanced' },
        { name: 'Multi-environment workflows', level: 'Advanced' }
      ]
    },
    {
      title: 'Security & Compliance',
      icon: Shield,
      skills: [
        { name: 'Trivy', level: 'Intermediate' },
        { name: 'OWASP ZAP', level: 'Intermediate' },
        { name: 'SonarQube', level: 'Intermediate' },
        { name: 'Snyk', level: 'Intermediate' },
        { name: 'IAM/Access Controls', level: 'Advanced' },
        { name: 'AWS Secrets Manager', level: 'Advanced' },
        { name: 'Hashicorp Vault', level: 'Intermediate' }
      ]
    },
    {
      title: 'Monitoring & Observability',
      icon: BarChart3,
      skills: [
        { name: 'Prometheus', level: 'Advanced' },
        { name: 'Grafana', level: 'Advanced' },
        { name: 'AWS CloudWatch', level: 'Advanced' },
        { name: 'Sentry', level: 'Intermediate' },
        { name: 'Loki', level: 'Intermediate' },
        { name: 'OpenTelemetry', level: 'Intermediate' }
      ]
    },
    {
      title: 'Containers & Orchestration',
      icon: Container,
      skills: [
        { name: 'Docker', level: 'Expert' },
        { name: 'Kubernetes', level: 'Advanced' },
        { name: 'Helm', level: 'Advanced' },
        { name: 'AWS ECS/EKS', level: 'Advanced' },
        { name: 'Docker Swarm', level: 'Intermediate' }
      ]
    },
    {
      title: 'Scripting & Automation',
      icon: Terminal,
      skills: [
        { name: 'Bash', level: 'Advanced' },
        { name: 'Python', level: 'Advanced' },
        { name: 'Go', level: 'Intermediate' }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300';
      case 'Advanced':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Intermediate':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-300';
    }
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 scroll-animate animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise in modern DevOps practices, cloud infrastructure, and automation frameworks.
          </p>
        </div>

        {/* Skills Grid - Better responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.title}
                className="card-glass card-hover scroll-animate animate-scale-in transition-smooth"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-semibold">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-secondary/30 hover:bg-secondary/50 hover:translate-x-1 transition-all duration-300"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <span className="font-medium text-sm">{skill.name}</span>
                      <Badge className={`text-xs ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <Card className="card-glass">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-display font-semibold mb-4">
                Core Expertise
              </h3>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                7+ years of experience in designing and implementing cloud-native infrastructure, CI/CD pipelines, 
                and automation frameworks. Proven track record of improving deployment frequency, reducing costs by 20%, 
                and maintaining 99%+ uptime for production systems serving enterprise and government clients.
              </p>

              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {[
                  "AWS (Primary)",
                  "Terraform",
                  "Kubernetes",
                  "Docker",
                  "Jenkins",
                  "GitLab CI/CD",
                  "Prometheus",
                  "Grafana",
                  "Python",
                  "Bash",
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
