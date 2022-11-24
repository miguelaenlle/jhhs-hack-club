import * as React from "react";
const GradientContent: React.FC<{
    children: React.ReactNode;
    move: boolean;
}> = (props) => {
    return (
        <div className={`bg-gradient-to-b from-slate-800 to-slate-900 min-h-screen px-5 md:px-10 py-10 pb-20`}>
            <div className={"max-w-5xl mx-auto"}>
                {props.children}
            </div>
        </div>
    );
}
export default GradientContent