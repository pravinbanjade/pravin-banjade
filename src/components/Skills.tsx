import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud & Infrastructure',
      icon: '☁️',
      skills: [
        { name: 'Linux', level: 'Advanced' },
        { name: 'Networking (DNS, TCP/IP)', level: 'Intermediate' },
        { name: 'AWS', level: 'Intermediate' },
        { name: 'Terraform (IaC)', level: 'Intermediate' },
        { name: 'Ansible', level: 'Intermediate' },
        { name: 'Nginx', level: 'Intermediate' }
      ]
    },
    {
      title: 'CI/CD & Containers',
      icon: '🔁',
      skills: [
        { name: 'Git', level: 'Advanced' },
        { name: 'GitHub', level: 'Advanced' },
        { name: 'GitHub Actions', level: 'Intermediate' },
        { name: 'Jenkins', level: 'Intermediate' },
        { name: 'Docker', level: 'Intermediate' },
        { name: 'Kubernetes', level: 'Beginner' },
        { name: 'Helm', level: 'Beginner' },
        { name: 'Bash', level: 'Intermediate' }
      ]
    },
    {
      title: 'Observability & Security',
      icon: '📈',
      skills: [
        { name: 'Prometheus', level: 'Beginner' },
        { name: 'Grafana', level: 'Beginner' },
        { name: 'ELK / Loki (Logging)', level: 'Beginner' },
        { name: 'Alerting', level: 'Beginner' },
        { name: 'Secrets (Vault / SOPS)', level: 'Beginner' },
        { name: 'DevSecOps basics', level: 'Beginner' }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Advanced':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A practical toolkit of tools and practices I use to automate delivery, manage infrastructure, and improve reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className="card-glass card-hover animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{category.icon}</div>
                <CardTitle className="text-xl font-semibold">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.05)}s` }}
                  >
                    <span className="font-medium">{skill.name}</span>
                    <Badge className={`text-xs ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <Card className="card-glass max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-semibold mb-4">
                Core Expertise
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Focused on automating software delivery and building reliable infrastructure using CI/CD
                pipelines and Infrastructure as Code. Comfortable with containerized deployments,
                environment consistency, and basic observability (monitoring, logging, and alerting) to
                support production-ready systems.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "AWS",
                  "Terraform",
                  "Docker",
                  "Kubernetes",
                  "GitHub Actions",
                  "Prometheus/Grafana",
                  "Linux",
                  "Git",
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
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