import "./App.css";
import LandingPage from "./components/landing/LandingPage";

import { Link, Route, Routes } from "react-router-dom";
import Projects from "./components/projects/Projects";
import PersonalWebsite from "./components/project/allProjects/PersonalWebsite";
import Megasite from "./components/megasite/MegasiteData";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/projects/personal-website"
          element={<PersonalWebsite />}
        />
        <Route path="/megasite" element={<Megasite />} />
      </Routes>
    </div>
  );
}

export default App;
