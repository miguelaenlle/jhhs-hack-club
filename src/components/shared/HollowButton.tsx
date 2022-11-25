import * as React from "react"
const HollowButton: React.FC<{
    text: string;
    onClick: () => void;
}> = (props) => {
    return (
        <button
            className={"rounded-full border-2 border-white py-1 px-3 hover:scale-105 transition-all"}
            onClick={props.onClick}>
            <p className={"text-white font-Poppins"}>{props.text} →</p>
        </button>
    );
}
export default HollowButton