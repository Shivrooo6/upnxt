export const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              About <span className="text-brand-green">Upnxt a marketing agency</span>
            </h2>
            <div className="w-24 h-1 bg-brand-green mx-auto"></div>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Welcome to UPNXT Agency — your all-in-one partner for growth, innovation, and impactful digital presence.
            </p>
            <p>
              We’re a future-focused creative and tech agency offering end-to-end solutions that help businesses dominate their industries. Whether you're launching a brand, scaling a startup, or reimagining your digital presence — we’ve got you covered.
            </p>
            <p>
              Our core services include:

              🚀 Marketing & Branding – Digital campaigns, social media strategy, SEO, ads, and brand identity that drive real results.
              💻 Web & Android Development – Custom-designed websites and mobile apps built to perform and scale.
              📸 Drone Shoots & Video Production – High-quality aerial and ground visuals for brands, events, and promotions.
              🏡 Real Estate Shoots – Stunning photography and videography that elevate property listings and sales.
              🧠 Growth Strategy & Automation – Data-driven strategies and business automation that fuel long-term success.
            </p>
            <p>
              At UPNXT, we don’t just follow trends — we create what’s next. Let’s build bold, digital-first experiences that move your brand UPNXT.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-green mb-2">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-green mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-green mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-green mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};