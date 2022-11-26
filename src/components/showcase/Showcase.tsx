import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { showcase } from "../../constants/showcase";
import ShowcaseItem from "../showcase/ShowcaseItem";
import { AnimatedBg } from "../shared/AnimatedBg";
import BackButton from "../shared/BackButton";
import GradientContent from "../shared/GradientContent";
import { motion } from "framer-motion";

const Showcase: React.FC<{}> = (props) => {
  return (
    <div className="bg-gradient-to-b from-neutral-800 to-neutral-900 p-5 min-h-screen">
      <BackButton link={"/"} />
      <div className={"pt-4 px-10"}>
        <div className={"pt-6 pb-16"}>
          <motion.h1
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={"text-center text-4xl sm:text-6xl font-bold font-Poppins text-red-500 mb-5"}>
            Showcase
          </motion.h1>
          <motion.p

            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className={"text-center text-zinc-300 font-Poppins max-w-lg mx-auto text-lg pt-2"}>
            Check out some of the amazing projects that have been built @ Hersey Hack Club!

          </motion.p>
        </div>
      </div>
      <div className={"flex flex-col align-center w-200 gap-5"}>
        <div className="bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-lg p-5 min-h-screen">
          <br />
          <div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"}>
            {showcase.map(showcase => {
              return (
                <ShowcaseItem
                  title={showcase.title}
                  backgroundColor={showcase.backgroundColor}
                  link={showcase.link}
                  author={showcase.author}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
