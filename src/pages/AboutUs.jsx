import React, { useRef } from "react";
import { motion } from "framer-motion"; // Changed to framer-motion to match Home page
import { ArrowRight, Target, Users, Globe, Heart, Award, TrendingUp, Menu } from 'lucide-react';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export function AboutUs() {
  // 1. References for smooth scrolling (Matching Home logic)
  const heroRef = useRef(null);
  const foundersRef = useRef(null);
  const valuesRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerChildren = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.15 } },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      
      {/* NAVBAR - Replicated from Home Page */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-4 z-50">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
          <h1 className="text-lg md:text-xl font-bold text-white">Global Pathways AI</h1>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-8 text-slate-200 font-medium">
            <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
            <li onClick={() => scrollToSection(foundersRef)} className="cursor-pointer hover:text-cyan-400 transition-colors">Founders</li>
            <li onClick={() => scrollToSection(valuesRef)} className="cursor-pointer hover:text-cyan-400 transition-colors">Values</li>
            <li onClick={() => scrollToSection(footerRef)} className="cursor-pointer hover:text-cyan-400 transition-colors">Contact</li>
          </ul>
          <Link to="/signup">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full font-semibold transition-all">
              Get Started
            </button>
          </Link>
        </div>
        
        <div className="lg:hidden">
          <Menu className="text-white" />
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[85vh] pt-32 flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-block px-6 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-400 font-semibold">
              About Global Pathways
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-8">
              Empowering futures through{' '}
              <span className="text-cyan-400">data-driven clarity.</span>
            </h1>

            <p className="text-slate-300 text-xl md:text-2xl mb-12 max-w-3xl leading-relaxed">
              We believe every student deserves access to transparent, comprehensive career guidance. No more guesswork.
            </p>

            <div className="flex flex-wrap gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-cyan-400" />
                <span>150K+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-cyan-400" />
                <span>50+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                <span>98% Success Rate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

     {/* Founders Section - Scaled down cards */}
      <section ref={foundersRef} className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Meet the Founders</h2>
            <div className="h-1.5 w-20 bg-cyan-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Founder 1 */}
            <motion.div {...fadeInUp} className="group flex flex-col items-center text-center md:items-start md:text-left">
              <div className="relative w-full max-w-[400px] overflow-hidden rounded-2xl mb-6 aspect-square bg-slate-100 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1769071166862-8cc3a6f2ac5c" 
                  alt="Dr. Arjun Mehta" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Dr. Arjun Mehta</h3>
              <p className="text-cyan-600 font-bold mb-3">Co-Founder & CEO</p>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                PhD in Educational Data Science from MIT. His research became the foundation of our AI-driven engine.
              </p>
              <div className="flex flex-col gap-2 text-xs font-bold text-gray-500 uppercase tracking-tight">
                <div className="flex items-center gap-2"><TrendingUp size={16} className="text-cyan-500"/> Harvard Career Services</div>
                <div className="flex items-center gap-2"><Award size={16} className="text-cyan-500"/> Published Author</div>
              </div>
            </motion.div>

            {/* Founder 2 */}
            <motion.div {...fadeInUp} className="group flex flex-col items-center text-center md:items-start md:text-left">
              <div className="relative w-full max-w-[400px] overflow-hidden rounded-2xl mb-6 aspect-square bg-slate-100 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1758691737644-ef8be18256c3" 
                  alt="Sarah Chen" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Sarah Chen</h3>
              <p className="text-cyan-600 font-bold mb-3">Co-Founder & CTO</p>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                Former Google engineer and Stanford alum. Passionate about using tech to level the playing field.
              </p>
              <div className="flex flex-col gap-2 text-xs font-bold text-gray-500 uppercase tracking-tight">
                <div className="flex items-center gap-2"><TrendingUp size={16} className="text-cyan-500"/> Ex-Google Senior Dev</div>
                <div className="flex items-center gap-2"><Award size={16} className="text-cyan-500"/> Forbes 30 Under 30</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Core Values */}
      <section ref={valuesRef} className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Core Values</h2>
          </motion.div>

          <motion.div variants={staggerChildren} initial="initial" whileInView="whileInView" className="grid md:grid-cols-3 gap-12">
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0C1B35] to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Transparency First</h3>
              <p className="text-gray-600">Honest data visibility into costs and opportunities.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0C1B35] to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Global Accessibility</h3>
              <p className="text-gray-600">Guidance for students regardless of geography.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0C1B35] to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Student-Centric</h3>
              <p className="text-gray-600">Empowering you to make the best decisions for your future.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Replicated from Home Page */}
      <footer ref={footerRef} className="bg-[#0C1B35] text-white py-14 px-6 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          <div>
            <h3 className="font-semibold text-lg">Global Pathways AI</h3>
            <p className="mt-3 text-sm opacity-70">Empowering students with AI powered career guidance.</p>
          </div>
          <div>
            <h4 className="font-semibold">Product</h4>
            <ul className="mt-2 space-y-1 text-sm opacity-80">
              <li>Features</li>
              <li>Pricing</li>
              <li>App</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-2 space-y-1 text-sm opacity-80">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Resources</h4>
            <ul className="mt-2 space-y-1 text-sm opacity-80">
              <li>Help Center</li>
              <li>Guides</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10 opacity-60 text-sm">© 2026 Global Pathways AI</div>
      </footer>
    </div>
  );
}