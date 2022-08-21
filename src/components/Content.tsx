import Link from "./Link";
import * as React from "react";
import { DISCORD, FORM } from "../constants/links";
const Content: React.FC<{}> = (props) => {
    return (
        <div className={"bg-gradient-to-b from-slate-800 to-slate-900 min-h-screen px-10 py-20"}>
            <div className={"max-w-6xl mx-auto"}>
                <div className={"border-b-2 border-b-slate-800 py-20"}>
                    <h2 className={"text-3xl font-bold font-Poppins text-white"}>What is a Hack Club?</h2>
                    <p className={"leading-8 text-xl font-light font-Poppins text-slate-300 mt-5"}>JHHS Hack Club is affiliated with <Link url={"https://hackclub.com"} text={"Hack Club"} />, a global network of 2,000 programming clubs that provides guides and funding for running Hack Clubs and starting hackathons.</p>
                    <p className={"leading-8 text-xl font-light font-Poppins text-slate-300 mt-5"}>
                        Hack Club offers many unique opportunities, such as worldwide coding tournaments, large-scale <Link url={"https://hackathons.hackclub.com/"} text={"hackathons"} />, and AMAs with influential people in tech like <Link url={"https://hackclub.com/amas/"} text={"Elon Musk"} /> and <Link url={"https://hackclub.com/amas/"} text={"Vitalik Buterin"} /></p>
                </div>
                <div className={"border-b-2 border-b-slate-800 py-20"}>
                    <h2 className={"text-3xl font-bold font-Poppins text-white"}>What do we do at Hack Club?</h2>
                    <p className={"leading-8 text-xl font-light font-Poppins text-slate-300 mt-5"}>Every Friday, we meet up at school for 1 hour at Room 158 (Mr. Brown’s Room), and build <b className={"text-white"}>awesome software projects</b>. These projects are accessible any skill level, beginner to advanced.</p>
                    <p className={"leading-8 text-xl font-light font-Poppins text-slate-300 mt-5"}>You’ll work independently or collaboratively with other group members to build, then can show off what you’ve built to the group by the end of the meetup!</p>
                    <p className={"leading-8 text-xl font-light font-Poppins text-slate-300 mt-5"}>
                        We also run game nights and will eventually join <b className={"text-white"}>hackathons</b>, where you’ll compete for prizes to build practical, web or app-based solutions within the duration of the event.</p>
                </div>

                <div className={"py-20"}>
                    <h2 className={"text-3xl font-bold font-Poppins text-white"}>How can I join?</h2>
                    <p className={"leading-8 text-xl font-light font-Poppins text-slate-300 mt-5"}>Hack Club is open to people with all skill levels, from beginners to experienced developers.</p>
                    <p className={"leading-8 text-xl font-light font-Poppins text-slate-300 mt-5"}>Our next meetup is on <b className={"text-white"}>Monday, September 2nd</b> at <b className={"text-white"}>3:00PM</b >at <b className={"text-white"}>Mr. Brown’s Room</b> (Room 158 in the Math Hallway)</p>
                    <p className={"leading-8 text-xl font-light font-Poppins text-slate-300 mt-5"}>
                        Please feel free to fill out the <Link url={FORM} text="early sign up" /> or <Link url={DISCORD} text="join the discord" /> for updates on the Hack Club!
                    </p>
                </div>
                <div className={"flex space-y-3 flex-col mt-10"}>
                    <a href={FORM} target="_blank" className={"bg-gradient-to-r from-amber-700 to-red-500 rounded-full p-4 px-7 w-fit hover:cursor-pointer hover:scale-105 transition-all"}>
                        <p className={"text-xl text-white font-Poppins font-bold"}>Join the Club</p>
                    </a>
                    <a href={DISCORD} target="_blank" className={"bg-gradient-to-r from-cyan-600 to-sky-700 rounded-full p-4 px-7 w-fit hover:cursor-pointer hover:scale-105 transition-all"}>
                        <p className={"text-xl text-white font-Poppins font-bold"}>Join the Discord</p>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Content