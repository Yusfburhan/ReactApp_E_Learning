import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Test from "./pages/test";
import Login from "./pages/Login";
import Nav from "./components/nav";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Mycourses from "./pages/mycourse";
import Courses from "./pages/courses";
import Footer from "./components/footer";
import Contentcourse from "./pages/contentcourse";
import Readmore from "./pages/readmore";
import MyProfile from "./pages/MyProfile";
import Register from "./pages/Register";

function App() {
  const navigate = useNavigate();
  const [user, setuser] = useState("");
  const [token, settoken] = useState("");
  return (
    <div className="App bg-blue-50">
      {/* <button onClick={() => navigate(-1)}>go back</button> */}
      <Nav />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/mycourse" element={<Mycourses />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/content/:courseid" element={<Contentcourse />} />
        <Route exact path="/readmore/:courseid" element={<Readmore />} />
        <Route exact path="/myprofile" element={<MyProfile />} />
        <Route exact path="/signup" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
