import React from "react"
const GradientButton: React.FC<{
    link: string;
    text: string;
    startColor: string;
    endColor: string;
}> = (props) => {
    return (
        <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            className={
                `bg-gradient-to-br ${props.startColor} ${props.endColor} rounded-full p-3 px-7 w-fit hover:cursor-pointer hover:scale-105 transition-all`
            }
        >
            <p
                className={
                    "text-md text-white font-Poppins font-bold"
                }
            >
                {props.text}
            </p>
        </a>
    );
}
export default GradientButton