import { createContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const RadioBrowserContext = createContext();

export const RadioBrowserProvider = function ({ children }) {
  const [typing, setTyping] = useState("");
  const [allStations, setAllStations] = useState([]);
  const [currentRadio, setCurrentRadio] = useState({});
  const [playing, setPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [localRadios, setlocalRadios] = useState([]);
  const [stations, setStations] = useLocalStorage("stations", []);
  const [popupType, setPopupType] = useState({
    type: "",
    message: "",
    isTriggered: false,
    isFinished: true,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupType({
        type: "",
        message: "",
        isTriggered: false,
        isFinished: true,
      });
    }, 2500);
    return () => clearTimeout(timer);
  }, [popupType]);

  const getAllStations = async () => {
    const response = await fetch(
      "https://de1.api.radio-browser.info/json/stations/search?hidebroken=true?&is_https=true"
    );
    const data = await response.json();
    console.log(data);
    setAllStations(data);
    setDataLoaded(true);
  };

  useEffect(() => {
    getAllStations();
  }, []);

  return (
    <RadioBrowserContext.Provider
      value={{
        typing,
        setTyping,
        allStations,
        currentRadio,
        setCurrentRadio,
        playing,
        setPlaying,
        isLoading,
        setIsLoading,
        dataLoaded,
        localRadios,
        setlocalRadios,
        stations,
        setStations,
        popupType,
        setPopupType,
      }}
    >
      {children}
    </RadioBrowserContext.Provider>
  );
};

export default RadioBrowserContext;
