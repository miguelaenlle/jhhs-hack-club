import * as React from "react";
import Link from "../Link";
import FooterSection from "./FooterSection";

const FOOTER_SECTIONS = [
    {
        "title": "JHHS Hack Club",
        "links": [
            {
                "text": "Homepage",
                "href": "/"
            },
            {
                "text": "Showcase",
                "href": "/showcase"
            },
            {
                "text": "Workshops",
                "href": "/projects"
            }
        ]
    },
    {
        "title": "Hack Club",
        "links": [
            {
                "text": "Hack Club",
                "href": "https://hackclub.com"
            },
            {
                "text": "Press",
                "href": "https://hackclub.com/press"
            }
        ]
    },
    {
        "title": "Get in Touch",
        "links": [
            {
                "text": "Email Miguel (founder)",
                "href": "mailto:maenlle4004@stu.d214.org"
            },
            {
                "text": "Email Alex (founder)",
                "href": "mailto:astrugacz4426@stu.d214.org"
            }
        ]
    }
]

const Footer: React.FC<{}> = (props) => {
    return (
        <footer className="bg-zinc-100">
            <div className={"flex gap-5 sm:gap-10 max-w-6xl mx-auto p-10 pb-5 flex-col lg:flex-row"}>
                {FOOTER_SECTIONS.map(section => {
                    return (
                        <FooterSection
                            header={section.title}
                            links={section.links}
                        />
                    )
                })}
            </div>
            <p className={"text-center font-Poppins text-zinc-500 text-sm mt-20 sm:mt-0 pb-20"}>Made with ❤️ by JHHS Hack Club</p>
        </footer>
    );
}
export default Footer