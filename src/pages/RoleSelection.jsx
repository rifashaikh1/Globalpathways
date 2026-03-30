import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, GraduationCap, RefreshCw, Briefcase, User } from "lucide-react";

export default function RoleSelection({ userName = "there", onRoleSelect }) {
  const [selectedRole, setSelectedRole] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!selectedRole) return;

    // Redirect based on role
    if (selectedRole === "college-student") {
      navigate("/college-form");
    } else if (selectedRole === "career-switcher") {
      navigate("/career-switcher-form");
    } else {
      navigate("/"); // fallback
    }

    if (onRoleSelect) {
      onRoleSelect(selectedRole);
    }
  };

  const roles = [
    {
      id: "college-student",
      title: "College Student",
      description:
        "Currently pursuing undergraduate or graduate studies and exploring career paths",
      icon: GraduationCap,
    },
    {
      id: "career-switcher",
      title: "Career Switcher",
      description:
        "Looking to transition into a new field or industry with a fresh start",
      icon: RefreshCw,
    },
    {
      id: "early-career-with-experience",
      title: "Early Career Professional",
      description:
        "Have 1-3 years of professional experience and seeking growth opportunities",
      icon: Briefcase,
    },
    {
      id: "early-career-without-experience",
      title: "Early Career Professional",
      description:
        "Recent graduate or entry-level professional starting your career journey",
      icon: User,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      
      <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>

      <div className="max-w-5xl w-full relative">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-3xl font-bold mb-6">
            <span className="text-gray-900">Global</span>
            <span className="text-cyan-500">Pathways</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
            Welcome, {userName}! 
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Let's personalize your experience. What best describes your current situation?
          </p>

          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-8 h-2 bg-cyan-500 rounded-full"></div>
            <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Step 1 of 3</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {roles.map((role) => {
            const Icon = role.icon;
            const isSelected = selectedRole === role.id;

            return (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`relative bg-white rounded-2xl p-8 border-2 transition-all text-left group hover:shadow-2xl ${
                  isSelected
                    ? "border-cyan-500 shadow-2xl scale-[1.02]"
                    : "border-gray-200 hover:border-cyan-300"
                }`}
              >
                {isSelected && (
                  <div className="absolute top-4 right-4 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}

                <div className="w-16 h-16 rounded-xl bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-cyan-400" strokeWidth={2.5} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {role.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {role.description}
                </p>

                {role.id === "early-career-with-experience" && (
                  <span className="mt-4 inline-block px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-semibold">
                    With Experience
                  </span>
                )}

                {role.id === "early-career-without-experience" && (
                  <span className="mt-4 inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">
                    No Experience Required
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Continue */}
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={handleContinue}
            disabled={!selectedRole}
            className={`group inline-flex items-center gap-3 px-12 py-5 rounded-xl font-bold shadow-xl transition-all ${
              selectedRole
                ? "bg-slate-900 text-white hover:bg-slate-800 hover:shadow-2xl"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Continue
            <ArrowRight className={`w-6 h-6 ${selectedRole ? "group-hover:translate-x-1" : ""}`} />
          </button>

          <p className="text-sm text-gray-500">
            You can always change this later in your settings
          </p>
        </div>

        <div className="text-center mt-8">
          <button className="text-gray-600 hover:text-gray-900 font-medium">
            Skip for now →
          </button>
        </div>

      </div>
    </div>
  );
}