import { motion } from 'motion/react';
import { Menu, PlayCircle, ArrowRight, Quote, Instagram, Twitter, Facebook, Send } from 'lucide-react';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } }
};

export default function App() {
  return (
    <div className="bg-stone-50 text-stone-800 font-sans antialiased selection:bg-stone-200 selection:text-stone-900 overflow-x-hidden">
      {/* Announcement Bar */}
      <div className="bg-stone-900 text-stone-50 text-xs py-2 text-center tracking-wide font-medium z-50 relative">
        Complimentary consultation with every first visit. Book now.
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 w-full bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50 transition-all duration-300">
        <div className="max-w-screen-2xl mx-auto px-6 py-4 flex justify-between items-center">
          <button className="lg:hidden text-stone-800 p-1">
            <Menu className="w-6 h-6" />
          </button>

          <a href="#" className="text-xl md:text-2xl font-serif tracking-tighter text-stone-900 font-medium z-10">
            LUMIERA
          </a>

          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-wide text-stone-600">
            <a href="#services" className="hover:text-stone-900 transition-colors">Services</a>
            <a href="#about" className="hover:text-stone-900 transition-colors">Atelier</a>
            <a href="#stylists" className="hover:text-stone-900 transition-colors">Stylists</a>
            <a href="#journal" className="hover:text-stone-900 transition-colors">Journal</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hidden md:block text-sm font-medium hover:text-stone-600 transition-colors">Sign in</a>
            <a href="#book" className="bg-stone-900 text-stone-50 px-5 py-2.5 rounded-full text-xs md:text-sm font-medium tracking-wide hover:bg-stone-800 transition-all duration-300 transform hover:scale-[1.02]">
              Book Appointment
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop" 
            alt="Luxury Hair Model" 
            className="w-full h-full object-cover object-center brightness-[0.85] scale-105 animate-[pulse_10s_ease-in-out_infinite]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-stone-50/20"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto space-y-8">
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase opacity-90"
          >
            Premium Hair Design
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight leading-[1.1]"
          >
            Effortless beauty,<br/>refined by nature.
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="pt-4 flex justify-center gap-4"
          >
            <button className="bg-white text-stone-900 px-8 py-3 rounded-full text-sm font-medium hover:bg-stone-100 transition-colors">
              Explore Services
            </button>
            <button className="backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
              <PlayCircle className="w-[18px] h-[18px]" />
              Watch Film
            </button>
          </motion.div>
        </div>
      </header>

      {/* Introduction / Brand Statement */}
      <section id="about" className="py-24 md:py-32 bg-stone-50 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <motion.h2 
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="text-3xl md:text-5xl font-serif text-stone-900 tracking-tight leading-tight"
            >
              We believe hair is an extension of your spirit.
            </motion.h2>
            <div className="space-y-6 text-stone-600 font-light text-lg leading-relaxed">
              <motion.p 
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: 0.1 }}
              >
                At Lumiera, we merge contemporary techniques with timeless aesthetics. Our atelier is a sanctuary designed for those who appreciate the subtle art of perfection.
              </motion.p>
              <motion.p 
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: 0.2 }}
              >
                From precision cuts to bespoke coloring, every session is a personalized journey tailored to enhance your natural allure.
              </motion.p>
            </div>
            <motion.div 
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <a href="#" className="inline-flex items-center gap-2 text-stone-900 border-b border-stone-300 pb-1 hover:border-stone-900 transition-colors text-sm font-medium tracking-wide">
                Read our story <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
          <motion.div 
            variants={scaleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="order-1 md:order-2 relative aspect-[4/5] overflow-hidden rounded-sm"
          >
            <img 
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1600&auto=format&fit=crop" 
              alt="Salon Interior Details" 
              className="object-cover w-full h-full hover:scale-110 transition-transform duration-[2000ms]" 
            />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.div 
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div className="space-y-3">
              <p className="text-xs font-medium tracking-widest text-stone-500 uppercase">Our Expertise</p>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 tracking-tight">Curated Services</h2>
            </div>
            <a href="#" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">View full price list &rarr;</a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {[
              {
                title: "Cut & Style",
                price: "from $85",
                desc: "Precision architecture for your hair, tailored to your bone structure and lifestyle.",
                img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1978&auto=format&fit=crop",
                delay: 0.1
              },
              {
                title: "Color & Gloss",
                price: "from $120",
                desc: "Bespoke color formulation using organic ingredients for luminous, healthy shine.",
                img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1600&auto=format&fit=crop",
                delay: 0.2
              },
              {
                title: "Spa Treatments",
                price: "from $60",
                desc: "Restorative rituals including scalp massages and deep conditioning masks.",
                img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
                delay: 0.3
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: service.delay }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden mb-6 aspect-[3/4] relative rounded-sm">
                  <img src={service.img} className="w-full h-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" alt={service.title} />
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-500"></div>
                </div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-serif text-stone-900">{service.title}</h3>
                  <span className="text-sm text-stone-500 font-light">{service.price}</span>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax / Mood Section */}
      <section className="relative py-32 md:py-48 bg-stone-200 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop" alt="Texture" className="w-full h-full object-cover opacity-60 grayscale mix-blend-multiply fixed-bg scale-110 motion-safe:animate-[pulse_15s_ease-in-out_infinite]" />
        </div>
        <motion.div 
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="relative z-10 max-w-screen-md mx-auto text-center px-6"
        >
          <Quote className="mx-auto mb-6 text-stone-800 w-8 h-8" />
          <blockquote className="text-2xl md:text-4xl font-serif text-stone-900 italic leading-snug tracking-tight">
            "The most luxurious salon experience I've ever had. The attention to detail is unmatched and the atmosphere is pure serenity."
          </blockquote>
          <cite className="block mt-8 text-sm font-medium tracking-widest uppercase text-stone-700 not-italic">— Eleanor Vance, Vogue</cite>
        </motion.div>
      </section>

      {/* Stylists */}
      <section id="stylists" className="py-24 bg-stone-50">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.div 
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 tracking-tight mb-4">Meet the Artisans</h2>
            <p className="text-stone-500 font-light">Masters of their craft, dedicated to revealing your best self.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Sarah Jenkins", role: "Creative Director", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop", delay: 0 },
              { name: "Mikaela Ross", role: "Color Specialist", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop", delay: 0.1 },
              { name: "Elise D'Amico", role: "Senior Stylist", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1887&auto=format&fit=crop", delay: 0.2 },
              { name: "Julian Reed", role: "Texture Expert", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop", delay: 0.3 }
            ].map((stylist, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: stylist.delay }}
                className="text-center group"
              >
                <div className="aspect-[4/5] rounded-sm overflow-hidden mb-4 relative">
                  <img src={stylist.img} alt={stylist.name} className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 grayscale group-hover:grayscale-0" />
                </div>
                <h3 className="text-lg font-serif text-stone-900">{stylist.name}</h3>
                <p className="text-xs text-stone-500 uppercase tracking-widest mt-1">{stylist.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking / Contact Section */}
      <section id="book" className="py-24 bg-white border-t border-stone-100">
        <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 tracking-tight mb-6">Begin your transformation</h2>
            <p className="text-stone-500 text-lg mb-8 font-light">
              Select your preferences below and we will contact you to finalize your appointment.
            </p>
            
            <div className="grid grid-cols-2 gap-8 text-sm">
              <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <h4 className="font-medium text-stone-900 mb-2">Location</h4>
                <p className="text-stone-500 leading-relaxed">
                  1284 Rue De Luxe,<br/>
                  Paris, France 75001
                </p>
              </motion.div>
              <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <h4 className="font-medium text-stone-900 mb-2">Hours</h4>
                <p className="text-stone-500 leading-relaxed">
                  Mon - Fri: 9am — 8pm<br/>
                  Sat: 10am — 6pm
                </p>
              </motion.div>
              <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <h4 className="font-medium text-stone-900 mb-2">Contact</h4>
                <p className="text-stone-500 leading-relaxed">
                  bonjour@lumiera.com<br/>
                  +33 1 23 45 67 89
                </p>
              </motion.div>
              <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <h4 className="font-medium text-stone-900 mb-2">Social</h4>
                <div className="flex gap-3 text-stone-400">
                  <a href="#" className="hover:text-stone-900 transition-colors"><Instagram className="w-[18px] h-[18px]" /></a>
                  <a href="#" className="hover:text-stone-900 transition-colors"><Twitter className="w-[18px] h-[18px]" /></a>
                  <a href="#" className="hover:text-stone-900 transition-colors"><Facebook className="w-[18px] h-[18px]" /></a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.form 
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: 0.2 }}
            className="space-y-6 bg-stone-50 p-8 md:p-10 rounded-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-medium uppercase tracking-wider text-stone-500">First Name</label>
                <input type="text" className="w-full bg-transparent border-b border-stone-300 py-2 text-stone-900 focus:outline-none focus:border-stone-800 transition-colors placeholder-stone-300" placeholder="Jane" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium uppercase tracking-wider text-stone-500">Last Name</label>
                <input type="text" className="w-full bg-transparent border-b border-stone-300 py-2 text-stone-900 focus:outline-none focus:border-stone-800 transition-colors placeholder-stone-300" placeholder="Doe" />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="text-xs font-medium uppercase tracking-wider text-stone-500">Email Address</label>
              <input type="email" className="w-full bg-transparent border-b border-stone-300 py-2 text-stone-900 focus:outline-none focus:border-stone-800 transition-colors placeholder-stone-300" placeholder="jane@example.com" />
            </div>

            <div className="space-y-3 pt-4">
              <label className="text-xs font-medium uppercase tracking-wider text-stone-500">Interested Services</label>
              <div className="flex flex-wrap gap-4">
                {['Haircut', 'Coloring', 'Styling', 'Treatment'].map((service) => (
                  <label key={service} className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" />
                    <span className="text-sm text-stone-600 group-hover:text-stone-900">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <button type="button" className="w-full bg-stone-900 text-stone-50 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-stone-800 transition-all flex justify-center items-center gap-2 group">
                Request Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-16 text-sm">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.div 
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16"
          >
            <div className="space-y-4 col-span-1 md:col-span-1">
              <a href="#" className="text-2xl font-serif text-stone-50 tracking-tighter block mb-4">LUMIERA</a>
              <p className="leading-relaxed font-light text-stone-500">
                Elevating hair care to an art form. Sustainable beauty for the modern muse.
              </p>
            </div>
            
            <div>
              <h4 className="text-stone-50 font-medium mb-6">Explore</h4>
              <ul className="space-y-3 font-light">
                <li><a href="#" className="hover:text-stone-200 transition-colors">Services Menu</a></li>
                <li><a href="#" className="hover:text-stone-200 transition-colors">Our Stylists</a></li>
                <li><a href="#" className="hover:text-stone-200 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-stone-200 transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-stone-50 font-medium mb-6">Legal</h4>
              <ul className="space-y-3 font-light">
                <li><a href="#" className="hover:text-stone-200 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-stone-200 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-stone-200 transition-colors">Cookie Settings</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-stone-50 font-medium mb-6">Subscribe</h4>
              <p className="font-light mb-4 text-xs">Join our newsletter for exclusive offers and beauty tips.</p>
              <div className="flex border-b border-stone-800 pb-2">
                <input type="email" placeholder="Email address" className="bg-transparent w-full focus:outline-none text-stone-200 placeholder-stone-700 font-light" />
                <button className="text-stone-500 hover:text-stone-200 transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-900 text-xs font-light text-stone-600">
            <p>&copy; 2024 Lumiera Salon. All rights reserved.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <span>Designed with precision</span>
              <a href="#" className="hover:text-stone-400">Back to top</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
