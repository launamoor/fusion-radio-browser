import PlayerControls from "./PlayerControls";
import VolumeBar from "./VolumeBar";
import { useState, useRef, useContext } from "react";
import RadioBrowserContext from "../context/RadioBrowserContext";

const PlayerContainer = function () {
  const [volume, setVolume] = useState(100);
  const audioRef = useRef(100);
  const { currentRadio, setPlaying, setIsLoading } =
    useContext(RadioBrowserContext);

  const handleVolume = (e) => {
    setVolume(+e.target.value);
    audioRef.current.volume = volume / 100;
  };

  const handleMute = () => {
    setVolume(0);
    audioRef.current.volume = 0;
  };

  const handleMaxVol = () => {
    setVolume(100);
    audioRef.current.volume = 1;
  };

  const handlePlay = () => {
    audioRef.current.play();
  };
  const handlePause = () => {
    audioRef.current.pause();
    setPlaying(false);
  };
  const handleReload = () => {
    audioRef.current.load();
    audioRef.current.pause();
    setPlaying(false);
  };

  return (
    <div className="flex flex-col items-center justify-center mb-12">
      <VolumeBar
        mute={handleMute}
        maxVol={handleMaxVol}
        volume={handleVolume}
        volState={volume}
      />
      <PlayerControls
        play={handlePlay}
        pause={handlePause}
        reload={handleReload}
      />
      <audio
        id="player"
        src={currentRadio.url}
        ref={audioRef}
        onPlaying={() => setPlaying(true)}
        onLoadStart={() => setIsLoading(true)}
        onCanPlay={() => setIsLoading(false)}
        autoPlay
      ></audio>
    </div>
  );
};

export default PlayerContainer;
