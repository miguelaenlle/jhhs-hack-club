import * as React from "react";
import { DISCORD } from "../../constants/links";
import { formatDate } from "../../constants/meetup-date";
import GradientContent from "../shared/GradientContent";
import Link from "./Link";
import { Widget } from "@typeform/embed-react";
const Content: React.FC<{}> = (props) => {
  return (
    <GradientContent move={true}>
      <div className={"border-b-2 border-b-slate-700 py-16"}>
        <h2 className={"text-3xl font-bold font-Poppins text-white"}>
          What is a Hack Club?
        </h2>
        <p
          className={
            "leading-8 text-lg md:text-lg font-light font-Poppins text-slate-300 mt-5"
          }
        >
          JHHS Hack Club is affiliated with{" "}
          <Link url={"https://hackclub.com"} text={"Hack Club"} />, a global
          network of 2,000 programming clubs that provides guides and funding
          for running Hack Clubs and starting hackathons.
        </p>
        <p
          className={
            "leading-8 text-lg md:text-lg font-light font-Poppins text-slate-300 mt-5"
          }
        >
          Hack Club offers many unique opportunities, such as worldwide coding
          tournaments, large-scale{" "}
          <Link url={"https://hackathons.hackclub.com/"} text={"hackathons"} />,
          and AMAs with influential people in tech like{" "}
          <Link url={"https://hackclub.com/amas/"} text={"Elon Musk"} /> and{" "}
          <Link url={"https://hackclub.com/amas/"} text={"Vitalik Buterin"} />
        </p>
      </div>
      <div className={"border-b-2 border-b-slate-700 py-16"}>
        <h2 className={"text-3xl font-bold font-Poppins text-white"}>
          What do we do at Hack Club?
        </h2>
        <p
          className={
            "leading-8 text-lg md:text-lg font-light font-Poppins text-slate-300 mt-5"
          }
        >
          Every Friday, we hold workshops where you'll build{" "}
          <b className={"text-white"}>cutting edge software projects</b> based
          on what you want to build. These projects are accessible to any skill
          level, from beginner to advanced. See some workshops{" "}
          <Link url={"https://workshops.hackclub.com/"} text={"here"} />.
        </p>
        <p
          className={
            "leading-8 text-lg md:text-lg font-light font-Poppins text-slate-300 mt-5"
          }
        >
          You can work independently or with other club members.
        </p>
        <p
          className={
            "leading-8 text-lg md:text-lg font-light font-Poppins text-slate-300 mt-5"
          }
        >
          We also run <b className={"text-white"}>game nights</b> and join{" "}
          <b className={"text-white"}>hackathons</b>, where you’ll compete for
          prizes to build practical, web or app-based solutions within the
          duration of the event.
        </p>
      </div>
      <div className={"py-16"}>
        <h2 className={"text-3xl font-bold font-Poppins text-white"}>
          How can I join?
        </h2>
        <p
          className={
            "leading-8 text-lg md:text-lg font-light font-Poppins text-slate-300 mt-5"
          }
        >
          Hack Club is open to people with all skill levels, from beginners to
          experienced developers.
        </p>
        <p
          className={
            "leading-8 text-lg md:text-lg font-light font-Poppins text-slate-300 mt-5"
          }
        >
          Our next meetup is on <b className={"text-white"}>{formatDate}</b> at{" "}
          <b className={"text-white"}>3:00PM</b> at{" "}
          <b className={"text-white"}>Mr. Brown’s Room</b> (Room 158 in the Math
          Hallway)
        </p>
      </div>
      <div className={"flex space-y-3 flex-col mt-10"}>
        <a
          href={DISCORD}
          target="_blank"
          className={
            "bg-gradient-to-r from-amber-700 to-red-500 rounded-full p-4 px-7 w-fit hover:cursor-pointer hover:scale-105 transition-all"
          }
        >
          <p className={"text-lg md:text-lg text-white font-Poppins font-bold"}>
            Join the Discord
          </p>
        </a>
      </div>
    </GradientContent>
  );
};
export default Content;
