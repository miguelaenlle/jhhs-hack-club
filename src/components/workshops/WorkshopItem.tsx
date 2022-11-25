import * as React from "react"
const WorkshopItem: React.FC<{
    id: string;
    image: string;
    workshopNumber: number;
    title: string;
    description: string;
    startDate?: string;
    endDate?: string;
}> = (props) => {
    return (
        <div className={"overflow-hidden rounded-lg bg-gradient-to-b from-neutral-800 to-neutral-900 hover:scale-105 hover:cursor-pointer transition-all"}>
            <img className={"object-cover w-full h-64 rounded-xl opacity-50"} alt={`${props.title}`} src={props.image} />
            <div className={"p-5"}>
                <p className={"font-Poppins text-zinc-200 font-medium text-xl"}>{props.title}</p>
                <p className={"font-Poppins text-zinc-400 text-md mt-1"}>{props.description}</p>
                {/* <div className={"mt-3"}>
                    {props.endDate && (
                        <p className={"font-Poppins text-green-600 text-xs italic"}>Completed {props.endDate}</p>
                    )}
                    {props.startDate && (
                        <p className={"font-Poppins text-zinc-500 text-xs italic"}>Started {props.startDate}</p>
                    )}
                </div> */}
            </div>
        </div>
    );
}
export default WorkshopItem