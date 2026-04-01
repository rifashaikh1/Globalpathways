import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  Eye,
  EyeOff,
  Mail,
  Lock
} from "lucide-react";

export default function SignIn() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ LOGIN SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", formData);

    // 👉 After login redirect
    navigate("/role-selection"); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center py-12 px-4">

      {/* Background */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>

      <div className="max-w-md w-full relative">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-3xl font-bold mb-2">
            <span className="text-gray-900">Global</span>
            <span className="text-cyan-500">Pathways</span>
          </div>

          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
            Welcome Back
          </h1>

          <p className="text-gray-600 text-lg">
            Sign in to continue your journey
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* EMAIL */}
            <div>
              <label className="text-sm font-semibold">Email</label>
              <div className="relative mt-2">
                <Mail className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border-2 rounded-xl"
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm font-semibold">Password</label>
              <div className="relative mt-2">
                <Lock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 border-2 rounded-xl"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800"
            >
              Sign In
              <ArrowRight />
            </button>

          </form>
        </div>

        {/* SIGN UP REDIRECT */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Don’t have an account?
          </p>

          <button
            onClick={() => navigate("/signup")}
            className="text-cyan-600 font-semibold hover:underline mt-1"
          >
            Create Account
          </button>
        </div>

      </div>
    </div>
  );
}