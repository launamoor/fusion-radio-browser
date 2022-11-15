import SavedStationContainer from "../SavedStationsContainer";
import Button from "../UI/Button";
import { useContext } from "react";
import RadioBrowserContext from "../../context/RadioBrowserContext";

const Saved = function () {
  const { stations, setStations } = useContext(RadioBrowserContext);

  return (
    <div className="flex flex-col items-stretch justify-start w-full">
      <h2 className="text-4xl font-bold text-gradient-dark self-center mb-8">
        Saved Stations
      </h2>
      <SavedStationContainer />
      <div className="flex items-center justify-center my-8">
        {stations.length !== 0 ? (
          <Button
            onClick={() => setStations([])}
            className="btn btn-error w-full"
          >
            Clear Saved List
          </Button>
        ) : (
          <p className="text-lg font-semibold">
            Your saved stations will appear here.
          </p>
        )}
      </div>
    </div>
  );
};

export default Saved;
