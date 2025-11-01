import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/neha-dental-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/5 to-secondary/10 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Neha Dental World Logo" className="w-12 h-12 object-contain" />
              <span className="text-lg font-bold text-foreground">Dr Neha Dental World</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Caring for your smile with excellence. Professional dental care with advanced technology and a gentle touch.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link 
                to="/media" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Media
              </Link>
              <Link 
                to="/contact" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="flex flex-col space-y-3">
              <a href="tel:+919953419955" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 99534 19955</span>
              </a>
              <a href="tel:+918800997173" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 88009 97173</span>
              </a>
              <a href="mailto:dr.neha1dentalworld@gmail.com" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>dr.neha1dentalworld@gmail.com</span>
              </a>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>DDA, LSC Complex, Ring Road Naraina Vihar, Behind Metro Station Gate Number-1</span>
              </div>
            </div>
          </div>

          {/* Timing & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Opening Hours</h3>
            <div className="flex items-start space-x-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mt-1" />
              <div>
                <p>9:00 AM - 4:00 PM (Morning)</p>
                <p>4:00 PM - 8:00 PM (Evening)</p>
                <p className="text-xs mt-1">Sunday: Closed</p>
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-foreground mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/1HDaJnRdUW/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/dr.neha_dental?igsh=MXZ1OTV5Mzl5eGQ3aw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dr Neha Dental World. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
