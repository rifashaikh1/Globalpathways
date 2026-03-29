import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  Eye,
  EyeOff,
  User,
  Mail,
  Phone,
  Lock
} from "lucide-react";

export default function SignUp() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    city: "",
    country: "",
    email: "",
    phone: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ SUBMIT → GO TO ROLE PAGE
  const handleSubmit = (e) => {
  e.preventDefault();
  navigate("/role-selection");
};

  const getPasswordStrength = () => {
    const password = formData.password;
    if (!password) return { strength: 0, color: "" };

    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    if (strength <= 1) return { strength: 25, color: "bg-red-500" };
    if (strength === 2) return { strength: 50, color: "bg-orange-500" };
    if (strength === 3) return { strength: 75, color: "bg-yellow-500" };
    return { strength: 100, color: "bg-green-500" };
  };

  const passwordStrength = getPasswordStrength();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center py-12 px-4">

      {/* Background */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>

      <div className="max-w-2xl w-full relative">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-3xl font-bold mb-2">
            <span className="text-gray-900">Global</span>
            <span className="text-cyan-500">Pathways</span>
          </div>

          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
            Start Your Journey
          </h1>

          <p className="text-gray-600 text-lg">
            Create your account and unlock personalized career guidance
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* PERSONAL */}
            <h2 className="text-xl font-bold flex items-center gap-2">
              <User className="w-5 h-5 text-cyan-500" />
              Personal Information
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 rounded-xl"
              required
            />

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                className="px-4 py-3 border-2 rounded-xl"
                required
              />

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="px-4 py-3 border-2 rounded-xl"
                required
              >
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="px-4 py-3 border-2 rounded-xl"
                required
              />

              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="px-4 py-3 border-2 rounded-xl"
                required
              />
            </div>

            {/* CONTACT */}
            <h2 className="text-xl font-bold flex items-center gap-2 pt-4">
              <Mail className="w-5 h-5 text-cyan-500" />
              Contact Information
            </h2>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 rounded-xl"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 rounded-xl"
              required
            />

            {/* PASSWORD */}
            <h2 className="text-xl font-bold flex items-center gap-2 pt-4">
              <Lock className="w-5 h-5 text-cyan-500" />
              Account Security
            </h2>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 rounded-xl pr-12"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>

            {/* Strength */}
            {formData.password && (
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className={`${passwordStrength.color} h-2 rounded-full`}
                  style={{ width: `${passwordStrength.strength}%` }}
                />
              </div>
            )}

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800"
            >
              Create Account
              <ArrowRight />
            </button>

          </form>
        </div>

        {/* BACK */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/")}
            className="text-gray-600 hover:text-black"
          >
            ← Back to home
          </button>
        </div>

      </div>
    </div>
  );
}