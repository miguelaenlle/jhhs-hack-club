import * as React from "react"
import { DISCORD, FORM } from "../../constants/links";
import { day, shortDate } from "../../constants/meetup-date";
const IntroSection: React.FC<{}> = (props) => {



    return (

        <div className={"bg-[url('./img/background.png')] bg-opacity-10 bg-cover object-fill p-5 backdrop-blur-xl z-10 shadow-lg"}>
            <div>
                <div className={"flex justify-between items-start"}>
                    <a href={"/projects"} className={"text-md md:text-xl font-medium text-white font-Poppins hover:cursor-pointer hover:font-bold transition-all"}>JHHS Hack Club</a>
                    <div className={"flex flex-col gap-2 items-end"}>
                        <a href={"/projects"} className={"text-md md:text-xl font-medium text-white font-Poppins hover:cursor-pointer hover:font-bold transition-all"}>Workshops</a>
                    </div>
                </div>
                <div className={"py-16 md:py-32"}>
                    <h1 className={"text-4xl md:text-6xl font-bold text-white font-Poppins text-center"}>JHHS Hack Club</h1>
                    <div className={"max-w-2xl mx-auto mt-3 md:mt-5"}>
                        <h3 className={"text-lg md:text-2xl font-regular text-slate-300 font-Poppins text-center"}>Build awesome projects and attend hackathons at the JHHS Hack Club</h3>
                    </div>
                    <p className={"text-md font-bold text-slate-400 font-mono text-center mt-3 md:mt-10"}>Next Meetup: {day}, {shortDate} at 3:00PM at Mr. Brown’s Room 158</p>
                    <div className={"flex space-y-3 flex-col items-center justify-center mt-10"}>
                        <a href={DISCORD} target="_blank" className={"bg-gradient-to-r from-amber-700 to-red-500 rounded-full p-4 px-7 w-fit hover:cursor-pointer hover:scale-105 transition-all"}>
                            <p className={"text-md md:text-xl text-white font-Poppins font-bold"}>Join the Discord</p>
                        </a>
                        <a href={"/projects"} className={"bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-full p-4 px-7 w-fit hover:cursor-pointer hover:scale-105 transition-all"}>
                            <p className={"text-md md:text-xl text-white font-Poppins font-bold"}>Go to Workshops</p>
                        </a>
                        <div className={"group flex items-center gap-2 group-hover:cursor pt-3"}>
                            <a href={"/megasite"} className={"text-md md:text-xl font-medium text-white font-Poppins group-hover:font-bold transition-all"}>Personal Site Megasite</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default IntroSection