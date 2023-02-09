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
        className={"absolute min-w-full min-h-full max-h-none max-w-none z-2 opacity-20 md:opacity-5 blur-sm"}
      >
        <source
          src={Video}
          type="video/mp4"
        />
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
              href='https://forms.gle/h3hZ2DUEe6edzSJNA'
              className={
                `bg-gradient-to-br from-purple-400 to-purple-700 rounded-full p-3 px-7 w-fit hover:cursor-pointer hover:scale-105 transition-all`
              }
            >
              <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="yellow" className="mr-2 w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>

                <p
                  className={
                    "text-md text-white font-Poppins font-bold"
                  }
                >
                  Merch Interest Form
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default IntroSection;
