import { useRef } from "react"; // Added useRef
import heroImg from "../assets/hero.png"
import ctaBg from "../assets/compass.png" 
import logo from "../assets/logo.png"
import { Rocket, BarChart3, Target, Menu } from "lucide-react"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Home() {
  // 1. Create references for the sections
  const heroRef = useRef(null);
  const clarityRef = useRef(null);
  const successRef = useRef(null);
  const footerRef = useRef(null);

  // 2. Function to handle the smooth scroll
  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-9 py-2 z-50">
        <div className="flex items-center gap-1">
          <img src={logo} alt="logo" className="w-12 h-12 md:w-14 md:h-14 object-contain" />
          <h1 className="text-lg md:text-xl font-bold">Global Pathways AI</h1>
        </div>

        {/* Hidden on mobile, flex on desktop */}
        <div className="hidden lg:flex items-center gap-12">
          <ul className="flex gap-12 text-gray-700 font-medium">
            {/* 3. Added onClick events to links */}
            <li onClick={() => scrollToSection(heroRef)} className="cursor-pointer hover:text-blue-600">Home</li>
            <li onClick={() => scrollToSection(clarityRef)} className="cursor-pointer hover:text-blue-600">Product</li>
            <li onClick={() => scrollToSection(successRef)} className="cursor-pointer hover:text-blue-600">Success Stories</li>
            <li onClick={() => scrollToSection(footerRef)} className="cursor-pointer hover:text-blue-600">Contact</li>
          </ul>
       

<Link to="/signup">
  <button className="bg-[#0C1B35] text-white px-5 py-2 rounded-lg">
    Get Started
  </button>
</Link>
        </div>
        
        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <Menu className="text-[#0C1B35]" />
        </div>
      </nav>

      {/* HERO SECTION - Added heroRef */}
      <section ref={heroRef} className="relative h-[600px] md:h-[700px] flex items-center justify-center text-center px-4 pt-20">
        <img src={heroImg} className="absolute inset-0 w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative text-black max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-7xl font-bold leading-tight"
          >
            Discover Your Perfect
            <span className="text-[#1F496B]"> Global Career Path</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-base md:text-lg"
          >
            AI powered guidance, college matching and scholarship support
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <button className="mt-6 bg-[#0C1B35] hover:bg-blue-600 px-6 py-3 rounded-lg text-white transition-colors">
              Download The App
            </button>
          </motion.div>
        </div>
      </section>

      {/* DARK SECTION */}
      <section className="bg-[#0C1B35] text-white py-20 md:py-28 overflow-hidden">
        <div className="max-w-5xl px-6 md:ml-32">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Career decisions shouldn’t
            <br />
            feel like a <span className="text-[#F5A623]">gamble.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl"
          >
            We guide students through data-backed insights and personalized recommendations.
          </motion.p>
        </div>
      </section>

      {/* CLARITY SECTION - Added clarityRef */}
      <section ref={clarityRef} className="relative bg-gray-100 py-20 md:py-28 text-center px-6 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tr from-blue-400/40 to-transparent blur-3xl"></div>
        <div className="absolute right-6 md:right-24 top-10 md:top-20 grid grid-cols-4 gap-3 opacity-80">
          {[...Array(16)].map((_, i) => (
            <div key={i} className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${i === 3 || i === 7 ? "bg-blue-500" : "bg-gray-800"}`}></div>
          ))}
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Choose with <span className="text-blue-500">clarity.</span>
          <br />
          Not guesswork.
        </h2>

        <p className="mt-6 text-gray-600 text-base md:text-lg">
          Let Global Pathways AI <br className="hidden md:block" /> Map Your Career Blueprint.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-16 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="group w-full max-w-xs md:w-64">
            <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl px-8 py-10 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-6 mx-auto">
                <Rocket size={26} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Plan Smart</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Discover best countries, visas and scholarship paths tailored perfectly to your profile.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group w-full max-w-xs md:w-64">
            <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl px-8 py-10 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-6 mx-auto">
                <BarChart3 size={26} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Move Confidently</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Make strong decisions using real data insights instead of relying on guesswork.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group w-full max-w-xs md:w-64">
            <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl px-8 py-10 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-6 mx-auto">
                <Target size={26} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Commit Strategically</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Invest your time and money only when the right path becomes clear and certain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES - Added successRef */}
      <section ref={successRef} className="bg-[#0C1B35] pt-20 pb-0 text-center relative overflow-hidden">
        <div className="absolute left-0 top-24 opacity-50 hidden lg:block">
          <div className="grid grid-cols-4 gap-3">
            {[...Array(24)].map((_, i) => (
              <div key={i} className={`w-3 h-3 rounded-full ${i < 4 ? 'bg-blue-400' : 'bg-white'}`} />
            ))}
          </div>
        </div>

        <div className="relative z-10 px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Success Stories from Our Community</h2>
          <p className="text-gray-300 mb-16 max-w-2xl mx-auto">Real people, real transformations. See how Global Pathways AI has helped professionals worldwide</p>
        </div>

        <div className="bg-white pt-16 md:pt-24 pb-20 mt-10 rounded-t-[60px] md:rounded-t-[200px]">
          <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-6">
            {/* Card 1 */}
            <div className="bg-white border-2 border-gray-900 p-6 md:p-10 rounded-3xl w-full md:w-[350px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <p className="text-base md:text-lg leading-relaxed mb-12">"This platform helped me choose the right university abroad. The personalized recommendations were spot-on."</p>
              <div className="flex items-center gap-4 text-left">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" alt="Sarah" className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-orange-400 object-cover" />
                <div>
                  <h4 className="font-bold text-lg md:text-xl">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Software Engineer</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-2 border-gray-900 p-6 md:p-10 rounded-3xl w-full md:w-[350px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <p className="text-base md:text-lg leading-relaxed mb-12">"The AI recommendations were incredibly accurate and to the point. Now I'm thriving in a role I love."</p>
              <div className="flex items-center gap-4 text-left">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" alt="Michael" className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-gray-800 object-cover grayscale" />
                <div>
                  <h4 className="font-bold text-lg md:text-xl">Michael Chen</h4>
                  <p className="text-sm text-gray-600">Data Analyst</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border-2 border-gray-900 p-6 md:p-10 rounded-3xl w-full md:w-[350px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <p className="text-base md:text-lg leading-relaxed mb-12">"Scholarship suggestions saved me so much time. I successfully relocated and couldn't be happier!"</p>
              <div className="flex items-center gap-4 text-left">
                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9" alt="Priya" className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-slate-500 object-cover" />
                <div>
                  <h4 className="font-bold text-lg md:text-xl">Priya Sharma</h4>
                  <p className="text-sm text-gray-600">UX Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-20 md:py-24 text-center text-white px-6 overflow-hidden">
        <img src={ctaBg} className="absolute inset-0 w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold">Give your future <span className="text-blue-400">a clear direction.</span></h2>
          <p className="mt-4 opacity-90 text-sm md:text-base">Join thousands of students discovering their global career path.</p>
          <div className="mt-6 flex flex-col md:flex-row justify-center gap-4 md:gap-6">
            <button className="bg-blue-500 px-6 py-3 rounded-lg w-full md:w-auto">Start Free Trial</button>
            <button className="bg-white text-black px-6 py-3 rounded-lg w-full md:w-auto">Watch Video Tour</button>
          </div>
        </div>
      </section>

      {/* FOOTER - Added footerRef */}
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
  )
}

export default Home;