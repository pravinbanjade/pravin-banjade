import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CloudCog, 
  GitBranch, 
  Shield, 
  Rocket, 
  Award,
  TrendingUp 
} from 'lucide-react';

const BentoGrid = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 scroll-animate animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Why Choose <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 md:mb-8"></div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
          {/* Large Card - Cloud Expertise */}
          <Card className="md:col-span-2 card-glass card-hover scroll-animate animate-scale-in dark:bg-gradient-to-br dark:from-primary/10 dark:to-primary-glow/10 border-border dark:border-primary/30">
            <CardContent className="p-6 md:p-8 h-full flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-secondary dark:bg-primary/20 flex items-center justify-center">
                  <CloudCog className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <Badge className="bg-secondary dark:bg-primary/20 text-primary border-border dark:border-primary/40">
                  Primary Expertise
                </Badge>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Multi-Cloud Architecture
              </h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed flex-grow">
                Expert in AWS with extensive experience in Azure and GCP. I architect scalable, 
                resilient cloud infrastructure that supports millions of users while maintaining 
                99%+ uptime and optimizing costs by up to 45%.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary" className="text-xs">Multi-Region</Badge>
                <Badge variant="secondary" className="text-xs">High Availability</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Tall Card - CI/CD */}
          <Card className="lg:row-span-2 card-glass card-hover scroll-animate animate-scale-in dark:bg-gradient-to-br dark:from-primary/5 dark:to-primary-glow/5 border-border dark:border-primary/25" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6 md:p-8 h-full flex flex-col">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-secondary dark:bg-primary/15 flex items-center justify-center mb-4">
                <GitBranch className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                CI/CD Pipeline Mastery
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                Architected and maintained CI/CD pipelines for 15+ microservices, 
                reducing deployment time by 40% and enabling multiple daily releases 
                with zero-downtime deployments.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-secondary dark:bg-primary/5 border border-border dark:border-primary/20">
                  <span className="text-sm font-medium">Deployment Speed</span>
                  <span className="text-primary font-bold">+40%</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-secondary dark:bg-primary/5 border border-border dark:border-primary/20">
                  <span className="text-sm font-medium">Failure Rate</span>
                  <span className="text-primary font-bold">-55%</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-secondary dark:bg-primary/5 border border-border dark:border-primary/20">
                  <span className="text-sm font-medium">Daily Releases</span>
                  <span className="text-primary font-bold">Multiple</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Medium Card - Security */}
          <Card className="card-glass card-hover scroll-animate animate-scale-in dark:bg-gradient-to-br dark:from-primary/8 dark:to-primary-glow/8 border-border dark:border-primary/30" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6 md:p-8 h-full flex flex-col">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-secondary dark:bg-primary/20 flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">
                DevSecOps
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Security-first approach with vulnerability scanning, secrets management, 
                and compliance automation.
              </p>
            </CardContent>
          </Card>

          {/* Medium Card - Performance */}
          <Card className="card-glass card-hover scroll-animate animate-scale-in dark:bg-gradient-to-br dark:from-primary/6 dark:to-primary-glow/6 border-border dark:border-primary/30" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-6 md:p-8 h-full flex flex-col">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-secondary dark:bg-primary/20 flex items-center justify-center mb-3">
                <Rocket className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">
                Performance Optimization
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Reduced MTTD by 70% and infrastructure costs by up to 45% through 
                strategic optimization.
              </p>
            </CardContent>
          </Card>

          {/* Wide Card - Achievements */}
          <Card className="md:col-span-2 card-glass card-hover scroll-animate animate-scale-in dark:bg-gradient-to-br dark:from-primary/7 dark:to-primary-glow/7 border-border dark:border-primary/30" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-secondary dark:bg-primary/20 flex items-center justify-center">
                  <Award className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">
                  Proven Track Record
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 rounded-lg bg-secondary dark:bg-primary/10 border border-border dark:border-primary/20">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">20+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-secondary dark:bg-primary/10 border border-border dark:border-primary/20">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">99%</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-secondary dark:bg-primary/10 border border-border dark:border-primary/20">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">$5K+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Saved/Month</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-secondary dark:bg-primary/10 border border-border dark:border-primary/20">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">7+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Years</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tall Card - Leadership */}
          <Card className="card-glass card-hover scroll-animate animate-scale-in dark:bg-gradient-to-br dark:from-primary/5 dark:to-primary-glow/5 border-border dark:border-primary/25" style={{ animationDelay: '0.5s' }}>
            <CardContent className="p-6 md:p-8 h-full flex flex-col">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-secondary dark:bg-primary/20 flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Team Leadership
              </h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                Mentored 3+ junior engineers, led reliability initiatives, and fostered 
                a culture of continuous learning and operational excellence.
              </p>
              <Badge variant="secondary" className="mt-4 self-start">
                Senior Engineer
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
