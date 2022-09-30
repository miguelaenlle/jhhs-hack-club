import * as React from "react";
const WorkshopItem: React.FC<{
    link: string;
    number: number;
    title: string;
    firstMeetup: number;
    firstMeetupDate: string;
    lastMeetup: number;
    lastMeetupDate: string;
}> = (props) => {
    return (
        <a href={props.link} className={"flex flex-col align-center bg-zinc-900 p-5 rounded-lg shadow-lg py-12 gap-2 hover:bg-zinc-800 hover:cursor-pointer transition-all"}>
            <h2 className={"text-2xl text-white font-Poppins text-center"}>Workshop #{props.number}: {props.title}</h2>
            <p className={"text-gray-400 font-Poppins font-thin text-md text-center"}>Meetup #{props.firstMeetup} ({props.firstMeetupDate}) - Meetup #{props.lastMeetup} ({props.lastMeetupDate})</p>
        </a>
    );
}
export default WorkshopItem