import * as React from "react";
import Content from "./content/Content";
import Footer from "./footer/Footer";
import IntroSection from "./intro/IntroSection";

import NavbarWrapper from "./intro/Navbar/NavbarWrapper";

const LandingPage: React.FC<{}> = (props) => {
    return (
        <NavbarWrapper>
            <IntroSection />
            <Content />
            <Footer />
        </NavbarWrapper>
    );
}
export default LandingPage