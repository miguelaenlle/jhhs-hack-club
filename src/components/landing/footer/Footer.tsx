import * as React from "react";
import Link from "../Link";
const Footer: React.FC<{}> = (props) => {



    return (
        <div className={"bg-slate-800 p-5 py-15 md:p-10 shadow-lg space-y-3"}>
            <div className={"max-w-5xl mx-auto"}>
                <h3 className={`text-2xl font-bold font-Poppins text-slate-100`}>Any questions?</h3>
                <p className={`text-slate-300 text-lg mt-2`}>Feel free to reach out to the club founders!</p>
                <br />
                <a href={`mailto:maenlle4004@stu.d214.org`} className={`text-cyan-500 hover:text-cyan-700 underline hover:cursor-pointer text-lg`}>Email Miguel</a>
                <br />
                <a href={`mailto:astrugacz4426@stu.d214.org`} className={`text-cyan-500 hover:text-cyan-700 underline hover:cursor-pointer text-lg`}>Email Alex</a>
                <br />
            </div>
        </div>
    );
}
export default Footer