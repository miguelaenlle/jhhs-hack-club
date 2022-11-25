import * as React from "react"
const HackClubHeader: React.FC<{}> = (props) => {
    return (
        <div className={"mb-3"}>
            <h3 className={`text-2xl font-bold font-Poppins text-slate-800`}>What is a <a className={"text-orange-600"}>Hack Club?</a></h3>
        </div>
    );
}
export default HackClubHeader