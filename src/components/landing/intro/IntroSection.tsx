import { motion } from "framer-motion";
import * as React from "react";
import { DISCORD } from "../../../constants/links";
import GradientButton from "./GradientButton";
import Header from "./Header";
import Subheader from "./Subheader";
import Particles from "react-tsparticles";

const IntroSection: React.FC<{}> = (props) => {
  return (
    <div className={"relative bg-neutral-900 h-screen overflow-hidden"}>
      {/* <Lottie
        className={"absolute w-screen h-screen z-2 opacity-30 md:opacity-10"}
        loop
        animationData={lottieJson}
        play
      /> */}

      <Particles
        params={{
          polygon: {
            enable: true,
            type: 'inside',
            move: {
              radius: 10
            },
            url: 'path/to/svg.svg'
          }
        }} />
      <div className={"absolute z-10 w-full p-5 pb-20 h-screen"}>
        <div
          className={
            "flex flex-col  py-16 md:py-32 items-center justify-center h-full w-full"
          }
        >
          <Header />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className={"flex space-y-3 flex-col items-center justify-center"}
          >
            <Subheader />
            <GradientButton
              link={DISCORD}
              text={"JOIN THE DISCORD"}
              startColor={"from-orange-500"}
              endColor={"to-red-500"}
            />

            <GradientButton
              link={"/workshops"}
              text={"GO TO WORKSHOPS"}
              startColor={"from-cyan-500"}
              endColor={"to-cyan-700"}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default IntroSection;
