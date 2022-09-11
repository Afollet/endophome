import React from "react";

export interface ButtonProps {
  variant: "primary" | "secondary" | "tertiary";
}

export const Button: React.FC<ButtonProps> = ({ variant, children }) => {
  const classes = `px-6 mx-4 my-4 h-12 font-semibold hover:bg-${variant}-100 tracking-wider border-2 border-black bg-${variant}-200 shadow-button-hard hover:shadow-button-hard-hover text-white`;
  return <button className={classes}>{children}</button>;
};
