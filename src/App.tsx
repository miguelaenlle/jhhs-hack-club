import "./App.css";
import LandingPage from "./components/landing/LandingPage";

import { Link, Route, Routes } from "react-router-dom";
import Projects from "./components/projects/Projects";
import PersonalWebsite from "./components/project/allProjects/PersonalWebsite";
import Megasite from "./components/megasite/MegasiteData";
import Workshops from "./components/workshops/Workshops";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route
          path="/workshops/personal-website"
          element={<PersonalWebsite />}
        />
        <Route path="/megasite" element={<Megasite />} />
      </Routes>
    </div>
  );
}

export default App;
