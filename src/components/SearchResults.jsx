import { useContext } from "react";
import SearchItem from "./SearchItem";
import RadioBrowserContext from "../context/RadioBrowserContext";
import { FaSpinner } from "react-icons/fa";

const SearchResults = function () {
  const { allStations, typing, dataLoaded } = useContext(RadioBrowserContext);

  return (
    <div className="flex flex-col flex-1 items-stretch justify-start w-full">
      {dataLoaded ? (
        ""
      ) : (
        <div className="text-2xl text-accent self-center mb-8">
          <FaSpinner className="animate-spin" />
        </div>
      )}
      {allStations
        .filter((station) =>
          typing.trim().length < 3
            ? ""
            : station.name.toLowerCase().includes(typing.toLowerCase())
        )
        .sort((a, b) => b.clickcount - a.clickcount)
        .filter((station, i) => station.lastcheckok === 1 && i < 35)
        .map((station) => (
          <SearchItem key={station.stationuuid} station={station} />
        ))}
    </div>
  );
};

export default SearchResults;
