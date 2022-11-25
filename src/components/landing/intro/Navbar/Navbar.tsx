import React from "react";
import NavItem from "./NavItem";
import navimg from "./navimg.png";
import { ReactDOM } from "react";
import join from "../../content/Content";

const Navbar: React.FC<{}> = (props) => {
  return (
    <div className={"flex items-start items-center"}>
      <img className={"w-10"} alt="logo" src={navimg}></img>
      <a
        href={"/projects"}
        className={
          "ml-2 mr-12 text-xl lg:text-xl font-bold text-white font-Poppins hover:cursor-pointer hover:font-bold transition-all"
        }
      >
        JHHS Hack Club
      </a>
      <div className={"flex mr-8 items-end"}>
        <NavItem link={"/showcase"} text={"Showcase"} />
      </div>
      <div className={"flex mr-8 items-end"}>
        <NavItem link={"/workshops"} text={"Workshops"} />
      </div>
      <div className={"flex items-end"}>
        <NavItem link={""} text={"Join Hack Club"} />
      </div>
    </div>
  );
};
export default Navbar;
