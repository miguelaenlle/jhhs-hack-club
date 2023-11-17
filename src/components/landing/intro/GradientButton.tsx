import React from "react"
import { useNavigate } from "react-router-dom";
const GradientButton: React.FC<{
    link: string;
    text: string;
    startColor: string;
    endColor: string;
    fullRedirect?: boolean;
    preventOpenNewPage?: boolean;
}> = (props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        if (props.fullRedirect) {
            if (props.preventOpenNewPage) {
                window.parent.location = props.link;
            } else {
                window.open(props.link, "_blank");
            }
        } else {
            navigate(props.link)
        }
    }

    return (
        <button
            onClick={handleClick}
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
        </button>
    );
}
export default GradientButton