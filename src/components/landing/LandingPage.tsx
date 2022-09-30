import * as React from "react";
import Content from "./Content";
import Footer from "./Footer";
import IntroSection from "./IntroSection";
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