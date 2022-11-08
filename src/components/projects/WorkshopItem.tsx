import * as React from "react";
const WorkshopItem: React.FC<{
    link: string;
    title: string;
    firstMeetup?: number;
    customBackground?: string;
    customHighlightBackground?: string;
}> = (props) => {
    return (
        <a href={props.link} className={`flex flex-col align-center ${props.customBackground ? props.customBackground : "bg-zinc-900"} p-5 rounded-lg shadow-lg py-12 gap-2 ${props.customHighlightBackground ? props.customHighlightBackground : "hover:bg-zinc-800"} hover:cursor-pointer transition-all`}>
            <h2 className={"text-2xl text-white font-Poppins text-center"}>{props.title}</h2>
            {props.firstMeetup && (
                <p className={"text-gray-300 font-Poppins font-thin text-md text-center"}>Started on Meetup #{props.firstMeetup}</p>
            )}
        </a>
    );
}
export default WorkshopItem