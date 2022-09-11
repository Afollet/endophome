import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ParentSize } from "@visx/responsive";
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import Dendrogram from "../components/Dendogram";
import { TreeView } from "../components/TreeView";
import { GeneralTemplate } from "../templates/GeneralTemplate";
import taxonomy from "../resources/dendogram.json";

export const LandingPage: FunctionComponent = () => {
  return (
    <GeneralTemplate>
      <h1 className="md:text-5xl text-3xl font-sans leading-normal mb-4">
        A comprehensive Endophytes catalog for Rubiaceae plants!
      </h1>
      <p>
      A hub for multi-omics data from plants and their endophytes! Use the tree below to explore the endophytes of each species, or select "Explore the data" to access complete tables for plants and fungi.
      </p>
      <Link to="/portal" className="contents">
        <button className="px-4 my-6 md:px-6 xs:float-right my-4 h-16 md:text-2xl font-semibold hover:bg-secondary-100 tracking-wider border-2 border-black bg-secondary-50 shadow-button-hard hover:shadow-button-hard-hover text-black">
          <FontAwesomeIcon icon={faCompass} aria-hidden="true" /> Explore the data!
        </button>
      </Link>

      <div className="h-[60vh] w-full sm:block hidden">
        <ParentSize>
          {({ width, height }) => <Dendrogram width={width} height={height} />}
        </ParentSize>
      </div>
      <div className="sm:hidden">
        <h1 className="leading-normal text-lg font-bold">Species</h1>
        <TreeView node={taxonomy} level={0}></TreeView>
      </div>
    </GeneralTemplate>
  );
};
