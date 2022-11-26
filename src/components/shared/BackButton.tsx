import * as React from "react"
import { Link } from "react-router-dom";
const BackButton: React.FC<{
    link: string;
}> = (props) => {
    return (
        <Link to={props.link} className={"text-md md:text-lg font-medium text-gray-300 font-Poppins hover:cursor-pointer hover:text-white transition-colors"}>{"< Go Back"}</Link>
    );
}
export default BackButton