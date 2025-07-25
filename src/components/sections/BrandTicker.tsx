export const BrandTicker = () => {
  // TODO: Replace with actual brand names/logos
  const brands = [
    "TechCorp", "InnovateLabs", "GrowthHub", "DigitalEdge", "CreativeStudio",
    "MarketPro", "VisionTech", "DataFlow", "BrandForge", "ScaleUp",
    "FutureWorks", "ImpactAgency", "NextLevel", "PowerHouse", "Velocity"
  ];

  return (
    <section className="py-12 bg-dark-surface border-t border-b border-neon-green/20 overflow-hidden">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-transparent to-bg-dark z-10 pointer-events-none"></div>
        
        {/* Primary Ticker */}
        <div className="flex animate-marquee whitespace-nowrap">
          {brands.concat(brands).map((brand, index) => (
            <div
              key={index}
              className="flex items-center mx-8 text-2xl lg:text-3xl font-bold text-gray-400 hover:text-neon-green transition-colors duration-300"
            >
              <span className="gradient-text">{brand}</span>
              <div className="w-2 h-2 bg-neon-green rounded-full mx-8 animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Secondary Ticker (Desktop Only) - Opposite Direction */}
        <div className="hidden lg:flex animate-marquee whitespace-nowrap mt-4" style={{ animationDirection: 'reverse' }}>
          {brands.concat(brands).map((brand, index) => (
            <div
              key={index}
              className="flex items-center mx-8 text-xl font-semibold text-gray-500 hover:text-purple-light transition-colors duration-300"
            >
              <span>{brand} Labs</span>
              <div className="w-1.5 h-1.5 bg-purple rounded-full mx-8 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};