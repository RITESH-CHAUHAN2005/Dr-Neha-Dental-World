import { Sparkles, Syringe, Drill, Braces, Smile, XCircle, AlertCircle, Shield } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Cleaning & Whitening",
    description: "Professional teeth cleaning and advanced whitening treatments for a brighter, healthier smile. Regular cleanings prevent cavities and gum disease.",
    features: ["Deep Cleaning", "Teeth Whitening", "Stain Removal", "Polishing"],
  },
  {
    icon: Drill,
    title: "Root Canal Treatment",
    description: "Pain-free root canal therapy using modern techniques to save your natural teeth and eliminate infection.",
    features: ["Painless Procedure", "Single Visit RCT", "Advanced Technology", "Long-lasting Results"],
  },
  {
    icon: Shield,
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions that look and function like natural teeth. Restore your smile with confidence.",
    features: ["Titanium Implants", "Natural Looking", "Long-term Solution", "Bone Preservation"],
  },
  {
    icon: Braces,
    title: "Braces & Aligners",
    description: "Straighten your teeth with traditional braces or invisible aligners. Achieve the perfect smile you've always wanted.",
    features: ["Metal Braces", "Clear Aligners", "Invisible Options", "Custom Treatment Plan"],
  },
  {
    icon: Smile,
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with veneers, bonding, and smile makeovers. Get the confident, beautiful smile you deserve.",
    features: ["Veneers", "Smile Makeover", "Bonding", "Gum Contouring"],
  },
  {
    icon: XCircle,
    title: "Tooth Extraction",
    description: "Safe and comfortable tooth extraction procedures, including wisdom teeth removal with minimal discomfort.",
    features: ["Wisdom Teeth", "Surgical Extraction", "Pain Management", "Quick Recovery"],
  },
  {
    icon: AlertCircle,
    title: "Emergency Dental Care",
    description: "Immediate dental care for urgent situations. We're here when you need us most with same-day appointments.",
    features: ["24/7 Support", "Same-day Care", "Pain Relief", "Urgent Treatment"],
  },
  {
    icon: Syringe,
    title: "Preventive Care",
    description: "Regular check-ups, fluoride treatments, and dental sealants to prevent future dental problems.",
    features: ["Regular Check-ups", "Fluoride Treatment", "Dental Sealants", "Oral Health Education"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary to-primary/80">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">Our Services</h1>
          <p className="text-xl md:text-2xl animate-slide-up">Comprehensive Dental Solutions for Your Smile</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-secondary/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Complete Dental Care Under One Roof
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From routine check-ups to advanced procedures, we offer a full range of dental services using the latest technology and techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all animate-scale-in border border-border hover:border-primary/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href="/#appointment"
                    className="mt-6 inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 text-primary font-semibold rounded-lg hover:from-primary hover:to-primary/90 hover:text-white transition-all"
                  >
                    Book Appointment
                  </a>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-secondary/20 p-12 rounded-2xl">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Contact us for a free consultation. Our experts will help you choose the right treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919953419955"
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-full hover:shadow-lg transition-all"
              >
                Call: +91 99534 19955 / +91 8800997173
              </a>
              <a
                href="/#appointment"
                className="px-8 py-4 bg-white text-primary font-semibold rounded-full hover:shadow-lg transition-all border-2 border-primary"
              >
                Book Online
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
