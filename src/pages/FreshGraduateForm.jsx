import { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";
export function FreshGraduateForm({ userName = 'there', onComplete }) {
    const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);


  const steps = [
    { number: 1, title: 'Personal Info', completed: currentStep > 1 },
    { number: 2, title: 'Education', completed: currentStep > 2 },
    { number: 3, title: 'Skills Assessment', completed: currentStep > 3 },
    { number: 4, title: 'Psychometric Profile', completed: currentStep > 4 },
    { number: 5, title: 'Career Intent', completed: false }
  ];
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    city: '',
    country: '',
    willingToRelocate: '',
    beBranch: '',
    collegeName: '',
    cgpa: '',
    yearOfGraduation: '',
    finalYearProject: '',
    technologiesUsed: '',
    internshipExperience: '',
    internshipDomain: '',
    keySubjects: '',
    practicalStrength: '',
    hackathons: '',
    portfolioLink: '',
    programmingLanguages: {},
    coreEngineeringConcepts: 3,
    toolsSoftware: 3,
    frameworksPlatforms: 3,
    communication: 3,
    teamwork: 3,
    problemSolving: 3,
    leadership: 3,
    adaptability: 3,
    certifications: '',
    interestAreas: [],
    aptitudeScore: '',
    logicalReasoningScore: '',
    personalityType: '',
    strengthAreas: '',
    weaknessAreas: '',
    preferredWorkType: '',
    primaryGoal: '',
    preferredIndustry: [],
    preferredJobRoles: [],
    threeYearIncomeTarget: '',
    workModePreference: '',
    riskAppetite: '',
    upskillingBudget: '',
    learningHours: '',
    immediateJobNeed: ''
  });

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
  if (e) e.preventDefault();

  console.log('Form submitted:', formData);

  // ✅ Safe check
  if (onComplete) {
    onComplete(formData);
  }

  navigate("/career-recommendation");
};

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayValue = (field, value) => {
    const currentArray = formData[field];
    if (currentArray.includes(value)) {
      updateFormData(field, currentArray.filter(item => item !== value));
    } else {
      updateFormData(field, [...currentArray, value]);
    }
  };

  const updateProgrammingSkill = (language, rating) => {
    setFormData(prev => ({
      ...prev,
      programmingLanguages: {
        ...prev.programmingLanguages,
        [language]: rating
      }
    }));
  };

  const renderRatingInput = (label, value, onChange) => (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            type="button"
            onClick={() => onChange(rating)}
            className={`w-10 h-10 rounded-lg font-bold ${
              value >= rating
                ? 'bg-cyan-500 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {rating}
          </button>
        ))}
      </div>
    </div>
  );

return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-cyan-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar - Progress Steps */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col" style={{ height: 'calc(100vh - 4rem)' }}>
              {/* Logo */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <span className="text-gray-900">Global</span>
                  <span className="text-cyan-500">Pathways</span>
                </h1>
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Fresh Graduate Profile
              </h2>

              {/* Steps */}
              <div className="flex-1 flex flex-col justify-between">
                {steps.map((step, index) => (
                  <div key={step.number} className="relative">
                    {/* Connecting Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-4 top-14 w-0.5 bottom-0 bg-cyan-500" style={{ height: 'calc(100% + 20px)' }}></div>
                    )}
                    
                    <button
                     onClick={() => setCurrentStep(step.number)}
                      className={`w-full flex items-center gap-4 px-4 py-4 rounded-lg transition-all relative ${
                        currentStep === step.number
                          ? 'bg-cyan-50'
                          : ''
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                          step.completed
                            ? 'bg-cyan-500'
                            : currentStep === step.number
                            ? 'bg-cyan-500'
                            : 'bg-gray-300'
                        }`}
                      >
                        {step.completed ? (
                          <Check className="w-5 h-5 text-white" />
                        ) : (
                          <span className="text-white font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {step.number}
                          </span>
                        )}
                      </div>
                      <span
                        className={`text-sm font-medium text-left ${
                          currentStep === step.number ? 'text-gray-900' : 'text-gray-500'
                        }`}
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {step.title}
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Form Area */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-lg flex flex-col" style={{ height: 'calc(100vh - 4rem)' }}>
              {/* Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto p-8 lg:p-12">
                {/* Step 1: Basic Profile */}
                {currentStep === 1 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Basic Profile
                      </h2>
                      <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Let's start with your basic information and educational background
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Full Name *
                          </label>
                          <input
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => updateFormData('fullName', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="Enter your full name"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Age *
                          </label>
                          <input
                            type="number"
                            value={formData.age}
                            onChange={(e) => updateFormData('age', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="Enter your age"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            City *
                          </label>
                          <input
                            type="text"
                            value={formData.city}
                            onChange={(e) => updateFormData('city', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="Enter your city"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Country *
                          </label>
                          <input
                            type="text"
                            value={formData.country}
                            onChange={(e) => updateFormData('country', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="Enter your country"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Willing to Relocate *
                          </label>
                          <select
                            value={formData.willingToRelocate}
                            onChange={(e) => updateFormData('willingToRelocate', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            <option value="">Select...</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            <option value="depends">Depends on Opportunity</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            B.E. Branch / Specialization *
                          </label>
                          <input
                            type="text"
                            value={formData.beBranch}
                            onChange={(e) => updateFormData('beBranch', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="e.g., Computer Science, Mechanical"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            College Name *
                          </label>
                          <input
                            type="text"
                            value={formData.collegeName}
                            onChange={(e) => updateFormData('collegeName', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="Enter your college name"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            CGPA / Percentage *
                          </label>
                          <input
                            type="text"
                            value={formData.cgpa}
                            onChange={(e) => updateFormData('cgpa', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="e.g., 8.5 CGPA or 85%"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Year of Graduation *
                          </label>
                          <input
                            type="text"
                            value={formData.yearOfGraduation}
                            onChange={(e) => updateFormData('yearOfGraduation', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="e.g., 2024"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Academic & Exposure Details */}
                {currentStep === 2 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Academic & Exposure Details
                      </h2>
                      <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Tell us about your projects, internships, and academic experience
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Final Year Project Title
                        </label>
                        <input
                          type="text"
                          value={formData.finalYearProject}
                          onChange={(e) => updateFormData('finalYearProject', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                          placeholder="Enter your final year project title"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Technologies Used
                        </label>
                        <textarea
                          value={formData.technologiesUsed}
                          onChange={(e) => updateFormData('technologiesUsed', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                          placeholder="List technologies used in your projects (e.g., React, Python, AWS)"
                          rows={3}
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Internship Experience
                          </label>
                          <select
                            value={formData.internshipExperience}
                            onChange={(e) => updateFormData('internshipExperience', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            <option value="">Select...</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Internship Domain
                          </label>
                          <input
                            type="text"
                            value={formData.internshipDomain}
                            onChange={(e) => updateFormData('internshipDomain', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="e.g., Software Development, Data Science"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Key Subjects (Top 5)
                        </label>
                        <textarea
                          value={formData.keySubjects}
                          onChange={(e) => updateFormData('keySubjects', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                          placeholder="List your top 5 subjects (comma separated)"
                          rows={3}
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Practical / Lab Strength Areas
                        </label>
                        <textarea
                          value={formData.practicalStrength}
                          onChange={(e) => updateFormData('practicalStrength', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                          placeholder="Describe your practical strengths and lab experience"
                          rows={3}
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Hackathons / Competitions
                        </label>
                        <select
                          value={formData.hackathons}
                          onChange={(e) => updateFormData('hackathons', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          <option value="">Select...</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Portfolio / GitHub / LinkedIn Link
                        </label>
                        <input
                          type="url"
                          value={formData.portfolioLink}
                          onChange={(e) => updateFormData('portfolioLink', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                          placeholder="https://..."
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Skills Assessment */}
                {currentStep === 3 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Skills Assessment
                      </h2>
                      <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Rate your technical and soft skills on a scale of 1-5
                      </p>
                    </div>

                    <div className="space-y-8">
                      {/* Technical Skills */}
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          Technical Skills
                        </h3>
                        
                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Programming Languages (Rate each 1-5)
                            </label>
                            <div className="space-y-4">
                              {['Python', 'Java', 'JavaScript', 'C++', 'C'].map((lang) => (
                                <div key={lang} className="flex items-center justify-between gap-4">
                                  <span className="text-sm font-medium text-gray-700 w-32" style={{ fontFamily: 'Inter, sans-serif' }}>{lang}</span>
                                  <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((rating) => (
                                      <button
                                        key={rating}
                                        type="button"
                                        onClick={() => updateProgrammingSkill(lang, rating)}
                                        className={`w-10 h-10 rounded-lg font-bold transition-all ${
                                          (formData.programmingLanguages[lang] || 0) >= rating
                                            ? 'bg-cyan-500 text-white'
                                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                        }`}
                                        style={{ fontFamily: 'Inter, sans-serif' }}
                                      >
                                        {rating}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {renderRatingInput('Core Engineering Concepts', formData.coreEngineeringConcepts, (val) => updateFormData('coreEngineeringConcepts', val))}
                          {renderRatingInput('Tools / Software', formData.toolsSoftware, (val) => updateFormData('toolsSoftware', val))}
                          {renderRatingInput('Frameworks / Platforms', formData.frameworksPlatforms, (val) => updateFormData('frameworksPlatforms', val))}
                        </div>
                      </div>

                      {/* Soft Skills */}
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          Soft Skills
                        </h3>
                        
                        <div className="space-y-6">
                          {renderRatingInput('Communication', formData.communication, (val) => updateFormData('communication', val))}
                          {renderRatingInput('Teamwork', formData.teamwork, (val) => updateFormData('teamwork', val))}
                          {renderRatingInput('Problem Solving', formData.problemSolving, (val) => updateFormData('problemSolving', val))}
                          {renderRatingInput('Leadership', formData.leadership, (val) => updateFormData('leadership', val))}
                          {renderRatingInput('Adaptability', formData.adaptability, (val) => updateFormData('adaptability', val))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Certifications Completed
                        </label>
                        <textarea
                          value={formData.certifications}
                          onChange={(e) => updateFormData('certifications', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                          placeholder="List any relevant certifications (comma separated)"
                          rows={3}
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Psychometric & Aptitude Inputs */}
                {currentStep === 4 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Psychometric & Aptitude Inputs
                      </h2>
                      <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Help us understand your personality, interests, and aptitudes
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Interest Areas (Select Top 5)
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {['Software Development', 'Data Science', 'AI/ML', 'Cybersecurity', 'Cloud Computing', 
                            'IoT', 'Web Development', 'Mobile Apps', 'DevOps', 'Blockchain', 
                            'Game Development', 'Embedded Systems'].map((area) => (
                            <button
                              key={area}
                              type="button"
                              onClick={() => toggleArrayValue('interestAreas', area)}
                              className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                                formData.interestAreas.includes(area)
                                  ? 'bg-cyan-500 border-cyan-500 text-white'
                                  : 'bg-white border-gray-300 text-gray-700 hover:border-cyan-300'
                              }`}
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              {area}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Aptitude Test Score (If Available)
                          </label>
                          <input
                            type="text"
                            value={formData.aptitudeScore}
                            onChange={(e) => updateFormData('aptitudeScore', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="e.g., 85/100"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Logical Reasoning Score (If Available)
                          </label>
                          <input
                            type="text"
                            value={formData.logicalReasoningScore}
                            onChange={(e) => updateFormData('logicalReasoningScore', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="e.g., 90/100"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Personality Type (Assessment Result)
                        </label>
                        <input
                          type="text"
                          value={formData.personalityType}
                          onChange={(e) => updateFormData('personalityType', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                          placeholder="e.g., INTJ, ENFP (Myers-Briggs Type Indicator)"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Strength Areas
                        </label>
                        <textarea
                          value={formData.strengthAreas}
                          onChange={(e) => updateFormData('strengthAreas', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                          placeholder="Describe your key strengths"
                          rows={3}
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Weakness Areas
                        </label>
                        <textarea
                          value={formData.weaknessAreas}
                          onChange={(e) => updateFormData('weaknessAreas', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                          placeholder="Areas you'd like to improve"
                          rows={3}
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Preferred Work Type
                        </label>
                        <select
                          value={formData.preferredWorkType}
                          onChange={(e) => updateFormData('preferredWorkType', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          <option value="">Select...</option>
                          <option value="technical">Technical</option>
                          <option value="managerial">Managerial</option>
                          <option value="research">Research</option>
                          <option value="creative">Creative</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Career Intent & Constraints */}
                {currentStep === 5 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Career Intent & Constraints
                      </h2>
                      <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Share your career goals, preferences, and constraints
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Primary Goal
                        </label>
                        <select
                          value={formData.primaryGoal}
                          onChange={(e) => updateFormData('primaryGoal', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          <option value="">Select...</option>
                          <option value="job">Job</option>
                          <option value="higher-studies">Higher Studies</option>
                          <option value="startup">Startup</option>
                          <option value="government-exam">Government Exam</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Preferred Industry (Select Top 3)
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {['Information Technology', 'Finance', 'Healthcare', 'E-commerce', 'Manufacturing', 
                            'Consulting', 'Education', 'Telecommunications', 'Automotive', 'Energy'].map((industry) => (
                            <button
                              key={industry}
                              type="button"
                              onClick={() => toggleArrayValue('preferredIndustry', industry)}
                              className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                                formData.preferredIndustry.includes(industry)
                                  ? 'bg-cyan-500 border-cyan-500 text-white'
                                  : 'bg-white border-gray-300 text-gray-700 hover:border-cyan-300'
                              }`}
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              {industry}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Preferred Job Roles (Select Top 3)
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {['Software Engineer', 'Data Analyst', 'Product Manager', 'DevOps Engineer', 
                            'UI/UX Designer', 'QA Engineer', 'Business Analyst', 'System Administrator',
                            'Database Administrator', 'Network Engineer'].map((role) => (
                            <button
                              key={role}
                              type="button"
                              onClick={() => toggleArrayValue('preferredJobRoles', role)}
                              className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                                formData.preferredJobRoles.includes(role)
                                  ? 'bg-cyan-500 border-cyan-500 text-white'
                                  : 'bg-white border-gray-300 text-gray-700 hover:border-cyan-300'
                              }`}
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              {role}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            3-Year Income Target (₹)
                          </label>
                          <input
                            type="text"
                            value={formData.threeYearIncomeTarget}
                            onChange={(e) => updateFormData('threeYearIncomeTarget', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="e.g., 10-15 LPA"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Work Mode Preference
                          </label>
                          <select
                            value={formData.workModePreference}
                            onChange={(e) => updateFormData('workModePreference', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            <option value="">Select...</option>
                            <option value="remote">Remote</option>
                            <option value="hybrid">Hybrid</option>
                            <option value="onsite">Onsite</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Risk Appetite
                          </label>
                          <select
                            value={formData.riskAppetite}
                            onChange={(e) => updateFormData('riskAppetite', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            <option value="">Select...</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Budget for Upskilling (₹)
                          </label>
                          <input
                            type="text"
                            value={formData.upskillingBudget}
                            onChange={(e) => updateFormData('upskillingBudget', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="e.g., 10,000-50,000"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Time Available for Learning (Hours/Week)
                          </label>
                          <input
                            type="text"
                            value={formData.learningHours}
                            onChange={(e) => updateFormData('learningHours', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="e.g., 10-15 hours"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Immediate Job Need
                          </label>
                          <select
                            value={formData.immediateJobNeed}
                            onChange={(e) => updateFormData('immediateJobNeed', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            <option value="">Select...</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Fixed Bottom Navigation */}
              <div className="border-t border-gray-200 p-8">
                <div className="flex items-center justify-between">
                  <button
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                      currentStep === 1
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Previous
                  </button>

                  {currentStep < 5 ? (
                    <button
                      onClick={handleNext}
                      className="group px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all font-semibold flex items-center gap-2"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Next
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all font-semibold"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Complete Profile
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



