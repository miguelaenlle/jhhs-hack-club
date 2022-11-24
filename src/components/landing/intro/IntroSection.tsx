import { motion } from "framer-motion";
import * as React from "react";
import { DISCORD } from "../../../constants/links";
import GradientButton from "./GradientButton";
import Header from "./Header";
import Navbar from "./Navbar/Navbar";
import Subheader from "./Subheader";

const IntroSection: React.FC<{}> = (props) => {
  return (
    <div
      className={
        "bg-[url('./img/background.png')] bg-opacity-10 bg-cover object-fill p-5 pb-20 backdrop-blur-xl z-10 shadow-lg"
      }
    >
      <div>
        <Navbar />
        <div className={"py-16 md:py-32"}>
          <Header />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: -10, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className={
              "flex space-y-3 flex-col items-center justify-center mt-10"
            }
          >
            <Subheader />
            <GradientButton
              link={DISCORD}
              text={"JOIN THE DISCORD"}
              startColor={"from-orange-500"}
              endColor={"to-red-500"}
            />

            <GradientButton
              link={"/projects"}
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
