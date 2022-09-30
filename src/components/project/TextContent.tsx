import styles from "./TextContent.module.scss"
import * as React from "react"
const TextContent: React.FC<{
    text: string
}> = (props) => {
    return (
        <p className={`text-lg leading-7 text-zinc-200 font-thin font-Poppins`}>{props.text}</p>
    );
}
export default TextContent