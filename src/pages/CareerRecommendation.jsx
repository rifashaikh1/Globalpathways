import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowLeft, Download, Share2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CareerRecommendation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [recommendation, setRecommendation] = useState(null);

  const mockRecommendation = {
    path: "Path B: Move Abroad",
    decision: "Based on your experience and market preference, global opportunities align with your profile. You have strong adaptability skills and interest in international markets.",
    confidence: 0.82,
    skills: ["Networking", "Advanced Technical Skills", "Adaptability", "Cultural Intelligence", "Language Learning Mindset"],
    roadmap: [
      "Strengthen core technical skills through targeted courses",
      "Build international professional network",
      "Apply to global tech companies and startups",
      "Prepare for visa and relocation requirements",
      "Schedule interviews and negotiate offers"
    ],
    alternatives: ["Local Career Growth", "Remote Work Path", "Freelance Opportunities"],
    color: "#06B6D4",
    icon: "✈️"
  };

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setRecommendation(location.state?.data || mockRecommendation);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.state]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
            Analyzing your career profile...
          </p>
        </div>
      </div>
    );
  }

  if (!recommendation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-cyan-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Recommendation Found</h2>
          <p className="text-gray-600 mb-6">Please complete the form first</p>
          <button
            onClick={() => navigate('/role-selection')}
            className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
          >
            Go Back to Form
          </button>
        </div>
      </div>
    );
  }

  const confidencePercent = Math.min(100, Math.max(0, (recommendation.confidence || 0) * 100));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-cyan-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h1 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className="text-gray-900">Global</span>
                <span className="text-cyan-500">Pathways</span>
              </h1>

              <h2 className="text-xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Your Results
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3 pb-4 border-b border-gray-200">
                  <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Career Match</h3>
                    <p className="text-xs text-gray-600">Your recommended path</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-4 border-b border-gray-200">
                  <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Confidence Score</h3>
                    <p className="text-xs text-gray-600">Match accuracy</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-4 border-b border-gray-200">
                  <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Key Skills</h3>
                    <p className="text-xs text-gray-600">Essential competencies</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-4 border-b border-gray-200">
                  <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Action Plan</h3>
                    <p className="text-xs text-gray-600">Next steps</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Alternatives</h3>
                    <p className="text-xs text-gray-600">Explore other paths</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              
              <div className="flex-1 overflow-y-auto p-8 lg:p-12 space-y-8">
                
                {/* Result Card Section */}
                <section>
                  <div className="mb-4">
                    <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Your Career Recommendation
                    </h2>
                    <p className="text-gray-600 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Based on your inputs, here is your personalized career pathway
                    </p>
                  </div>

                  <div 
                    className="border-l-4 rounded-lg p-6 bg-gradient-to-r from-cyan-50 to-transparent"
                    style={{ borderLeftColor: recommendation.color }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-5xl">{recommendation.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {recommendation.path}
                        </h3>
                        <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {recommendation.decision}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Confidence Section */}
                <section>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Match Confidence
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="relative w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600 transition-all duration-1000 ease-out"
                        style={{ width: `${confidencePercent}%` }}
                      ></div>
                    </div>
                    <p className="text-3xl font-bold text-cyan-600">
                      {confidencePercent.toFixed(0)}%
                    </p>
                    <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                      This confidence score represents how well the recommendation aligns with your profile
                    </p>
                  </div>
                </section>

                {/* Skills Section */}
                <section>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Key Focus Areas
                    </h3>
                    <p className="text-gray-600 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Essential skills to develop for this career path
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {recommendation.skills && recommendation.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg border border-cyan-200"
                      >
                        <div className="w-2 h-2 rounded-full bg-cyan-500 flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Roadmap Section */}
                <section>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Suggested Next Steps
                    </h3>
                    <p className="text-gray-600 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Follow this roadmap to achieve your career goals
                    </p>
                  </div>

                  <div className="space-y-3">
                    {recommendation.roadmap && recommendation.roadmap.map((step, index) => (
                      <div key={index} className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">
                          {index + 1}
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {step}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Alternatives Section */}
                <section>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Alternative Paths
                    </h3>
                    <p className="text-gray-600 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Other career directions you might consider
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {recommendation.alternatives && recommendation.alternatives.map((alt, index) => (
                      <div
                        key={index}
                        className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 hover:border-cyan-400 hover:shadow-lg transition-all cursor-pointer"
                      >
                        <h4 className="font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {alt}
                        </h4>
                        <div className="flex items-center gap-2 text-cyan-600 hover:gap-3 transition-all">
                          <span className="text-sm font-medium">Explore</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Footer Note */}
                <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                  <p className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <strong>Note:</strong> This recommendation is based on your current inputs and can evolve with more data. 
                    Feel free to explore other career paths or refine your inputs for a new recommendation.
                  </p>
                </section>

                {/* Action Buttons */}
                <div className="flex gap-4 pb-8">
                  <button className="flex items-center gap-2 flex-1 px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-semibold">
                    <Download className="w-5 h-5" />
                    Download Report
                  </button>
                  <button className="flex items-center gap-2 flex-1 px-6 py-3 border-2 border-cyan-500 text-cyan-600 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
                    <Share2 className="w-5 h-5" />
                    Share Results
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
