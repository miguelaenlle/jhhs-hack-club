import { motion } from "framer-motion";
import * as React from "react";
import { DISCORD } from "../../../constants/links";
import GradientButton from "./GradientButton";
import Header from "./Header";
import Navbar from "./Navbar/Navbar";
import Subheader from "./Subheader";
import Lottie from "react-lottie-player";
import lottieJson from "../assets/lottie.json";
import Video from "./assets/code.mp4";

const IntroSection: React.FC<{}> = (props) => {
  return (
    <div className={"relative bg-neutral-900 h-screen overflow-hidden"}>
      <video
        muted
        autoPlay
        playsInline
        loop
        className={
          "absolute min-w-full min-h-full max-h-none max-w-none z-2 opacity-20 md:opacity-5 blur-sm"
        }
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
              fullRedirect={true}
            />

            <GradientButton
              link={"/workshops"}
              text={"GO TO WORKSHOPS"}
              startColor={"from-cyan-500"}
              endColor={"to-cyan-700"}
            />

            <a
              href="https://herseydevelopers.org/"
              target="_blank"
              className={`bg-gradient-to-br from-[#0C6885] to-[#5E0D84] rounded-full p-3 px-5 w-fit hover:cursor-pointer hover:scale-105 transition-all`}
            >
              <div className="flex items-center gap-2">
                <img
                  src={"https://i.ibb.co/0sHG48s/Group-34.png"}
                  className={"h-7"}
                />
                <p className={"text-md text-white font-Poppins font-bold"}>
                  Hersey Developers Internship
                </p>
                <p className={"text-green-500 mb-[2px]"}>NEW</p>
              </div>
            </a>
            <div className="flex font-bold text-white items-center flex-col justify-center gap-1 cursor-pointer">
              <div>Code Challenge Leaderboard</div>
              <div>V</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default IntroSection;
