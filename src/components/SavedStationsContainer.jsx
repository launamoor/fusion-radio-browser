import SavedStationItem from "./SavedStationItem";
import { useContext } from "react";
import RadioBrowserContext from "../context/RadioBrowserContext";

const SavedStationContainer = function () {
  const { stations, setCurrentRadio } = useContext(RadioBrowserContext);

  return (
    <div className="flex flex-col flex-1 items-stretch justify-start w-full">
      {stations
        ? stations.map((station) => (
            <SavedStationItem
              station={station}
              key={station.uuid}
              onClick={() =>
                setCurrentRadio({
                  name: station.name,
                  url: station.url,
                  uuid: station.uuid,
                })
              }
            >
              {station.name}
            </SavedStationItem>
          ))
        : ""}
    </div>
  );
};

export default SavedStationContainer;
