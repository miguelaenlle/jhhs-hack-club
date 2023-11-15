import * as React from "react"
import styles from "./Workshop.module.css"
import BackButton from "../shared/BackButton";
import MarkdownPreview from '@uiw/react-markdown-preview';
import { useWorkshopHook } from "./hooks/use-workshop-hook";
import { AnimatedBg } from "../shared/AnimatedBg";
import '@hackclub/theme/fonts/reg-bold.css'
import { motion } from "framer-motion";

const Workshop: React.FC<{}> = (props) => {
    const workshopHook = useWorkshopHook();

    return (
        <div className={`bg-gradient-to-b bg-zinc-900 min-h-screen font-Poppins`}>
            <AnimatedBg className={"pt-5 px-5"}>
                <BackButton link={"/workshops"} />
                <div className={"pt-24 pb-32 flex flex-col items-start max-w-4xl md:px-10 mx-auto"}>


                    <motion.p
                        initial={{ opacity: 0, y: -20, scale: 1.1 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className={"text-left text-lg text-zinc-200 font-bold mb-3"}>
                        💻 WORKSHOP
                    </motion.p>
                    <motion.h3
                        initial={{ opacity: 0, y: -20, scale: 1.2 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className={"text-left text-5xl text-white font-bold"}>
                        {workshopHook.title}
                    </motion.h3>

                    <motion.p
                        initial={{ opacity: 0, y: -20, scale: 1.2 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        className={"text-left text-lg md:text-xl font-Poppins text-zinc-100 mt-3 max-w-2xl"}>
                        {workshopHook.description}
                    </motion.p>
                </div>
            </AnimatedBg>
            <MarkdownPreview warpperElement={{
                "data-color-mode": "dark"
            }} className={`${styles.markdown} p-10 pt-10 max-w-4xl mx-auto bg-zinc-900 list-disc`} source={workshopHook.markdown} />
        </div>
    );
}
export default Workshop