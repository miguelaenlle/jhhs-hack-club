import * as React from "react";
const Image: React.FC<{
    className: string;
    src: string;
}> = (props) => {
    return (
        <img src={props.src} className={props.className} />
    );
}
export default Image