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

    React.useEffect(() => {
        // scroll to top
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 5)
    }, [])

    return (
        <div className={`bg-gradient-to-b bg-zinc-900 min-h-screen font-Poppins`}>
            <AnimatedBg className={"pt-5 px-5"}>
                <BackButton link={"/workshops"} />
                <div className={"pt-24 pb-32 flex flex-col items-start max-w-4xl md:px-10 mx-auto"}>


                    <p
                        className={"text-left text-lg text-zinc-200 font-bold mb-3"}>
                        💻 WORKSHOP
                    </p>
                    <h3
                        className={"text-left text-5xl text-white font-bold"}>
                        {workshopHook.title}
                    </h3>

                    <p
                        className={"text-left text-lg md:text-xl font-Poppins text-zinc-100 mt-3 max-w-2xl"}>
                        {workshopHook.description}
                    </p>
                </div>
            </AnimatedBg>
            <MarkdownPreview warpperElement={{
                "data-color-mode": "dark"
            }} className={`${styles.markdown} p-10 pt-10 max-w-4xl mx-auto bg-zinc-900 list-disc`} source={workshopHook.markdown} />
        </div>
    );
}
export default Workshop