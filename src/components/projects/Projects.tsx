import styles from "./Projects.module.scss";
import * as React from "react";
import BackButton from "../shared/BackButton";
import WorkshopItem from "./WorkshopItem";
import { PROJECT_VOTE_LINK } from "../../constants/links";
const Projects: React.FC<{}> = (props) => {
  return (
    <div>
      <div
        className={
          "bg-[url('./img/code.jpg')] bg-opacity-50 bg-cover object-fill p-5 backdrop-blur-xl z-10 shadow-lg"
        }
      >
        <div>
          <BackButton link={"/"} />
          <div className={"py-20"}>
            <h1
              className={
                "text-4xl md:text-5xl font-bold text-white font-Poppins text-center"
              }
            >
              Workshops
            </h1>
          </div>
        </div>
      </div>

      <div
        className={
          "bg-gradient-to-b from-slate-800 to-slate-900 min-h-screen px-5 pt-10 md:px-10 xl:py-20 pb-20"
        }
      >
        <div className={"flex flex-col align-center max-w-6xl mx-auto gap-5"}>
          <WorkshopItem
            link={"/projects/personal-website"}
            title="Workshop #1: Personal Website"
            firstMeetup={1}
          />
          <WorkshopItem
            link={
              "https://herseyhacks.notion.site/Workshop-2-Cat-Photo-App-0a72d67b46b64376a49bf11d83e894f7"
            }
            title="Workshop #2: Cat Photo App"
            firstMeetup={5}
          />
          <WorkshopItem
            link={
              "https://herseyhacks.notion.site/Workshop-3-Caf-Menu-Site-39e21cac4b34406587a3bfb50ec7aeca"
            }
            title="Workshop #3: Cafe Menu Site"
            firstMeetup={6}
          />

          <WorkshopItem
            link={
              "https://herseyhacks.notion.site/Challenge-Workshop-Meme-Generator-17ca5814d5124dc4b36b895998fbc687"
            }
            title="Challenge Workshop: Meme Generator"
            firstMeetup={8}
            customBackground={"bg-cyan-800"}
            customHighlightBackground={"hover:bg-cyan-900"}
          />
          <WorkshopItem
            link={
              "https://herseyhacks.notion.site/Code-Challenge-fdccb11e1b024e02934c736a03863504"
            }
            title="Code Challenge: Trivia Website"
            firstMeetup={8}
            customBackground={"bg-cyan-600"}
            customHighlightBackground={"hover:bg-cyan-700"}
          />

          <br />

          <WorkshopItem
            link={
              "https://herseyhacks.notion.site/Advanced-Webdev-Track-26426476e6534b249f0f3a36d3a3f221"
            }
            title="Advanced Track"
          />
          <WorkshopItem
            link={
              "https://herseyhacks.notion.site/Hack-Club-Resources-9618bce8ed184f8daac7703f168f57e3"
            }
            title="All HC Coding Resources"
          />
        </div>
      </div>
    </div>
  );
};
export default Projects;
