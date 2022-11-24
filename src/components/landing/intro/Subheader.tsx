import React from "react"
import { formatDate } from "../../../constants/meetup-date";

const Subheader: React.FC<{}> = (props) => {
    return (
        <div className={"mx-auto"}>
            <p
                className={
                    "text-md md:text-lg font font-Poppins text-slate-300 text-center px-5 my-7"
                }
            >
                Learn to code & build awesome projects at the JHHS Hack Club! <br className={"hidden md:block"} />
                Next Meetup is <a className={"text-white"}>{formatDate}</a> at <a className={"text-white"}>Mr. Brown's Room 158.</a>
            </p>
        </div>
    );
}
export default Subheader