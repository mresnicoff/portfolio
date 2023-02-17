import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ link, className, onClick, path }) => {
  return (
    <li className={className}>
      <Link to={path}  onClick={onClick}>
        {link}
      </Link>
    </li>
  );
};

export default NavLinks;
