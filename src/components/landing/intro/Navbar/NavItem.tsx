import React from "react";

const NavItem: React.FC<{
  link: string;
  text: string;
  transparent: boolean;
}> = (props) => {
  return (
    <a
      href={props.link}
      className={
        `text-xl md:text-lg font-light ${props.transparent ? "text-white": "text-dark"} font-Poppins hover:cursor-pointer hover:text-zinc-400 transition-all`
      }
    >
      {props.text}
    </a>
  );
};

export default NavItem;
