import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { BrandTicker } from "@/components/sections/BrandTicker";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { ConversionBanner } from "@/components/sections/ConversionBanner";
import { Team } from "@/components/sections/Team";
import { Portfolio } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-bg-dark">
      <Header />
      <Hero />
      <BrandTicker />
      <About />
      <Services />
      <ConversionBanner />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;