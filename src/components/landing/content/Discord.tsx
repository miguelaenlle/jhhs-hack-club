import * as React from "react"
import { DISCORD } from "../../../constants/links";
import HollowButton from "../../shared/HollowButton";
import GradientButton from "../intro/GradientButton";
import styles from "./Discord.module.css";

const Discord: React.FC<{}> = (props) => {
    return (
        <div className={`py-24 bg-discord bg-cover shadow-lg`}>
            <div className={"flex flex-col items-center max-w-2xl mx-auto px-10"}>
                <p className={" text-center text-zinc-300 font-Poppins font-bold"}>~ HACK CLUB DISCORD ~</p>
                <h2 className={"text-4xl md:text-5xl text-center text-white font-Poppins font-bold mt-5 mb-2 sm:mb-2"}>Come for the skills,</h2>
                <h2 className={"text-4xl md:text-5xl text-center text-white font-Poppins font-bold mt-0 sm:mt-2 mb-2"}>stay for the people.</h2>
                <p className={"text-lg text-center text-zinc-100 font-Poppins mt-7 p-10 pt-5 sm:pt-10"}>Join our awesome Discord community and get important updates on the Hersey Hack Club Discord Server!</p>
                <div className={"mt-10"}>
                    <GradientButton
                        link={DISCORD}
                        text={"JOIN OUR DISCORD →"}
                        startColor={"from-emerald-400"}
                        endColor={"to-sky-600"}
                    />
                </div>
            </div>
        </div>
    );
}
export default Discord