import * as React from "react";
import { FOOTER_SECTIONS } from "../constants/footer-sections";
import FooterSection from "./FooterSection";
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const Footer: React.FC<{}> = (props) => {
    // Test
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
            <p className={"text-center font-Poppins text-zinc-500 text-sm mt-20 sm:mt-10 pb-20 sm:pb-10"}>Made with ❤️ by JHHS Hack Club</p>
        </footer>
    );
}
export default Footer