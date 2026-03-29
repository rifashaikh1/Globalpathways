import { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';

export function CollegeStudentForm({ userName = 'there', onComplete }) {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    collegeName: '',
    degreeProgram: '',
    major: '',
    yearOfStudy: '',
    academicPerformance: '',
    favoriteSubjects: '',
    leastFavoriteSubjects: '',
    programmingSkills: [],
    dataAnalysisSkills: [],
    designTools: [],
    otherTechnicalSkills: '',
    softSkills: [],
    internships: '',
    projects: '',
    certifications: '',
    competitions: '',
    examPreparation: [],
    familyIncome: '',
    selfFund: '',
    needScholarship: '',
    educationLoan: '',
    supportFamily: '',
    budget: '',
    careerPlans: [],
    preferredFields: [],
    workPreference: '',
    highSalary: 3,
    jobStability: 3,
    passion: 3,
    familyExpectations: 3,
    globalExposure: 3,
    workLifeBalance: 3,
    financialIndependence: 3,
    timeline: '',
    readiness: '',
    biggestConcern: '',
    supportNeeded: []
  });

  const steps = [
    { number: 1, title: 'Academic & Skills Details', completed: currentStep > 1 },
    { number: 2, title: 'Financial Aspects', completed: currentStep > 2 },
    { number: 3, title: 'Career Goals', completed: currentStep > 3 },
    { number: 4, title: 'Timeline & Readiness', completed: currentStep > 4 },
    { number: 5, title: 'Summary', completed: false }
  ];

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    onComplete(formData);
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

  return (
       <div className="min-h-screen bg-gradient-to-br from-slate-100 to-cyan-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col h-[calc(100vh-4rem)]">

              <h1 className="text-3xl font-bold mb-8">
                <span className="text-gray-900">Global</span>
                <span className="text-cyan-500">Pathways</span>
              </h1>

              <h2 className="text-xl font-bold mb-12">Create Account</h2>

              <div className="flex-1 flex flex-col justify-between">
                {steps.map((step, index) => (
                  <div key={step.number} className="relative">
                    {index < steps.length - 1 && (
                      <div className="absolute left-4 top-14 w-0.5 bottom-0 bg-cyan-500"></div>
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
                          <Check className="w-5 h-5 text-white" />
                        ) : (
                          <span className="text-white font-bold">{step.number}</span>
                        )}
                      </div>

                      <span className={`text-sm ${
                        currentStep === step.number ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {step.title}
                      </span>
                    </button>
                  </div>
                ))}
              </div>

            </div>
          </div>


          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-lg flex flex-col" style={{ height: 'calc(100vh - 4rem)' }}>
              
            
                
                <div className="flex-1 overflow-y-auto p-8 lg:p-12">
                {/* Step 1: Academic & Skills Details */}
                {currentStep === 1 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Academic & Skills Details
                      </h2>
                      <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Help us understand your academic background and capabilities
                      </p>
                    </div>

                    {/* Academic Information */}
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            College/University Name
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
                            Degree Program
                          </label>
                          <select
                            value={formData.degreeProgram}
                            onChange={(e) => updateFormData('degreeProgram', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            <option value="">Select degree</option>
                            <option value="BA">BA</option>
                            <option value="BCom">BCom</option>
                            <option value="BTech">BTech</option>
                            <option value="BSc">BSc</option>
                            <option value="BBA">BBA</option>
                            <option value="MA">MA</option>
                            <option value="MSc">MSc</option>
                            <option value="MTech">MTech</option>
                            <option value="MBA">MBA</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Major / Specialization
                          </label>
                          <input
                            type="text"
                            value={formData.major}
                            onChange={(e) => updateFormData('major', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="e.g., Computer Science"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Year of Study
                          </label>
                          <select
                            value={formData.yearOfStudy}
                            onChange={(e) => updateFormData('yearOfStudy', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            <option value="">Select year</option>
                            <option value="1st Year">1st Year</option>
                            <option value="2nd Year">2nd Year</option>
                            <option value="3rd Year">3rd Year</option>
                            <option value="4th Year">4th Year</option>
                            <option value="Final Year">Final Year</option>
                            <option value="Graduate">Graduate</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Academic Performance (CGPA / Percentage)
                        </label>
                        <select
                          value={formData.academicPerformance}
                          onChange={(e) => updateFormData('academicPerformance', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          <option value="">Select range</option>
                          <option value="9.0-10.0 / 90-100%">9.0-10.0 / 90-100%</option>
                          <option value="8.0-8.9 / 80-89%">8.0-8.9 / 80-89%</option>
                          <option value="7.0-7.9 / 70-79%">7.0-7.9 / 70-79%</option>
                          <option value="6.0-6.9 / 60-69%">6.0-6.9 / 60-69%</option>
                          <option value="Below 6.0 / Below 60%">Below 6.0 / Below 60%</option>
                        </select>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Favorite Subjects
                          </label>
                          <input
                            type="text"
                            value={formData.favoriteSubjects}
                            onChange={(e) => updateFormData('favoriteSubjects', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="e.g., Mathematics, Physics"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Least Favorite Subjects
                          </label>
                          <input
                            type="text"
                            value={formData.leastFavoriteSubjects}
                            onChange={(e) => updateFormData('leastFavoriteSubjects', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="e.g., Chemistry, History"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Technical Skills */}
                    <div className="border-t pt-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Technical Skills
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Programming / IT Skills
                          </label>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {['Python', 'Java', 'C++', 'JavaScript', 'SQL', 'HTML/CSS'].map((skill) => (
                              <button
                                key={skill}
                                onClick={() => toggleArrayValue('programmingSkills', skill)}
                                className={`px-4 py-2 rounded-lg border-2 transition-all ${
                                  formData.programmingSkills.includes(skill)
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
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Design Tools
                          </label>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Canva', 'Sketch'].map((tool) => (
                              <button
                                key={tool}
                                onClick={() => toggleArrayValue('designTools', tool)}
                                className={`px-4 py-2 rounded-lg border-2 transition-all ${
                                  formData.designTools.includes(tool)
                                    ? 'bg-cyan-600 border-cyan-600 text-white'
                                    : 'bg-white border-gray-300 text-gray-700 hover:border-cyan-400'
                                }`}
                                style={{ fontFamily: 'Inter, sans-serif' }}
                              >
                                {tool}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Other Technical Skills
                          </label>
                          <input
                            type="text"
                            value={formData.otherTechnicalSkills}
                            onChange={(e) => updateFormData('otherTechnicalSkills', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="e.g., Excel, MATLAB, AutoCAD"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Soft Skills */}
                    <div className="border-t pt-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Soft Skills
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {['Communication', 'Leadership', 'Teamwork', 'Problem-solving', 'Time management', 'Creativity'].map((skill) => (
                          <button
                            key={skill}
                            onClick={() => toggleArrayValue('softSkills', skill)}
                            className={`px-4 py-2 rounded-lg border-2 transition-all ${
                              formData.softSkills.includes(skill)
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

                    {/* Experience */}
                    <div className="border-t pt-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Experience
                      </h3>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Internships Completed
                            </label>
                            <select
                              value={formData.internships}
                              onChange={(e) => updateFormData('internships', e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              <option value="">Select</option>
                              <option value="0">None</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3+">3+</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Projects Completed
                            </label>
                            <select
                              value={formData.projects}
                              onChange={(e) => updateFormData('projects', e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              <option value="">Select</option>
                              <option value="0">None</option>
                              <option value="1-2">1-2</option>
                              <option value="3-5">3-5</option>
                              <option value="5+">5+</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Certifications / Online Courses
                          </label>
                          <input
                            type="text"
                            value={formData.certifications}
                            onChange={(e) => updateFormData('certifications', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="e.g., AWS Certified, Google Analytics"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Participation in Clubs / Hackathons / Competitions
                          </label>
                          <input
                            type="text"
                            value={formData.competitions}
                            onChange={(e) => updateFormData('competitions', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                            placeholder="e.g., Coding club, Hackathon winner"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Exam Preparation (Select all that apply)
                          </label>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {['GRE', 'GATE', 'CAT', 'UPSC', 'IELTS', 'TOEFL', 'None'].map((exam) => (
                              <button
                                key={exam}
                                onClick={() => toggleArrayValue('examPreparation', exam)}
                                className={`px-4 py-2 rounded-lg border-2 transition-all ${
                                  formData.examPreparation.includes(exam)
                                    ? 'bg-cyan-600 border-cyan-600 text-white'
                                    : 'bg-white border-gray-300 text-gray-700 hover:border-cyan-400'
                                }`}
                                style={{ fontFamily: 'Inter, sans-serif' }}
                              >
                                {exam}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                            {currentStep === 2 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Financial Aspects
                      </h2>
                      <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Understanding your financial situation helps us recommend realistic career paths
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Family Annual Income Range
                        </label>
                        <select
                          value={formData.familyIncome}
                          onChange={(e) => updateFormData('familyIncome', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          <option value="">Select income range</option>
                          <option value="Below ₹3 Lakhs">Below ₹3 Lakhs</option>
                          <option value="₹3-6 Lakhs">₹3-6 Lakhs</option>
                          <option value="₹6-10 Lakhs">₹6-10 Lakhs</option>
                          <option value="₹10-15 Lakhs">₹10-15 Lakhs</option>
                          <option value="₹15-25 Lakhs">₹15-25 Lakhs</option>
                          <option value="Above ₹25 Lakhs">Above ₹25 Lakhs</option>
                          <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Can you self-fund higher education?
                        </label>
                        <div className="grid grid-cols-3 gap-4">
                          {['Yes', 'Partially', 'No'].map((option) => (
                            <button
                              key={option}
                              onClick={() => updateFormData('selfFund', option)}
                              className={`px-6 py-3 rounded-lg border-2 transition-all ${
                                formData.selfFund === option
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

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Will you need scholarships or financial aid?
                        </label>
                        <div className="grid grid-cols-3 gap-4">
                          {['Yes', 'Maybe', 'No'].map((option) => (
                            <button
                              key={option}
                              onClick={() => updateFormData('needScholarship', option)}
                              className={`px-6 py-3 rounded-lg border-2 transition-all ${
                                formData.needScholarship === option
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

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Willingness to take an education loan
                        </label>
                        <div className="grid grid-cols-3 gap-4">
                          {['Yes', 'If necessary', 'No'].map((option) => (
                            <button
                              key={option}
                              onClick={() => updateFormData('educationLoan', option)}
                              className={`px-6 py-3 rounded-lg border-2 transition-all ${
                                formData.educationLoan === option
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

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Financial responsibility after graduation (Support family?)
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          {['Yes', 'No'].map((option) => (
                            <button
                              key={option}
                              onClick={() => updateFormData('supportFamily', option)}
                              className={`px-6 py-3 rounded-lg border-2 transition-all ${
                                formData.supportFamily === option
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

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Budget for higher studies (if applicable)
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => updateFormData('budget', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          <option value="">Select budget</option>
                          <option value="Below ₹5 Lakhs">Below ₹5 Lakhs</option>
                          <option value="₹5-10 Lakhs">₹5-10 Lakhs</option>
                          <option value="₹10-20 Lakhs">₹10-20 Lakhs</option>
                          <option value="₹20-40 Lakhs">₹20-40 Lakhs</option>
                          <option value="Above ₹40 Lakhs">Above ₹40 Lakhs</option>
                          <option value="Not applicable">Not applicable</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Career Goals & Preferences */}
                {currentStep === 3 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Career Goals & Preferences
                      </h2>
                      <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Tell us about your career aspirations and what matters most to you
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Career Plans (Select all that apply)
                        </label>
                        <div className="grid md:grid-cols-2 gap-3">
                          {[
                            'Get a job after graduation',
                            'Pursue higher studies in India',
                            'Study abroad',
                            'Prepare for government exams',
                            'Start a business/startup',
                            'Still unsure'
                          ].map((plan) => (
                            <button
                              key={plan}
                              onClick={() => toggleArrayValue('careerPlans', plan)}
                              className={`px-4 py-3 rounded-lg border-2 transition-all text-left ${
                                formData.careerPlans.includes(plan)
                                  ? 'bg-cyan-600 border-cyan-600 text-white'
                                  : 'bg-white border-gray-300 text-gray-700 hover:border-cyan-400'
                              }`}
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              {plan}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Preferred Career Fields
                        </label>
                        <div className="grid md:grid-cols-2 gap-3">
                          {[
                            'IT / Software',
                            'Business & Management',
                            'Finance',
                            'Core Engineering',
                            'Design & Creative',
                            'Healthcare',
                            'Government Sector',
                            'Other'
                          ].map((field) => (
                            <button
                              key={field}
                              onClick={() => toggleArrayValue('preferredFields', field)}
                              className={`px-4 py-3 rounded-lg border-2 transition-all ${
                                formData.preferredFields.includes(field)
                                  ? 'bg-cyan-600 border-cyan-600 text-white'
                                  : 'bg-white border-gray-300 text-gray-700 hover:border-cyan-400'
                              }`}
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              {field}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Work Preference
                        </label>
                        <div className="grid md:grid-cols-2 gap-4">
                          {[
                            'Corporate job',
                            'Research & academics',
                            'Entrepreneurship',
                            'Public sector'
                          ].map((option) => (
                            <button
                              key={option}
                              onClick={() => updateFormData('workPreference', option)}
                              className={`px-6 py-3 rounded-lg border-2 transition-all ${
                                formData.workPreference === option
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

                      <div className="border-t pt-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          Important Decision Factors
                        </h3>
                        <p className="text-sm text-gray-600 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Rate each factor from 1 (Not important) to 5 (Very important)
                        </p>
                        
                        <div className="space-y-6">
                          {[
                            { key: 'highSalary', label: 'High salary potential' },
                            { key: 'jobStability', label: 'Job stability' },
                            { key: 'passion', label: 'Passion & interest' },
                            { key: 'familyExpectations', label: 'Family expectations' },
                            { key: 'globalExposure', label: 'Global exposure' },
                            { key: 'workLifeBalance', label: 'Work-life balance' },
                            { key: 'financialIndependence', label: 'Quick financial independence' }
                          ].map(({ key, label }) => (
                            <div key={key}>
                              <div className="flex items-center justify-between mb-2">
                                <label className="text-sm font-semibold text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                                  {label}
                                </label>
                                <span className="text-sm font-bold text-cyan-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                                 {formData[key]}
                                </span>
                              </div>
                              <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((value) => (
                                  <button
                                    key={value}
                                    onClick={() => updateFormData(key, value)}
                                    className={`flex-1 py-2 rounded-lg border-2 transition-all ${
                                      formData[key] === value
                                        ? 'bg-cyan-600 border-cyan-600 text-white'
                                        : 'bg-white border-gray-300 text-gray-700 hover:border-cyan-400'
                                    }`}
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                  >
                                    {value}
                                  </button>
                                ))}

                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                 {/* Step 4: Timeline & Readiness */}
                {currentStep === 4 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Timeline & Readiness
                      </h2>
                      <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Help us understand your timeline and what support you need
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                          When do you plan to take the next step?
                        </label>
                        <div className="grid md:grid-cols-2 gap-4">
                          {[
                            'Immediately after graduation',
                            'Within 6 months',
                            'Within 1 year',
                            'Still exploring'
                          ].map((option) => (
                            <button
                              key={option}
                              onClick={() => updateFormData('timeline', option)}
                              className={`px-6 py-3 rounded-lg border-2 transition-all ${
                                formData.timeline === option
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

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                          How ready do you feel about your career decision?
                        </label>
                        <div className="grid md:grid-cols-3 gap-4">
                          {[
                            'Very confident',
                            'Somewhat prepared',
                            'Confused and need guidance'
                          ].map((option) => (
                            <button
                              key={option}
                              onClick={() => updateFormData('readiness', option)}
                              className={`px-6 py-3 rounded-lg border-2 transition-all ${
                                formData.readiness === option
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

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                          What is your biggest concern right now?
                        </label>
                        <div className="grid md:grid-cols-2 gap-4">
                          {[
                            'Choosing the wrong path',
                            'Financial burden',
                            'Job availability',
                            'Studying abroad risks',
                            'Lack of skills',
                            'Family pressure'
                          ].map((option) => (
                            <button
                              key={option}
                              onClick={() => updateFormData('biggestConcern', option)}
                              className={`px-6 py-3 rounded-lg border-2 transition-all ${
                                formData.biggestConcern === option
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

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                          What support do you need most? (Select all that apply)
                        </label>
                        <div className="grid md:grid-cols-2 gap-3">
                          {[
                            'Career roadmap',
                            'Skill development plan',
                            'Study abroad guidance',
                            'Job preparation guidance',
                            'Financial planning',
                            'Mentorship'
                          ].map((support) => (
                            <button
                              key={support}
                              onClick={() => toggleArrayValue('supportNeeded', support)}
                              className={`px-4 py-3 rounded-lg border-2 transition-all ${
                                formData.supportNeeded.includes(support)
                                  ? 'bg-cyan-600 border-cyan-600 text-white'
                                  : 'bg-white border-gray-300 text-gray-700 hover:border-cyan-400'
                              }`}
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              {support}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Summary */}
                {currentStep === 5 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Review Your Information
                      </h2>
                      <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Please review your details before submitting
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-200">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-cyan-600 flex items-center justify-center">
                          <Check className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Almost Done, {userName}!
                          </h3>
                          <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Your personalized career roadmap is ready
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Academic Information
                            </span>
                            <Check className="w-5 h-5 text-cyan-600" />
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Financial Details
                            </span>
                            <Check className="w-5 h-5 text-cyan-600" />
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Career Preferences
                            </span>
                            <Check className="w-5 h-5 text-cyan-600" />
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Timeline & Goals
                            </span>
                            <Check className="w-5 h-5 text-cyan-600" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-6">
                      <h4 className="font-bold text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        What happens next?
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <ChevronRight className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                            We'll analyze your profile and create a personalized career roadmap
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <ChevronRight className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Get matched with relevant opportunities, scholarships, and programs
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <ChevronRight className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Access to career counselors and mentors in your field
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

              </div>

              {/* Buttons */}
              <div className="flex justify-between p-8 border-t">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="px-6 py-3 bg-gray-200 rounded-lg"
                >
                  Previous
                </button>

                {currentStep < 5 ? (
                  <button
                    onClick={handleNext}
                    className="px-6 py-3 bg-cyan-600 text-white rounded-lg"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-3 bg-black text-white rounded-lg"
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
  );
}