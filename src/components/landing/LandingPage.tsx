import * as React from "react";
import Content from "./content/Content";
import Footer from "./footer/Footer";
import IntroSection from "./intro/IntroSection";

import NavbarWrapper from "./intro/Navbar/NavbarWrapper";
import CodeChallenge from "./codeChallenge/CodeChallenge";

const LandingPage: React.FC<{}> = (props) => {

  const codeChallengeRef = React.useRef<HTMLDivElement>(null);

  const scrollToCodeChallengeSection = () => {
    codeChallengeRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <NavbarWrapper>
      <IntroSection
        scrollToCodeChallengeSection={scrollToCodeChallengeSection}
      />
      {/* <div ref={codeChallengeRef}>
        <CodeChallenge />
      </div> */}
      <Content />
      <Footer />
    </NavbarWrapper>
  );
};
export default LandingPage;
