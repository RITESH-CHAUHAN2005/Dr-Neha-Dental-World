import { Smile, Award, Shield, Heart } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";
import heroImage from "@/assets/hero-dental.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/75 to-primary/85" />
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
            Welcome To Dr Neha Dental World
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            Your smile is our passion. Experience world-class dental care with advanced technology and compassionate service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#appointment" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all"
            >
              Book Appointment
            </a>
            <a href="tel:+918800997173" className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-all hover:scale-105">
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-secondary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6 animate-slide-up">
            Caring For Your Smile With Excellence
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in">
            At Dr Neha Dental World, we believe that every smile tells a story. Our mission is to provide exceptional dental care in a comfortable, welcoming environment. With state-of-the-art technology and a team of experienced professionals, we are committed to helping you achieve and maintain optimal oral health.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4 animate-fade-in">
            From routine check-ups to advanced cosmetic procedures, we offer comprehensive dental services tailored to your unique needs. Your comfort and satisfaction are our top priorities, and we strive to make every visit a positive experience.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 animate-slide-up">
              Why Choose Us
            </h2>
            <p className="text-xl text-primary font-semibold">A Leading Visionary In Dental Care</p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 mb-12 max-w-md mx-auto">
            <div className="text-center p-8 bg-gradient-to-br from-secondary/20 to-white rounded-xl shadow-md animate-scale-in">
              <div className="text-6xl font-bold text-primary mb-2">10,000+</div>
              <p className="text-xl text-muted-foreground">Happy Patients</p>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Dr Neha Dental World, we combine expert dental care, modern technology, and personalized treatment to ensure every patient feels safe, heard, and confident. Our qualified professionals are committed to ethical, gentle, and effective solutions in a hygienic and welcoming environment.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-secondary/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary/50 to-white shadow-md hover:shadow-lg transition-all animate-scale-in hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/90 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Smile className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Comfort First</h3>
              <p className="text-muted-foreground">
                We prioritize your comfort with gentle techniques and a calming environment.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary/50 to-white shadow-md hover:shadow-lg transition-all animate-scale-in hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/90 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Expert Care</h3>
              <p className="text-muted-foreground">
                Our qualified dentists bring years of experience and expertise to every treatment.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary/50 to-white shadow-md hover:shadow-lg transition-all animate-scale-in hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/90 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Safety & Hygiene</h3>
              <p className="text-muted-foreground">
                We maintain the highest standards of sterilization and infection control.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary/50 to-white shadow-md hover:shadow-lg transition-all animate-scale-in hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/90 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Compassionate Service</h3>
              <p className="text-muted-foreground">
                We treat every patient like family with personalized care and attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-secondary/20 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 animate-slide-up">
              What Our Patients Say
            </h2>
            <p className="text-xl text-muted-foreground">Real experiences from our valued patients</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all animate-scale-in">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  R
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-foreground">Rajesh Kumar</h4>
                  <div className="text-primary text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Excellent service! Dr. Neha and her team made my root canal treatment completely painless. The clinic is very clean and modern."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all animate-scale-in">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  P
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-foreground">Priya Sharma</h4>
                  <div className="text-primary text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Best dental experience ever! The staff is friendly and professional. My teeth whitening results are amazing!"
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all animate-scale-in">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-foreground">Amit Patel</h4>
                  <div className="text-primary text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Highly recommend! They use the latest technology and explain everything clearly. My family now comes here for all dental needs."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 animate-slide-up">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-muted-foreground">Everything you need for a healthy, beautiful smile</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-secondary/20 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-4xl mb-3">🦷</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">General Dentistry</h3>
              <p className="text-sm text-muted-foreground">Regular check-ups and cleanings</p>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/20 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Cosmetic Dentistry</h3>
              <p className="text-sm text-muted-foreground">Whitening and smile makeovers</p>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/20 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Orthodontics</h3>
              <p className="text-sm text-muted-foreground">Braces and aligners</p>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/20 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
              <div className="text-4xl mb-3">🩺</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Surgical Procedures</h3>
              <p className="text-sm text-muted-foreground">Implants and extractions</p>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="/services" 
              className="inline-block px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-white font-semibold rounded-full hover:shadow-lg transition-all hover:scale-105"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 animate-slide-up">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">Get answers to common dental questions</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-foreground mb-3">How often should I visit the dentist?</h3>
              <p className="text-muted-foreground">
                We recommend visiting the dentist every 6 months for routine check-ups and professional cleaning. This helps prevent dental problems and maintain optimal oral health.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-foreground mb-3">Do you accept insurance?</h3>
              <p className="text-muted-foreground">
                Yes, we work with most major dental insurance providers. Our team can help you understand your coverage and maximize your benefits.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-foreground mb-3">Are your treatments painful?</h3>
              <p className="text-muted-foreground">
                We use the latest techniques and anesthesia options to ensure your comfort. Most patients report minimal to no discomfort during their procedures.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-foreground mb-3">Do you offer emergency dental services?</h3>
              <p className="text-muted-foreground">
                Yes! We provide emergency dental care for urgent situations. Call us immediately at +91 99534 19955 or +91 8800997173 if you're experiencing a dental emergency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section id="appointment" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <AppointmentForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
