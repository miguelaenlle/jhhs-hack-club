import * as React from "react";
import ReactMarkdown from 'react-markdown';
import { IStuffType } from "../../../types/IStuffType";
import GradientContent from "../../shared/GradientContent";
import { howJoin, neverCodedBefore, whatsHackClub } from "../constants/landing-md";
import { stuffWeDo } from "../constants/stuff-we-do";
import ContentHeader from "./ContentHeader";
import styles from "./markdown-styles.module.css";
import StuffCell from "./StuffCell";
import { motion } from "framer-motion"
import GradientButton from "../intro/GradientButton";
import { DISCORD } from "../../../constants/links";

const Content: React.FC<{}> = (props) => {
  const root = document.getElementById("root") as HTMLElement;

  return (
    <GradientContent move={true}>
      <div className={"pt-10 pb-16"}>
        <ContentHeader
          text={"What we do at JHHS Hack Club"}
          center={true}
          first={true}
        />
        <div className={"flex flex-col md:space-y-0 md:flex-row gap-4 my-12 pb-5"}>
          {stuffWeDo.map((item: IStuffType, index: number) => {
            return (
              <StuffCell
                key={`stuff-${index}`}
                icon={item.icon}
                header={item.header}
                text={item.text}
                startColor={item.startColor}
                endColor={item.endColor}
              />
            )
          })}
        </div>
        <ContentHeader
          text={"What is Hack Club?"}
          first
        />
        <ReactMarkdown className={`${styles.markdown} text-slate-300 mt-4 mt-1 text-md`} children={whatsHackClub} />
        <ContentHeader
          text={"Fun for all skill levels"}
        />
        <ReactMarkdown className={`${styles.markdown} text-slate-300 mt-4 mt-1 text-md`} children={neverCodedBefore} />

        <ContentHeader
          text={"How can I join?"}
        />
        <ReactMarkdown className={`${styles.markdown} text-slate-300 mt-4 text-md`} children={howJoin} />

        <br />
        <br />
        <br />
        <br />

        <GradientButton
          link={DISCORD}
          text={"JOIN THE DISCORD"}
          startColor={"from-orange-500"}
          endColor={"to-red-500"}
        />





      </div>
    </GradientContent>
  );
};
export default Content;
