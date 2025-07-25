import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const teamMembers = [
  {
    name: "Founder",
    title: "Chief Executive Officer",
    image: "/lovable-uploads/36cad67e-6329-4888-993d-5a5d0dccd174.png",
    description: "Visionary leader driving innovation and growth."
  },
  {
    name: "Managing Director",
    title: "Chief Operating Officer", 
    image: "./lovable-uploads/vivek.png",
    description: "Strategic operations and business development expert."
  },
  {
    name: "Co-Founder",
    title: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face", 
    description: "Technology innovator and creative solutions architect."
  }
];

export const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Meet Our <span className="text-brand-green">Team</span>
          </h2>
          <div className="w-24 h-1 bg-brand-green mx-auto"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The creative minds behind U Grow's success
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {teamMembers.map((member, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="max-w-md mx-auto">
                    <CardContent className="p-8 text-center space-y-6">
                      <div className="relative w-32 h-32 mx-auto">
                        <div className="absolute -inset-2 bg-gradient-to-r from-brand-green to-brand-green-light rounded-full opacity-75 blur-md"></div>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="relative w-32 h-32 rounded-full object-cover border-4 border-background shadow-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-foreground">{member.name}</h3>
                        <p className="text-brand-green font-semibold">{member.title}</p>
                        <p className="text-muted-foreground">{member.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-brand-green' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};