import React from "react"
const ContentHeader: React.FC<{
    text: string;
}> = (props) => {
    return (
        <h3 className={"text-2xl font-bold font-Poppins text-slate-100"}>{props.text}</h3>
    );
}
export default ContentHeader