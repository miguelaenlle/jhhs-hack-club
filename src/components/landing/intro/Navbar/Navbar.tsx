import React, { useState } from "react";
import navimg from "./navimg.png";
import NavItem from "./NavItem";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useWindowDimensions } from "./hooks/get-window-dimensions";

const Navbar: React.FC<{
  transparent: boolean;
}> = (props) => {
  const windowDimensions = useWindowDimensions();
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  }

  const handleClose = () => {
    setOpened(false);
  }

  return (
    <div className={`fixed top-0 left-0 flex flex-col md:flex-row md:items-start md:items-center z-20 p-5 ${!props.transparent ? "bg-zinc-50 bg-opacity-90 shadow-lg" : ""} transition-all w-full`}>
      <div className={"flex justify-between"}>
        <div className={"group flex items-start items-center gap-1 hover:cursor-pointer"}>
          <img className={"w-9 group-hover:opacity-100 transition-all"} alt="logo" src={navimg}></img>
          <a
            href={"/"}
            className={
              `ml-2 mr-12 text-xl font-bold ${props.transparent ? "text-white" : "text-black"} font-Poppins hover:font-bold transition-all`
            }
          >
            JHHS Hack Club
          </a>
        </div>
        <div className={"md:hidden"}>
          {
            opened ? (
              <XMarkIcon onClick={handleClose} className={`w-7 text-zinc-400 hover:${props.transparent ? "text-white" : "text-black"} transition-all hover:cursor-pointer`} />
            ) : (
              <Bars3Icon onClick={handleOpen} className={`w-7 text-zinc-400 hover:${props.transparent ? "text-white" : "text-black"} transition-all hover:cursor-pointer`} />
            )
          }
        </div>
      </div>

      <div className={`flex flex-col md:flex-row mt-5 md:mt-0 ${((opened)) ? "mobile:visible" : "mobile:hidden"} md:visible transition-all`}>
        <div className={"flex mr-8 md:mt-0 items-end"}>
          <NavItem link={"/showcase"} text={"Showcase"} transparent={props.transparent} />
        </div>
        <div className={"flex mr-8 items-end"}>
          <NavItem link={"/workshops"} text={"Workshops"} transparent={props.transparent} />
        </div>
        <div className={"flex items-end"}>
          <NavItem link={""} text={"Join Hack Club"} transparent={props.transparent} />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
export default Navbar;
