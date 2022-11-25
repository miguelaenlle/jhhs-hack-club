import React from "react";

const NavItem: React.FC<{
  link: string;
  text: string;
}> = (props) => {
  return (
    <a
      href={props.link}
      className={
        "text-md md:text-lg font-light text-white font-Poppins hover:cursor-pointer hover:font-bold transition-all"
      }
    >
      {props.text}
    </a>
  );
};

export default NavItem;
