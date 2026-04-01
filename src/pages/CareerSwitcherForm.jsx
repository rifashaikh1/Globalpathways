import { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";
export default function CareerSwitcherForm({ userName, onComplete }) {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);


  const [formData, setFormData] = useState({
    age: '',
    currentCountry: '',
    targetCountries: [],
    educationLevel: '',
    fieldOfStudy: '',
    currentJobTitle: '',
    yearsOfExperience: '',
    currentSalaryRange: '',
    monthlyExpenses: '',
    savingsBuffer: '',
    hasDependents: '',
    willingToTakeLoan: '',
    riskTolerance: 5,
    switchingReasons: [],
    timeHorizon: '',
    willingTo: [],
    transferableSkills: [],
    certificationsCompleted: '',
    hasPortfolio: '',
    portfolioDetails: '',
    englishProficiency: '',
    workAuthorizationConstraints: '',
    willingToRelocateDomestically: '',
  });

  const steps = [
    { number: 1, title: 'Personal Profile', completed: currentStep > 1 },
    { number: 2, title: 'Financial Constraints', completed: currentStep > 2 },
    { number: 3, title: 'Career Intent & Motivation', completed: currentStep > 3 },
    { number: 4, title: 'Skill & Transition Readiness', completed: currentStep > 4 },
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(formData);
    }
  };

  const handleBack = () => {
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
  const toggleArrayItem = (field, value) => {
    const currentArray = formData[field];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];

    setFormData({ ...formData, [field]: newArray });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-cyan-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Sidebar */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col" style={{ height: 'calc(100vh - 4rem)' }}>

              <div className="mb-8">
                <h1 className="text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <span className="text-gray-900">Global</span>
                  <span className="text-cyan-500">Pathways</span>
                </h1>
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-12">
                Career Switcher Profile
              </h2>

              <div className="flex-1 flex flex-col justify-between">
                {steps.map((step, index) => (
                  <div key={step.number} className="relative">

                    {index < steps.length - 1 && (
                      <div className="absolute left-4 top-14 w-0.5 bg-cyan-500"
                        style={{ height: 'calc(100% + 20px)' }} />
                    )}

                    <button
                      onClick={() => setCurrentStep(step.number)}
                      className={`w-full flex items-center gap-4 px-4 py-4 rounded-lg ${
                        currentStep === step.number ? 'bg-cyan-50' : ''
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center ${
                        step.completed || currentStep === step.number
                          ? 'bg-cyan-500'
                          : 'bg-gray-300'
                      }`}>
                        {step.completed ? (
                          <Check className="text-white w-5 h-5" />
                        ) : (
                          <span className="text-white font-bold">{step.number}</span>
                        )}
                      </div>

                      <span className={`${currentStep === step.number ? 'text-gray-900' : 'text-gray-500'}`}>
                        {step.title}
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-lg flex flex-col" style={{ height: 'calc(100vh - 4rem)' }}>

              <div className="flex-1 overflow-y-auto p-8">

                {/* STEP 1 */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Personal Profile
                      </h2>
                      <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Tell us about your current situation and background
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Age
                        </label>
                        <input
                          type="number"
                          value={formData.age}
                          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="Enter your age"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Current Country
                        </label>
                        <input
                          type="text"
                          value={formData.currentCountry}
                          onChange={(e) => setFormData({ ...formData, currentCountry: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="Enter your current country"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Target Countries (Select all that apply)
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {['USA', 'Canada', 'UK', 'Germany', 'Australia', 'Singapore', 'UAE', 'Other'].map((country) => (
                          <button
                            key={country}
                            onClick={() => toggleArrayItem('targetCountries', country)}
                            className={`px-4 py-2 rounded-lg border-2 transition-all ${
                              formData.targetCountries.includes(country)
                                ? 'bg-cyan-600 border-cyan-600 text-white'
                                : 'bg-white border-gray-300 text-gray-700 hover:border-cyan-400'
                            }`}
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            {country}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Education Level
                        </label>
                        <select
                          value={formData.educationLevel}
                          onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        >
                          <option value="">Select education level</option>
                          <option value="High School">High School</option>
                          <option value="Associate Degree">Associate Degree</option>
                          <option value="Bachelor's Degree">Bachelor's Degree</option>
                          <option value="Master's Degree">Master's Degree</option>
                          <option value="Doctorate">Doctorate</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Field of Study
                        </label>
                        <input
                          type="text"
                          value={formData.fieldOfStudy}
                          onChange={(e) => setFormData({ ...formData, fieldOfStudy: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="e.g., Computer Science, Business"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Current Job Title
                        </label>
                        <input
                          type="text"
                          value={formData.currentJobTitle}
                          onChange={(e) => setFormData({ ...formData, currentJobTitle: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="e.g., Marketing Manager"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Years of Experience
                        </label>
                        <select
                          value={formData.yearsOfExperience}
                          onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        >
                          <option value="">Select years</option>
                          <option value="0-2">0-2 years</option>
                          <option value="3-5">3-5 years</option>
                          <option value="6-10">6-10 years</option>
                          <option value="11-15">11-15 years</option>
                          <option value="15+">15+ years</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Current Salary Range (Annual)
                      </label>
                      <select
                        value={formData.currentSalaryRange}
                        onChange={(e) => setFormData({ ...formData, currentSalaryRange: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Select salary range</option>
                        <option value="<$30k">Less than $30,000</option>
                        <option value="$30k-$50k">$30,000 - $50,000</option>
                        <option value="$50k-$75k">$50,000 - $75,000</option>
                        <option value="$75k-$100k">$75,000 - $100,000</option>
                        <option value="$100k-$150k">$100,000 - $150,000</option>
                        <option value="$150k+">$150,000+</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
              {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Financial Constraints
                      </h2>
                      <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Help us understand your financial situation
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Monthly Expenses
                        </label>
                        <input
                          type="text"
                          value={formData.monthlyExpenses}
                          onChange={(e) => setFormData({ ...formData, monthlyExpenses: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="e.g., $3,000"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Savings Buffer (in months)
                        </label>
                        <select
                          value={formData.savingsBuffer}
                          onChange={(e) => setFormData({ ...formData, savingsBuffer: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        >
                          <option value="">Select buffer</option>
                          <option value="<3">Less than 3 months</option>
                          <option value="3-6">3-6 months</option>
                          <option value="6-12">6-12 months</option>
                          <option value="12+">12+ months</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Do you have dependents?
                        </label>
                        <div className="flex gap-4">
                          <button
                            onClick={() => setFormData({ ...formData, hasDependents: 'yes' })}
                            className={`flex-1 px-6 py-3 rounded-lg border-2 transition-all ${
                              formData.hasDependents === 'yes'
                                ? 'bg-cyan-600 border-cyan-600 text-white'
                                : 'bg-white border-gray-300 text-gray-700 hover:border-cyan-400'
                            }`}
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            Yes
                          </button>
                          <button
                            onClick={() => setFormData({ ...formData, hasDependents: 'no' })}
                            className={`flex-1 px-6 py-3 rounded-lg border-2 transition-all ${
                              formData.hasDependents === 'no'
                                ? 'bg-cyan-600 border-cyan-600 text-white'
                                : 'bg-white border-gray-300 text-gray-700 hover:border-cyan-400'
                            }`}
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            No
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Willingness to take a loan
                        </label>
                        <div className="flex gap-4">
                          <button
                            onClick={() => setFormData({ ...formData, willingToTakeLoan: 'yes' })}
                            className={`flex-1 px-6 py-3 rounded-lg border-2 transition-all ${
                              formData.willingToTakeLoan === 'yes'
                                ? 'bg-cyan-600 border-cyan-600 text-white'
                                : 'bg-white border-gray-300 text-gray-700 hover:border-cyan-400'
                            }`}
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            Yes
                          </button>
                          <button
                            onClick={() => setFormData({ ...formData, willingToTakeLoan: 'no' })}
                            className={`flex-1 px-6 py-3 rounded-lg border-2 transition-all ${
                              formData.willingToTakeLoan === 'no'
                                ? 'bg-cyan-600 border-cyan-600 text-white'
                                : 'bg-white border-gray-300 text-gray-700 hover:border-cyan-400'
                            }`}
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            No
                          </button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Risk Tolerance (1 = Very Conservative, 10 = Very Aggressive)
                      </label>
                      <div className="space-y-4">
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={formData.riskTolerance}
                          onChange={(e) => setFormData({ ...formData, riskTolerance: parseInt(e.target.value) })}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                        />
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>1</span>
                          <span className="text-lg font-bold text-cyan-600">{formData.riskTolerance}</span>
                          <span>10</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Career Intent & Motivation */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Career Intent & Motivation
                      </h2>
                      <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Tell us why you're making this career switch
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Why are you switching? (Select all that apply)
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {['Salary', 'Burnout', 'Passion', 'Migration', 'Stability'].map((reason) => (
                          <button
                            key={reason}
                            onClick={() => toggleArrayItem('switchingReasons', reason)}
                            className={`px-4 py-3 rounded-lg border-2 transition-all ${
                              formData.switchingReasons.includes(reason)
                                ? 'bg-cyan-600 border-cyan-600 text-white'
                                : 'bg-white border-gray-300 text-gray-700 hover:border-cyan-400'
                            }`}
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            {reason}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Time Horizon
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { value: 'immediate', label: 'Immediate (0-6 months)' },
                          { value: 'short', label: 'Short term (6-18 months)' },
                          { value: 'long', label: 'Long term (2-5 years)' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => setFormData({ ...formData, timeHorizon: option.value })}
                            className={`px-6 py-4 rounded-lg border-2 transition-all ${
                              formData.timeHorizon === option.value
                                ? 'bg-cyan-600 border-cyan-600 text-white'
                                : 'bg-white border-gray-300 text-gray-700 hover:border-cyan-400'
                            }`}
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Willing to: (Select all that apply)
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          'Study full-time',
                          'Study part-time',
                          'Self-learn only',
                          'Relocate immediately'
                        ].map((option) => (
                          <button
                            key={option}
                            onClick={() => toggleArrayItem('willingTo', option)}
                            className={`px-4 py-3 rounded-lg border-2 transition-all text-left ${
                              formData.willingTo.includes(option)
                                ? 'bg-cyan-600 border-cyan-600 text-white'
                                : 'bg-white border-gray-300 text-gray-700 hover:border-cyan-400'
                            }`}
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4 */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Skill & Transition Readiness
                      </h2>
                      <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Let's assess your readiness for the career transition
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Transferable Skills (Select all that apply)
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                          'Leadership',
                          'Project Management',
                          'Communication',
                          'Data Analysis',
                          'Problem Solving',
                          'Technical Writing',
                          'Team Collaboration',
                          'Strategic Planning',
                          'Customer Relations',
                          'Budget Management',
                          'Presentation Skills',
                          'Research'
                        ].map((skill) => (
                          <button
                            key={skill}
                            onClick={() => toggleArrayItem('transferableSkills', skill)}
                            className={`px-4 py-3 rounded-lg border-2 transition-all ${
                              formData.transferableSkills.includes(skill)
                                ? 'bg-cyan-600 border-cyan-600 text-white'
                                : 'bg-white border-gray-300 text-gray-700 hover:border-cyan-400'
                            }`}
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            {skill}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Certifications Completed
                      </label>
                      <textarea
                        value={formData.certificationsCompleted}
                        onChange={(e) => setFormData({ ...formData, certificationsCompleted: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="List any relevant certifications you've completed (e.g., PMP, AWS, Google Analytics)"
                        rows={3}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Do you have a portfolio or projects to showcase?
                      </label>
                      <div className="flex gap-4 mb-4">
                        <button
                          onClick={() => setFormData({ ...formData, hasPortfolio: 'yes' })}
                          className={`flex-1 px-6 py-3 rounded-lg border-2 transition-all ${
                            formData.hasPortfolio === 'yes'
                              ? 'bg-cyan-600 border-cyan-600 text-white'
                              : 'bg-white border-gray-300 text-gray-700 hover:border-cyan-400'
                          }`}
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          Yes
                        </button>
                        <button
                          onClick={() => setFormData({ ...formData, hasPortfolio: 'no' })}
                          className={`flex-1 px-6 py-3 rounded-lg border-2 transition-all ${
                            formData.hasPortfolio === 'no'
                              ? 'bg-cyan-600 border-cyan-600 text-white'
                              : 'bg-white border-gray-300 text-gray-700 hover:border-cyan-400'
                          }`}
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          No
                        </button>
                      </div>
                      {formData.hasPortfolio === 'yes' && (
                        <textarea
                          value={formData.portfolioDetails}
                          onChange={(e) => setFormData({ ...formData, portfolioDetails: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="Briefly describe your portfolio or key projects"
                          rows={3}
                        />
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          English Proficiency
                        </label>
                        <select
                          value={formData.englishProficiency}
                          onChange={(e) => setFormData({ ...formData, englishProficiency: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        >
                          <option value="">Select proficiency level</option>
                          <option value="Native">Native Speaker</option>
                          <option value="Fluent">Fluent</option>
                          <option value="Advanced">Advanced</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Basic">Basic</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Willing to relocate domestically?
                        </label>
                        <div className="flex gap-4">
                          <button
                            onClick={() => setFormData({ ...formData, willingToRelocateDomestically: 'yes' })}
                            className={`flex-1 px-6 py-3 rounded-lg border-2 transition-all ${
                              formData.willingToRelocateDomestically === 'yes'
                                ? 'bg-cyan-600 border-cyan-600 text-white'
                                : 'bg-white border-gray-300 text-gray-700 hover:border-cyan-400'
                            }`}
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            Yes
                          </button>
                          <button
                            onClick={() => setFormData({ ...formData, willingToRelocateDomestically: 'no' })}
                            className={`flex-1 px-6 py-3 rounded-lg border-2 transition-all ${
                              formData.willingToRelocateDomestically === 'no'
                                ? 'bg-cyan-600 border-cyan-600 text-white'
                                : 'bg-white border-gray-300 text-gray-700 hover:border-cyan-400'
                            }`}
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            No
                          </button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Work Authorization Constraints
                      </label>
                      <textarea
                        value={formData.workAuthorizationConstraints}
                        onChange={(e) => setFormData({ ...formData, workAuthorizationConstraints: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Describe any work authorization constraints or visa requirements"
                        rows={3}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
<div className="p-6 border-t flex justify-between">
  <button
    onClick={handleBack}
    disabled={currentStep === 1}
  >
    Back
  </button>

  {currentStep < 4 ? (
    <button
      onClick={handleNext}
      className="bg-cyan-600 text-white px-6 py-2 rounded"
    >
      Next
      <ChevronRight className="inline w-4 ml-2" />
    </button>
  ) : (
    <button
      onClick={handleSubmit}
      className="bg-cyan-600 text-white px-6 py-2 rounded"
    >
      Complete
    </button>
  )}
</div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}