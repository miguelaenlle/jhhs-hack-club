import * as React from "react"
const Link: React.FC<{
    text: string;
    url?: string;
    action?: () => void;
}> = (props) => {
    if (props.url) {
        return (
            <a className={"text-cyan-400 underline hover:font-medium transition-all"} href={props.url} target="_blank">{props.text}</a>
        );
    } else {
        return (
            <button className={"text-cyan-400 underline hover:font-medium transition-all"} onClick={props.action}>{props.text}</button>
        );
    }
}
export default Link