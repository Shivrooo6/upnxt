import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Play, Rocket, TrendingUp, Palette, Zap, Trophy } from "lucide-react";

export const Hero = () => {
  const outcomes = [
    { icon: Rocket, label: "Grow", tooltip: "Lead Generation" },
    { icon: TrendingUp, label: "Scale", tooltip: "Performance Marketing" },
    { icon: Palette, label: "Create", tooltip: "Creative Branding" },
    { icon: Zap, label: "Launch", tooltip: "Tech Solutions" },
    { icon: Trophy, label: "Dominate", tooltip: "Market Leadership" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(61,22,117,0.3),transparent_70%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Creative 3D Animation */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]">
              {/* 3D Floating Elements */}
              <div className="absolute inset-0">
                {/* Central Orb */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-neon-green to-purple rounded-full animate-pulse-glow shadow-2xl"></div>
                
                {/* Floating Cards */}
                <div className="absolute top-16 left-8 w-20 h-28 bg-card-gradient border border-neon-green/30 rounded-lg animate-float shadow-lg" style={{ animationDelay: '0s' }}>
                  <div className="p-2 text-center">
                    <div className="w-4 h-4 bg-neon-green rounded-full mx-auto mb-2"></div>
                    <div className="text-xs text-gray-300">Growth</div>
                  </div>
                </div>
                
                <div className="absolute top-32 right-12 w-24 h-32 bg-card-gradient border border-purple/50 rounded-xl animate-float shadow-lg" style={{ animationDelay: '1s' }}>
                  <div className="p-3 text-center">
                    <div className="w-6 h-6 bg-purple rounded-lg mx-auto mb-2"></div>
                    <div className="text-xs text-gray-300">Creative</div>
                  </div>
                </div>
                
                <div className="absolute bottom-24 left-16 w-18 h-24 bg-card-gradient border border-neon-green/40 rounded-lg animate-float shadow-lg" style={{ animationDelay: '2s' }}>
                  <div className="p-2 text-center">
                    <div className="w-3 h-3 bg-neon-green rounded-full mx-auto mb-1"></div>
                    <div className="text-xs text-gray-300">Tech</div>
                  </div>
                </div>
                
                <div className="absolute bottom-16 right-8 w-22 h-28 bg-card-gradient border border-purple/40 rounded-xl animate-float shadow-lg" style={{ animationDelay: '0.5s' }}>
                  <div className="p-2 text-center">
                    <div className="w-5 h-5 bg-purple rounded-full mx-auto mb-2"></div>
                    <div className="text-xs text-gray-300">Results</div>
                  </div>
                </div>
                
                {/* Orbiting Particles */}
                <div className="absolute top-1/2 left-1/2 w-80 h-80 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute w-6 h-6 bg-neon-green/60 rounded-full animate-spin" style={{ animationDuration: '8s', top: '0', left: '50%', transformOrigin: '0 160px' }}></div>
                  <div className="absolute w-4 h-4 bg-purple/60 rounded-full animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse', top: '50%', right: '0', transformOrigin: '-160px 0' }}></div>
                  <div className="absolute w-5 h-5 bg-neon-green/40 rounded-full animate-spin" style={{ animationDuration: '10s', bottom: '0', left: '50%', transformOrigin: '0 -160px' }}></div>
                  <div className="absolute w-3 h-3 bg-purple/80 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse', top: '50%', left: '0', transformOrigin: '160px 0' }}></div>
                </div>
                
                {/* Wireframe Network */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--neon-green))" />
                      <stop offset="100%" stopColor="hsl(var(--purple))" />
                    </linearGradient>
                  </defs>
                  <path d="M50,50 Q200,100 350,50" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
                  <path d="M50,200 Q200,150 350,200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }} />
                  <path d="M50,350 Q200,300 350,350" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '2s' }} />
                  <circle cx="50" cy="50" r="4" fill="hsl(var(--neon-green))" className="animate-pulse" />
                  <circle cx="350" cy="50" r="4" fill="hsl(var(--purple))" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <circle cx="200" cy="200" r="6" fill="hsl(var(--neon-green))" className="animate-pulse" style={{ animationDelay: '1s' }} />
                  <circle cx="50" cy="350" r="4" fill="hsl(var(--purple))" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                  <circle cx="350" cy="350" r="4" fill="hsl(var(--neon-green))" className="animate-pulse" style={{ animationDelay: '2s' }} />
                </svg>
                
                {/* Holographic Grid */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDI1NSwgMTIyLCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40 animate-pulse"></div>
                
                {/* Energy Waves */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-neon-green/30 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 border border-purple/20 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-neon-green/10 rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Text & Icons */}
          <div className="text-center lg:text-left space-y-8 order-1 lg:order-2">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none">
                <span className="text-white">Empowering Businesses</span>
                <br />
                <span className="gradient-text text-shadow-neon">to Grow Faster.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-xl">
                Creative + Performance + Tech under one roof.
              </p>
            </div>

            {/* Outcome Icons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {outcomes.map((outcome, index) => {
                const IconComponent = outcome.icon;
                return (
                  <div 
                    key={outcome.label}
                    className="group relative"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-dark-surface border border-neon-green/30 rounded-lg p-3 hover:bg-neon-green/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-neon-green/25">
                      <IconComponent className="h-6 w-6 text-neon-green group-hover:animate-pulse" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-dark-surface text-xs text-neon-green px-2 py-1 rounded border border-neon-green/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {outcome.tooltip}
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-neon-green text-bg-dark hover:bg-neon-green/90 shine-animation neon-glow font-bold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                  >
                    Get Proposal
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-dark-surface border-neon-green/30 max-w-4xl max-h-[80vh] overflow-hidden">
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-neon-green mb-4">Get Your Free Growth Proposal</h3>
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
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-bg-dark px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 h-5 w-5" />
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-green/60 rounded-full flex justify-center bg-dark-surface/50">
          <div className="w-1 h-3 bg-neon-green rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};