import { VscMute, VscUnmute } from "react-icons/vsc";
import Button from "../components/UI/Button";

const VolumeBar = function ({ mute, maxVol, volume, volState }) {
  return (
    <div className="flex items-center justify-center">
      <Button
        onClick={mute}
        className="p-4 rounded-full text-error opacity-70 hover:opacity-100 transition-all"
      >
        <VscMute className="text-xl" />
      </Button>
      <input
        type="range"
        min="0"
        max="100"
        onChange={volume}
        value={volState}
        className="range range-accent range-sm w-96 mb-8"
      />
      <Button
        onClick={maxVol}
        className="p-4 rounded-full text-success opacity-70 hover:opacity-100 transition-all"
      >
        <VscUnmute className="text-xl" />
      </Button>
    </div>
  );
};

export default VolumeBar;
