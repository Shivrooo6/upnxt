import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";

const portfolioItems = [
  {
    title: "Premium Real Estate Campaign",
    category: "Real Estate Marketing",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    description: "Complete marketing campaign for luxury real estate properties including drone photography and cinematic videos."
  },
  {
    title: "Tech Startup Brand Identity",
    category: "Branding & Design",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    description: "Full brand identity development and digital marketing strategy for emerging tech startup."
  },
  {
    title: "E-commerce Website Development",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    description: "Modern e-commerce platform with integrated payment solutions and mobile optimization."
  },
  {
    title: "Social Media Campaign",
    category: "Social Media Marketing",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    description: "Viral social media campaign that increased brand engagement by 300% across all platforms."
  },
  {
    title: "Corporate Video Production",
    category: "Video Production",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
    description: "High-quality corporate video series showcasing company culture and values."
  },
  {
    title: "Mobile App Development",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    description: "Custom mobile application with seamless user experience and modern design."
  }
];

export const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, portfolioItems.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Our <span className="text-brand-green">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-brand-green mx-auto"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing our recent successful projects and creative campaigns
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {portfolioItems.map((item, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button size="sm" variant="secondary" className="w-full">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Project
                          </Button>
                        </div>
                      </div>
                      <div className="p-6 space-y-3">
                        <div className="text-sm text-brand-green font-semibold">{item.category}</div>
                        <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
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
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background border-brand-green text-brand-green hover:bg-brand-green hover:text-white disabled:opacity-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background border-brand-green text-brand-green hover:bg-brand-green hover:text-white disabled:opacity-50"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};