import SavedStationItem from "./SavedStationItem";
import { useContext } from "react";
import RadioBrowserContext from "../context/RadioBrowserContext";

const SavedStationContainer = function () {
  const { stations, setCurrentRadio } = useContext(RadioBrowserContext);

  // const tagsArr = station.tags.split(",");

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
                  tags: station.tags,
                  bitrate: station.bitrate,
                  clickcount: station.clickcount,
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
