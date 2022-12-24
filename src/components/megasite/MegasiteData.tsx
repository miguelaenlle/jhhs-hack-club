import { websites } from "../../constants/websites";
import * as React from "react"
import BackButton from "../shared/BackButton";
import GradientContent from "../shared/GradientContent";
import MegasiteCell from "./MegasiteCell";


const Megasite: React.FC<{}> = (props) => {
    return (
        <GradientContent move={true}>
            <br />
            <br />
            <BackButton link={"/"} />
            <div className={"py-10"}>

                <h2 className={"text-3xl font-bold font-Poppins text-white"}>Personal Website Megasite</h2>
                <p className={"text-lg font-Poppins text-zinc-300"}>DM Miguel A on the Discord to have your site added!</p>
                <br />
                <div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"}>
                    {websites.map(website => {
                        return (
                            <MegasiteCell
                                title={website.title}
                                backgroundColor={website.backgroundColor}
                                link={website.link}
                                image={website.image}
                                author={website.author}
                            />
                        )
                    })}
                </div>
            </div>
        </GradientContent>
    );
}
export default Megasite