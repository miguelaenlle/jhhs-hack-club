import * as React from "react";
const SubsectionHeader: React.FC<{
    content: string;
}> = (props) => {
    return (
        <h2 className={"text-xl text-white font-bold font-Poppins mt-10 mb-4"}>{props.content}</h2>
    );
}
export default SubsectionHeader