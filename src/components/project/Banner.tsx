import * as React from "react";
import BackButton from "../shared/BackButton";
const Banner: React.FC<{
    title: string
}> = (props) => {
    return (

        <div className={"bg-[url('./img/code.jpg')] bg-opacity-50 bg-cover object-fill p-5 backdrop-blur-xl z-10 shadow-lg"}>
            <div>
                <BackButton link={"/projects"} />
                <div className={"py-16"}>
                    <h1 className={"text-4xl md:text-5xl font-bold text-white font-Poppins text-center"}>{props.title}</h1>
                </div>
            </div>
        </div>
    );
}
export default Banner