import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Button } from "./Button";

export const Header: FunctionComponent = () => {
  return (
    <div className="flex md:justify-between justify-center items-center flex-wrap md:px-6 md:pt-4 pt-2">
      <div className="flex items-center">
        <Link to="/" className="contents">
          <h1 className="ml-4 font-serif md:text-5xl text-5xl text-brand-50" tabIndex={0} >
            Endophome
          </h1>
        </Link>
      </div>
      <div className="flex items-center">
        <Link to="/about" className="contents">
          <button className="px-6 mx-4 my-4 h-12 font-semibold hover:bg-primary-100 tracking-wider border-2 border-black bg-primary-200 shadow-button-hard hover:shadow-button-hard-hover text-white">
            About
          </button>
        </Link>
        <Link to="/contact" className="contents">
          <button className="px-6 mx-4 my-4 h-12 font-semibold hover:bg-primary-100 tracking-wider border-2 border-black bg-primary-200 shadow-button-hard hover:shadow-button-hard-hover text-white">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};
