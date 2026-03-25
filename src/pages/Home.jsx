import heroImg from "../assets/hero.png"

function Home() {
  return (
    <div className="bg-white text-gray-900">

      {/* NAVBAR */}
<nav className="flex justify-between items-center px-16 py-6 bg-white shadow-sm">

  <h1 className="text-xl font-bold">
    Global Pathways AI
  </h1>

  {/* Menu + button grouped */}
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
      <section className="relative h-[500px] flex items-center justify-center text-center">

        <img
          src={heroImg}
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-white max-w-2xl">

          <h1 className="text-5xl font-bold leading-tight">
            Discover Your Perfect
            <span className="text-blue-400"> Global Career Path</span>
          </h1>

          <p className="mt-4 text-lg">
            AI powered guidance, college matching and scholarship support
          </p>

          <button className="mt-6 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg">
            Download The App
          </button>

        </div>

      </section>


      {/* DARK SECTION */}
      <section className="bg-[#0C1B35] text-white py-28">

  <div className="max-w-5xl ml-32">

    <h2 className="text-6xl font-extrabold leading-tight">
      Career decisions shouldn’t
      <br />
      feel like a <span className="text-[#F5A623]">gamble.</span>
    </h2>

    <p className="mt-6 text-xl text-gray-300 max-w-xl">
      We guide students through data-backed insights and personalized
      recommendations.
    </p>

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

  <div className="flex justify-center gap-12 mt-16">

    {/* CARD 1 */}
    <div className="bg-white border border-black rounded-xl shadow-md px-8 py-10 w-64 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold">
        Plan Smart
      </h3>

      <p className="text-gray-600 mt-4">
        Understand the strongest countries, visas,
        and scholarship pathways for your profile.
      </p>
    </div>

    {/* CARD 2 */}
    <div className="bg-white border border-black rounded-xl shadow-md px-8 py-10 w-64 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold">
        Move Confidently
      </h3>

      <p className="text-gray-600 mt-4">
        Make decisions backed by real data,
        not assumptions.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="bg-white border border-black rounded-xl shadow-md px-8 py-10 w-64 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold">
        Commit Strategically
      </h3>

      <p className="text-gray-600 mt-4">
        Invest your time and money only
        when the path is clear.
      </p>
    </div>

  </div>

</section>
      {/* SUCCESS STORIES */}
<section className="bg-[#0C1B35] pt-20 pb-0 text-center relative overflow-hidden">
  {/* Decorative Dot Pattern (Left) */}
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
      <div className="relative bg-white border-2 border-gray-900 text-black p-10 rounded-3xl w-full md:w-[350px] shadow-sm">
        <p className="text-lg leading-relaxed mb-12">
          "This platform helped me choose the right university abroad. The personalized recommendations were spot-on."
        </p>
        <div className="flex items-center gap-4 text-left">
          <img 
            src="https://via.placeholder.com/80" 
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
      <div className="relative bg-white border-2 border-gray-900 text-black p-10 rounded-3xl w-full md:w-[350px] shadow-sm">
        <p className="text-lg leading-relaxed mb-12">
          "The AI recommendations were incredibly accurate. Now I'm thriving in a role I love."
        </p>
        <div className="flex items-center gap-4 text-left">
          <img 
            src="https://via.placeholder.com/80" 
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
      <div className="relative bg-white border-2 border-gray-900 text-black p-10 rounded-3xl w-full md:w-[350px] shadow-sm">
        <p className="text-lg leading-relaxed mb-12">
          "Scholarship suggestions saved me so much time. I successfully relocated and couldn't be happier!"
        </p>
        <div className="flex items-center gap-4 text-left">
          <img 
            src="https://via.placeholder.com/80" 
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
      <section className="relative py-24 text-center text-white">

        <div className="absolute inset-0 bg-black/60"></div>

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