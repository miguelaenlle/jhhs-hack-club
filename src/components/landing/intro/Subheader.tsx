import React from "react"
import { formatDate } from "../../../constants/meetup-date";

const Subheader: React.FC<{}> = (props) => {
    return (
        <div className={"mx-auto mb-10"}>
            <p
                className={
                    "text-lg font-regular text-slate-300 text-center"
                }
            >
                Learn to code & build awesome projects at the JHHS Hack Club! <br />
                Next Meetup is {formatDate} at Mr. Brown's Room 158.
            </p>
        </div>
    );
}
export default Subheader