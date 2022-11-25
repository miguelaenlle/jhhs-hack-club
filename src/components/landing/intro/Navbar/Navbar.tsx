import React from "react";
import NavItem from "./NavItem";
import navimg from "./navimg.png";
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
        <NavItem link={"/projects"} text={"Showcase"} />
      </div>
      <div className={"flex mr-8 items-end"}>
        <NavItem link={"/projects"} text={"Workshops"} />
      </div>
      <div className={"flex items-end"}>
        <NavItem link={"/projects"} text={"Join Hack Club"} />
      </div>
    </div>
  );
};
export default Navbar;
