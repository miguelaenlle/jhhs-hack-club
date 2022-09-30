import * as React from "react";
import Link from "./Link";
const Footer: React.FC<{}> = (props) => {
    return (
        <div className={"bg-zinc-900 p-5 py-15 md:p-10 shadow-lg space-y-3"}>
            <div className={"max-w-6xl mx-auto"}>
                <p className={"font-Poppins text-2xl text-white"}>Any questions? Feel free to reach out to the club founders!</p>
                <br />
                <p className={"font-Poppins text-xl font-light text-zinc-300 "}><Link text={"Email Miguel"} url={"mailto:maenlle4004@stu.d214.org"} /></p>
                <p className={"font-Poppins text-xl font-light text-zinc-300 "}><Link text={"Email Alex"} url={"mailto:astrugacz4426@stu.d214.org"} /></p>
                <br />
                <br />
            </div>
        </div>
    );
}
export default Footer