import React from "react"
import { formatDate } from "../../../constants/meetup-date";

const Subheader: React.FC<{}> = (props) => {
    return (
        <div className={"mx-auto mb-7"}>
            <p
                className={
                    "text-md md:text-lg font-regular text-slate-300 text-center px-5"
                }
            >
                Learn to code & build awesome projects at the JHHS Hack Club! <br className={"hidden md:block"} />
                Next Meetup is {formatDate} at Mr. Brown's Room 158.
            </p>
        </div>
    );
}
export default Subheader