import React from "react"
const FooterSection: React.FC<{
    header: string;
    links: { text: string, href: string }[]
}> = (props) => {
    return (
        <div>
            <p className={"text-slate-800 font-Poppins font-bold text-xl"}>{props.header}</p>
            <div className={"flex flex-col sm:mt-3"}>
                {
                    props.links.map((link, index) => (
                        <a key={`link-${index}`} className={"text-zinc-500 font-Poppins text-md hover:text-zinc-900 transition-all"} href={link.href}>{link.text}</a>
                    ))
                }
            </div>
        </div>
    );
}
export default FooterSection