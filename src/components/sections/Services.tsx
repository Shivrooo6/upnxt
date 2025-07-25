import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { 
  Video, 
  Camera, 
  TrendingUp, 
  Edit3, 
  Box, 
  Palette, 
  Megaphone,
  Share2,
  Building,
  Plane,
  Smartphone,
  Globe,
  Search,
  Award,
  Target,
  Users,
  BarChart3,
  MessageSquare,
  Play,
  Zap
} from "lucide-react";

const services = [
  { 
    icon: Video, 
    title: "Video Shoot", 
    description: "Professional video production services",
    outcomes: ["Premium visuals", "Brand storytelling", "Engagement boost"]
  },
  { 
    icon: Camera, 
    title: "Cinematic Shoot", 
    description: "High-quality cinematic video production",
    outcomes: ["Cinema-grade quality", "Emotional impact", "Brand elevation"]
  },
  { 
    icon: TrendingUp, 
    title: "Performance Marketing", 
    description: "Data-driven marketing campaigns",
    outcomes: ["Lower CPL", "Higher ROAS", "Scalable growth"]
  },
  { 
    icon: Edit3, 
    title: "Video Editing", 
    description: "Professional video editing and post-production",
    outcomes: ["Seamless flow", "Visual appeal", "Fast delivery"]
  },
  { 
    icon: Box, 
    title: "3D Editing", 
    description: "Advanced 3D editing and effects",
    outcomes: ["Stunning visuals", "Modern appeal", "Tech innovation"]
  },
  { 
    icon: Palette, 
    title: "3D Modeling", 
    description: "Custom 3D modeling and animation",
    outcomes: ["Product visualization", "Interactive demos", "Future-ready"]
  },
  { 
    icon: Camera, 
    title: "Ad Shoot", 
    description: "Commercial advertisement production",
    outcomes: ["Conversion focus", "Brand consistency", "Market impact"]
  },
  { 
    icon: Share2, 
    title: "Social Media Management", 
    description: "Complete social media strategy",
    outcomes: ["Audience growth", "Engagement rate", "Brand awareness"]
  },
  { 
    icon: Building, 
    title: "Real Estate Shoot", 
    description: "Professional real estate photography",
    outcomes: ["Faster sales", "Premium positioning", "Visual appeal"]
  },
  { 
    icon: Plane, 
    title: "Drone Shoot", 
    description: "Aerial photography and videography",
    outcomes: ["Unique perspectives", "Stunning aerials", "Competitive edge"]
  },
  { 
    icon: Smartphone, 
    title: "Android Development", 
    description: "Custom mobile app development",
    outcomes: ["User engagement", "Business growth", "Digital presence"]
  },
  { 
    icon: Globe, 
    title: "Website Development", 
    description: "Modern web development solutions",
    outcomes: ["Lead generation", "Brand credibility", "User experience"]
  },
  { 
    icon: Search, 
    title: "SEO & Local Search", 
    description: "Search engine optimization services",
    outcomes: ["Higher rankings", "Organic traffic", "Local visibility"]
  },
  { 
    icon: Award, 
    title: "Branding & Creative Strategy", 
    description: "Complete brand identity solutions",
    outcomes: ["Brand recognition", "Market positioning", "Visual identity"]
  },
  { 
    icon: Target, 
    title: "Digital Ads (Meta / Google)", 
    description: "Facebook & Google Ads management",
    outcomes: ["High-intent leads", "Lower CPA", "ROI optimization"]
  },
  { 
    icon: Users, 
    title: "Influencer Marketing", 
    description: "Strategic influencer partnerships",
    outcomes: ["Authentic reach", "Trust building", "Viral potential"]
  },
  { 
    icon: Play, 
    title: "Motion Graphics", 
    description: "Animated graphics and visual effects",
    outcomes: ["Dynamic content", "Visual storytelling", "Modern appeal"]
  },
  { 
    icon: MessageSquare, 
    title: "Marketing Automation", 
    description: "WhatsApp & email automation",
    outcomes: ["Lead nurturing", "Customer retention", "Sales automation"]
  },
  { 
    icon: BarChart3, 
    title: "Analytics & Reporting", 
    description: "Data analysis and performance tracking",
    outcomes: ["Data insights", "Growth optimization", "ROI tracking"]
  }
];

export const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24 bg-dark-surface">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-black text-white">
            Our <span className="gradient-text text-shadow-neon">Services</span>
          </h2>
          <div className="w-24 h-1 bg-neon-green mx-auto shadow-lg shadow-neon-green/50"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive creative and marketing solutions to grow your business faster
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group bg-card-gradient border border-neon-green/20 hover:border-neon-green hover:shadow-xl hover:shadow-neon-green/25 transition-all duration-500 hover:-translate-y-3 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-neon-green/10 rounded-xl flex items-center justify-center group-hover:bg-neon-green group-hover:scale-110 transition-all duration-300 border border-neon-green/30">
                    <IconComponent className="h-8 w-8 text-neon-green group-hover:text-bg-dark" />
                  </div>
                  <h3 className="font-bold text-lg text-white group-hover:text-neon-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-neon-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Service Detail Modal */}
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="bg-dark-surface border-neon-green/30 max-w-2xl">
            {selectedService && (
              <div className="p-6 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-neon-green/20 rounded-xl flex items-center justify-center border border-neon-green/50">
                    <selectedService.icon className="h-8 w-8 text-neon-green" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                    <p className="text-gray-300">{selectedService.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-neon-green">Key Outcomes:</h4>
                  <ul className="space-y-2">
                    {selectedService.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-center space-x-3 text-gray-300">
                        <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-neon-green text-bg-dark hover:bg-neon-green/90 font-bold py-3">
                      Book This Service
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-dark-surface border-neon-green/30 max-w-4xl max-h-[80vh] overflow-hidden">
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-neon-green mb-4">Book Your Service - {selectedService.title}</h3>
                      <div className="w-full h-[75vh] md:h-[80vh] overflow-hidden rounded-lg">
  <iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLSc1sTAAXin64mEFrrCqDo7rLNEuYjqySQ5Gu77qwp9xgRFlHg/viewform?embedded=true"
    className="w-full h-full border-none"
    allowFullScreen
  >
    Loading…
  </iframe>
</div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};