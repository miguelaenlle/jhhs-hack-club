import React from "react"

const StuffCell: React.FC<{
    header: string;
    text: string;
    startColor: string;
    endColor: string;
}> = (props) => {


    return (
        <div className={
            `flex-1 bg-gradient-to-br ${props.startColor} ${props.endColor} p-5 rounded-md pb-10`
        }>
            <p className={"font-bold font-Poppins text-white"}>{props.header}</p>
            <p className={"text-slate-200 text-sm py-1 "}>{props.text}</p>

        </div>
    );
}
export default StuffCell