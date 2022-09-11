import { Tab } from "@headlessui/react";
import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import DataViewGrid from "./DataViewGrid";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function DataView() {
  let [searchParams, setSearchParams] = useSearchParams();
  let navigate = useNavigate();
  let filterSpecies = searchParams.get("species") || undefined;
  let tabIndex = searchParams.get("p") || undefined;
  let selectedIndex = (tabIndex == "1") ? 1 : 0;
  function changeURL(index: Number) {
    let url = `/portal?p=${index}`;
    index.toFixed() == tabIndex ? "" : navigate(url, { replace: true });
  }
  return (
    <div className="h-full w-full my-5 text-center">
      <div className="w-full sm:px-0">
        <Tab.Group selectedIndex={selectedIndex} onChange={changeURL}>
          <Tab.List className="flex space-x-1 mx-auto max-w-md justify-center bg-secondary-200 p-1">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full  py-3 font-semibold text-primary-400 tracking-wider",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-primary-200 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-secondary-50 shadow"
                    : "text-gray-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Rubiacea
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full  py-3  font-semibold text-primary-400",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-primary-200 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-secondary-50 shadow"
                    : "text-gray-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Endophyte
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel
              className={classNames(
                "rounded-xl bg-white p-6",
                "ring-white ring-opacity-60 ring-offset-2  focus:outline-none h-[90vh]"
              )}
            >
              <DataViewGrid dataType="rubiacea" species={filterSpecies} />
            </Tab.Panel>
            <Tab.Panel className="bg-white p-6 focus:outline-none h-[90vh]">
              <DataViewGrid dataType="endophyte" species={filterSpecies} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
