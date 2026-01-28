import { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsEnhanced = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const topSkills = [
    { name: 'AWS', level: 95, color: '#FF9900', category: 'Cloud' },
    { name: 'Terraform', level: 90, color: '#7B42BC', category: 'IaC' },
    { name: 'Kubernetes', level: 90, color: '#326CE5', category: 'Container' },
    { name: 'Docker', level: 95, color: '#2496ED', category: 'Container' },
    { name: 'Jenkins', level: 90, color: '#D24939', category: 'CI/CD' },
    { name: 'GitLab CI/CD', level: 90, color: '#FCA121', category: 'CI/CD' },
    { name: 'GitHub Actions', level: 85, color: '#2088FF', category: 'CI/CD' },
    { name: 'Prometheus', level: 85, color: '#E6522C', category: 'Monitoring' },
    { name: 'Grafana', level: 85, color: '#F46800', category: 'Monitoring' },
    { name: 'Python', level: 85, color: '#3776AB', category: 'Language' },
    { name: 'Azure', level: 75, color: '#0078D4', category: 'Cloud' },
    { name: 'GCP', level: 75, color: '#4285F4', category: 'Cloud' },
    { name: 'Bash', level: 90, color: '#4EAA25', category: 'Language' },
    { name: 'Go', level: 70, color: '#00ADD8', category: 'Language' }
  ];

  const ProgressBar = ({ skill, delay }: { skill: typeof topSkills[0]; delay: number }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, delay);

      return () => clearTimeout(timer);
    }, [isVisible, skill.level, delay]);

    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: skill.color }}
            />
            <span className="font-medium">{skill.name}</span>
            <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded">
              {skill.category}
            </span>
          </div>
          <span className="text-sm text-muted-foreground font-semibold">{skill.level}%</span>
        </div>
        <div className="h-2.5 bg-secondary/50 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000 ease-out relative"
            style={{
              width: `${progress}%`,
              backgroundColor: skill.color,
              boxShadow: `0 0 10px ${skill.color}50`
            }}
          >
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
              style={{ 
                backgroundSize: '200% 100%',
                animation: 'shimmer 2s infinite'
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 scroll-animate animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Core <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 md:mb-8"></div>
        </div>

        <Card className="card-glass">
          <CardContent className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {topSkills.map((skill, index) => (
                <ProgressBar
                  key={skill.name}
                  skill={skill}
                  delay={index * 100}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tech Stack Legend */}
        <div className="mt-12 md:mt-16">
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-8">
            Technology Categories
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {['Cloud', 'Container', 'CI/CD', 'IaC', 'Monitoring', 'Language'].map((category) => (
              <div
                key={category}
                className="px-4 py-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-300"
              >
                <span className="font-medium text-sm">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsEnhanced;
