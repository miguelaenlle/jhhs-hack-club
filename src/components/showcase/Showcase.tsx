import React from "react";
import { showcase, showcase2 } from "../../constants/showcase";
import ShowcaseItem from "../showcase/ShowcaseItem";
import BackButton from "../shared/BackButton";
import { motion } from "framer-motion";

const Showcase: React.FC<{}> = (props) => {
  return (
    <div className="bg-gradient-to-b from-neutral-800 to-neutral-900 p-5 min-h-screen">
      <BackButton link={"/"} />
      <div className={`flex items-start flex-col max-w-7xl mx-auto mt-14`}>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -20, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={"text-left text-4xl sm:text-6xl font-bold font-Poppins text-red-500 mb-2"}>
            Hack Club Showcase
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20, scale: 1}}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className={"text-left text-zinc-300 font-Poppins mx-auto text-lg max-w-2xl"}>
            Check out some of the amazing projects that have been built at the Hersey Hack Club!

          </motion.p>
        </div>
        <br />
        <a href="https://forms.gle/ztUbgQmjhHLrCc8p7" target="_blank">
          <h2 className="text-left text-3xl w-[fit-content] font-Poppins font-bold text-cyan-400 underline hover:cursor-pointer hover:scale-105 transition-all">Submit Your Project to the Showcase!</h2>
        </a>
      </div>

      <div className={"flex flex-col items-center w-200 gap-5 max-w-7xl mx-auto"}>
        <br />
        <div className={"flex items-center gap-2 flex-1 w-full"}>
          <p className="font-Poppins text-zinc-300 text-left mt-[0.2rem]">Hack Club 2023/2024 Projects</p>
          <p className="font-Poppins bg-green-500 text-white px-2 py-1 pb-[0rem] rounded-md font-bold">NEW</p>
        </div>
        <div className={"m-10 mt-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full"}>
          {showcase2.map(showcase => {
            return (
              <ShowcaseItem
                title={showcase.title}
                backgroundColor={showcase.backgroundColor}
                link={showcase.link}
                author={showcase.author}
                image={showcase.image}
                scWinner={showcase.scWinner}
              />
            )
          })}
        </div>
        <br />
        <div className={"flex items-center gap-2 flex-1 w-full"}>
          <p className="font-Poppins text-zinc-300 text-left mt-[0.2rem]">All Hack Club Projects</p>
        </div>
        <div className={"m-10 mt-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full"}>
          {showcase.map(showcase => {
            return (
              <ShowcaseItem
                title={showcase.title}
                backgroundColor={showcase.backgroundColor}
                link={showcase.link}
                author={showcase.author}
                image={showcase.image}
              />
            )
          })}
        </div>
      </div>
    </div >

  );
};

export default Showcase;
