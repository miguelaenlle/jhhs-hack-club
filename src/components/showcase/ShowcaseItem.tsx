import * as React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import styles from "./ShowcaseItem.module.css"

const ShowcaseItem: React.FC<{
    title: string,
    backgroundColor: string,
    link: string,
    author: string,
    image?: string,
    scWinner?: boolean
}> = (props) => {

    const redirect = () => {
        window.open(props.link, "_blank");
    }

    return (
        <div onClick={redirect} className={`rounded-xl ${props.backgroundColor} hover:cursor-pointer hover:scale-105 transition-all`}>
            <div className={"bg-white h-44 rounded-xl overflow-hidden cursor-zoom-out"}>
                {props.image ? (
                    <img className={"w-full h-full object-cover"} src={props.image} />
                ) : (
                    <iframe className={styles.iframe} src={props.link} />

                )}
            </div>
            <div className={"rounded-xl p-3 pb-4"}>
                <p className={"text-white font-bold font-Poppins text-xl"}>{props.title}</p>
                {props.scWinner && (
                    <p className={"text-zinc-400 font-Poppins mb-3"}>Code Challenge 1 Winning Project 🥇</p>
                )}
                <p className={"text-white font-Poppins text-emerald-100"}>By {props.author}</p>
            </div>
        </div>
    );
}

export default ShowcaseItem;