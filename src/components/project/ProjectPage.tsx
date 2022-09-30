import styles from "./ProjectPage.module.scss"
import * as React from "react"
import Banner from "./Banner";

// boilerplate for each project in allProjects
// don't use this as a link

const ProjectPage: React.FC<{
    title: string,
    children: React.ReactNode
}> = (props) => {
    return (
        <div>
            <Banner title={props.title} />
            {props.children}
        </div>
    );
}
export default ProjectPage