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
          <div className="lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col" style={{ height: 'calc(100vh - 4rem)' }}>
              
              <div className="mb-8">
                <h1 className="text-3xl font-bold">
                  <span className="text-gray-900">Global</span>
                  <span className="text-cyan-500">Pathways</span>
                </h1>
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-12">
                Create Account
              </h2>

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
                          <span className="text-white font-bold">
                            {step.number}
                          </span>
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
                
                {currentStep === 1 && (
                  <div>
                    <h2 className="text-3xl font-bold mb-2">
                      Academic & Skills Details
                    </h2>
                    <p className="text-gray-600">
                      Help us understand your academic background
                    </p>
                  </div>
                )}

                {currentStep === 5 && (
                  <div>
                    <h2 className="text-3xl font-bold">
                      Review Your Information
                    </h2>
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