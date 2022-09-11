import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import logoFooter from "../../assets/nsf_logo_footer.png";

export const Footer: FunctionComponent = () => {
  return (
    <div className="p-4 md:flex md:items-center md:justify-between justify-center text-center md:p-6">
      <img src={logoFooter} alt="National Science Foundation logo" className="h-20" />
      <span className="text-gray-200 sm:text-center dark:text-gray-100">
        © 2022{" "}
        <a href="https://endophome.org" className="hover:underline">
          Endophome
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center justify-center  mt-3 text-sm text-gray-200 dark:text-gray-100 sm:mt-0">
        <Link to="/portal">
          <li>
            <span className="mr-4 hover:underline md:mr-6 ">Data</span>
          </li>
        </Link>
        <Link to="/about">
          <li>
            <span className="mr-4 hover:underline md:mr-6 ">About</span>
          </li>
        </Link>
        <Link to="/contact">
          <li>
            <span className="hover:underline">Contact</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};
