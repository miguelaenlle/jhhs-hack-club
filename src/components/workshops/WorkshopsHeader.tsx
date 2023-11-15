import * as React from "react"
import BackButton from "../shared/BackButton";
import { motion } from "framer-motion";

const WorkshopsHeader: React.FC<{}> = (props) => {
    return (
        <div>
            <div className="px-5 pt-5">
                <BackButton
                    link={"/"}
                />
            </div>
            <div className={"mt-5 mb-5 flex flex-col items-start max-w-5xl mx-auto px-5"}>

                <motion.h1
                    initial={{ opacity: 0, y: -20, scale: 1 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className={"text-left text-4xl sm:text-5xl font-bold font-Poppins text-red-500 mb-5"}>
                    💻 Workshops
                </motion.h1>
                <motion.p

                    initial={{ opacity: 0, y: -20, scale: 1 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className={"text-left text-zinc-300 font-Poppins max-w-lg text-md"}>
                    Learn to code & build epic projects with this collection of
                    guided, hackable coding workshops!
                </motion.p>
            </div>
        </div>
    );
}
export default WorkshopsHeader