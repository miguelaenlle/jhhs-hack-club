import * as React from "react";
const SectionHeader: React.FC<{
    content: string;
}> = (props) => {
    return (
        <h2 className={"text-2xl text-white font-bold font-Poppins mb-2"}>{props.content}</h2>
    );
}
export default SectionHeader