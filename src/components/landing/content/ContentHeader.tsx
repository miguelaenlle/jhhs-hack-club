import React from "react"
const ContentHeader: React.FC<{
    text: string;
    center?: boolean;
    first?: boolean;
}> = (props) => {
    return (
        <div>
            <h3 className={`${props.center ? "text-3xl text-center" : "text-2xl"} ${!props.first ? "mt-20" : ""} font-bold font-Poppins text-slate-100`}>{props.text}</h3>
            {!props.center && (
                <div className={"w-full h-0.5 bg-slate-700 mt-3 mb-3"}></div>

            )}
        </div>
    );
}
export default ContentHeader