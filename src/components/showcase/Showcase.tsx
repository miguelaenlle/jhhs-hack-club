import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { showcase } from "../../constants/showcase";
import ShowcaseItem from "../showcase/ShowcaseItem";
import { AnimatedBg } from "../shared/AnimatedBg";
import BackButton from "../shared/BackButton";
import GradientContent from "../shared/GradientContent";

const Showcase: React.FC<{}> = (props) => {
  return (
    <div className="bg-gradient-to-b from-neutral-800 to-neutral-900 p-5 min-h-screen">
      <BackButton link={"/"} />
      <div className={"pt-4 px-10"}>
        <div className={"pt-6 pb-24"}>
          <h1 className={"text-center text-4xl sm:text-5xl font-bold font-Poppins text-red-500 mb-5"}>Showcase</h1>
          <p className={"text-center text-xl font-Poppins text-zinc-300 mt-3 max-w-2xl mx-auto"}>
            Check out the awesome projects built at Hersey Hack Club!
          </p>
        </div>
      </div>
      <div className={"flex flex-col align-center w-200 gap-5"}>
        <div className="bg-gradient-to-b from-neutral-800 to-neutral-900 p-5 min-h-screen">
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
