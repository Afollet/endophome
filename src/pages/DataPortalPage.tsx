import { ParentSize } from "@visx/responsive";
import React, { FunctionComponent } from "react";
import { GeneralTemplate } from "../templates/GeneralTemplate";
import DataView from "../components/DataView";
import { useSearchParams } from "react-router-dom";

export const DataPortalPage: FunctionComponent = () => {
  return (
    <GeneralTemplate>
      <section className="min-h-full">
        <DataView></DataView>
      </section>
    </GeneralTemplate>
  );
};
