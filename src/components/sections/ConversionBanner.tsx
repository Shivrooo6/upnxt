import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const ConversionBanner = () => {
  return (
    <section className="py-20 bg-purple-gradient relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-4 h-4 bg-neon-green/30 rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-neon-green/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-16 left-1/3 w-3 h-3 bg-neon-green/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-5 h-5 bg-neon-green/25 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Ready to <span className="gradient-text text-shadow-neon">Grow Faster?</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto">
            Book a free strategy call. Avg 330+ leads/month for real estate clients.
          </p>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="lg"
                className="bg-neon-green text-bg-dark hover:bg-neon-green/90 shine-animation neon-glow font-bold px-12 py-6 text-xl transition-all duration-300 hover:scale-105"
              >
                Book Now - Free Strategy Call
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-dark-surface border-neon-green/30 max-w-4xl max-h-[80vh] overflow-hidden">
              <div className="p-4">
                <h3 className="text-xl font-bold text-neon-green mb-4">Book Your Free Strategy Call</h3>
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSc1sTAAXin64mEFrrCqDo7rLNEuYjqySQ5Gu77qwp9xgRFlHg/viewform?embedded=true" 
                  width="100%" 
                  height="600" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  className="rounded-lg"
                >
                  Loading…
                </iframe>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};