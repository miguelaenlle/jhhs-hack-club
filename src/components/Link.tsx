import * as React from "react"
const Link: React.FC<{
    url: string,
    text: string
}> = (props) => {
    return (
        <a className={"text-cyan-400 underline hover:font-medium transition-all"} href={props.url} target="_blank">{props.text}</a>
    );
}
export default Link