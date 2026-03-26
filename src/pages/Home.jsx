import heroImg from "../assets/hero.png"
import ctaBg from "../assets/compass.png" // replace later with your image
import logo from "../assets/logo.png"
import { Rocket, BarChart3, Target } from "lucide-react"
 import { motion } from "framer-motion"; // Make sure to import this
function Home() {
  return (
    <div className="bg-white text-gray-900">

{/* NAVBAR */}
<nav className="absolute top-0 left-0 w-full flex justify-between items-center px-9 py-2 z-50">

  {/* Logo + Text */}
  <div className="flex items-center gap-1">
    <img
      src={logo}
      alt="logo"
      className="w-14 h-14 object-contain"
    />
    <h1 className="text-xl font-bold">
      Global Pathways AI
    </h1>
  </div>

  {/* Menu + button */}
  <div className="flex items-center gap-12">

    <ul className="flex gap-12 text-gray-700 font-medium">
      <li className="cursor-pointer hover:text-blue-600">Home</li>
      <li className="cursor-pointer hover:text-blue-600">Product</li>
      <li className="cursor-pointer hover:text-blue-600">Success Stories</li>
      <li className="cursor-pointer hover:text-blue-600">Contact</li>
    </ul>

    <button className="bg-[#0C1B35] text-white px-5 py-2 rounded-lg">
      Get Started
    </button>

  </div>

</nav>

    

{/* HERO SECTION */}
<section className="relative h-[700px] flex items-center justify-center text-center pt-20">
  <img
    src={heroImg}
    className="absolute inset-0 w-full h-full object-cover"
    alt=""
  />

  <div className="absolute inset-0 bg-black/20"></div>

  <div className="relative text-black max-w-3xl">
    {/* 1. Main Heading Animation */}
    <motion.h1 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-7xl font-bold leading-tight"
    >
      Discover Your Perfect
      <span className="text-[#1F496B]"> Global Career Path</span>
    </motion.h1>

    {/* 2. Subtext Animation (with slight delay) */}
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mt-4 text-lg"
    >
      AI powered guidance, college matching and scholarship support
    </motion.p>

    {/* 3. Button Animation (pops in slightly) */}
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
     <section className="bg-[#0C1B35] text-white py-28 overflow-hidden">
      <div className="max-w-5xl ml-32">
        {/* Animated Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl font-extrabold leading-tight"
        >
          Career decisions shouldn’t
          <br />
          feel like a <span className="text-[#F5A623]">gamble.</span>
        </motion.h2>

        {/* Animated Paragraph with a slight delay */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-xl text-gray-300 max-w-xl"
        >
          We guide students through data-backed insights and personalized
          recommendations.
        </motion.p>
      </div>
    </section>


  {/* CLARITY SECTION */}
<section className="relative bg-gray-100 py-28 text-center overflow-hidden">

  {/* Blue gradient decoration */}
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/40 to-transparent blur-3xl"></div>

  {/* Dot decoration */}
  <div className="absolute right-24 top-20 grid grid-cols-4 gap-3 opacity-80">
    {[...Array(16)].map((_, i) => (
      <div
        key={i}
        className={`w-3 h-3 rounded-full ${
          i === 3 || i === 7 ? "bg-blue-500" : "bg-gray-800"
        }`}
      ></div>
    ))}
  </div>

  <h2 className="text-6xl font-extrabold leading-tight">
    Choose with <span className="text-blue-500">clarity.</span>
    <br />
    Not guesswork.
  </h2>

  <p className="mt-6 text-gray-600 text-lg">
    Let Global Pathways AI
    <br />
    Map Your Career Blueprint.
  </p>


<div className="flex justify-center gap-10 mt-16 flex-wrap">

  {/* CARD 1 */}
  <div className="group w-64">
    <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl px-8 py-10 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300">

      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-6 mx-auto">
        <Rocket size={26} />
      </div>

      <h3 className="text-lg font-semibold mb-3">
        Plan Smart
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        Discover best countries, visas  
        and scholarship paths tailored  
        perfectly to your profile.
      </p>

    </div>
  </div>


  {/* CARD 2 */}
  <div className="group w-64">
    <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl px-8 py-10 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300">

      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-6 mx-auto">
        <BarChart3 size={26} />
      </div>

      <h3 className="text-lg font-semibold mb-3">
        Move Confidently
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        Make strong decisions using  
        real data insights instead  
        of relying on guesswork.
      </p>

    </div>
  </div>


  {/* CARD 3 */}
  <div className="group w-64">
    <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl px-8 py-10 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300">

      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-6 mx-auto">
        <Target size={26} />
      </div>

      <h3 className="text-lg font-semibold mb-3">
        Commit Strategically
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        Invest your time and money  
        only when the right path  
        becomes clear and certain.
      </p>

    </div>
  </div>

</div>
</section>
      {/* SUCCESS STORIES */}
<section className="bg-[#0C1B35] pt-20 pb-0 text-center relative overflow-hidden">

  {/* Decorative Dot Pattern */}
  <div className="absolute left-0 top-24 opacity-50 hidden md:block">
    <div className="grid grid-cols-4 gap-3">
      {[...Array(24)].map((_, i) => (
        <div key={i} className={`w-3 h-3 rounded-full ${i < 4 ? 'bg-blue-400' : 'bg-white'}`} />
      ))}
    </div>
  </div>

  <div className="relative z-10 px-4">
    <h2 className="text-5xl font-bold text-white mb-4">
      Success Stories from Our Community
    </h2>
    <p className="text-gray-300 mb-16 max-w-2xl mx-auto">
      Real people, real transformations. See how Global Pathways AI has helped professionals worldwide
    </p>
  </div>

  {/* White transition background */}
  <div className="bg-white pt-24 pb-20 mt-10 rounded-t-[100px] md:rounded-t-[200px]">
    <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-6">

      {/* Card 1 */}
      <div className="bg-white border-2 border-gray-900 p-10 rounded-3xl w-full md:w-[350px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
        <p className="text-lg leading-relaxed mb-12">
          "This platform helped me choose the right university abroad. The personalized recommendations were spot-on."
        </p>
        <div className="flex items-center gap-4 text-left">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            alt="Sarah"
            className="w-20 h-20 rounded-full border-4 border-orange-400 object-cover"
          />
          <div>
            <h4 className="font-bold text-xl">Sarah Johnson</h4>
            <p className="text-sm text-gray-600">Software Engineer</p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white border-2 border-gray-900 p-10 rounded-3xl w-full md:w-[350px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
        <p className="text-lg leading-relaxed mb-12">
          "The AI recommendations were incredibly accurate and to the point. Now I'm thriving in a role I love."
        </p>
        <div className="flex items-center gap-4 text-left">
          <img 
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            alt="Michael"
            className="w-20 h-20 rounded-full border-4 border-gray-800 object-cover grayscale"
          />
          <div>
            <h4 className="font-bold text-xl">Michael Chen</h4>
            <p className="text-sm text-gray-600">Data Analyst</p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white border-2 border-gray-900 p-10 rounded-3xl w-full md:w-[350px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
        <p className="text-lg leading-relaxed mb-12">
          "Scholarship suggestions saved me so much time. I successfully relocated and couldn't be happier!"
        </p>
        <div className="flex items-center gap-4 text-left">
          <img 
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
            alt="Priya"
            className="w-20 h-20 rounded-full border-4 border-slate-500 object-cover"
          />
          <div>
            <h4 className="font-bold text-xl">Priya Sharma</h4>
            <p className="text-sm text-gray-600">UX Designer</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* CTA */}
    

<section className="relative py-24 text-center text-white overflow-hidden">

  {/* Background Image */}
  <img
    src={ctaBg}
    className="absolute inset-0 w-full h-full object-cover"
    alt=""
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Content */}
  <div className="relative">

    <h2 className="text-4xl font-bold">
      Give your future <span className="text-blue-400">a clear direction.</span>
    </h2>

    <p className="mt-4 opacity-90">
      Join thousands of students discovering their global career path.
    </p>

    <div className="mt-6 flex justify-center gap-6">

      <button className="bg-blue-500 px-6 py-3 rounded-lg">
        Start Free Trial
      </button>

      <button className="bg-white text-black px-6 py-3 rounded-lg">
        Watch Video Tour
      </button>

    </div>

  </div>

</section>


      {/* FOOTER */}
      <footer className="bg-[#0C1B35] text-white py-14 px-16">

        <div className="grid grid-cols-4 gap-10">

          <div>
            <h3 className="font-semibold text-lg">Global Pathways AI</h3>
            <p className="mt-3 text-sm opacity-70">
              Empowering students with AI powered career guidance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Product</h4>
            <p className="mt-2 opacity-80">Features</p>
            <p className="opacity-80">Pricing</p>
            <p className="opacity-80">App</p>
          </div>

          <div>
            <h4 className="font-semibold">Company</h4>
            <p className="mt-2 opacity-80">About</p>
            <p className="opacity-80">Blog</p>
            <p className="opacity-80">Careers</p>
          </div>

          <div>
            <h4 className="font-semibold">Resources</h4>
            <p className="mt-2 opacity-80">Help Center</p>
            <p className="opacity-80">Guides</p>
            <p className="opacity-80">Support</p>
          </div>

        </div>

        <div className="text-center mt-10 opacity-60 text-sm">
          © 2026 Global Pathways AI
        </div>

      </footer>

    </div>
  )
}

export default Home