import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { GeneralTemplate } from "../templates/GeneralTemplate";
import * as images from "../../assets/images.js";
import * as texts from "../../assets/text.js";
import rubiData from "../resources/rubi.json";
import { List, ListItem, ListItemText } from "@mui/material";
import DataViewGrid from "../components/DataViewGrid";

export const SpeciesPage: FunctionComponent = () => {
  const params = useParams();
  const display_species_name: string =
    params.species_name?.replace("_", " ").replace("_", "-") || "";
  const species_name: string =
    params.species_name?.toLowerCase().replace("-", "_") || "";
  const species_data = rubiData.find(
    (e) => e.Species.toLowerCase() === display_species_name.toLocaleLowerCase()
  );
  const species_text = texts[species_name]?.text || "";
  return (
    <GeneralTemplate>
      <main className="text-center h-[90vh] max-w-full flex flex-col">
        <h1 className="md:text-5xl text-3xl font-sans leading-normal mb-4">
          {display_species_name.charAt(0).toUpperCase() +
            display_species_name.slice(1)}
        </h1>
        <article className="flex flex-row">
          <div className="mx-auto bg-white ">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img
                  src={images[species_name]}
                  alt={`Image of ${display_species_name}`}
                  className="max-w-[v20] h-[v10] mx-auto"
                />{" "}
              </div>
              <div className="">
                <p className="justify-center pt-11 pl-4 pr-4">
                  {" "}
                  {species_text}{" "}
                </p>
              </div>
            </div>
          </div>
        </article>
        <List className="flex flex-row max-w-full flex-wrap">
          <ListItem className="!w-auto p-4">
            <ListItemText primary={species_data.Tribe} secondary="Tribe" />
          </ListItem>
          <ListItem className="!w-auto p-4">
            <ListItemText primary={species_data.Genome} secondary="Genome" />
          </ListItem>
          <ListItem className="!w-auto p-4">
            <ListItemText
              primary={species_data?.Microbiome || "Not available"}
              secondary="Microbiome"
            />
          </ListItem>
          <ListItem className="!w-auto p-4">
            <ListItemText
              primary={species_data?.Proteome || "Not available"}
              secondary="Proteome"
            />
          </ListItem>
          <ListItem className="!w-auto px-4">
            <ListItemText
              primary={
                species_data?.[
                  "Voucher (collector, collector number, herbarium)"
                ] || "Not available"
              }
              secondary="Voucher"
            />
          </ListItem>
          <ListItem className="!w-auto px-4">
            <ListItemText
              primary={
                species_data?.[
                  "Barcode of herbarium voucher or silica collection (*); accession number of living plant (**) or sequence (***)"
                ] || "Not available"
              }
              secondary="Barcode"
            />
          </ListItem>
        </List>
        <DataViewGrid dataType="endophyte" species={display_species_name} />
      </main>
    </GeneralTemplate>
  );
};
