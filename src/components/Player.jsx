import { useContext } from "react";
import RadioBrowserContext from "../context/RadioBrowserContext";
import PlayerContainer from "./PlayerContainer";
import OnAir from "./OnAir";
import LogoMain from "./UI/LogoMain";
import { motion, AnimatePresence } from "framer-motion";
import { FaSpinner } from "react-icons/fa";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import Button from "./UI/Button";
import Popup from "./Popup";

const Player = function () {
  const {
    currentRadio,
    playing,
    isLoading,
    setStations,
    stations,
    popupType,
    setPopupType,
  } = useContext(RadioBrowserContext);

  const handleSaveRadio = () => {
    if (stations?.includes(currentRadio)) {
      setStations(() =>
        stations.filter((station) => station.uuid !== currentRadio.uuid)
      );
      setPopupType({
        type: "error",
        message: "Removed from saved list!",
        isTriggered: true,
        isFinished: false,
      });
    }
    if (stations?.some((station) => station.uuid === currentRadio.uuid)) return;

    setStations(stations ? [...stations, currentRadio] : [currentRadio]);
    setPopupType({
      type: "success",
      message: "Added to saved list!",
      isTriggered: true,
      isFinished: false,
    });
  };

  const renderPopup = () => {
    if (popupType.isTriggered && !popupType.isFinished) {
      return (
        <Popup
          success={popupType.type}
          className="fixed bottom-8 left-12 popup flex items-center gap-4"
        >
          {popupType.message}
        </Popup>
      );
    }
  };

  return (
    <div className="container mx-auto bg-neutral rounded-md py-18 p-8 flex flex-col items-center justify-center shadow-xl relative">
      <h1 className="text-3xl font-bold text-gradient self-start mb-24 sm:mb-12">
        Fusion Online
      </h1>
      {playing ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <OnAir className="absolute top-6 right-6 lg:top-12 lg:right-12" />
          </motion.div>
        </AnimatePresence>
      ) : (
        ""
      )}
      <LogoMain />
      <div className="text-xl font-light mb-4">Now Live</div>
      <div className="text-3xl font-bold tracking-wide text-gradient mb-14 sm:mb-8">
        {currentRadio.name || " "}
      </div>
      <PlayerContainer />
      {isLoading ? (
        <div className="text-2xl text-accent absolute bottom-4 left-4">
          <FaSpinner className="animate-spin" />
        </div>
      ) : (
        ""
      )}
      <div className="absolute bottom-4 right-4">
        {stations?.some((e) => e.name === currentRadio.name) ? (
          <Button onClick={handleSaveRadio} className="btn btn-ghost text-3xl">
            <RiHeartFill className="text-error" />
          </Button>
        ) : (
          <Button onClick={handleSaveRadio} className="btn btn-ghost text-3xl">
            <RiHeartLine className="text-error" />
          </Button>
        )}
      </div>
      {popupType.isTriggered && !popupType.isFinished ? renderPopup() : ""}
    </div>
  );
};

export default Player;
