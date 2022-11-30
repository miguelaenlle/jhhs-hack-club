import * as React from "react"
import styles from "./Workshop.module.css"
import BackButton from "../shared/BackButton";
import MarkdownPreview from '@uiw/react-markdown-preview';
import { useWorkshopHook } from "./hooks/use-workshop-hook";
import { AnimatedBg } from "../shared/AnimatedBg";

const Workshop: React.FC<{}> = (props) => {
    const workshopHook = useWorkshopHook();

    return (
        <div className={`${styles.markdown} bg-gradient-to-b bg-zinc-900 min-h-screen`}>
            <AnimatedBg className={"pt-5 px-10"}>
                <BackButton link={"/workshops"} />
                <div className={"pt-12 pb-24"}>
                    <h3 className={"text-center text-5xl font-Poppins text-white font-bold"}>{workshopHook.title}</h3>
                    <p className={"text-center text-lg md:text-xl font-Poppins text-zinc-300 mt-3 max-w-2xl mx-auto"}>{workshopHook.description}</p>
                </div>
            </AnimatedBg>
            <MarkdownPreview warpperElement={{
                "data-color-mode": "dark"
            }} className={`p-10 pt-14 max-w-4xl mx-auto bg-zinc-900 font-Poppins list-disc`} source={workshopHook.markdown} />
        </div>
    );
}
export default Workshop