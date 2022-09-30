import styles from "./Text.module.scss"
import * as React from "react"
const Text: React.FC<{
    children: React.ReactNode;
    bottomSpace?: boolean;
}> = (props) => {
    return (
        <p className={`text-lg leading-7 text-zinc-200 font-thin font-Poppins ${props.bottomSpace ? "mb-10" : ""}`}>{props.children}</p>
    );
}
export default Text