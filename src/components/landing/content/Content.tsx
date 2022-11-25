import * as React from "react";
import ReactMarkdown from 'react-markdown';
import { IStuffType } from "../../../types/IStuffType";
import { joiningInstructions, moreThanJustMeetups, neverCodedBefore, whatsHackClub } from "../constants/landing-md";
import { stuffWeDo } from "../constants/stuff-we-do";
import ContentHeader from "./ContentHeader";
import Discord from "./Discord";
import HackClubHeader from "./HackClubHeader";
import styles from "./markdown-styles.module.css";
import StuffCell from "./StuffCell";
import WhatWeDo from "./WhatWeDo";

const Content: React.FC<{}> = (props) => {

  return (

    <div>
      <div className={"bg-zinc-200 shadow-md"}>
        <div className={"flex flex-col items-center max-w-6xl mx-auto p-10 pb-5 mb-10"}>
          <WhatWeDo />
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
        </div>

      </div>

      <div className={"p-100"}>
        <div className={"max-w-6xl mx-auto"}>
          <div className={"p-10"}>
            <HackClubHeader />
            <ReactMarkdown className={`${styles.markdown} text-zinc-600 font-Poppins mt-4 mt-1 text-md`} children={whatsHackClub} />
            <ContentHeader
              text={"Open to all skill levels"}
              numWords={3}
            />
            <ReactMarkdown className={`${styles.markdown} text-zinc-600 font-Poppins mt-4 mt-1 text-md`} children={neverCodedBefore} />

            <ContentHeader
              text={"More than just meetups"}
              numWords={2}
            />
            <ReactMarkdown className={`${styles.markdown} text-zinc-600 font-Poppins mt-4 text-md`} children={moreThanJustMeetups} />
            <br />
            <br />
            <br />
          </div>
        </div>
        <Discord />
        <div className={"max-w-6xl mx-auto my-5 mb-24"} id="join">
          <div className={"p-10"}>
            <ContentHeader
              text={"How to join"}
              numWords={1}
              first={true}
              borderOff
            />
            <ReactMarkdown className={`${styles.markdown} text-zinc-600 font-Poppins mt-4 text-md`} children={joiningInstructions} />
            <br />
          </div>
        </div>
      </div >
    </div>
  );
};
export const join = document.getElementById("join");
export default Content;
