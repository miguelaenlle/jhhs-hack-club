import React from "react"
const Navbar: React.FC<{}> = (props) => {
    return (
        <div className={"flex justify-between items-start"}>
            <a
                href={"/"}
                className={
                    "text-md md:text-xl font-medium text-white font-Poppins hover:cursor-pointer hover:font-bold transition-all"
                }
            >
                JHHS Hack Club
            </a>
            <div className={"flex flex-col gap-2 items-end"}>
                <a
                    href={"/workshops"}
                    className={
                        "text-md md:text-xl font-medium text-white font-Poppins hover:cursor-pointer hover:font-bold transition-all"
                    }
                >
                    Workshops
                </a>
            </div>
        </div>
    );
}
export default Navbar