import { motion } from "framer-motion";
import * as React from "react";
import { DISCORD } from "../../../constants/links";
import Lottie from "react-lottie-player";
import lottieJson from "../assets/lottie.json";
import Video from "./assets/code.mp4";
import Subheader from "../intro/Subheader";
import GradientButton from "../intro/GradientButton";
import Header from "../intro/Header";
import { useNavigate } from "react-router-dom";

const CodeChallenge: React.FC<{}> = (props) => {
  const navigate = useNavigate();
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
      <div className={"absolute z-10 w-full p-5 pb-20"}>
        <div
          className={
            "flex flex-col py-16 md:py-32 items-center justify-center h-full w-full "
          }
        >
          <div
            className="bg-white w-full"
            style={{ height: "2px", marginBottom: "10%" }}
          ></div>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className={"flex flex-col w-6/12 gap-16"}
          >
            <span className="text-white font-bold text-4xl">
              Code Challenge
            </span>
            <div className="flex flex-col text-white gap-12">
              <div className="flex gap-5 text-xl width-full justify-between">
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    color: "white",
                  }}
                  className="flex items-center justify-center font-bold"
                >
                  1
                </div>
                <div>Lorem Ipsum - 5000</div>
              </div>

              <div className="flex gap-5 text-xl width-full justify-between">
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    color: "white",
                  }}
                  className="flex items-center justify-center font-bold"
                >
                  2
                </div>
                <div>Lorem Ipsum - 4500</div>
              </div>

              <div className="flex gap-5 text-xl width-full justify-between">
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    color: "white",
                  }}
                  className="flex items-center justify-center font-bold"
                >
                  3
                </div>
                <div>Lorem Ipsum - 3000</div>
              </div>
            </div>
            <div
              className="text-white cursor-pointer"
              onClick={() => navigate("/leaderboard")}
            >
              View Full Leaderboard {"-->"}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default CodeChallenge;
