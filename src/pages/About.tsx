import { CheckCircle2, Users, Microscope, Heart, Shield, Award } from "lucide-react";
import aboutImage from "@/assets/about-dental.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">About Us</h1>
          <p className="text-xl md:text-2xl animate-slide-up">Excellence in Dental Care Since Day One</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Caring For Your Smile */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
              Caring For Your Smile With Excellence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
              At Dr Neha Dental World, we are dedicated to providing exceptional dental care that goes beyond just treating teeth. We focus on building lasting relationships with our patients, ensuring they feel comfortable, informed, and confident about their oral health journey. Our clinic combines cutting-edge technology with a warm, patient-centered approach to deliver the best possible outcomes.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Leading Visionary */}
            <div className="bg-gradient-to-br from-secondary/30 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all animate-scale-in">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">A Leading Visionary In Dental Care</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our vision is to be the most trusted dental care provider in the region. We continuously invest in the latest dental technologies and training to ensure our team stays at the forefront of modern dentistry. From digital X-rays to laser treatments, we bring innovation to every aspect of dental care.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">State-of-the-art dental equipment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Continuous professional development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Evidence-based treatment approaches</span>
                </li>
              </ul>
            </div>

            {/* Expert Care */}
            <div className="bg-gradient-to-br from-secondary/30 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all animate-scale-in">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Expert Care With A Gentle Touch</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We understand that dental visits can be anxiety-inducing for many patients. That's why we've created an environment focused on comfort and care. Our gentle approach, combined with pain management techniques and sedation options, ensures a stress-free experience for patients of all ages.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Anxiety-free dental procedures</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Sedation dentistry options available</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Family-friendly environment</span>
                </li>
              </ul>
            </div>

            {/* Advanced Technology */}
            <div className="bg-gradient-to-br from-secondary/30 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all animate-scale-in">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mr-4">
                  <Microscope className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Advanced Technology & Safety First</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Your safety is our top priority. We adhere to strict sterilization protocols and use the latest infection control measures. Our clinic is equipped with advanced diagnostic tools that allow for early detection and precise treatment planning, ensuring the best possible outcomes.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Digital imaging and diagnostics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Strict sterilization protocols</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Infection control excellence</span>
                </li>
              </ul>
            </div>

            {/* Professional Team */}
            <div className="bg-gradient-to-br from-secondary/30 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all animate-scale-in">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Professional & Qualified Dentists</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our team comprises highly qualified dental professionals with extensive experience in various specialties. We are committed to ongoing education and training to provide you with the most current and effective treatments available. Each member of our team shares a passion for dentistry and patient care.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Highly qualified specialists</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Years of clinical experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Personalized treatment plans</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/20 p-12 rounded-2xl animate-fade-in">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Experience Excellence in Dental Care?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Schedule your appointment today and discover the difference that personalized, professional dental care can make.
            </p>
            <a
              href="/#appointment"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-full hover:shadow-lg transition-all"
            >
              Book Your Appointment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
