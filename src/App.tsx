import "./App.css";
import LandingPage from "./components/landing/LandingPage";

import { Route, Routes } from "react-router-dom";
import Megasite from "./components/megasite/MegasiteData";
import PersonalWebsite from "./components/project/allProjects/PersonalWebsite";
import Workshop from "./components/workshops/Workshop";
import Workshops from "./components/workshops/Workshops";
import Showcase from "./components/showcase/Showcase";
import Content from "./components/landing/content/Content";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/workshops/:workshopId" element={<Workshop />} />
        <Route
          path="/workshops/personal-website"
          element={<PersonalWebsite />}
        />
        <Route path="/megasite" element={<Megasite />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
    </div>
  );
}

export default App;
