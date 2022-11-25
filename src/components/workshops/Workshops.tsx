import * as React from "react"
import BackButton from "../shared/BackButton";
import { motion } from "framer-motion"
import WorkshopsHeader from "./WorkshopsHeader";

const Workshops: React.FC<{}> = (props) => {
    return (
        <div className={"bg-gradient-to-b from-neutral-800 to-neutral-900 p-5 min-h-screen"}>
            <WorkshopsHeader />
        </div>
    );
}
export default Workshops