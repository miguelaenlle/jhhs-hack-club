import * as React from "react"
import { DISCORD, FORM } from "../constants/links";
const IntroSection: React.FC<{}> = (props) => {



    return (

        <div className={"bg-[url('./img/background.png')] bg-opacity-10 bg-cover object-fill p-5 backdrop-blur-xl z-10 shadow-lg"}>
            <div>
                <p className={"text-xl font-medium text-white font-Poppins"}>JHHS Hack Club</p>
                <div className={"py-32"}>
                    <h1 className={"text-6xl font-bold text-white font-Poppins text-center"}>JHHS Hack Club</h1>
                    <div className={"max-w-2xl mx-auto mt-10"}>
                        <h3 className={"text-2xl font-regular text-slate-300 font-Poppins text-center"}>Build awesome projects and attend hackathons at the JHHS Hack Club</h3>
                    </div>
                    <p className={"text-md font-medium text-slate-400 font-Poppins text-center mt-10"}>Next Meetup: Monday, 9/2 at 3:00PM at Mr. Brown’s Room 158</p>
                    <div className={"flex space-y-3 flex-col items-center justify-center mt-10"}>
                        <a href={FORM} target="_blank" className={"bg-gradient-to-r from-amber-700 to-red-500 rounded-full p-4 px-7 w-fit hover:cursor-pointer hover:scale-105 transition-all"}>
                            <p className={"text-xl text-white font-Poppins font-bold"}>Join the Club</p>
                        </a>
                        <a href={DISCORD} target="_blank" className={"bg-gradient-to-r from-cyan-600 to-sky-700 rounded-full p-4 px-7 w-fit hover:cursor-pointer hover:scale-105 transition-all"}>
                            <p className={"text-xl text-white font-Poppins font-bold"}>Join the Discord</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default IntroSection