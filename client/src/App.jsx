import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Departments from "./pages/Departments"
import Districts from "./pages/Districts";
import BookToken from "./pages/BookToken";
import Layout from "./components/Layout";
import DoctorsList from "./pages/DoctorsList";
import DoctorDetails from "./pages/DoctorDetails";

function App() {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/districts" element={<Districts />} />
        <Route path="/booktoken" element={<BookToken />} />
        <Route path="/doctors/:district/:department" element={<DoctorsList />} />
        <Route path="/doctors/:id" element={<DoctorDetails />} />
      </Route>
    </Routes>
  )
}

export default App
