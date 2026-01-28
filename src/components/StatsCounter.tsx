import { useEffect, useState, useRef } from 'react';
import { TrendingUp, Award, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: Stat[] = [
    { icon: TrendingUp, value: 7, suffix: '+', label: 'Years Experience', color: 'text-primary' },
    { icon: Award, value: 20, suffix: '+', label: 'Projects Completed', color: 'text-primary' },
    { icon: Users, value: 99, suffix: '%', label: 'Uptime Achieved', color: 'text-primary' },
    { icon: Zap, value: 40, suffix: '%', label: 'Faster Deployments', color: 'text-primary' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

  const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
      <span className="text-3xl sm:text-4xl md:text-5xl font-bold">
        {count}{suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-gradient-to-br from-primary/5 to-primary-glow/5">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.label}
                className="card-glass card-hover relative overflow-hidden group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.6s ease-out ${index * 0.1}s`
                }}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary-glow/0 group-hover:from-primary/5 group-hover:to-primary-glow/10 transition-all duration-500" />
                
                <CardContent className="p-5 md:p-6 text-center relative z-10">
                  <div className="mb-3 md:mb-4 flex justify-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary/10 to-primary-glow/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`w-6 h-6 md:w-8 md:h-8 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
