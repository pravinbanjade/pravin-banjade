import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "B.Sc. in Computer Science and Information Technology",
      institution: "Ambition College, Tribhuvan University",
      location: "Nepal",
      years: "2017 – 2021",
      description:
        "Completed comprehensive study in computer science with focus on software development, algorithms, data structures, networking, and information systems.",
    },
    {
      degree: "Higher Secondary Education (+2)",
      institution: "Kathmandu Model College",
      location: "Nepal",
      years: "2014 – 2016",
      description:
        "Completed higher secondary education with strong foundation in science and mathematics.",
    },
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 scroll-animate animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 md:mb-8"></div>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            My academic background in Computer Science and Information Technology.
          </p>
        </div>

        <div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-3 text-primary flex-shrink-0" />
              Academic Background
            </h3>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {education.map((edu, index) => (
              <Card
                key={edu.degree}
                className="card-glass card-hover scroll-animate animate-scale-in transition-smooth"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-3 md:pb-4 p-4 md:p-6">
                  <div className="mb-3 md:mb-4">
                    <h4 className="text-lg md:text-xl font-semibold text-primary">
                      {edu.degree}
                    </h4>
                  </div>

                  <div className="space-y-2">
                    <p className="text-base md:text-lg font-medium">{edu.institution}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-sm md:text-base text-muted-foreground gap-1">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 flex-shrink-0" />
                        {edu.years}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 flex-shrink-0" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-4 md:p-6 pt-0">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{edu.description}</p>
                </CardContent>
              </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
