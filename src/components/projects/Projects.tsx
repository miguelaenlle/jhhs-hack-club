import styles from "./Projects.module.scss"
import * as React from "react"
import BackButton from "../shared/BackButton"
import WorkshopItem from "./WorkshopItem";
import { PROJECT_VOTE_LINK } from "../../constants/links";
const Projects: React.FC<{}> = (props) => {
    return (
        <div>
            <div className={"bg-[url('./img/code.jpg')] bg-opacity-50 bg-cover object-fill p-5 backdrop-blur-xl z-10 shadow-lg"}>
                <div>
                    <BackButton link={"/"} />
                    <div className={"py-20"}>
                        <h1 className={"text-4xl md:text-5xl font-bold text-white font-Poppins text-center"}>Workshops</h1>
                    </div>
                </div>
            </div>

            <div className={"bg-gradient-to-b from-slate-800 to-slate-900 min-h-screen px-5 pt-10 md:px-10 xl:py-20 pb-20"}>
                <div className={"flex flex-col align-center max-w-6xl mx-auto gap-5"}>
                    
                    <WorkshopItem
                        link={"/projects/personal-website"}
                        number={1}
                        title="Personal Website"
                        firstMeetup={1}
                        firstMeetupDate="9/9"
                        lastMeetup={4}
                        lastMeetupDate="9/30"
                    />
                </div>
            </div>
        </div>
    );
}
export default Projects