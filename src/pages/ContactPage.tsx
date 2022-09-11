import React, { FunctionComponent } from "react";
import { GeneralTemplate } from "../templates/GeneralTemplate";

export const ContactPage: FunctionComponent = () => {
  return (
    <GeneralTemplate>
      <main>
      <h1 className="text-center md:text-5xl text-3xl font-sans leading-normal mb-4">Contact</h1>
        <p className="text-center">
          For questions or feedback about the data and website please email{" "}
          <a href="mailto: contact@endophome.org">contact@endophome.org</a>
        </p>
      </main>
    </GeneralTemplate>
  );
};
