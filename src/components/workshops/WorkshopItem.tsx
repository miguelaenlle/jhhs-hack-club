import * as React from "react"
import { useLocation, useNavigate } from "react-router-dom";
const WorkshopItem: React.FC<{
    id: string;
    image: string;
    workshopNumber: number;
    title: string;
    description: string;
    customUrl?: string;
    startDate?: string;
    endDate?: string;
    customBgColor?: string;
}> = (props) => {

    const navigate = useNavigate();

    const redirect = () => {
        if (props.customUrl) {
            window.location.replace(props.customUrl);
        } else {
            navigate(`/workshops/${props.id}`)
        }
    }

    const workshopClassName =
        props.customBgColor ? `
    overflow-hidden rounded-lg bg-gradient-to-b bg-[${props.customBgColor}] hover:scale-105 hover:cursor-pointer transition-all
    ` : `
    overflow-hidden rounded-lg bg-gradient-to-b from-neutral-800 to-neutral-900 hover:scale-105 hover:cursor-pointer transition-all
    `

    React.useEffect(() => {
        console.log("workshop Class Name", workshopClassName);
    }, [workshopClassName])

    return (
        <div onClick={redirect} className={workshopClassName}>
            <img className={"object-cover w-full h-64 rounded-xl opacity-80"} alt={`${props.title}`} src={props.image} />
            <div className={"p-5"}>
                <p className={"font-Poppins text-zinc-200 font-medium text-xl"}>{props.title}</p>
                <p className={"font-Poppins text-zinc-400 text-md mt-1"}>{props.description}</p>
            </div>
        </div>
    );
}
export default WorkshopItem