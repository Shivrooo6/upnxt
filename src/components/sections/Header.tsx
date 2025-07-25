import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-purple/90 backdrop-blur-md border-b border-neon-green/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl lg:text-3xl font-bold">
              <span className="text-white">Up</span>
              <span className="text-neon-green gradient-text text-shadow-neon">nxt</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-neon-green transition-colors duration-300 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    className="bg-neon-green text-bg-dark hover:bg-neon-green/90 shine-animation neon-glow font-bold px-6 py-3 transition-all duration-300 hover:scale-105"
                  >
                    Book Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-dark-surface border-neon-green/30 max-w-4xl max-h-[80vh] overflow-hidden">
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-neon-green mb-4">Book Your Free Strategy Call</h3>
                    {/* TODO: Replace with actual Google Form embed URL */}
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white hover:text-neon-green transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-neon-green/20">
              <nav className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-white hover:text-neon-green transition-colors duration-300 font-medium text-left"
                  >
                    {item.name}
                  </button>
                ))}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="bg-neon-green text-bg-dark hover:bg-neon-green/90 neon-glow font-bold mt-4 w-full"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Book Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-dark-surface border-neon-green/30 max-w-[95vw] max-h-[80vh] overflow-hidden">
                    <div className="p-2">
                      <h3 className="text-lg font-bold text-neon-green mb-4">Book Your Free Strategy Call</h3>
                      <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLSc1sTAAXin64mEFrrCqDo7rLNEuYjqySQ5Gu77qwp9xgRFlHg/viewform?embedded=true" 
                        width="100%" 
                        height="500" 
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
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden mobile-sticky-cta">
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              className="bg-neon-green text-bg-dark hover:bg-neon-green/90 animate-pulse-glow font-bold px-8 py-4 text-lg rounded-full shadow-2xl"
            >
              Book Now
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-dark-surface border-neon-green/30 max-w-[95vw] max-h-[80vh] overflow-hidden">
            <div className="p-2">
              <h3 className="text-lg font-bold text-neon-green mb-4">Book Your Free Strategy Call</h3>
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSc1sTAAXin64mEFrrCqDo7rLNEuYjqySQ5Gu77qwp9xgRFlHg/viewform?embedded=true" 
              >
                Loading…
              </iframe>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};
