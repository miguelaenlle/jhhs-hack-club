import React from "react"
const ContentHeader: React.FC<{
    text: string;
    center?: boolean;
    first?: boolean;
    numWords: number;
    borderOff?: boolean;
}> = (props) => {

    const last2words = props.text.split(" ").slice(-props.numWords).join(" ")
    const firstWords = props.text.split(" ").slice(0, -props.numWords).join(" ")

    return (
        <div className={`mb-3 ${!props.first ? "mt-20" : ""}`}>
            {!props.center && !props.borderOff && (
                <div className={"w-full h-0.5 bg-slate-200 mt-3 mb-3"}></div>
            )}
            {props.numWords > 0 ? (
                <h3 className={`${props.center ? "text-3xl text-center" : "text-2xl"} font-bold font-Poppins text-slate-800`}>{firstWords} <a className={"text-orange-600"}>{last2words}</a></h3>
            ) : (
                <h3 className={`${props.center ? "text-3xl text-center" : "text-2xl"} font-bold font-Poppins text-slate-800`}>{props.text}</h3>
            )}

        </div>
    );
}
export default ContentHeader