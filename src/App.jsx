import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import RoleSelection from "./pages/RoleSelection"
import { CollegeStudentForm }  from "./pages/CollegeStudentForm"
import CareerSwitcherForm from "./pages/CareerSwitcherForm"
import { FreshGraduateForm } from './pages/FreshGraduateForm';
import { EarlyCareerForm } from './pages/EarlyCareerForm';
import CareerRecommendation from "./pages/CareerRecommendation"
import SignIn from './pages/SignIn'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/role-selection" element={<RoleSelection />} />
      <Route path="/college-form" element={<CollegeStudentForm />} />
      <Route path="/career-switcher-form" element={<CareerSwitcherForm />} />
      <Route path="/fresh-graduate" element={<FreshGraduateForm />} />
      <Route path="/early-career-form" element={<EarlyCareerForm />} />
      <Route path="/career-recommendation" element={<CareerRecommendation />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  )
}

export default App