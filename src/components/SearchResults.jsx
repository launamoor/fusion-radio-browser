import { useContext } from "react";
import SearchItem from "./SearchItem";
import RadioBrowserContext from "../context/RadioBrowserContext";

const SearchResults = function () {
  const { typing, filteredStations } = useContext(RadioBrowserContext);

  return (
    <div className="flex flex-col flex-1 items-stretch justify-start w-full">
      {/* {filteredStations
        .filter((station) =>
          typing.trim().length < 3
            ? ""
            : station.name.toLowerCase().includes(typing.toLowerCase())
        )
        .sort((a, b) => b.clickcount - a.clickcount)
        .filter((station, i) => station.lastcheckok === 1 && i < 35)
        .map((station) => (
          <SearchItem key={station.stationuuid} station={station} />
        ))} */}
      {filteredStations
        .filter((station) => {
          if (typing.trim().length >= 3) {
            return station.name.toLowerCase().includes(typing.toLowerCase());
          }
          return true;
        })
        .sort((a, b) => b.clickcount - a.clickcount)
        .filter((station, i) => station.lastcheckok === 1 && i < 35)
        .map((station) => (
          <SearchItem key={station.stationuuid} station={station} />
        ))}
    </div>
  );
};

export default SearchResults;
