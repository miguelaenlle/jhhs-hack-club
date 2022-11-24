import React from "react"
import { CodeBracketIcon, FireIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid'
import { ICON_COLOR, ICON_HEIGHT, ICON_WIDTH, LEFT_MARGIN } from "../constants/stuff-we-do"

const codeBracketIcon = <CodeBracketIcon className={`${ICON_WIDTH} ${ICON_HEIGHT} ${LEFT_MARGIN} mb-2 ${ICON_COLOR}`} />
const buildProjectIcon = <FireIcon className={`${ICON_WIDTH} ${ICON_HEIGHT} ${LEFT_MARGIN} mb-2 ${ICON_COLOR}`} />
const chatBubbleLeftRightIcon = <ChatBubbleLeftRightIcon className={`${ICON_WIDTH} ${ICON_HEIGHT} ${LEFT_MARGIN} mb-2 ${ICON_COLOR}`} />

const icons: { [key: string]: React.ReactNode } = {
    codeBracketIcon,
    buildProjectIcon,
    chatBubbleLeftRightIcon
}


const StuffCell: React.FC<{
    icon: string;
    header: string;
    text: string;
    startColor: string;
    endColor: string;
}> = (props) => {


    return (
        <div className={
            `flex-1 bg-gradient-to-br ${props.startColor} ${props.endColor} p-4 rounded-md pb-10 hover:scale-105 hover:cursor-default transition-all`
        }>
            {icons[props.icon]}
            <p className={"font-bold font-Poppins text-white text-xl md:text-2xl"}>{props.header}</p>
            <p className={"text-white text-sm md:text-md pt-1"}>{props.text}</p>

        </div>
    );
}
export default StuffCell