import * as React from "react";
const Link: React.FC<{
    text: string;
    link?: string;
    action?: () => void;
}> = (props) => {
    if (props.link) {
        return (
            <a href={props.link} target={"_blank"} className={"text-cyan-500 font-Poppins underline hover:text-cyan-400 hover:cursor-pointer"}>
                {props.text}
            </a>
        );
    } else {
        return (
            <p onClick={props.action} className={"text-cyan-500 font-Poppins underline hover:text-cyan-400 hover:cursor-pointer"}>
                {props.text}
            </p>
        );
    }
}
export default Link