import React, { FunctionComponent } from "react";
import { GeneralTemplate } from "../templates/GeneralTemplate";

export const AboutPage: FunctionComponent = () => {
  return <GeneralTemplate>
      <h1 className="text-center md:text-5xl text-3xl font-sans leading-normal mb-4">About</h1>
      <p className="text-center">Endophome is a platform to link plants and their endophytes through multi-omics datasets.
       This project began as a way to share data on the interaction between fungal endophytes and the foliar metabolomes of species in Rubiaceae (the coffee family).
       We hope to expand the project to share other multi-omics datasets generated by participating labs and others in the future.
      </p>
      <p>
      This material is based upon work supported by the National Science Foundation under Grant No.
      (<a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1638999&HistoricalAwards=false"><u>DEB-1638999</u></a>). Any opinions, findings, and conclusions or 
      recommendations expressed in this material are those of the author(s)
      and do not necessarily reflect the views of the National Science Foundation.
      </p>
  </GeneralTemplate>;
};
