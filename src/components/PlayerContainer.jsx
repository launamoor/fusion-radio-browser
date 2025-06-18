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

  const handleStreamError = () => {
    console.warn("Stream issue detected. Attempting to restart...");
    setPlaying(false);
    setIsLoading(true);

    // Retry after delay
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.load(); // Reload
        audioRef.current.play().catch((err) => {
          console.error("Auto-replay failed: ", err);
        });
      }
    }, 2000);
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
        onStalled={handleStreamError}
        onEnded={handleStreamError}
        onError={handleStreamError}
        autoPlay
      ></audio>
    </div>
  );
};

export default PlayerContainer;
