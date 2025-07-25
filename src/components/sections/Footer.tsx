import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-orange-100 text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">
              {/* <span className="text-white">X</span> */}
              <span className="text-brand-green"> Upnxt</span>
            </h3>
            <p className="text-muted-foreground">
              Empowering businesses through creative marketing and technology solutions.
              Your growth is our mission.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/share/16eNnw8AaB/?mibextid=wwXIfr" target="_blank"><Button
                variant="outline"
                size="icon"
                className="border-brand-green text-brand-green hover:bg-brand-green text-white"
              >
                <Facebook className="h-4 w-4" />
              </Button></a>

              <a
                href="" // Replace with your actual link
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="border-brand-green text-brand-green hover:bg-brand-green text-white"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
              </a>


              <Button
                variant="outline"
                size="icon"
                className="border-brand-green text-brand-green hover:bg-brand-green text-white"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-brand-green text-brand-green hover:bg-brand-green text-white"
              >
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-green">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-brand-green transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-brand-green transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-brand-green transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-brand-green transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-brand-green transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-green">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground">Digital Marketing</span>
              </li>
              <li>
                <span className="text-muted-foreground">Web Development</span>
              </li>
              <li>
                <span className="text-muted-foreground">Video Production</span>
              </li>
              <li>
                <span className="text-muted-foreground">Brand Identity</span>
              </li>
              <li>
                <span className="text-muted-foreground">Social Media</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-green">Contact Info</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Tricity</p>
              <p>Chandigarh</p>
              <p>India 160001</p>
              <p className="pt-2">+91 7696795955</p>
              <p>upnxtamarketingandpragency@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-muted-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Upnxt A Marketing Agency . All Rights Reserved.
          </p>

          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="mt-4 md:mt-0 border-brand-green text-brand-green hover:bg-brand-green  text-white"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};
