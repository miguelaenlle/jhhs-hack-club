import * as React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import styles from "./MegasiteCell.module.css"

const MegasiteCell: React.FC<{
    title: string,
    backgroundColor: string,
    link: string,
    image?: string,
    author: string
}> = (props) => {

    const navigate = useNavigate();

    const redirect = () => {
        window.open(props.link, "_blank");
    }

    return (
        <div onClick={redirect} className={`rounded-xl ${props.backgroundColor} hover:cursor-pointer hover:scale-105 transition-all`}>
            <div className={"bg-white h-44 rounded-xl overflow-hidden cursor-zoom-out"}>
                {props.image ? (
                    <div></div>
                ) : (
                    <iframe className={styles.iframe} src={props.link} />
                )}
            </div>
            <div className={"rounded-xl p-3 pb-4"}>
                <p className={"text-white font-bold font-Poppins text-xl"}>{props.title}</p>
                <p className={"text-white font-Poppins text-emerald-100"}>By {props.author}</p>
            </div>
        </div>
    );
}
export default MegasiteCell