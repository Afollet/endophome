import { Link } from "react-router-dom";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
  GridToolbar,
} from "@mui/x-data-grid";
import * as Popover from '@radix-ui/react-popover';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import * as texts from "../../assets/text.js";

const EndophyteRows: GridRowsProp = require("../resources/metabolome.json");
const EndophyteColumns: GridColDef[] = require("../resources/metabolomeHeaders.json");
const RubiRows: GridRowsProp = require("../resources/rubi.json");

const RenderSpeciesButton = (params: GridRenderCellParams<string>) => {
  return (
    <>
      <Link
        tabIndex={params.tabIndex}
        to={`/species/${params.value?.replace(" ", "_")}`}
        className="px-6 mx-4 my-4 h-12 font-semibold hover:bg-$blue-100 tracking-wider 
      border-2 border-black bg-blue-200 shadow-button-hard hover:shadow-button-hard-hover text-black font-bold"
      >info
      </Link>
      {params.value}
    </>
  );
};

const RenderGenomeLink = (params: GridRenderCellParams<string>) => {
  let uri = "";
  switch (params.field.toLowerCase()) {
    case "genome":
      uri = `https://www.ncbi.nlm.nih.gov/assembly/${params.value}`;
      break;
    case "metabolome":
      uri = "";
      break;
    case "proteomic":
      uri = "";
      break;
    default:
      uri = "";
      break;
  }

  return (
    <a className="underline fill-[#006a71]" tabIndex={params.tabIndex} href={uri}>
      {params.value}
    </a>
  );
};

const RenderPreviewIcon = (params: GridRenderCellParams<String>) => {
  let species_name = params.row.Species?.toLowerCase().replace(" ", "_").replace("-","_")
  let species_text = texts[species_name]?.text || "";
  let abbreviated_text = species_text.substring(0,200);
  let aria_label = `Preview button for ${species_name}`
  return (
    <Popover.Root>
      <Popover.Anchor>
        <Popover.Trigger tabIndex={params.tabIndex}>
          <button aria-label={aria_label} tabIndex={params.tabIndex}>
            <FontAwesomeIcon focusable={false} tabIndex={params.tabIndex} icon={faEye} />
          </button>
        </Popover.Trigger>
      </Popover.Anchor>
      <Popover.Content side="right" avoidCollisions={true} >
        <Popover.PopoverArrow></Popover.PopoverArrow>
        <Popover.Close tabIndex={params.tabIndex}>
          <Box className="px-6 mx-4 my-4 w-[40vh] h-30 font-semibold hover:bg-${variant}-100 tracking-wider border-2 border-black bg-blue-200 shadow-button-hard hover:shadow-button-hard-hover text-black">
              <p className="p-2">{abbreviated_text}...</p>
          </Box>
        </Popover.Close>
      </Popover.Content>
    </Popover.Root>
  );
};


const RubiColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "",
    minWidth: 30,
    width: 30,
    renderCell: RenderPreviewIcon,
  },
  {
    field: "Species",
    headerName: "Species",
    minWidth: 300,
    flex: 1,
    renderCell: RenderSpeciesButton,
  },
  {
    field: "Genome",
    headerName: "Genome",
    minWidth: 150,
    flex: 1,
    renderCell: RenderGenomeLink,
  },
  {
    field: "Tribe",
    headerName: "Tribe",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "Proteome",
    headerName: "Proteome",
    minWidth: 200,
    flex: 1,
  },
  {
    field: "Microbiome",
    headerName: "Microbiome",
    minWidth: 200,
    flex: 1,
  },
  {
    field: "Voucher (collector,collector number,herbarium)",
    headerName: "Voucher",
    minWidth: 200,
    flex: 1,
  },
  {
    field: "Barcode of herbarium voucher",
    headerName: "Barcode of Voucher",
    minWidth: 200,
    flex: 1,
  },
];


export type DataGridProps = {
  dataType: string;
  species?: string;
};

export default function DataViewGrid(props: DataGridProps) {
  let isEndophyte: Boolean = props.dataType == "endophyte";
  let rows: GridRowsProp = isEndophyte ? EndophyteRows : RubiRows;
  let columns: GridColDef[] = isEndophyte ? EndophyteColumns : RubiColumns;
  let species = props.species ? props.species : "";
  if(species && isEndophyte){
    let filtered_rows = [rows.find(
     (e) => e["Host species"].toLowerCase() === props.species.toLocaleLowerCase()
      )]
    rows = (filtered_rows[0] == undefined) ? [{ "id" : 0 }] : filtered_rows
    }
  console.log(rows)
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      components={{ Toolbar: GridToolbar }}
    />
  );
}
