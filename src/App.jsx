import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import RoleSelection from "./pages/RoleSelection"
import { CollegeStudentForm }  from "./pages/CollegeStudentForm"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/role-selection" element={<RoleSelection />} />
      <Route path="/college-form" element={<CollegeStudentForm />} />
    </Routes>
  )
}

export default App