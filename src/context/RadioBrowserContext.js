import { createContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const RadioBrowserContext = createContext();

export const RadioBrowserProvider = function ({ children }) {
  const [typing, setTyping] = useState("");
  const [typingSpotify, setTypingSpotify] = useState("");
  const [filteredStations, setFilteredStations] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [currentRadio, setCurrentRadio] = useState({});
  const [playing, setPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(true);
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

  // const getAllStations = async () => {
  //   const response = await fetch(
  //     "https://de1.api.radio-browser.info/json/stations/search?hidebroken=true?&is_https=true"
  //   );
  //   const data = await response.json();
  //   setAllStations(data);
  //   setDataLoaded(true);
  // };

  const getStationByInput = async () => {
    try {
      if (typing.length < 3 || typing.toLowerCase().startsWith("rad")) {
        setFilteredStations([]);
        setDataLoaded(false);
        return;
      } else {
        setDataLoaded(false);
        const response = await fetch(
          `https://de1.api.radio-browser.info/json/stations/search?hidebroken=true?&is_https=true&name=${typing}`
        );
        const data = await response.json();
        setFilteredStations(data);
        setDataLoaded(true);
      }
    } catch (error) {
      console.error("Something went wrong: \n" + error);
    }
  };

  const getStationsByGenre = async () => {
    try {
      setDataLoaded(false);
      const response = await fetch(
        `https://de1.api.radio-browser.info/json/stations/bytag/${selectedGenre}?hidebroken=true&is_https=true&limit=40&order=votes&reverse=true`
      );
      const data = await response.json();
      setFilteredStations(data);
      setDataLoaded(true);
    } catch (error) {
      console.error("Something went wrong: \n" + error);
    }
  };

  useEffect(() => {
    getStationByInput();
    // eslint-disable-next-line
  }, [typing]);

  useEffect(() => {
    if (!selectedGenre) {
      return;
    } else {
      getStationsByGenre();
    }
    // eslint-disable-next-line
  }, [selectedGenre]);

  return (
    <RadioBrowserContext.Provider
      value={{
        typing,
        setTyping,
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
        filteredStations,
        selectedGenre,
        setSelectedGenre,
        typingSpotify,
        setTypingSpotify,
      }}
    >
      {children}
    </RadioBrowserContext.Provider>
  );
};

export default RadioBrowserContext;
