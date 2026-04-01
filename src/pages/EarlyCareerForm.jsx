import { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export function EarlyCareerForm({ userName = 'there', onComplete }) {
const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    city: '',
    country: '',
    willingToRelocate: '',
    educationLevel: '',
    fieldOfStudy: '',
    currentJobTitle: '',
    currentIndustry: '',
    totalYearsExperience: '',
    currentSalaryRange: '',
    previousJobRoles: '',
    keyResponsibilities: '',
    majorProjects: '',
    toolsTechnologies: '',
    teamSizeManaged: '',
    performanceRating: '',
    coreDomainSkills: 3,
    toolsPlatforms: 3,
    advancedSkills: 3,
    communication: 3,
    leadership: 3,
    decisionMaking: 3,
    problemSolving: 3,
    stakeholderManagement: 3,
    certifications: '',
    professionalAchievements: '',
    interestAreas: [],
    personalityType: '',
    aptitudeScore: '',
    strengthAreas: '',
    weaknessAreas: '',
    preferredRoleType: '',
    primaryGoal: '',
    targetIndustry: [],
    desiredJobRoles: [],
    threeYearIncomeTarget: '',
    fiveYearPositionGoal: '',
    workModePreference: '',
    riskAppetite: '',
    financialObligations: '',
    upskillingBudget: '',
    learningHours: '',
    canLeaveJob: ''
  });

  const steps = [
    { number: 1, title: 'Basic Profile', completed: currentStep > 1 },
    { number: 2, title: 'Work Experience', completed: currentStep > 2 },
    { number: 3, title: 'Skills Assessment', completed: currentStep > 3 },
    { number: 4, title: 'Psychometric Profile', completed: currentStep > 4 },
    { number: 5, title: 'Career Intent', completed: false }
  ];

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

  const renderRatingInput = (label, value, onChange) => (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
        {label}
      </label>
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            type="button"
            onClick={() => onChange(rating)}
            className={`w-10 h-10 rounded-lg font-bold transition-all ${
              value >= rating
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
                Early Career Professional
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
                        Tell us about your background and current professional status
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
                            Education Level *
                          </label>
                          <select
                            value={formData.educationLevel}
                            onChange={(e) => updateFormData('educationLevel', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            <option value="">Select...</option>
                            <option value="bachelors">Bachelor's Degree</option>
                            <option value="masters">Master's Degree</option>
                            <option value="phd">Ph.D.</option>
                            <option value="diploma">Diploma</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Field of Study *
                          </label>
                          <input
                            type="text"
                            value={formData.fieldOfStudy}
                            onChange={(e) => updateFormData('fieldOfStudy', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="e.g., Computer Science, Engineering"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Current Job Title *
                          </label>
                          <input
                            type="text"
                            value={formData.currentJobTitle}
                            onChange={(e) => updateFormData('currentJobTitle', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="e.g., Software Engineer, Business Analyst"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Current Industry *
                          </label>
                          <input
                            type="text"
                            value={formData.currentIndustry}
                            onChange={(e) => updateFormData('currentIndustry', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="e.g., IT Services, Finance, Healthcare"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Total Years of Experience *
                          </label>
                          <input
                            type="text"
                            value={formData.totalYearsExperience}
                            onChange={(e) => updateFormData('totalYearsExperience', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="e.g., 2.5 years"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Current Salary Range (₹ LPA)
                          </label>
                          <input
                            type="text"
                            value={formData.currentSalaryRange}
                            onChange={(e) => updateFormData('currentSalaryRange', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="e.g., 6-8 LPA"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Work Experience Details */}
                {currentStep === 2 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Work Experience Details
                      </h2>
                      <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Share details about your work experience and accomplishments
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Previous Job Roles (If Any)
                        </label>
                        <textarea
                          value={formData.previousJobRoles}
                          onChange={(e) => updateFormData('previousJobRoles', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                          placeholder="List your previous roles with company names and duration"
                          rows={4}
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Key Responsibilities
                        </label>
                        <textarea
                          value={formData.keyResponsibilities}
                          onChange={(e) => updateFormData('keyResponsibilities', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                          placeholder="Describe your key responsibilities in your current/previous roles"
                          rows={4}
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Major Projects Delivered
                        </label>
                        <textarea
                          value={formData.majorProjects}
                          onChange={(e) => updateFormData('majorProjects', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                          placeholder="Describe major projects you've worked on and your impact"
                          rows={4}
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Tools / Technologies Used
                        </label>
                        <textarea
                          value={formData.toolsTechnologies}
                          onChange={(e) => updateFormData('toolsTechnologies', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                          placeholder="List tools, technologies, and platforms you've worked with"
                          rows={3}
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Team Size Managed (If Any)
                          </label>
                          <input
                            type="text"
                            value={formData.teamSizeManaged}
                            onChange={(e) => updateFormData('teamSizeManaged', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="e.g., 5 people"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Performance Rating (If Available)
                          </label>
                          <input
                            type="text"
                            value={formData.performanceRating}
                            onChange={(e) => updateFormData('performanceRating', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="e.g., Exceeds Expectations"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>
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
                          {renderRatingInput('Core Domain Skills', formData.coreDomainSkills, (val) => updateFormData('coreDomainSkills', val))}
                          {renderRatingInput('Tools / Platforms', formData.toolsPlatforms, (val) => updateFormData('toolsPlatforms', val))}
                          {renderRatingInput('Advanced / Specialized Skills', formData.advancedSkills, (val) => updateFormData('advancedSkills', val))}
                        </div>
                      </div>

                      {/* Soft Skills */}
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          Soft Skills
                        </h3>
                        
                        <div className="space-y-6">
                          {renderRatingInput('Communication', formData.communication, (val) => updateFormData('communication', val))}
                          {renderRatingInput('Leadership', formData.leadership, (val) => updateFormData('leadership', val))}
                          {renderRatingInput('Decision Making', formData.decisionMaking, (val) => updateFormData('decisionMaking', val))}
                          {renderRatingInput('Problem Solving', formData.problemSolving, (val) => updateFormData('problemSolving', val))}
                          {renderRatingInput('Stakeholder Management', formData.stakeholderManagement, (val) => updateFormData('stakeholderManagement', val))}
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
                          placeholder="List any professional certifications you've completed"
                          rows={3}
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Professional Achievements
                        </label>
                        <textarea
                          value={formData.professionalAchievements}
                          onChange={(e) => updateFormData('professionalAchievements', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                          placeholder="Describe notable achievements, awards, or recognition"
                          rows={3}
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Psychometric & Career Orientation */}
                {currentStep === 4 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Psychometric & Career Orientation
                      </h2>
                      <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Help us understand your personality, interests, and career preferences
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Interest Areas (Select Top 5)
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {['Leadership', 'Technical Excellence', 'Strategy', 'Innovation', 'Operations', 
                            'Product Management', 'Project Management', 'Business Development', 'Analytics', 'Consulting',
                            'Entrepreneurship', 'Teaching/Mentoring'].map((area) => (
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
                          Aptitude / Analytical Score (If Available)
                        </label>
                        <input
                          type="text"
                          value={formData.aptitudeScore}
                          onChange={(e) => updateFormData('aptitudeScore', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                          placeholder="e.g., 90/100"
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
                          placeholder="Describe your key strengths and what you excel at"
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
                          placeholder="Areas you'd like to improve or develop further"
                          rows={3}
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Preferred Role Type
                        </label>
                        <select
                          value={formData.preferredRoleType}
                          onChange={(e) => updateFormData('preferredRoleType', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          <option value="">Select...</option>
                          <option value="individual-contributor">Individual Contributor</option>
                          <option value="managerial">Managerial</option>
                          <option value="strategic">Strategic</option>
                          <option value="technical-expert">Technical Expert</option>
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
                        Share your career goals, aspirations, and constraints
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
                          <option value="salary-growth">Salary Growth</option>
                          <option value="role-growth">Role Growth</option>
                          <option value="career-switch">Career Switch</option>
                          <option value="stability">Stability</option>
                          <option value="entrepreneurship">Entrepreneurship</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Target Industry (Select Top 3)
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {['Information Technology', 'Finance', 'Healthcare', 'E-commerce', 'Consulting', 
                            'Manufacturing', 'Education', 'Telecommunications', 'Media & Entertainment', 'Real Estate'].map((industry) => (
                            <button
                              key={industry}
                              type="button"
                              onClick={() => toggleArrayValue('targetIndustry', industry)}
                              className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                                formData.targetIndustry.includes(industry)
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
                          Desired Job Roles (Select Top 3)
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {['Senior Software Engineer', 'Tech Lead', 'Engineering Manager', 'Product Manager', 
                            'Solutions Architect', 'Data Scientist', 'Senior Analyst', 'Consultant',
                            'Team Lead', 'Specialist'].map((role) => (
                            <button
                              key={role}
                              type="button"
                              onClick={() => toggleArrayValue('desiredJobRoles', role)}
                              className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                                formData.desiredJobRoles.includes(role)
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
                            3-Year Income Target (₹ LPA)
                          </label>
                          <input
                            type="text"
                            value={formData.threeYearIncomeTarget}
                            onChange={(e) => updateFormData('threeYearIncomeTarget', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="e.g., 15-20 LPA"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            5-Year Position Goal
                          </label>
                          <input
                            type="text"
                            value={formData.fiveYearPositionGoal}
                            onChange={(e) => updateFormData('fiveYearPositionGoal', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="e.g., Senior Manager, Lead Architect"
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
                            Financial Obligations
                          </label>
                          <select
                            value={formData.financialObligations}
                            onChange={(e) => updateFormData('financialObligations', e.target.value)}
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
                            Budget for Upskilling (₹)
                          </label>
                          <input
                            type="text"
                            value={formData.upskillingBudget}
                            onChange={(e) => updateFormData('upskillingBudget', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="e.g., 50,000-1,00,000"
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
                            placeholder="e.g., 5-10 hours"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Can Leave Current Job for Study?
                          </label>
                          <select
                            value={formData.canLeaveJob}
                            onChange={(e) => updateFormData('canLeaveJob', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            <option value="">Select...</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            <option value="depends">Depends on Opportunity</option>
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
