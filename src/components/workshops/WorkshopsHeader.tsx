import * as React from "react"
import BackButton from "../shared/BackButton";
import { motion } from "framer-motion";

const WorkshopsHeader: React.FC<{}> = (props) => {
    return (
        <div>
            <BackButton
                link={"/"}

            />
            <div className={"mt-5 mb-20"}>

                <motion.h1
                    initial={{ opacity: 0, y: -20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className={"text-center text-4xl sm:text-5xl font-bold font-Poppins text-red-500 mb-5"}>
                    Workshops
                </motion.h1>
                <motion.p

                    initial={{ opacity: 0, y: -20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className={"text-center text-zinc-300 font-Poppins max-w-lg mx-auto text-md"}>
                    Learn to code & build epic projects with this collection of
                    guided, hackable coding tutorials!

                </motion.p>
            </div>
            <div className={"max-w-6xl mx-auto"}>
                <h3 className={"text-xl text-zinc-300 font-bold font-Poppins"}>Current Workshop</h3>
            </div>
            <div className={"max-w-6xl mx-auto"}>
                <h3 className={"text-xl text-zinc-300 font-bold font-Poppins"}>Finished Workshops</h3>
            </div>
            <br />
        </div>
    );
}
export default WorkshopsHeader