import * as React from "react";
import Content from "./content/Content";
import Footer from "./footer/Footer";
import GradientButton from "./intro/GradientButton";
import IntroSection from "./intro/IntroSection";
const LandingPage: React.FC<{}> = (props) => {
    return (
        <div>
            <IntroSection />
            <Content />
            <Footer />
        </div>
    );
}
export default LandingPage